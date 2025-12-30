from django.core.management.base import BaseCommand
from apps.blog.models import Category
from apps.portfolio.models import ProjectCategory
from apps.core.models import SiteSettings, Service, FAQ


class Command(BaseCommand):
    help = 'Set up initial data for the CMS'

    def handle(self, *args, **options):
        # Blog Categories
        blog_categories = [
            ('Web Design', 'web-design', 'Articles about web design trends, tips, and best practices'),
            ('SEO', 'seo', 'Search engine optimization guides and strategies'),
            ('Digital Marketing', 'digital-marketing', 'Digital marketing tips for Nigerian businesses'),
            ('E-commerce', 'ecommerce', 'Online selling and e-commerce solutions'),
            ('Business Tips', 'business-tips', 'General business advice for entrepreneurs'),
            ('Technology', 'technology', 'Tech news and reviews'),
            ('Tutorials', 'tutorials', 'Step-by-step guides and how-tos'),
            ('Case Studies', 'case-studies', 'Real project success stories'),
        ]
        
        for name, slug, desc in blog_categories:
            Category.objects.get_or_create(
                slug=slug,
                defaults={'name': name, 'description': desc}
            )
        self.stdout.write(self.style.SUCCESS(f'Created {len(blog_categories)} blog categories'))

        # Portfolio Categories
        portfolio_categories = [
            ('Web Design', 'web-design'),
            ('E-commerce', 'ecommerce'),
            ('Web Application', 'web-application'),
            ('Landing Page', 'landing-page'),
            ('Corporate Website', 'corporate-website'),
            ('Blog/Magazine', 'blog-magazine'),
        ]
        
        for name, slug in portfolio_categories:
            ProjectCategory.objects.get_or_create(
                slug=slug,
                defaults={'name': name}
            )
        self.stdout.write(self.style.SUCCESS(f'Created {len(portfolio_categories)} portfolio categories'))

        # Site Settings
        SiteSettings.objects.get_or_create(
            pk=1,
            defaults={
                'site_name': 'ProWeb Nigeria',
                'tagline': 'Professional Web Design & Development',
                'email': 'prowebnigeria@gmail.com',
                'phone': '08100098339',
                'whatsapp': '08100098339',
                'address': 'Lagos, Nigeria',
                'meta_description': 'Top web design company in Nigeria. We build fast, mobile-friendly websites that drive sales.',
            }
        )
        self.stdout.write(self.style.SUCCESS('Created site settings'))

        # Services
        services = [
            ('Web Design', 'web-design', 'Custom website design', 'Beautiful, responsive websites tailored to your brand and business goals.', '₦150,000'),
            ('E-commerce Development', 'ecommerce', 'Online store solutions', 'Full-featured online stores with Paystack/Flutterwave payment integration.', '₦300,000'),
            ('SEO Services', 'seo', 'Search engine optimization', 'Rank higher on Google and drive organic traffic to your business.', '₦50,000/month'),
            ('Website Maintenance', 'maintenance', 'Ongoing support', 'Keep your website secure, updated, and running smoothly.', '₦20,000/month'),
            ('Digital Marketing', 'digital-marketing', 'Online marketing', 'Social media marketing, Google Ads, and content marketing strategies.', '₦80,000/month'),
        ]
        
        for name, slug, short_desc, desc, price in services:
            Service.objects.get_or_create(
                slug=slug,
                defaults={
                    'name': name,
                    'short_description': short_desc,
                    'description': desc,
                    'starting_price': price,
                    'is_published': True,
                }
            )
        self.stdout.write(self.style.SUCCESS(f'Created {len(services)} services'))

        # FAQs
        faqs = [
            ('How much does a website cost?', 'Website costs vary based on complexity. Basic websites start from ₦150,000, while e-commerce sites start from ₦300,000. Contact us for a custom quote.', 'Pricing'),
            ('How long does it take to build a website?', 'A basic website takes 1-2 weeks. E-commerce sites take 2-4 weeks. Complex web applications may take 4-8 weeks.', 'Timeline'),
            ('Do you offer website maintenance?', 'Yes! We offer monthly maintenance packages starting from ₦20,000/month which includes updates, backups, and security monitoring.', 'Services'),
            ('Can you help with SEO?', 'Absolutely! All our websites are built with SEO best practices. We also offer dedicated SEO services to help you rank higher on Google.', 'Services'),
            ('What payment methods do you accept?', 'We accept bank transfers, Paystack, and Flutterwave payments. We typically require 50% upfront and 50% on completion.', 'Pricing'),
            ('Do you redesign existing websites?', 'Yes, we specialize in website redesigns. We can modernize your existing site while preserving your content and SEO rankings.', 'Services'),
        ]
        
        for i, (question, answer, category) in enumerate(faqs):
            FAQ.objects.get_or_create(
                question=question,
                defaults={
                    'answer': answer,
                    'category': category,
                    'is_published': True,
                    'order': i,
                }
            )
        self.stdout.write(self.style.SUCCESS(f'Created {len(faqs)} FAQs'))

        self.stdout.write(self.style.SUCCESS('✅ Initial data setup complete!'))
