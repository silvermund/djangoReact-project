from rest_framework import serializers
from .models import

class BoardSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField()
    code = serializers.CharField()
    linenos = serializers.BooleanField()
    language = serializers.ChoiceField()
    style = serializers.ChoiceField()
