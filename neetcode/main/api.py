from .models import About
from rest_framework import viewsets, permissions, generics
from .serializers import AboutSerializer
from knox.models import AuthToken
from rest_framework.response import Response



#About Viewset
class AboutViewSet(viewsets.ModelViewSet):
  queryset = About.objects.all()
  ## set permission only auth users or anyone 
  permission_classes = [
    permissions.AllowAny
  ]

  serializer_class = AboutSerializer
  ## limit request method. Only get request allowed
  http_method_names = ['get']