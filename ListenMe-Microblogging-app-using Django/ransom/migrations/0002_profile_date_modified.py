# Generated by Django 4.1.5 on 2023-01-27 17:29

import django.contrib.auth.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ransom', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='date_modified',
            field=models.DateTimeField(auto_now=True, verbose_name=django.contrib.auth.models.User),
        ),
    ]