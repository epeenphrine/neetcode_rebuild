# Register your models here.
from django.contrib import admin
from .models import ProgrammingLanguage, ProjectsCategory, ProjectsInfo, About

# Register your models here.

admin.site.register(About)
admin.site.register(ProjectsCategory)
admin.site.register(ProgrammingLanguage)
admin.site.register(ProjectsInfo)