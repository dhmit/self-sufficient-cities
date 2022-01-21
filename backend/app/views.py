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
from django.shortcuts import render, get_list_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
import datetime

from .models import Person
from .serializers import PersonSerializer


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


def map_page(request, map_id=None):
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
    attributes = request.data

    new_person_obj = Person.objects.create(**attributes)
    serializer = PersonSerializer(new_person_obj)
    return Response(serializer.data)

@api_view(['GET'])
def get_people(request):
    people = Person.objects.order_by('first_name')
    serializer = PersonSerializer(people,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_person(request, search_string):
    search_list = search_string.split("|")
    search_dict = {}
    for substring in search_list:
        pair = substring.split(":") # pair[0] is the exact name of a Person attribute, and pair[
        # 1] is its value

        if pair[0] == "date_of_birth":
            # Convert the string representing the birthdate into the datetime datatype
            birthdate = [int(n) for n in pair[1].split("-")]
            value = datetime.datetime(*birthdate)
        else:
            value = pair[1]

        # Add the name-value pair to the dictionary
        search_dict[pair[0]] = value

    person = get_list_or_404(Person,**search_dict)
    serializer = PersonSerializer(person,many=True)
    return Response(serializer.data)
