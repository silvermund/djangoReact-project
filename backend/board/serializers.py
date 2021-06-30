from rest_framework import serializers
from .models import Post

class BoardSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    content = serializers.CharField()
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)
    def create(self, validated_data):
        return Post.objects.create(**validated_data)