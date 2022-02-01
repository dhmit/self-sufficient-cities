"""
These view functions and classes implement both standard GET routes and API endpoints.

GET routes produce largely empty HTML pages that expect a React component to attach to them and
handle most view concerns. You can supply a few pieces of data in the render function's context
argument to support this expectation.

Of particular use are the properties: page_metadata, component_props, and component_name:
page_metadata: these values will be included in the page's <head> element.
Currently, only the `title` property is used. component_props: these can be any properties you
wish to pass into your React components as its highest-level props.
component_name: this should reference the exact name of the React component
you intend to load onto the page.

Example:
context = {
    'page_metadata': {
        'title': 'Example ID page'
    },
    'component_props': {
        'id': example_id
    },
    'component_name': 'ExampleId'
}
"""
import json

from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Person, Event, Location
from .serializers import PersonSerializer, EventSerializer, LocationSerializer
from .helpers import address_to_coordinates


def index(request):
    """
    Home page
    """

    context = {
        'page_metadata': {
            'title': 'Home page'
        },
        'component_name': 'Home'
    }

    return render(request, 'index.html', context)


def example(request, example_id=None):
    """
    Example page
    """

    context = {
        'page_metadata': {
            'title': 'Example ID page'
        },
        'component_props': {
            'id': example_id
        },
        'component_name': 'ExampleId'
    }
    return render(request, 'index.html', context)


def map_page(request):
    """
    Map page
    """

    context = {
        'page_metadata': {
            'title': 'Map page'
        },
        'component_name': 'Map'
    }
    return render(request, 'index.html', context)


# DJANGO OBJECT CREATION ENDPOINTS
@api_view(['POST'])
def create_person(request):
    """
    API Endpoint for adding a person to the database
    Required keys in body of request for successfully adding people:
        - first_name
        - last_name
        - ethnicity
        - date_of_birth
        - country_of_origin
    """
    attributes = request.data
    new_person_obj = Person.objects.create(**attributes)
    serializer = PersonSerializer(new_person_obj, data=request.data)

    if serializer.is_valid():
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


@api_view(['POST'])
def create_event(request):
    """
    API Endpoint for adding an event to the database
    Required keys in body of request for successfully adding events:
        - name
        - date
    """
    attributes = request.data

    new_event_obj = Event.objects.create(**attributes)
    serializer = EventSerializer(new_event_obj, data=request.data)
    if serializer.is_valid():
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


@api_view(['POST'])
def create_location(request):
    """
    API Endpoint for adding a person to the database
    Required keys in body of request for successfully adding a location:
        - name
    """
    attributes = request.data

    new_location_obj = Location.objects.create(**attributes)
    serializer = LocationSerializer(new_location_obj, data=request.data)
    if serializer.is_valid():
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


# DJANGO OBJECT SEARCH ENDPOINTS
@api_view(['GET'])
def get_people(request):
    """
    API endpoint for searching for people by specific fields
    Using the keywords passed, this will attempt to select all people in the
    Person table matching them
    """
    params = request.GET.dict()
    people = Person.objects.filter(**params)
    serializer = PersonSerializer(people, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_events(request):
    """
    API endpoint for pulling up all events from the Event table
    """
    event = Event.objects.order_by('name')
    serializer = EventSerializer(event, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_people_from_event(request, event_id=None):
    """
    API endpoint for pulling up a list of people from an event
    """
    event = Event.objects.get(id=event_id)
    people = event.people.all()
    serializer = PersonSerializer(people, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_locations_from_event(request, event_id=None):
    """
    API endpoint for pulling up a list of locations related to an event
    """
    event = Event.objects.get(id=event_id)
    locations = event.locations.all()
    serializer = LocationSerializer(locations, many=True)
    return Response(serializer.data)


# DJANGO OBJECT UPDATE METHODS
@api_view(['PUT'])
def update_people_for_event(request, event_id=None):
    """
    API endpoint for updating the list of people for an event. This endpoints takes a list
    of people ids and adds people to the event that are not already there. Returns a response
    object containing a representation of the updated event object.

    Required keys in body of request for successfully updating people:
        - id_list: list of unique ids for people that are to be added
    """
    event = Event.objects.get(id=event_id)
    people_ids = request.data["id_list"]
    people = Person.objects.filter(id__in=people_ids)

    event.people.add(*people)
    serializer = EventSerializer(event, data=request.data)
    return Response(serializer.data)


@api_view(['PUT'])
def update_locations_for_event(request, event_id=None):
    """
    API endpoint for updating the list of locations related to an event. This endpoints takes a list
    of location ids and adds locations to the event that are not already there. Returns a response
    object containing a representation of the updated event object.

    Required keys in body of request for successfully updating locations:
        - id_list: list of unique ids for locations that are to be added
    """
    event = Event.objects.get(id=event_id)
    location_ids = request.data["id_list"]
    locations = Location.objects.filter(id__in=location_ids)
    event.locations.add(*locations)

    serializer = EventSerializer(event, data=request.data)
    return Response(serializer.data)


def timeline_page(request):
    """
    Timeline page
    """
    context = {
        'page_metadata': {
            'title': 'Timeline page'
        },
        'component_name': 'Timeline',
        'component_props': {
            'data': {}
        },
    }
    with open("app/data/documents.json", encoding="utf-8") as f:
        context['component_props']['data'] = json.load(f)
    return render(request, 'index.html', context)


def map_macro_page(request):
    """
    Map page
    """

    context = {
        'page_metadata': {
            'title': 'Map Macro page'
        },
        'component_name': 'MapMacro'
    }

    return render(request, 'index.html', context)


def map_micro_page(request):
    """
    Map page
    """

    context = {
        'page_metadata': {
            'title': 'Map Micro page'
        },
        'component_name': 'MapMicro'
    }
    return render(request, 'index.html', context)


def timeline_test(request):
    """
    Testing Page for loading timeline modal
    """

    context = {
        'page_metadata': {
            'title': 'Timeline Modal Test'
        },
        'component_name': 'TimelineTest'
    }
    return render(request, 'index.html', context)


# API Views
def get_census_data(request):
    """
    API endpoint for getting the census data in json format
    """
    with open("app/data/2021_11_tract78.geojson", encoding="utf-8") as f:
        census_data = json.load(f)

    return JsonResponse(census_data)


def get_addresses(request):
    """
    API endpoint for getting addresses from articles data
    """
    with open("app/data/articles.json", encoding="utf-8") as f:
        article_data = json.load(f)

    addresses = []
    for article in article_data:
        addresses.extend(article_data[article]["entities"]["places"])

    return JsonResponse({"addresses": addresses})


def get_latlon(request, address_str):
    """Getting latitude and longitude from address"""
    coordinates = address_to_coordinates(address_str)
    return JsonResponse({"coordinates": coordinates})


def get_all_latlon(request):
    """Get all addresses from articles, write latitude and longitude to file"""
    with open("app/data/documents.json", encoding="utf-8") as f:
        documents = json.load(f)

    addresses = []
    for articles in documents["documents"]:
        year = int(articles["date"][-4:])

        for article in articles["articles"]:
            article_addresses = article["entities"]["places"]
            for address in article_addresses:
                new_address = {"address": address,
                               "year": year,
                               "coordinates": address_to_coordinates(address)}
                addresses.append(new_address)

    with open("app/data/address_data.json", "w", encoding="utf-8") as outfile:
        json.dump(addresses, outfile)

    return JsonResponse({"address_lat_lon": addresses})


def get_address_data(request):
    """Returning all addresses from file"""
    with open("app/data/address_data.json", encoding="utf-8") as f:
        address_data = json.load(f)

    return JsonResponse({"address_data": address_data})


def get_documents_data(request):
    """
    API endpoint for getting the documents data in json format
    """
    with open("app/data/documents.json", encoding="utf-8") as f:
        documents_data = json.load(f)

    return JsonResponse(documents_data)


def get_table_data(request, table_name):
    """
    API endpoint for getting table data for census tract 78 in json format
    """
    file_name = str(table_name) + ".json"
    file_path = "app/data/tabledata/" + file_name
    try:
        with open(file_path, encoding="utf-8") as f:
            table_data = json.load(f)
        return JsonResponse(table_data, safe=False)
    except IOError:
        response = {"detail": "invalid table name"}
        return JsonResponse(response)


def api_page(request):
    """
    Testing Page for loading timeline modal
    """

    context = {
        'page_metadata': {
            'title': 'API'
        },
        'component_name': 'API'
    }
    return render(request, 'index.html', context)
