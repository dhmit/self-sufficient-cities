from django.shortcuts import render
import json


def overview(request):
    """
    Deanwood homepage
    """
    resources = ["overview", "housing", "transport", "food", "community", "health", "future"]
    context = {
        'page_metadata': {
            'title': 'Deanwood, D.C.'
        },
        'component_name': 'DeanwoodOverview',
        'component_props': {
            'resources': resources
        },
    }

    return render(request, 'index.html', context)


# def transport(request):
#     """
#     Deanwood transportation page
#     """
#     pass


# def health(request):
#     """
#     Deanwood health page
#     """
#     pass


def community(request):
    """
    Deanwood community page
    """
    resources = ["overview", "housing", "transport", "food", "community", "health", "future"]
    community_data = {}
    with open("app/data/community.json", "r") as f:
        community_data = json.load(f)

    with open("app/data/voronoi_shapes.json", "r") as f:
        voronoi_data = json.load(f)

    with open("app/data/paths.json", "r") as f:
        paths_data = json.load(f)

    context = {
        'page_metadata': {
            'title': 'Deanwood, D.C.'
        },
        'component_name': 'DeanwoodCommunity',
        'component_props': {
            'resources': resources,
            'community_data': community_data,
            'voronoi_data': voronoi_data,
            'paths_data': paths_data
        },
    }

    return render(request, 'index.html', context)



# def food(request):
#     """
#     Deanwood food page
#     """
#     pass


def housing(request):
    """
    Deanwood housing page
    """
    resources = ["overview", "housing", "transport", "food", "community", "health", "future"]
    context = {
        'page_metadata': {
            'title': 'Deanwood Housing'
        },
        'component_name': 'DeanwoodHousing',
        'component_props': {
            'resources': resources,
            'addresses': [{"address": "District Normal School", "year": 1914,
                           "coordinates": ["38.9051606", "-77.0036513"]}]
        },

    }

    return render(request, 'index.html', context)

# def future(request):
#     """
#     Deanwood future page
#     """
#     pass
