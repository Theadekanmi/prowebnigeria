from django.urls import path
from . import views

urlpatterns = [
    path('settings/', views.SiteSettingsView.as_view(), name='site-settings'),
    path('contact/', views.ContactSubmissionCreateView.as_view(), name='contact-submit'),
    path('testimonials/', views.TestimonialListView.as_view(), name='testimonial-list'),
    path('testimonials/featured/', views.FeaturedTestimonialsView.as_view(), name='testimonial-featured'),
    path('team/', views.TeamMemberListView.as_view(), name='team-list'),
    path('faqs/', views.FAQListView.as_view(), name='faq-list'),
    path('services/', views.ServiceListView.as_view(), name='service-list'),
    path('services/<slug:slug>/', views.ServiceDetailView.as_view(), name='service-detail'),
]
