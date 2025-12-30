from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.ProjectCategoryListView.as_view(), name='project-category-list'),
    path('projects/', views.ProjectListView.as_view(), name='project-list'),
    path('projects/featured/', views.FeaturedProjectsView.as_view(), name='project-featured'),
    path('projects/<slug:slug>/', views.ProjectDetailView.as_view(), name='project-detail'),
]
