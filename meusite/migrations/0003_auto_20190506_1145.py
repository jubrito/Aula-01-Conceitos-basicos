# Generated by Django 2.2 on 2019-05-06 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meusite', '0002_candidato_foto'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidato',
            name='idade',
            field=models.IntegerField(),
        ),
    ]
