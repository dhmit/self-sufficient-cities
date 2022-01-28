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
import geopandas
import geopy
from django.shortcuts import render
from django.http import JsonResponse
from geopy.geocoders import Nominatim


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


def timeline_page(request):
    """
    Timeline page
    """
    context = {
        'page_metadata': {
            'title': 'Timeline page'
        },
        'component_name': 'Timeline'
    }
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


########## API Views ##########

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
    parsed_address = address_str.replace("+", " ")
    app = Nominatim(user_agent="tutorial")

    full_addr = parsed_address + ", Washington, D.C."
    location = app.geocode(full_addr).raw
    lat = location["lat"]
    lon = location["lon"]

    return JsonResponse({"coordinates": [float(lat), float(lon)]})


def get_all_latlon(request):
    with open("app/data/articles.json", encoding="utf-8") as f:
        article_data = json.load(f)

    addresses = []
    for article in article_data:
        article_addresses = article_data[article]["entities"]["places"]

        for address in article_addresses:
            app = Nominatim(user_agent="tutorial")
            full_addr = address + ", Washington, D.C."
            new_address = {
                "address": full_addr,
                "coordinates": [],
            }
            lat = ""
            lon = ""
            print(full_addr, "address")
            try:
                location = app.geocode(full_addr).raw
                lat = location["lat"]
                lon = location["lon"]
            except (AttributeError, Exception):
                pass

            new_address["coordinates"] = [lat, lon]

            addresses.append(new_address)

    with open("app/data/address_data.json", "w") as outfile:
        json.dump(addresses, outfile)

    return JsonResponse({"address_lat_lon": addresses})


def get_address_data(request):
    with open("app/data/address_data.json", encoding="utf-8") as f:
        address_data = json.load(f)

    return JsonResponse({"address_data": address_data})



