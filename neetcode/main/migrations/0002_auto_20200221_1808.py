# Generated by Django 3.0.3 on 2020-02-21 23:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='about',
            name='about',
            field=models.TextField(verbose_name='About description'),
        ),
    ]