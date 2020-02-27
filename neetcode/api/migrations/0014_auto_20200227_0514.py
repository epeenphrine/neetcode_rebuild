# Generated by Django 3.0.3 on 2020-02-27 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_aboutlanguage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='about',
            name='description',
        ),
        migrations.RemoveField(
            model_name='about',
            name='projects',
        ),
        migrations.AddField(
            model_name='aboutlanguage',
            name='description',
            field=models.TextField(default=1, verbose_name='Description'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='aboutlanguage',
            name='projects',
            field=models.TextField(default=1, verbose_name='github URLS'),
            preserve_default=False,
        ),
    ]
