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
import datetime
from django.shortcuts import render, get_list_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Person, Event
from .serializers import PersonSerializer, EventSerializer


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
    serializer = PersonSerializer(new_person_obj)
    return Response(serializer.data)


@api_view(['GET'])
def get_people(request):
    """
    API endpoint for pulling up all people in the Person table
    """
    people = Person.objects.order_by('first_name')
    serializer = PersonSerializer(people, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_person(request, search_string):
    """
    API Endpoint for searching for people by specific fields
    Using the keywords passed, this will attempt to select all people in the
    Person table matching them
    TODO: implement using query strings
    """
    search_list = search_string.split("|")
    search_dict = {}
    for substring in search_list:
        pair = substring.split(":")  # pair[0] is the exact name of a Person attribute, and pair[
        # 1] is its value

        if pair[0] == "date_of_birth":
            # Convert the string representing the birthdate into the datetime datatype
            birthdate = [int(n) for n in pair[1].split("-")]
            value = datetime.datetime(*birthdate)
        else:
            value = pair[1]

        # Add the name-value pair to the dictionary
        search_dict[pair[0]] = value

    person = get_list_or_404(Person, **search_dict)
    serializer = PersonSerializer(person, many=True)

    return Response(serializer.data)


@api_view(['POST'])
def create_event(request):
    """
    API Endpoint for adding an event to the database
    Required keys in body of request for successfully adding people:
        - name
        - date
    """
    attributes = request.data

    new_event_obj = Event.objects.create(**attributes)
    serializer = EventSerializer(new_event_obj)
    return Response(serializer.data)


# need to add endpoints for updating locations/people event
@api_view(['GET'])
def get_people_from_event(request, event_name=None):
    """
    API endpoint for pulling up a list of people from an event
    """
    event = Event.objects.filter(name=event_name).first()
    print(event.people)
    people = PersonSerializer(event.people, many=True)
    return Response(people)


@api_view(['PUT'])
def update_people_for_event(request, event_name=None):
    """
    API endpoint for updating the list of people for an event
    """
    return Response()


@api_view(['GET'])
def get_event(request, **keywords):
    """
    API endpoint for pulling up all events from the Event table
    """
    event = Event.objects.order_by('name')
    serializer = EventSerializer(event, many=True)
    return Response(serializer.data)


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
