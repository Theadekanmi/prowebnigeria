from django.db import models
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(blank=True)
    
    class Meta:
        verbose_name_plural = 'Categories'
        ordering = ['name']
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    excerpt = models.TextField(max_length=300, help_text='Short description for previews')
    content = models.TextField(help_text='Full blog post content (HTML supported)')
    
    featured_image = models.ImageField(upload_to='blog/', blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='posts')
    
    # SEO
    meta_title = models.CharField(max_length=70, blank=True, help_text='SEO title (max 70 chars)')
    meta_description = models.CharField(max_length=160, blank=True, help_text='SEO description (max 160 chars)')
    keywords = models.CharField(max_length=255, blank=True, help_text='Comma-separated keywords')
    
    author = models.CharField(max_length=100, default='ProWeb Nigeria')
    read_time = models.PositiveIntegerField(default=5, help_text='Estimated read time in minutes')
    
    is_published = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_at = models.DateTimeField(blank=True, null=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        if not self.meta_title:
            self.meta_title = self.title[:70]
        if not self.meta_description:
            self.meta_description = self.excerpt[:160]
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.title
