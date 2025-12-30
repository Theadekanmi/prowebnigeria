from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Post
from .serializers import CategorySerializer, PostListSerializer, PostDetailSerializer


class BlogPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = None


class PostListView(generics.ListAPIView):
    serializer_class = PostListSerializer
    pagination_class = BlogPagination
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category__slug', 'is_featured']
    
    def get_queryset(self):
        return Post.objects.filter(is_published=True).select_related('category').order_by('-created_at')


class PostDetailView(generics.RetrieveAPIView):
    serializer_class = PostDetailSerializer
    lookup_field = 'slug'
    
    def get_queryset(self):
        return Post.objects.filter(is_published=True).select_related('category')


class FeaturedPostsView(generics.ListAPIView):
    serializer_class = PostListSerializer
    pagination_class = None
    
    def get_queryset(self):
        return Post.objects.filter(is_published=True, is_featured=True)[:5]
