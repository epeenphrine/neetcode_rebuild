from django.db import models
from django.contrib.auth.models import User
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

    class Meta:
        verbose_name_plural="Data"
    def __str__(self):
        return self.ticker

class ItemScrape(models.Model):
    items = models.TextField('items you want to scrape')
    owner = models.ForeignKey(
        User, related_name="scrape_stuff", on_delete=models.CASCADE, null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.items

