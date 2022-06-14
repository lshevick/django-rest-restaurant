from django.db import models

# Create your models here.
class Order(models.Model):
    items = models.JSONField(default=[])
    total = models.DecimalField(max_digits=8, decimal_places=2, null=True)