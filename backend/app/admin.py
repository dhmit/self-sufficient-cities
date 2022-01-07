"""
This file controls the administrative interface for the web app.
"""

from django.contrib import admin

models_to_register = [
]

for model in models_to_register:
    admin.site.register(model)
