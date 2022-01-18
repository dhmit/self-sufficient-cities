"""
Models for the Self-Sustaining Cities web app.
"""

from django.db import models


class Location(models.Model):
    name = models.charField(max_length=128)
    coordinates = models.Polygon()


class Person(models.Model):
    first_name = models.charField(max_length=32)
    last_name = models.charField(max_length=32)
    ethnicity = models.charField(max_length=32, blank=True)
    date_of_birth = models.DateField()
    country_of_origin = models.charField(max_length=64)


class Event(models.Model):
    name = models.charField(max_length=128)
    date = models.DateField()
    locations = models.ManyToMany(Location)
    people = models.ManyToMany(Person)
