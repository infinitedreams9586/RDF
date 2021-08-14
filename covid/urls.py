from django.urls import path

from . import views

app_name = 'covid'

urlpatterns = [
    #path('', views.index, name='index'),
    path('download', views.Download.as_view(), name='download'),
    path('visualization', views.Visualization.as_view(), name='visualization'),
]