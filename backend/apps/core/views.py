from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import SiteSettings, Testimonial, TeamMember, FAQ, Service
from .serializers import (
    SiteSettingsSerializer, ContactSubmissionSerializer,
    TestimonialSerializer, TeamMemberSerializer, FAQSerializer, ServiceSerializer
)


class SiteSettingsView(generics.RetrieveAPIView):
    serializer_class = SiteSettingsSerializer
    
    def get_object(self):
        obj, _ = SiteSettings.objects.get_or_create(pk=1)
        return obj


class ContactSubmissionCreateView(generics.CreateAPIView):
    serializer_class = ContactSubmissionSerializer
    permission_classes = [AllowAny]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response({'message': 'Thank you! We will get back to you soon.'}, status=status.HTTP_201_CREATED)


class TestimonialListView(generics.ListAPIView):
    serializer_class = TestimonialSerializer
    pagination_class = None
    
    def get_queryset(self):
        return Testimonial.objects.filter(is_published=True)


class FeaturedTestimonialsView(generics.ListAPIView):
    serializer_class = TestimonialSerializer
    pagination_class = None
    
    def get_queryset(self):
        return Testimonial.objects.filter(is_published=True, is_featured=True)[:5]


class TeamMemberListView(generics.ListAPIView):
    serializer_class = TeamMemberSerializer
    pagination_class = None
    
    def get_queryset(self):
        return TeamMember.objects.filter(is_published=True)


class FAQListView(generics.ListAPIView):
    serializer_class = FAQSerializer
    pagination_class = None
    
    def get_queryset(self):
        return FAQ.objects.filter(is_published=True)


class ServiceListView(generics.ListAPIView):
    serializer_class = ServiceSerializer
    pagination_class = None
    
    def get_queryset(self):
        return Service.objects.filter(is_published=True)


class ServiceDetailView(generics.RetrieveAPIView):
    serializer_class = ServiceSerializer
    lookup_field = 'slug'
    
    def get_queryset(self):
        return Service.objects.filter(is_published=True)
