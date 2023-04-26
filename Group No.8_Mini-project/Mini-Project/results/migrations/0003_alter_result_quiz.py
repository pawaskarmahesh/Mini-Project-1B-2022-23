# Generated by Django 4.2 on 2023-04-08 09:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('quizes', '0001_initial'),
        ('results', '0002_alter_result_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='result',
            name='quiz',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='quiz', to='quizes.quiz'),
        ),
    ]
