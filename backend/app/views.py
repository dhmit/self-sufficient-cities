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
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
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


# % API %
# PEOPLE/PERSON
@api_view(['GET', 'POST'])
@renderer_classes((BrowsableAPIRenderer, JSONRenderer,))
def people(request):
    """
    GET people or POST / add person
    """
    if request.method == "GET":
        params = request.GET.dict()
        individual = Person.objects.filter(**params)
        serializer = PersonSerializer(individual, many=True)
        return Response(serializer.data)

    attributes = request.data
    new_person_obj = Person.objects.create(**attributes)
    serializer = PersonSerializer(new_person_obj,
                                  data=request.data)
    if serializer.is_valid():
        return Response(serializer.data)
    return Response(serializer.errors,
                    status=status.HTTP_422_UNPROCESSABLE_ENTITY)


@api_view(['GET', 'PUT'])
@renderer_classes((BrowsableAPIRenderer, JSONRenderer,))
def person(request, person_id):
    """
    GET or PUT/update person. Return person.
    :param person_id: id int
    :return: person
    """
    if request.method == 'PUT':
        params = request.data
        # in order to update, need a QuerySet
        Person.objects.filter(id=person_id).update(**params)
    found_person = Person.objects.get(id=person_id)
    serializer = PersonSerializer(found_person)
    return Response(serializer.data)


# EVENTS
@api_view(['GET', 'POST'])
@renderer_classes((BrowsableAPIRenderer, JSONRenderer,))
def events(request):
    """
    GET event or POST / add event.
    """
    if request.method == 'GET':
        found_events = Event.objects.order_by('name')
        serializer = EventSerializer(found_events, many=True)
        return Response(serializer.data)

    attributes = request.data
    new_event = Event.objects.create(**attributes)
    serializer = EventSerializer(new_event)
    return Response(serializer.data)


@api_view(['GET', 'PUT'])
@renderer_classes((BrowsableAPIRenderer, JSONRenderer,))
def event(request, event_id):
    """
    GET or PUT/update event. Return event.
    :param event_id: id int
    :return: event
    """
    if request.method == 'PUT':
        params = request.data
        # in order to update, need a QuerySet
        Event.objects.filter(id=event_id).update(**params)
    found_event = Event.objects.get(id=event_id)
    serializer = EventSerializer(found_event)
    return Response(serializer.data)


# LOCATIONS
@api_view(['GET', 'POST'])
@renderer_classes((BrowsableAPIRenderer, JSONRenderer,))
def locations(request):
    """
    GET locations or POST (add) location to DB.
    Required keys in body of request for successfully adding locations:
        - name
    """
    if request.method == 'GET':
        found_location = Location.objects.order_by('name')
        serializer = LocationSerializer(found_location, many=True)
        return Response(serializer.data)

    attributes = request.data
    new_location = Location.objects.create(**attributes)
    serializer = LocationSerializer(new_location)
    return Response(serializer.data)


@api_view(['GET', 'PUT'])
@renderer_classes((BrowsableAPIRenderer, JSONRenderer,))
def location(request, location_id):
    """
    GET or PUT/update location. Return location.
    :param location_id: id int
    :return: location
    """
    if request.method == 'PUT':
        params = request.data
        Location.objects.filter(id=location_id).update(**params)
    found_event = Location.objects.get(id=location_id)
    serializer = LocationSerializer(found_event)
    return Response(serializer.data)


@api_view(['GET', 'PUT'])
@renderer_classes((BrowsableAPIRenderer, JSONRenderer,))
def people_in_event(request, event_id=None):
    """
    GET people in event or PUT / add person to event.
    PUT accepts a list of people ids [1, 2, 3]
    :param event_id: id int
    :return: event
    """
    found_event = Event.objects.get(id=event_id)
    if request.method == 'GET':
        found_people = found_event.people.all()
        serializer = PersonSerializer(found_people, many=True)
        return Response(serializer.data)
    people_ids = request.data
    found_people = Person.objects.filter(id__in=people_ids)
    found_event.people.add(*found_people)
    serializer = EventSerializer(found_event)
    return Response(serializer.data)


@api_view(['GET', 'PUT'])
@renderer_classes((BrowsableAPIRenderer, JSONRenderer,))
def locations_in_event(request, event_id=None):
    """
    API endpoint for pulling up a list of locations related to an event
    """
    found_event = Event.objects.get(id=event_id)
    if request.method == 'GET':
        found_locations = found_event.locations.all()
        serializer = LocationSerializer(found_locations, many=True)
        return Response(serializer.data)

    location_ids = request.data
    found_locations = Location.objects.filter(id__in=location_ids)
    found_event.locations.add(*found_locations)
    serializer = EventSerializer(found_event)
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


def map_legend_page(request):
    """
    Map page
    """

    context = {
        'page_metadata': {
            'title': 'Map Legend page'
        },
        'component_name': 'MapLegend'
    }
    return render(request, 'index.html', context)


def map_consolidated(request):
    """
    Consolidated map page
    """

    context = {
        'page_metadata': {
            'title': 'Map Consolidated page'
        },
        'component_name': 'MapConsolidated'
    }
    return render(request, 'index.html', context)


def census_charts(request):
    """
    Census Data visualizations
    """

    context = {
        'page_metadata': {
            'title': 'Census Data visualizations page'
        },
        'component_name': 'CensusCharts'
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

def get_community_data(request):
    """
    API endpoint for getting the census data in json format
    """
    with open("app/data/community.json", encoding="utf-8") as f:
        community_data = json.load(f)

    return JsonResponse(community_data)



def get_1940_census_geodata(request):
    """
    API endopoint for getting the 1940 Census Tracts as a geojson file
    """

    with open("app/data/filtered_1940_tracts.geojson", encoding='utf-8') as f:
        census_data = json.load(f)

    return JsonResponse(census_data)


def get_1940_deanwood_similarities(request):
    """
    API endpoint for getting the similarity scores for 1940 census tracts
    """

    with open("app/data/filtered_tract_distances.json", encoding='utf-8') as f:
        census_data = json.load(f)

    return JsonResponse(census_data)


def get_1940_tract_classifications(request):
    """
    API endpoint for getting the cluster classifications of census tracts in 1940
    """
    with open("app/data/tract_labels.json", encoding='utf-8') as f:
        classifications = json.load(f)

    return JsonResponse(classifications)


def get_1940_tract_data(request):
    """
    API endpoint to get the entries for each tract on the 1940s census
    :param request:
    :return:
    """
    with open("app/data/1940_tract_data.json", encoding='utf-8') as f:
        data = json.load(f)

    return JsonResponse(data)


def get_deanwood_boundary_data(request):
    """
    Get the Deanwood geoJSON
    """
    with open("app/data/deanwood_boundary.geojson", encoding="utf-8") as f:
        boundary = json.load(f)
    return JsonResponse(boundary)


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

    with open("app/data/legend_testing.json", "w", encoding="utf-8") as outfile:
        json.dump(addresses, outfile)

    return JsonResponse({"address_lat_lon": addresses})


def get_address_data(request):
    """Returning all addresses from file"""
    with open("app/data/address_data.json", encoding="utf-8") as f:
        address_data = json.load(f)

    return JsonResponse({"address_data": address_data})


def get_food_addresses(request):
    """Returning all addresses from file"""
    with open("app/data/food_addresses_new.json", encoding="utf-8") as f:
        address_data = json.load(f)

    return JsonResponse({"address_data": address_data})


def get_legend_testing(request):
    """Returning all addresses from file"""
    with open("app/data/legend_testing.json", encoding="utf-8") as f:
        legend_testing = json.load(f)

    return JsonResponse({"legend_testing": legend_testing})


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


def ward_demographics(request):
    with open('app/data/health/ward.json', encoding="utf-8") as f:
        return JsonResponse(json.load(f))
