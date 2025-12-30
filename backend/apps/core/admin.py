from django.contrib import admin
from .models import SiteSettings, ContactSubmission, Testimonial, TeamMember, FAQ, Service


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Basic Info', {'fields': ('site_name', 'tagline', 'email', 'phone', 'whatsapp', 'address')}),
        ('Social Media', {'fields': ('facebook', 'twitter', 'instagram', 'linkedin')}),
        ('SEO', {'fields': ('meta_description',)}),
    )
    
    def has_add_permission(self, request):
        return not SiteSettings.objects.exists()
    
    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'status', 'created_at']
    list_filter = ['status', 'created_at', 'project_type']
    list_editable = ['status']
    search_fields = ['name', 'email', 'subject', 'message']
    readonly_fields = ['name', 'email', 'phone', 'company', 'subject', 'message', 'budget', 'project_type', 'created_at']
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Contact Info', {'fields': ('name', 'email', 'phone', 'company')}),
        ('Message', {'fields': ('subject', 'message', 'budget', 'project_type')}),
        ('Management', {'fields': ('status', 'notes', 'created_at')}),
    )


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name', 'company', 'rating', 'is_published', 'is_featured', 'order']
    list_filter = ['is_published', 'is_featured', 'rating']
    list_editable = ['is_published', 'is_featured', 'order']
    search_fields = ['name', 'company', 'content']


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'position', 'is_published', 'order']
    list_filter = ['is_published']
    list_editable = ['is_published', 'order']
    search_fields = ['name', 'position']


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ['question', 'category', 'is_published', 'order']
    list_filter = ['is_published', 'category']
    list_editable = ['is_published', 'order']
    search_fields = ['question', 'answer']


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'starting_price', 'is_published', 'is_featured', 'order']
    list_filter = ['is_published', 'is_featured']
    list_editable = ['is_published', 'is_featured', 'order']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name', 'description']
