from rest_framework import serializers
from .models import SiteSettings, ContactSubmission, Testimonial, TeamMember, FAQ, Service


class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = '__all__'


class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = ['name', 'email', 'phone', 'company', 'subject', 'message', 'budget', 'project_type']


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'name', 'company', 'position', 'photo', 'content', 'rating']


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'position', 'bio', 'photo', 'email', 'linkedin', 'twitter']


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer', 'category']


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'name', 'slug', 'short_description', 'description', 'icon', 'image', 'features_list', 'starting_price']
