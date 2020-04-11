from django.contrib import admin
from .models import Data, ItemsToScrape, Project, About, ImageUpload 

# Register your models here.

admin.site.register(Data)
admin.site.register(ItemsToScrape)
admin.site.register(Project)
admin.site.register(About)
admin.site.register(ImageUpload)