from django.conf.urls import url
from comments import views

from . import views

urlpatterns = [
    url(r'^$', views.comments_list),
    url(r'^(?P<pk>[0-9]+)$', views.comments_detail),
    url(r'^(?P<pk>[0-9]+)/vote/$', views.comments_vote),
]
