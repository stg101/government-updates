from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Comment
from .serializers import *
import json


@api_view(['GET', 'POST'])
def comments_list(request):
    if request.method == 'GET':

        authority_name = request.GET.get('name', '')
        comments = Comment.objects.all()

        if authority_name != '':
            comments = comments.filter(authority=authority_name)

        serializer = CommentSerializer(comments, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def comments_detail(request, pk):
    try:
        comment = Comment.objects.get(pk=pk)
    except Comment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CommentSerializer(
            comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['PUT'])
def comments_vote(request, pk):
    try:
        comment = Comment.objects.get(pk=pk)
    except Comment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    data = {
        "pk": pk,
        "likes": comment.likes,
        "dislikes": comment.dislikes,
        "authority": comment.authority,
        "content": comment.content
    }
    change = 0
    request_body = json.loads(request.body)
    if request_body['type'] == "up":
        change = 1
    elif request_body['type'] == "down":
        change = -1

    if request_body['vote'] == "like":
        data["likes"] += change
    elif request_body['vote'] == "dislike":
        data["dislikes"] += change

    print(data)

    serializer = CommentSerializer(comment, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
