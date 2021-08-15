{
  "users" : {
    "admin" : {
      "username" : "admin",
      "password" : "{bcrypt}$2a$10$wkmmKdmzoHwDk2RoTcT1ZOaOxrm3fJPlwgn99UeRXTJSWhQGM64vO",
      "grantedAuthorities" : [ "ROLE_ADMIN" ],
      "appSettings" : {
        "DEFAULT_INFERENCE" : true,
        "DEFAULT_VIS_GRAPH_SCHEMA" : true,
        "DEFAULT_SAMEAS" : true,
        "IGNORE_SHARED_QUERIES" : false,
        "EXECUTE_COUNT" : true
      },
      "dateCreated" : 1629002900489
    }
  },
  "import.server" : { },
  "import.local" : { },
  "properties" : {
    "current.location" : ""
  },
  "user_queries" : {
    "admin" : {
      "SPARQL Select template" : {
        "name" : "SPARQL Select template",
        "body" : "SELECT ?s ?p ?o\nWHERE {\n\t?s ?p ?o .\n} LIMIT 100",
        "shared" : false
      },
      "Clear graph" : {
        "name" : "Clear graph",
        "body" : "CLEAR GRAPH <http://example>",
        "shared" : false
      },
      "Add statements" : {
        "name" : "Add statements",
        "body" : "PREFIX dc: <http://purl.org/dc/elements/1.1/>\nINSERT DATA\n      {\n      GRAPH <http://example> {\n          <http://example/book1> dc:title \"A new book\" ;\n                                 dc:creator \"A.N.Other\" .\n          }\n      }",
        "shared" : false
      },
      "Remove statements" : {
        "name" : "Remove statements",
        "body" : "PREFIX dc: <http://purl.org/dc/elements/1.1/>\nDELETE DATA\n{\nGRAPH <http://example> {\n    <http://example/book1> dc:title \"A new book\" ;\n                           dc:creator \"A.N.Other\" .\n    }\n}",
        "shared" : false
      },
      "GermanyFinalWorks" : {
        "name" : "GermanyFinalWorks",
        "body" : "PREFIX eg:<http://example.org/ns#>\nPREFIX ns1: <http://purl.org/linked-data/cube#>\nSELECT ?geoId (SUM(?y) as ?casesSum) (SUM(?z) as ?deathSum) WHERE {\n    ?x eg:geoId ?geoId .\n    ?x eg:countriesAndTerritories \"Germany\" .\n    ?x eg:cases ?y .\n    ?x eg:deaths ?z .\n    ?x eg:dateRep ?fil .\n    FILTER contains(?fil, \"08/2021\") .\n}  GROUP BY ?geoId",
        "shared" : false
      }
    }
  },
  "repo_similarity_queries" : {
    "ECDC" : { }
  },
  "graphs" : {
    "9f48602e5048431199add99213fbb1d5" : {
      "id" : "9f48602e5048431199add99213fbb1d5",
      "name" : "Graph1",
      "data" : "{\"nodes\":[{\"iri\":\"http://example.org/ns#\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"ns\"}],\"types\":[],\"rdfRank\":0,\"x\":-57.03283164980797,\"y\":-252.8171357021056},{\"iri\":\"http://example.org/ns#dsd_definition\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"dsd_definition\"}],\"types\":[\"http://purl.org/linked-data/cube#DataStructureDefinition\"],\"rdfRank\":0,\"x\":125.6371948474758,\"y\":-63.94681999266802},{\"iri\":\"http://example.org/ns#continentExp\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"continentExp\"}],\"types\":[\"http://purl.org/linked-data/cube#ComponentSpecification\",\"http://purl.org/linked-data/cube#DimensionProperty\",\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"],\"rdfRank\":0,\"x\":369.7146098334878,\"y\":-337.71843198166744},{\"iri\":\"http://example.org/ns#countriesAndTerritories\",\"size\":48,\"labels\":[{\"lang\":\"en\",\"priority\":0,\"label\":\"Slice by country\"},{\"lang\":\"\",\"priority\":0,\"label\":\"countriesAndTerritories\"}],\"types\":[\"http://purl.org/linked-data/cube#ComponentSpecification\",\"http://purl.org/linked-data/cube#DimensionProperty\",\"http://purl.org/linked-data/cube#sliceKey\",\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"],\"rdfRank\":0,\"x\":403.72851709795134,\"y\":368.86849618755593},{\"iri\":\"http://example.org/ns#countryterritoryCode\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"countryterritoryCode\"}],\"types\":[\"http://purl.org/linked-data/cube#ComponentSpecification\",\"http://purl.org/linked-data/cube#DimensionProperty\",\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"],\"rdfRank\":0,\"x\":-206.62199940282855,\"y\":-25.428980702575434},{\"iri\":\"http://example.org/ns#dateRep\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"dateRep\"}],\"types\":[\"http://purl.org/linked-data/cube#ComponentSpecification\",\"http://purl.org/linked-data/cube#DimensionProperty\",\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"],\"rdfRank\":0,\"x\":-168.49632011221348,\"y\":78.85922475835011},{\"iri\":\"http://example.org/ns#day\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"day\"}],\"types\":[\"http://purl.org/linked-data/cube#ComponentSpecification\",\"http://purl.org/linked-data/cube#DimensionProperty\",\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"],\"rdfRank\":0,\"x\":-195.73538165877397,\"y\":-131.4854316728887},{\"iri\":\"http://example.org/ns#geoId\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"geoId\"}],\"types\":[\"http://purl.org/linked-data/cube#ComponentSpecification\",\"http://purl.org/linked-data/cube#DimensionProperty\",\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"],\"rdfRank\":0,\"x\":-168.5348619956294,\"y\":-244.02703162235943},{\"iri\":\"http://example.org/ns#month\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"month\"}],\"types\":[\"http://purl.org/linked-data/cube#ComponentSpecification\",\"http://purl.org/linked-data/cube#DimensionProperty\",\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"],\"rdfRank\":0,\"x\":-47.654883690058305,\"y\":-364.8467895294587},{\"iri\":\"http://example.org/ns#popData2020\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"popData2020\"}],\"types\":[\"http://purl.org/linked-data/cube#ComponentSpecification\",\"http://purl.org/linked-data/cube#DimensionProperty\",\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"],\"rdfRank\":0,\"x\":68.07335561312205,\"y\":-382.96682991247826},{\"iri\":\"http://example.org/ns#year\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"year\"}],\"types\":[\"http://purl.org/linked-data/cube#ComponentSpecification\",\"http://purl.org/linked-data/cube#DimensionProperty\",\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"],\"rdfRank\":0,\"x\":173.939663306501,\"y\":-416.6169759560326},{\"iri\":\"http://example.org/ns#dataset-covid\",\"size\":48,\"labels\":[{\"lang\":\"en\",\"priority\":0,\"label\":\"ECDC Dataset for Covid-19\"}],\"types\":[\"http://purl.org/linked-data/cube#DataSet\"],\"rdfRank\":0,\"x\":244.9981494811182,\"y\":-342.79878323273493},{\"iri\":\"http://purl.org/linked-data/cube#DataStructureDefinition\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"DataStructureDefinition\"}],\"types\":[],\"rdfRank\":0,\"x\":330.5217571332944,\"y\":-227.7064327732934},{\"iri\":\"http://example.org/ns#Austria\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Austria\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":780.3011409454871,\"y\":184.28460872625357},{\"iri\":\"http://example.org/ns#Belgium\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Belgium\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":647.6071404095239,\"y\":173.33097433573843},{\"iri\":\"http://example.org/ns#Bulgaria\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Bulgaria\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":812.2393607747692,\"y\":300.48651123967113},{\"iri\":\"http://example.org/ns#Croatia\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Croatia\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":701.773313006208,\"y\":274.56962246322627},{\"iri\":\"http://example.org/ns#Cyprus\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Cyprus\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":805.1279291570893,\"y\":413.6752949036118},{\"iri\":\"http://example.org/ns#Czechia\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Czechia\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":694.1351716896892,\"y\":399.4705986245165},{\"iri\":\"http://example.org/ns#Denmark\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Denmark\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":727.8093330849779,\"y\":508.71995874778395},{\"iri\":\"http://example.org/ns#Estonia\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Estonia\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":620.2937286745288,\"y\":569.7956330492536},{\"iri\":\"http://example.org/ns#Finland\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Finland\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":468.0012163607625,\"y\":627.9463019814676},{\"iri\":\"http://example.org/ns#France\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"France\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":141.52000421333423,\"y\":547.4969648283188},{\"iri\":\"http://example.org/ns#Germany\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":513.4115335219407,\"y\":879.7710157963722},{\"iri\":\"http://example.org/ns#Greece\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Greece\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":50.45436231667296,\"y\":403.1279041382451},{\"iri\":\"http://example.org/ns#Hungary\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Hungary\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":75.7612540029394,\"y\":499.4481377558793},{\"iri\":\"http://example.org/ns#Iceland\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Iceland\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":84.97148112473829,\"y\":301.9366283750407},{\"iri\":\"http://example.org/ns#Ireland\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Ireland\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":299.048646225149,\"y\":93.94944129426041},{\"iri\":\"http://example.org/ns#Italy\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Italy\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":151.28649389383742,\"y\":195.42436493650314},{\"iri\":\"http://example.org/ns#Latvia\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Latvia\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":554.8070846767721,\"y\":13.673768665152956},{\"iri\":\"http://example.org/ns#Liechtenstein\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Liechtenstein\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":705.168163530534,\"y\":83.94241012437497},{\"iri\":\"http://example.org/ns#Lithuania\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Lithuania\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":433.0612296077308,\"y\":54.62712312001846},{\"iri\":\"http://example.org/ns#Luxembourg\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Luxembourg\"}],\"types\":[\"http://purl.org/linked-data/cube#Slice\"],\"rdfRank\":0,\"x\":572.4294066316111,\"y\":105.76378418627166},{\"iri\":\"http://example.org/ns#Germany1670\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1670\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":907.6768713172835,\"y\":906.4840417910959},{\"iri\":\"http://example.org/ns#Germany1671\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1671\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":876.4335888554558,\"y\":1015.4445319142508},{\"iri\":\"http://example.org/ns#Germany1672\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1672\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":816.06273135964,\"y\":869.2219699929366},{\"iri\":\"http://example.org/ns#Germany1673\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1673\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":815.2826772677791,\"y\":1127.2733463951538},{\"iri\":\"http://example.org/ns#Germany1674\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1674\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":770.4171140000276,\"y\":1023.8338200468364},{\"iri\":\"http://example.org/ns#Germany1675\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1675\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":731.2162584765525,\"y\":1211.9237505087865},{\"iri\":\"http://example.org/ns#Germany1676\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1676\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":606.9516292171163,\"y\":1263.1862163478463},{\"iri\":\"http://example.org/ns#Germany1677\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1677\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":677.1356078682286,\"y\":1131.4763678044847},{\"iri\":\"http://example.org/ns#Germany1678\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1678\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":464.8170652117111,\"y\":1270.6723643214714},{\"iri\":\"http://example.org/ns#Germany1679\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1679\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":336.67800739523886,\"y\":1227.6309877913102},{\"iri\":\"http://example.org/ns#Germany1680\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1680\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":556.6766304100705,\"y\":1180.2839514981704},{\"iri\":\"http://example.org/ns#Germany1681\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1681\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":232.99650533115047,\"y\":1164.3752075585937},{\"iri\":\"http://example.org/ns#Germany1682\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1682\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":435.5884397287845,\"y\":1163.7806909091898},{\"iri\":\"http://example.org/ns#Germany1683\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1683\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":321.6673317337494,\"y\":1100.3747716836733},{\"iri\":\"http://example.org/ns#Germany1684\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1684\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":170.01186720671032,\"y\":1065.9869856079854},{\"iri\":\"http://example.org/ns#Germany1685\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1685\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":246.00783349779192,\"y\":983.3766582814455},{\"iri\":\"http://example.org/ns#Germany1686\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1686\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":178.53623332308686,\"y\":852.9957974905789},{\"iri\":\"http://example.org/ns#Germany1687\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1687\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":248.82320930643414,\"y\":774.9805766167437},{\"iri\":\"http://example.org/ns#Germany1688\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1688\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":137.98114612643937,\"y\":950.7210377990086},{\"iri\":\"http://example.org/ns#Germany1689\",\"size\":48,\"labels\":[{\"lang\":\"\",\"priority\":0,\"label\":\"Germany1689\"}],\"types\":[\"http://purl.org/linked-data/cube#Observation\"],\"rdfRank\":0,\"x\":850.1206013550093,\"y\":769.5138943170815}],\"links\":[{\"source\":\"http://example.org/ns#dsd_definition\",\"target\":\"http://example.org/ns#\",\"predicates\":[\"sliceKey\"]},{\"source\":\"http://example.org/ns#dsd_definition\",\"target\":\"http://example.org/ns#continentExp\",\"predicates\":[\"component\"]},{\"source\":\"http://example.org/ns#dsd_definition\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"component\",\"sliceKey\"]},{\"source\":\"http://example.org/ns#dsd_definition\",\"target\":\"http://example.org/ns#countryterritoryCode\",\"predicates\":[\"component\"]},{\"source\":\"http://example.org/ns#dsd_definition\",\"target\":\"http://example.org/ns#dateRep\",\"predicates\":[\"component\"]},{\"source\":\"http://example.org/ns#dsd_definition\",\"target\":\"http://example.org/ns#day\",\"predicates\":[\"component\"]},{\"source\":\"http://example.org/ns#dsd_definition\",\"target\":\"http://example.org/ns#geoId\",\"predicates\":[\"component\"]},{\"source\":\"http://example.org/ns#dsd_definition\",\"target\":\"http://example.org/ns#month\",\"predicates\":[\"component\"]},{\"source\":\"http://example.org/ns#dsd_definition\",\"target\":\"http://example.org/ns#popData2020\",\"predicates\":[\"component\"]},{\"source\":\"http://example.org/ns#dsd_definition\",\"target\":\"http://example.org/ns#year\",\"predicates\":[\"component\"]},{\"source\":\"http://example.org/ns#dataset-covid\",\"target\":\"http://example.org/ns#dsd_definition\",\"predicates\":[\"structure\"]},{\"source\":\"http://example.org/ns#dsd_definition\",\"target\":\"http://purl.org/linked-data/cube#DataStructureDefinition\",\"predicates\":[\"type\"]},{\"source\":\"http://example.org/ns#Austria\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Belgium\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Bulgaria\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Croatia\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Cyprus\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Czechia\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Denmark\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Estonia\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Finland\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#France\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Greece\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Hungary\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Iceland\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Ireland\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Italy\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Latvia\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Liechtenstein\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Lithuania\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Luxembourg\",\"target\":\"http://example.org/ns#countriesAndTerritories\",\"predicates\":[\"sliceStructure\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1670\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1671\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1672\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1673\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1674\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1675\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1676\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1677\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1678\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1679\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1680\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1681\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1682\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1683\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1684\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1685\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1686\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1687\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1688\",\"predicates\":[\"observation\"]},{\"source\":\"http://example.org/ns#Germany\",\"target\":\"http://example.org/ns#Germany1689\",\"predicates\":[\"observation\"]}],\"colorIndex\":6,\"type2color\":{\"undefined\":0,\"http://purl.org/linked-data/cube#DataStructureDefinition\":1,\"http://purl.org/linked-data/cube#ComponentSpecification\":2,\"http://purl.org/linked-data/cube#DataSet\":3,\"http://purl.org/linked-data/cube#Slice\":4,\"http://purl.org/linked-data/cube#Observation\":5},\"scale\":1,\"translate\":[0,-70]}",
      "owner" : "admin",
      "config" : null,
      "shared" : true
    }
  }
}