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

def transport(request):
    """
    Deanwood transportation page
    """
    resources = ["overview", "housing", "transport", "food", "community", "health", "future"]
    context = {
        'page_metadata': {
            'title': 'Transportation in Deanwood, D.C.'
        },
        'component_name': 'DeanwoodTransport',
        'component_props': {
            'resources': resources
        },
    }

    return render(request, 'index.html', context)


# def health(request):
#     """
#     Deanwood health page
#     """
#     pass


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


# def housing(request):
#     """
#     Deanwood housing page
#     """
#     pass


# def future(request):
#     """
#     Deanwood future page
#     """
#     pass
