from django.conf.urls import url
from locations import views

from . import views

urlpatterns = [
    url(r'^$', views.locations_list),
]
