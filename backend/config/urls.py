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
from django.urls import path

try:
    from ..app import views
except (ImportError, ModuleNotFoundError):
    from app import views

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
    path('map-micro/', views.map_micro_page),
    path('timeline-test', views.timeline_test),
    path('api/get_census_data/', views.get_census_data),
]
