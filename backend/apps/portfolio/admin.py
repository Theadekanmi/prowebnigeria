from django.contrib import admin
from .models import ProjectCategory, Project, ProjectImage, CaseStudy


@admin.register(ProjectCategory)
class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'project_count']
    prepopulated_fields = {'slug': ('name',)}
    
    def project_count(self, obj):
        return obj.projects.count()


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1


class CaseStudyInline(admin.StackedInline):
    model = CaseStudy
    extra = 0


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'client', 'category', 'is_published', 'is_featured', 'order']
    list_filter = ['is_published', 'is_featured', 'category']
    list_editable = ['is_published', 'is_featured', 'order']
    search_fields = ['title', 'client', 'description']
    prepopulated_fields = {'slug': ('title',)}
    inlines = [ProjectImageInline, CaseStudyInline]
    
    fieldsets = (
        ('Basic Info', {
            'fields': ('title', 'slug', 'client', 'category', 'description')
        }),
        ('Media', {
            'fields': ('thumbnail',)
        }),
        ('Details', {
            'fields': ('live_url', 'technologies', 'results', 'completed_at')
        }),
        ('Display', {
            'fields': ('is_published', 'is_featured', 'order')
        }),
    )


@admin.register(CaseStudy)
class CaseStudyAdmin(admin.ModelAdmin):
    list_display = ['project', 'is_published']
    list_filter = ['is_published']
