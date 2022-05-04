import json
from django.shortcuts import render

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
            'addresses': [{"address": "Smith Family", "year": 2004,
                           "coordinates": ["38.903760", "-76.929470"]},
                          {"address": "Johnson Family", "year": 1987,
                           "coordinates": ["38.904480", "-76.930540"]},
                          {"address": "Dorrah Family", "year": 1990,
                           "coordinates": ["38.904440", "-76.929480"]},
                          {"address": "Correa Family", "year": 2020,
                           "coordinates": ["38.903740", "-76.929050"]},
                          {"address": "Correa Family", "year": 1983,
                           "coordinates": ["38.904490", "-76.930450"]},
                          {"address": "Correa Family", "year": 2022,
                           "coordinates": ["38.9044312", "-76.9291952"]},
                          {"address": "Correa Family", "year": 2022,
                           "coordinates": ["38.9044316", "-76.929797"]},
                          {"address": "Correa Family", "year": 2022,
                           "coordinates": ["38.900959520489025", "-76.92833968132939"]}
                          ]
        },

    }

    return render(request, 'index.html', context)

# def future(request):
#     """
#     Deanwood future page
#     """
#     pass
