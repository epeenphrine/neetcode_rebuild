# Generated by Django 3.0.3 on 2020-02-22 03:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_data_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='ticker',
            field=models.CharField(max_length=200),
        ),
        migrations.DeleteModel(
            name='Ticker',
        ),
    ]
