import pandas as pd
from rdflib import Graph, Literal, RDF, URIRef, Namespace, Dataset
from rdflib.namespace import (CSVW, DC, DCAT, DCTERMS, DOAP, FOAF, ODRL2, ORG, OWL, PROF, PROV, QB, RDF,
                            RDFS, SDO, SH, SKOS, SOSA, SSN, TIME, VOID, XSD,)

class ECDCSet:
    def __init__(self):
        super(ECDCSet, self).__init__()
        self.eg = Namespace('http://example.org/ns#')
        self.exgeo = Namespace('http://example.org/geo#')
        self.admx_attribute = Namespace('http://purl.org/linked-data/sdmx/2009/attribute#')

        self.dateRep = ('dateRep', XSD.string)
        self.day = ('day', XSD.unsignedShort)
        self.month = ('month', XSD.unsignedShort)
        self.year = ('year', XSD.unsignedInt)
        self.cases = ('cases', XSD.unsignedInt)
        self.deaths = ('deaths', XSD.unsignedInt)
        self.countriesAndterritories = ('countriesAndTerritories', XSD.string)
        self.geoId = ('geoId', XSD.string)
        self.countriesAndterritoryCode = ('countryterritoryCode', XSD.string)
        self.popData2020 = ('popData2020', XSD.unsignedLong)
        self.continentExp = ('continentExp', XSD.string)
        self.dataset = {}
        self.slice = {}

        self.set_datastructure_name()
        self.set_dataset_properties()
        self.set_slice_properties()
        self.set_dataset_name()

    def get_dimensions(self):
        return [self.dateRep, self.day, self.month, self.year, self.countriesAndterritories, self.geoId, self.countriesAndterritoryCode,
                self.popData2020, self.continentExp]

    def get_measures(self):
        return [self.cases, self.deaths]

    def create_slices_on(self):
        return [self.countriesAndterritories[0]]

    def get_namespaces(self):
        return [('eg', self.eg), ('ex-geo', self.exgeo), ('admx-attribute', self.admx_attribute)]

    def set_dataset_name(self):
        self.dataset_name = URIRef(self.eg['dataset-covid'])

    def set_datastructure_name(self):
        self.datastructure_name = URIRef(self.eg['dsd_definition'])

    def set_dataset_properties(self):
        self.dataset['title'] = (DCTERMS.title, Literal("ECDC Dataset", lang='en'))
        self.dataset['label'] = (RDFS.label, Literal('ECDC Dataset for Covid-19', lang='en'))
        self.dataset['comment'] = (RDFS.comment, Literal('Covid-19 dataset for Europe', lang='en'))
        self.dataset['description'] = (DC.description, Literal('Created for assignment purpose', lang='en'))
        self.dataset['publisher'] = (DCTERMS.publisher, URIRef(self.eg['organization']))
        self.dataset['issued'] = (DCTERMS.issued, Literal('2021-08-14', datatype=XSD.date))
        self.dataset['structure'] = (QB.structure, self.datastructure_name)
        self.dataset['unitMeasure'] = (URIRef(self.admx_attribute['unitMeasure']), Literal('cases', lang='en'))

    def set_slice_properties(self):
        self.slice['label'] = (RDFS.label, Literal('Slice by country', lang='en'))
        self.slice['comment'] = (RDFS.comment, Literal('Slice by country grouping together', lang='en'))


class DCGraph:
    def __init__(self, filepath=None, of_type=ECDCSet):
        super(DCGraph, self).__init__()
        self.filepath = filepath
        self.dataset = Dataset()
        self.set = of_type()
        self.g = Graph()

    def get_slices(self):
        if not self.filepath:
            return "Error"

        self.df = pd.read_csv(self.filepath)
        slices = self.df[self.set.create_slices_on()[0]].unique().tolist()
        return slices

    def set_namespace(self):
        g = Graph()
        self.dataset.add_graph(g)

    def set_dataset(self):
        g = Graph()
        self.dataset.add_graph(g)

    def set_definitions(self):
        g = Graph()
        self.dataset.add_graph(g)

    def set_slice(self):
        g = Graph()
        self.dataset.add_graph(g)

    def set_dimensions_measures(self):
        g = Graph()
        self.dataset.add_graph(g)

    def set_observations_by_slice(self):
        g = Graph()
        self.dataset.add_graph(g)

    def create_graph(self, format='turtle'):
        self.set_namespace()
        self.set_dataset()
        self.set_definitions()
        self.set_slice()
        self.set_dimensions_measures()
        self.set_observations_by_slice()
        return self.dataset.serialize(format=format)


class DCGraphCreator(DCGraph):
    def __init__(self, filepath=None, of_type=ECDCSet):
        super(DCGraphCreator, self).__init__(filepath=filepath, of_type=of_type)
        self.filepath = filepath

    def set_namespace(self):
        for namespace in self.set.get_namespaces():
            self.g.bind(prefix=namespace[0], namespace=namespace[1])

    def set_dataset(self):
        self.g.add((self.set.dataset_name, RDF.type, QB.DataSet))
        for _, v in self.set.dataset.items():
            self.g.add((self.set.dataset_name, v[0], v[1]))
        for slice in self.get_slices():
            self.g.add((self.set.dataset_name, QB.Slice, URIRef(self.set.eg['slice{}'.format(slice)])))

    def set_definitions(self):
        self.g.add((self.set.datastructure_name, RDF.type, QB.DataStructureDefinition))
        self.g.add((self.set.datastructure_name, RDF.type, QB.component))
        for component in self.set.get_dimensions():
            if component[0] in self.set.create_slices_on():
                self.g.add((QB.component, QB.dimension, self.set.eg[component[0]]))
                self.g.add((QB.dimension, QB.componentAttachment, QB.slice))
            else:
                self.g.add((QB.component, QB.dimension, self.set.eg[component[0]]))

        for measure in self.set.get_measures():
            self.g.add((QB.component, QB.measure, self.set.eg[measure[0]]))

        # How to implement attributes
        ## TODO: Implement attributes

        self.g.add((self.set.datastructure_name, QB.sliceKey, self.set.eg[self.set.create_slices_on()]))

    def set_slice(self):
        self.g.add((self.set.eg[self.set.create_slices_on()[0]], RDF.type, QB.sliceKey))
        for _, v in self.set.slice.items():
            self.g.add((self.set.eg[self.set.create_slices_on()[0]], v[0], v[1]))

    def set_dimensions_measures(self):
        for dimension in self.set.get_dimensions():
            self.g.add((self.set.eg[dimension[0]], RDF.type, QB.DimensionProperty))
            self.g.add((self.set.eg[dimension[0]], RDFS.label, Literal(dimension[0], datatype=dimension[1])))

        for measure in self.set.get_measures():
            self.g.add((self.set.eg[measure[0]], RDF.type, QB.MeasureProperty))
            self.g.add((self.set.eg[measure[0]], RDFS.label, Literal(measure[0], datatype=measure[1])))

    def set_observations_by_slice(self):
        slices = self.get_slices()
        for slice in slices:
            obs_ids = []
            observations = self.df[self.df[self.set.create_slices_on()[0]] == slice]
            for i, observation in observations.iterrows():
                observation_name = self.set.eg["o{0}{1}".format(slice, i)]
                obs_ids.append(observation_name)
                self.g.add((observation_name, RDF.type, QB.Observation))

                for dimension in self.set.get_dimensions():
                    self.g.add((observation_name, self.set.eg[dimension[0]], Literal(observation[dimension[0]], datatype=dimension[1])))
                for measure in self.set.get_measures():
                    self.g.add((observation_name, self.set.eg[measure[0]], Literal(observation[measure[0]], datatype=measure[1])))

            self.g.add((self.set.eg["slice{0}".format(slice)], RDF.type, QB.Slice))
            self.g.add((self.set.eg["slice{0}".format(slice)], QB.sliceStructure, self.set.eg[self.set.create_slices_on()[0]]))

            self.g.add((self.set.dataset_name, QB.slice, self.set.eg["slice{0}".format(slice)]))
            for id in obs_ids:
                self.g.add((self.set.eg["slice{0}".format(slice)], QB.observation, id))

    def create_graph(self, format='turtle'):
        self.set_namespace()
        self.set_dataset()
        self.set_definitions()
        self.set_slice()
        self.set_dimensions_measures()
        self.set_observations_by_slice()

        self.dataset.graph(self.g)
        print(self.g.serialize(format=format))
        return self.dataset.serialize(format=format)

