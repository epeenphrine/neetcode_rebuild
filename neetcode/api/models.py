from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
# Create your models here.
''' every time you make changes here do this:
    python manage.py makemigrations
    python manage.py migrate'''


class Data(models.Model):
    ticker = models.CharField(max_length=200)
    x = models.TextField('x data')
    y = models.TextField('y data')
    owner = models.ForeignKey(
       User, related_name="data", on_delete=models.CASCADE, null=True)
    ## change how it's named in content management system
    class Meta:
        verbose_name_plural="Data"
    ## how to display the content
    def __str__(self):
        return self.ticker

class ItemsToScrape(models.Model):
    items = models.TextField('items you want to scrape')
    owner = models.ForeignKey(
        User, related_name="scrape_stuff", on_delete=models.CASCADE, null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name_plural = 'Items To Scrape'
    def __str__(self):
        return self.items





##blog type stuff 
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

class ProjectsContent(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField("brief description")
    published = models.DateTimeField("date completed", default=datetime.now)

    project = models.ForeignKey(ProjectsCategory, default=1,verbose_name="project", on_delete=models.SET_DEFAULT)
    project_slug = models.CharField(max_length=200, default=1)
    class Meta:
        verbose_name_plural = 'content of projects'
    def __str__(self):
        return self.title

#About stuff 
class About(models.Model):
    role = models.CharField(max_length=200)
    description = models.TextField('Description')
    projects = models.TextField("github URLS")
    
    class Meta:
        verbose_name_plural = 'About Section'
    def __str__(self):
        return self.role 

class AboutLanguage(models.Model):
    role = models.ForeignKey(About, default='', verbose_name'about language', on_delete=models.SET_DEFAULT())
    languages = models.CharField(max_length=200)
    libraries = models.TextField('libraries')

    class Meta:
        vernose_name_plural = 'About Language'
    
    def __str__(self):
        return self.languages