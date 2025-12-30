from rest_framework import serializers
from .models import ProjectCategory, Project, ProjectImage, CaseStudy


class ProjectCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCategory
        fields = ['id', 'name', 'slug']


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image', 'caption', 'order']


class CaseStudySerializer(serializers.ModelSerializer):
    class Meta:
        model = CaseStudy
        fields = [
            'challenge', 'solution', 'results',
            'stat_1_label', 'stat_1_value',
            'stat_2_label', 'stat_2_value',
            'stat_3_label', 'stat_3_value',
            'testimonial', 'testimonial_author', 'testimonial_position'
        ]


class ProjectListSerializer(serializers.ModelSerializer):
    category = ProjectCategorySerializer(read_only=True)
    
    class Meta:
        model = Project
        fields = [
            'id', 'title', 'slug', 'client', 'description', 'thumbnail',
            'category', 'technologies', 'results', 'live_url', 'is_featured', 'completed_at'
        ]


class ProjectDetailSerializer(serializers.ModelSerializer):
    category = ProjectCategorySerializer(read_only=True)
    images = ProjectImageSerializer(many=True, read_only=True)
    case_study = CaseStudySerializer(read_only=True)
    
    class Meta:
        model = Project
        fields = [
            'id', 'title', 'slug', 'client', 'description', 'thumbnail',
            'category', 'live_url', 'technologies', 'results',
            'is_featured', 'completed_at', 'images', 'case_study'
        ]
