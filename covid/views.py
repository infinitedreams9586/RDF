from django.shortcuts import render
from django.http import HttpResponse
from django.views import View

from covid.engine import DCGraphCreator, ECDCSet

import urllib.request
import os

def get_directory():
    directory = "{0}/uploads".format(os.path.expanduser("~"))
    #directory = "{0}/uploads".format('/usr/src/app')
    return directory

def is_dir_exist():
    if os.path.exists(get_directory()):
        return True
    else:
        return False

def create_directory():
    if not os.path.exists(get_directory()):
        os.makedirs(get_directory())

# Create your views here.
def index(request):
    return HttpResponse("Hello World")

class BaseView(View):
    c = {}

    def clear_context(self):
        self.c = {}
        self.clear_message()

    def add_to_context(self, key, value):
        self.c[key] = value

    def clear_message(self):
        self.c['message'] = ''


class Download(BaseView):
    def get(self, request):
        self.clear_context()
        self.add_to_context('message', 'Enter url for file to download')
        return render(request, 'download.html', context=self.c)

    def post(self, request):
        # download file from url https://opendata.ecdc.europa.eu/covid19/nationalcasedeath_eueea_daily_ei/csv/data.csv
        csv_file = None
        data = dict(request.POST)
        with urllib.request.urlopen(data['fileurl'][0]) as f:
            csv_file = f.read().decode('utf-8')

        with open(os.path.join(get_directory(), "datafile.csv"), "w+") as f:
            f.write(csv_file)

        graphCreator = DCGraphCreator(filepath=os.path.join(get_directory(), "datafile.csv"), of_type=ECDCSet)

        with open(os.path.join(get_directory(), "converted.ttl"), "w+") as f:
            f.write(graphCreator.create_graph(format='turtle'))

        self.clear_context()
        self.add_to_context('message', 'Turtle file generated at {0}'.format(os.path.join(get_directory(), "converted.ttl")))
        return render(request, 'download.html', context=self.c)


class Visualization(BaseView):
    def get(self, request):
        self.clear_context()
        return render(request, 'visualization.html', context=self.c)

    def post(self, request):
        self.clear_context()
        return render(request, 'visualization.html', context=self.c)


