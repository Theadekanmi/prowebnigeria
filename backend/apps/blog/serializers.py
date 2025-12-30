from rest_framework import serializers
from .models import Category, Post


class CategorySerializer(serializers.ModelSerializer):
    post_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'post_count']
    
    def get_post_count(self, obj):
        return obj.posts.filter(is_published=True).count()


class PostListSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    
    class Meta:
        model = Post
        fields = [
            'id', 'title', 'slug', 'excerpt', 'featured_image',
            'category', 'author', 'read_time', 'is_featured', 'created_at'
        ]


class PostDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    
    class Meta:
        model = Post
        fields = [
            'id', 'title', 'slug', 'excerpt', 'content', 'featured_image',
            'category', 'author', 'read_time', 'is_featured',
            'meta_title', 'meta_description', 'keywords',
            'created_at', 'updated_at', 'published_at'
        ]
