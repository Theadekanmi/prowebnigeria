from django.contrib import admin
from .models import Category, Post


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'post_count']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name']
    
    def post_count(self, obj):
        return obj.posts.count()
    post_count.short_description = 'Posts'


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'author', 'is_published', 'is_featured', 'created_at']
    list_filter = ['is_published', 'is_featured', 'category', 'created_at']
    list_editable = ['is_published', 'is_featured']
    search_fields = ['title', 'content', 'excerpt']
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Content', {
            'fields': ('title', 'slug', 'excerpt', 'content', 'featured_image')
        }),
        ('Categorization', {
            'fields': ('category', 'author', 'read_time')
        }),
        ('SEO', {
            'fields': ('meta_title', 'meta_description', 'keywords'),
            'classes': ('collapse',)
        }),
        ('Publishing', {
            'fields': ('is_published', 'is_featured', 'published_at')
        }),
    )
