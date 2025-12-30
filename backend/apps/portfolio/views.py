from rest_framework import generics
from .models import ProjectCategory, Project
from .serializers import ProjectCategorySerializer, ProjectListSerializer, ProjectDetailSerializer


class ProjectCategoryListView(generics.ListAPIView):
    queryset = ProjectCategory.objects.all()
    serializer_class = ProjectCategorySerializer
    pagination_class = None


class ProjectListView(generics.ListAPIView):
    serializer_class = ProjectListSerializer
    filterset_fields = ['category__slug', 'is_featured']
    
    def get_queryset(self):
        return Project.objects.filter(is_published=True).select_related('category')


class ProjectDetailView(generics.RetrieveAPIView):
    serializer_class = ProjectDetailSerializer
    lookup_field = 'slug'
    
    def get_queryset(self):
        return Project.objects.filter(is_published=True).prefetch_related('images')


class FeaturedProjectsView(generics.ListAPIView):
    serializer_class = ProjectListSerializer
    pagination_class = None
    
    def get_queryset(self):
        return Project.objects.filter(is_published=True, is_featured=True)[:6]
