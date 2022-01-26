"""
Models for the Self-Sustaining Cities web app.
"""

from django.db import models


class Location(models.Model):
    """
    Location model
    Fields:
        `name`: name of the location
    """
    name = models.CharField(max_length=128)
    # coordinates = models.Polygon()


class Person(models.Model):
    """
    Person model
    Fields:
        `first_name`: first name of a person

        `last_name`: last name of a person

        `ethnicity`: ethnicity of a person, optional field

        `date_of_birth`: date of birth

        `country_of_origin`: representation of country of origin (
        TODO: restrict this to 2 or 3 character country codes
        )
    """
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    ethnicity = models.CharField(max_length=32, blank=True)
    date_of_birth = models.DateField()
    country_of_origin = models.CharField(
        max_length=64)  # May want to restrict to 2 character country
    # CODES


class Event(models.Model):
    """
    Event model
    Fields:
        `name`: name of event

        `date`: date of event

        `locations`: locations this event took place, manytomany link to Location model

        `people`: people that are related to this event, manytomany link to Person model
    """
    name = models.CharField(max_length=128)  # maybe make this unique?
    date = models.DateField()
    locations = models.ManyToManyField(Location)
    people = models.ManyToManyField(Person)
