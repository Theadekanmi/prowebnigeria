from django.db import models


class SiteSettings(models.Model):
    """Singleton - only one instance"""
    site_name = models.CharField(max_length=100, default='ProWeb Nigeria')
    tagline = models.CharField(max_length=200, blank=True)
    email = models.EmailField(default='prowebnigeria@gmail.com')
    phone = models.CharField(max_length=20, default='08100098339')
    whatsapp = models.CharField(max_length=20, default='08100098339')
    address = models.TextField(blank=True)
    
    # Social
    facebook = models.URLField(blank=True)
    twitter = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    
    # SEO
    meta_description = models.TextField(max_length=160, blank=True)
    
    class Meta:
        verbose_name = 'Site Settings'
        verbose_name_plural = 'Site Settings'
    
    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)
    
    def __str__(self):
        return 'Site Settings'


class ContactSubmission(models.Model):
    STATUS_CHOICES = [
        ('new', 'New'),
        ('read', 'Read'),
        ('replied', 'Replied'),
        ('archived', 'Archived'),
    ]
    
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    company = models.CharField(max_length=100, blank=True)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    budget = models.CharField(max_length=50, blank=True)
    project_type = models.CharField(max_length=100, blank=True)
    
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.subject}"


class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    company = models.CharField(max_length=100, blank=True)
    position = models.CharField(max_length=100, blank=True)
    photo = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    content = models.TextField()
    rating = models.IntegerField(default=5, choices=[(i, i) for i in range(1, 6)])
    
    is_published = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['order', '-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.company}"


class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    photo = models.ImageField(upload_to='team/', blank=True, null=True)
    email = models.EmailField(blank=True)
    linkedin = models.URLField(blank=True)
    twitter = models.URLField(blank=True)
    
    is_published = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order', 'name']
    
    def __str__(self):
        return f"{self.name} - {self.position}"


class FAQ(models.Model):
    question = models.CharField(max_length=300)
    answer = models.TextField()
    category = models.CharField(max_length=100, blank=True)
    
    is_active = models.BooleanField(default=True)
    is_published = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
        verbose_name = 'FAQ'
        verbose_name_plural = 'FAQs'
    
    def __str__(self):
        return self.question[:50]


class Service(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    short_description = models.TextField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=50, blank=True, help_text='Icon class name')
    image = models.ImageField(upload_to='services/', blank=True, null=True)
    
    features_list = models.JSONField(default=list, blank=True, help_text='List of features')
    starting_price = models.CharField(max_length=50, blank=True)
    
    is_published = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.name
