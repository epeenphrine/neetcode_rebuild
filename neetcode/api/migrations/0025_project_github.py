# Generated by Django 3.0.3 on 2020-04-14 20:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0024_auto_20200410_0444'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='github',
            field=models.CharField(default=1, max_length=200),
        ),
    ]