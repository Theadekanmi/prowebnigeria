from django.db import models
from django.utils.text import slugify


class ProjectCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    
    class Meta:
        verbose_name_plural = 'Project Categories'
        ordering = ['name']
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    client = models.CharField(max_length=100, blank=True)
    description = models.TextField()
    
    thumbnail = models.ImageField(upload_to='portfolio/thumbnails/', blank=True, null=True)
    
    category = models.ForeignKey(ProjectCategory, on_delete=models.SET_NULL, null=True, related_name='projects')
    
    # Project details
    live_url = models.URLField(blank=True, help_text='Link to live website')
    technologies = models.JSONField(default=list, blank=True, help_text='List of technologies used')
    
    # Results/Stats
    results = models.TextField(blank=True, help_text='Key results achieved')
    
    is_published = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    
    completed_at = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['order', '-created_at']
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.title


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='portfolio/gallery/')
    caption = models.CharField(max_length=200, blank=True)
    order = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.project.title} - Image {self.order}"


class CaseStudy(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE, related_name='case_study')
    
    challenge = models.TextField(help_text='What problem did the client face?')
    solution = models.TextField(help_text='How did we solve it?')
    results = models.TextField(help_text='What were the outcomes?')
    
    # Stats
    stat_1_label = models.CharField(max_length=50, blank=True)
    stat_1_value = models.CharField(max_length=50, blank=True)
    stat_2_label = models.CharField(max_length=50, blank=True)
    stat_2_value = models.CharField(max_length=50, blank=True)
    stat_3_label = models.CharField(max_length=50, blank=True)
    stat_3_value = models.CharField(max_length=50, blank=True)
    
    testimonial = models.TextField(blank=True)
    testimonial_author = models.CharField(max_length=100, blank=True)
    testimonial_position = models.CharField(max_length=100, blank=True)
    
    is_published = models.BooleanField(default=True)
    
    class Meta:
        verbose_name_plural = 'Case Studies'
    
    def __str__(self):
        return f"Case Study: {self.project.title}"
