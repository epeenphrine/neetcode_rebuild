# Generated by Django 3.0.3 on 2020-02-22 03:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20200221_2241'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='x',
            field=models.TextField(verbose_name='x data'),
        ),
        migrations.AlterField(
            model_name='data',
            name='y',
            field=models.TextField(verbose_name='y data'),
        ),
    ]