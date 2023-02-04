from django.db import models

# Create your models here.


class YTSpamClassifier(models.Model):
    text = models.TextField()
    label = models.CharField(max_length=100)
