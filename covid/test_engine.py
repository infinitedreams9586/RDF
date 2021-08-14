from unittest import TestCase

from engine import DCGraphCreator, DCGraph, ECDCSet

class TestDCGraphCreator(TestCase):
    def test_set_namespace(self):
        self.fail()

    def test_set_dataset(self):
        self.fail()

    def test_set_definitions(self):
        self.fail()

    def test_set_slice(self):
        self.fail()

    def test_set_dimensions_measures(self):
        self.fail()

    def test_set_observations_by_slice(self):
        self.fail()

    def test_report_generation(self):
        filepath = '/Users/bhaveshdave/Downloads/data (6).csv'
        graphCreator = DCGraphCreator(filepath=filepath, of_type=ECDCSet)
        print(graphCreator.create_graph())
