from django.shortcuts import render
from django.http import HttpResponse
from django.views import View

import csv
import urllib.request


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
        print(data)
        with urllib.request.urlopen(data['fileurl'][0]) as f:
            csv_file = f.read().decode('utf-8')
        reader = csv.reader(csv_file)
        for row in reader:
            print(row)
        self.clear_context()
        return render(request, 'download.html', context=self.c)


class Visualization(BaseView):
    def get(self, request):
        self.clear_context()
        return render(request, 'visualization.html', context=self.c)

    def post(self, request):
        self.clear_context()
        return render(request, 'visualization.html', context=self.c)


