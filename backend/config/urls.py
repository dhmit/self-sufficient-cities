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
except (ImportError, ModuleNotFoundError):
    from app import views

urlpatterns = [
    # Django admin page
    path('admin/', admin.site.urls),
    # API endpoints
    path('', views.index),
    path('meme_page/', views.meme_page),
    path('generate/', views.generate_meme),
]

api_urls = [
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
    re_path('api/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc')
]

# Adding it all together
urlpatterns = urlpatterns + api_urls + swagger_urls
