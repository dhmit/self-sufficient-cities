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
from .helpers import address_to_coordinates, meme_generator


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


def meme_page(request):
    context = {
        'page_metadata': {
            'title': 'Memes'
        },
        'component_name': 'Memes'
    }
    return render(request, 'index.html', context)


def generate_meme(request):
    data = json.loads(request.body)
    image_data = meme_generator(data["text"])
    return JsonResponse({'image': image_data})
