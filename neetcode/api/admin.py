from django.contrib import admin
from .models import Data, ItemsToScrape, ProgrammingLanguage, ProjectsCategory, ProjectsContent, About

# Register your models here.

admin.site.register(Data)
admin.site.register(ItemsToScrape)
admin.site.register(ProgrammingLanguage)
admin.site.register(ProjectsCategory)
admin.site.register(ProjectsContent)
admin.site.register(About)