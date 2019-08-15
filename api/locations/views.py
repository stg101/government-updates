from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Location
from .serializers import *
import json


@api_view(['GET', 'POST'])
def locations_list(request):
    if request.method == 'GET':

        authority_name = request.GET.get('name', '')
        locations = Location.objects.all()

        if authority_name != '':
            locations = locations.filter(authority=authority_name)

        serializer = LocationSerializer(locations, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = LocationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

