# Generated by Django 4.0.5 on 2022-06-15 19:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foods', '0002_remove_food_iscooked'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='active',
            field=models.BooleanField(default=True),
        ),
    ]
