from rest_framework import serializers
from .models import Location


class LocationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Location
        fields = ('name', 'authority', 'scope',
                  'parent', 'created_on', "url_base")
