from django.db import models

# Create your models here.
class Order(models.Model):
    name = models.CharField(max_length=255, null=True)
    items = models.JSONField(default=[])
    total = models.DecimalField(max_digits=8, decimal_places=2, null=True)