from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('posts/', views.PostListView.as_view(), name='post-list'),
    path('posts/featured/', views.FeaturedPostsView.as_view(), name='post-featured'),
    path('posts/<slug:slug>/', views.PostDetailView.as_view(), name='post-detail'),
]
