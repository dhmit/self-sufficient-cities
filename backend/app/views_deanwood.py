import json
from django.shortcuts import render

deanwood_sections = ["overview", "housing", "food", "health", "transportation", "community",
                     "future"]


def overview(request):
    """
    Deanwood homepage
    """
    with open("app/data/2021_11_tract78.geojson", encoding="utf-8") as f:
        census_boundary = json.load(f)

    with open("app/data/deanwood_boundary.geojson", encoding="utf-8") as f:
        deanwood_boundary = json.load(f)

    with open("app/data/dc_ward7.geojson", encoding="utf-8") as f:
        dc_ward7 = json.load(f)

    context = {
        'page_metadata': {
            'title': 'Deanwood, D.C.'
        },
        'component_name': 'DeanwoodOverview',
        'component_props': {
            'resources': deanwood_sections,
            'census_boundary': census_boundary,
            'deanwood_boundary': deanwood_boundary,
            'ward7_boundary': dc_ward7
        },
    }

    return render(request, 'index.html', context)


def transport(request):
    """
    Deanwood transportation page
    """

    with open("app/data/deanwood_boundary.geojson", encoding="utf-8") as f:
        deanwood_boundary = json.load(f)

    with open("app/data/kenilworth_boundary.geojson", encoding="utf-8") as f:
        kenilworth_boundary = json.load(f)

    context = {
        'page_metadata': {
            'title': 'Transportation in Deanwood, D.C.'
        },
        'component_name': 'DeanwoodTransport',
        'component_props': {
            'resources': deanwood_sections,
            'deanwood_boundary': deanwood_boundary,
            'kenilworth_boundary': kenilworth_boundary
        },
    }

    return render(request, 'index.html', context)


def health(request):
    """
    Deanwood health page
    """
    context = {
        'page_metadata': {
            'title': 'Health'
        },
        'component_name': 'DeanwoodHealth',
        'component_props': {
            'resources': deanwood_sections
        },
    }

    return render(request, 'index.html', context)


def community(request):
    """
    Deanwood community page
    """

    with open("app/data/community.json", "r", encoding="utf-8") as f:
        community_data = json.load(f)

    with open("app/data/voronoi_shapes.json", "r", encoding="utf-8") as f:
        voronoi_data = json.load(f)

    with open("app/data/paths.json", "r", encoding="utf-8") as f:
        paths_data = json.load(f)

    context = {
        'page_metadata': {
            'title': 'Deanwood, D.C.'
        },
        'component_name': 'DeanwoodCommunity',
        'component_props': {
            'resources': deanwood_sections,
            'community_data': community_data,
            'voronoi_data': voronoi_data,
            'paths_data': paths_data
        },
    }

    return render(request, 'index.html', context)


def food(request):
    """
     Deanwood food page
     """
    context = {
        'page_metadata': {
            'title': 'Deanwood: Food Landscape'
        },
        'component_name': 'DeanwoodFood',
        'component_props': {
            'resources': deanwood_sections
        },
    }
    return render(request, 'index.html', context)


def housing(request):
    """
    Deanwood housing page
    """
    context = {
        'page_metadata': {
            'title': 'Deanwood Housing'
        },
        'component_name': 'DeanwoodHousing',
        'component_props': {
            'resources': deanwood_sections,
            'addresses': [{"address": "Smith Family", "openyear": 1900, "closeyear": 2004,
                           "coordinates": ["38.903760", "-76.929470"]},
                          {"address": "Johnson Family", "openyear": 1900, "closeyear": 1987,
                           "coordinates": ["38.904480", "-76.930540"]},
                          {"address": "Dorrah Family", "openyear": 1900, "closeyear": 1990,
                           "coordinates": ["38.904440", "-76.929480"]},
                          {"address": "Correa Family", "openyear": 1900, "closeyear": 2020,
                           "coordinates": ["38.903740", "-76.929050"]},
                          {"address": "Correa Family", "openyear": 1900, "closeyear": 1983,
                           "coordinates": ["38.904490", "-76.930450"]},
                          {"address": "Correa Family", "openyear": 1900, "closeyear": 2022,
                           "coordinates": ["38.9044312", "-76.9291952"]},
                          {"address": "Correa Family", "openyear": 1900, "closeyear": 2022,
                           "coordinates": ["38.9044316", "-76.929797"]},
                          {"address": "Correa Family", "openyear": 1900, "closeyear": "2022",
                           "coordinates": ["38.900959520489025", "-76.92833968132939"]}
                          ]
        },

    }

    return render(request, 'index.html', context)


def future(request):
    """
    Deanwood future page
    """

    context = {
        'page_metadata': {
            'title': 'Future Work'
        },
        'component_name': 'FutureWorkOverview',
        'component_props': {
            'resources': deanwood_sections
        },
    }

    return render(request, 'index.html', context)
