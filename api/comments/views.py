from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Comment
from .serializers import *


@api_view(['GET', 'POST'])
def customers_list(request):
    if request.method == 'GET':

        authority_name = request.GET.get('name', '')
        comments = Comment.objects.all()

        if authority_name != '':
            comments = comments.filter(authority=authority_name)

        serializer = CommentSerializer(
            comments, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
