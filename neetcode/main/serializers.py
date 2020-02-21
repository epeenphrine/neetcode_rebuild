from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import About

## convert sql to json and vice versa

# Main Serializer
class AboutSerializer(serializers.ModelSerializer):
  class Meta:
    model = About
    fields = '__all__'
