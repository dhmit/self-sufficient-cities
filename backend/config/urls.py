"""
URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URL configuration
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.urlpatterns import format_suffix_patterns

try:
    from ..app import views
    from ..app import views_deanwood
except (ImportError, ModuleNotFoundError):
    from app import views
    from app import views_deanwood


urlpatterns = [
    # Django admin page
    path('admin/', admin.site.urls),
    # API endpoints
    path('', views.index),
    path('example/', views.example),
    path('example/<example_id>', views.example),
    path('map/', views.map_page),
    path('timeline/', views.timeline_page, name='timeline'),
    path('map-macro/', views.map_macro_page),
    path('map-legend/', views.map_legend_page),
    path('map-micro/', views.map_micro_page),
    path('timeline-test', views.timeline_test),
    path('map-consolidated/', views.map_consolidated),
    path('census-charts/', views.census_charts),

    # DEANWOOD
    path('deanwood/', views_deanwood.overview),
    # path('deanwood/transportation', views_deanwood.transport),
    # path('deanwood/health', views_deanwood.health),
    path('deanwood/community', views_deanwood.community),
    # path('deanwood/food', views_deanwood.food),
    # path('deanwood/housing', views_deanwood.housing),
    # path('deanwood/future', views_deanwood.future)
]

api_urls = [
    path('api/people/<int:person_id>', views.person, name="api_person"),
    path('api/people', views.people, name="api_people"),
    path('api/events/<int:event_id>', views.event, name="api_event"),
    path('api/events/<int:event_id>/people', views.people_in_event, name="api_people_in_event"),
    path('api/events/<int:event_id>/locations', views.locations_in_event,
         name="api_locations_in_event"),
    path('api/events', views.events, name="api_events"),
    path('api/locations/<int:location_id>', views.location, name="api_location"),
    path('api/locations', views.locations, name="api_locations"),
    path('api/get_census_data/', views.get_census_data),
    path('api/get_addresses/', views.get_addresses),
    path('api/get_latlon/<address_str>', views.get_latlon),
    path('api/get_latlon/', views.get_all_latlon),
    path('api/get_address_data/', views.get_address_data),
    path('api/get_legend_testing/', views.get_legend_testing),
    path('api/documents/', views.get_documents_data),
    path('api/get_table_data/<str:table_name>', views.get_table_data),
]

api_urls = format_suffix_patterns(api_urls, allowed=['json', 'html'])

# API/swagger helper
schema_view = get_schema_view(
    openapi.Info(
        title="Self-Sustainable Cities",
        default_version='v1',
        description="API",
        terms_of_service="",
    ),
    public=True,
)

swagger_urls = [
    re_path(r'^api/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc')
]

# Adding it all together
urlpatterns = urlpatterns + api_urls + swagger_urls
