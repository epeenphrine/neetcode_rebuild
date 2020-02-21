from django.db import models
from datetime import datetime
# Create your models here.
## when adding or making changes here do:
## run python manage.py makemigrations 
## run python manage.py migrate

class ProgrammingLanguage(models.Model):

    language = models.CharField(max_length=200)
    content = models.CharField(max_length=200)
    project_slug = models.CharField(max_length=200, default=1)

    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Programming Language"

    def __str__(self):
        return self.language

class ProjectsCategory(models.Model):
    project = models.CharField(max_length=200)

    language = models.ForeignKey(ProgrammingLanguage, default=1, verbose_name="Language", on_delete=models.SET_DEFAULT)
    content = models.TextField("brief description")

    class Meta:
        # otherwise we get "Tutorial Seriess in admin"
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.project

class ProjectsInfo(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField("brief description")
    published = models.DateTimeField("date completed", default=datetime.now)

    project = models.ForeignKey(ProjectsCategory, default=1,verbose_name="project", on_delete=models.SET_DEFAULT)
    project_slug = models.CharField(max_length=200, default=1)
    
    def __str__(self):
        return self.title


class About(models.Model):
    email = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    about = models.TextField("About description")
    
    def __str__(self):
        return self.about


