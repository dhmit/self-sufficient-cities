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


def health(request):
    """
    Deanwood health page
    """
    resources = ["resident_profile", "covid_data"]
    context = {
        'page_metadata': {
            'title': 'Health'
        },
        'component_name': 'DeanwoodHealth',
        'component_props': {
            'resources': resources
        },
    }

    return render(request, 'index.html', context)

def resident(request):
    """
    Deanwood health page
    """
    resources = ["resident_profile", "covid_data","health_trends"]
    context = {
        'page_metadata': {
            'title': 'Resident'
        },
        'component_name': 'DeanwoodResident',
        'component_props': {
            'resources': resources
        },
    }

    return render(request, 'index.html', context)

def covid(request):
    """
    Deanwood health page
    """
    resources = ["resident_profile", "covid_data","health_trends"]
    context = {
        'page_metadata': {
            'title': 'COVID'
        },
        'component_name': 'DeanwoodCovid',
        'component_props': {
            'resources': resources
        },
    }

    return render(request, 'index.html', context
                  )
def healthtrend(request):
    """
    Deanwood health page
    """
    resources = ["resident_profile", "covid_data","health_trends"]
    context = {
        'page_metadata': {
            'title': 'Health Trend'
        },
        'component_name': 'DeanwoodHealthtrend',
        'component_props': {
            'resources': resources
        },
    }

    return render(request, 'index.html', context)

# def community(request):
#     """
#     Deanwood community page
#     """
#     pass


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
