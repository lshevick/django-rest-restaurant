# Generated by Django 4.0.5 on 2022-06-15 17:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('foods', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='food',
            name='isCooked',
        ),
    ]
