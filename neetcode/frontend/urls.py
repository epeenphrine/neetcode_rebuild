from django.urls import path, re_path
from . import views
app_name = 'react'
urlpatterns = [
    path('', views.index ),
    re_path(r'^(?:.*)/?$', views.index),
]