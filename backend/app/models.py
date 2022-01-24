"""
Models for the Self-Sustaining Cities web app.
"""

from django.db import models


class Location(models.Model):
    name = models.CharField(max_length=128)
    # coordinates = models.Polygon()


class Person(models.Model):
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    ethnicity = models.CharField(max_length=32, blank=True)
    date_of_birth = models.DateField()
    country_of_origin = models.CharField(max_length=64) #May one to restrict to 2 character country CODES


class Event(models.Model):
    name = models.CharField(max_length=128) # maybe make this unique?
    date = models.DateField()
    locations = models.ManyToManyField(Location)
    people = models.ManyToManyField(Person)
