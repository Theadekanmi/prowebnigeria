"""
Populate all data from frontend hardcoded content to backend database.
Run with: python manage.py populate_all_data
"""
from django.core.management.base import BaseCommand
from apps.blog.models import Category as BlogCategory, Post
from apps.portfolio.models import ProjectCategory, Project
from apps.core.models import FAQ, Service, Testimonial


class Command(BaseCommand):
    help = 'Populate database with all hardcoded frontend data'

    def handle(self, *args, **options):
        self.populate_faqs()
        self.populate_services()
        self.populate_testimonials()
        self.populate_blog_categories()
        self.populate_blog_posts()
        self.populate_project_categories()
        self.populate_projects()
        self.stdout.write(self.style.SUCCESS('All data populated successfully!'))

    def populate_faqs(self):
        faqs = [
            {
                'question': 'How much does a website cost?',
                'answer': 'Custom websites start from ₦250,000, e-commerce stores from ₦400,000. Contact us for a free quote tailored to your needs.'
            },
            {
                'question': 'How long does it take to build a website?',
                'answer': 'A basic website takes 2-3 weeks, business websites 4-6 weeks, and e-commerce platforms 6-10 weeks. Timeline depends on your requirements and content readiness.'
            },
            {
                'question': 'Do you provide website maintenance?',
                'answer': 'Yes! We offer ongoing maintenance and support packages starting from ₦70,000/month including security updates and 24/7 support.'
            },
            {
                'question': 'Can you help with SEO and digital marketing?',
                'answer': 'Absolutely! We provide comprehensive SEO services and digital marketing to help your website rank on Google and attract more customers. Our SEO packages start from ₦150,000/month.'
            },
            {
                'question': 'What payment methods do you accept?',
                'answer': 'We accept bank transfers, online payments via Paystack/Flutterwave, and can set up payment plans for larger projects. A 50% deposit is required to start.'
            },
            {
                'question': 'Will my website be mobile responsive?',
                'answer': 'Yes! All websites we build are fully responsive and work perfectly on all devices - phones, tablets, and desktops. We use mobile-first design approach.'
            },
            {
                'question': 'Do you offer hosting services?',
                'answer': 'Yes, we provide reliable hosting solutions optimized for Nigerian businesses. Our hosting includes SSL certificates, daily backups, and 99.9% uptime guarantee.'
            },
            {
                'question': 'Can you redesign my existing website?',
                'answer': 'Absolutely! We specialize in website redesigns that improve performance, user experience, and conversions. We can migrate your content and improve your SEO in the process.'
            },
        ]
        
        for i, faq_data in enumerate(faqs):
            FAQ.objects.update_or_create(
                question=faq_data['question'],
                defaults={
                    'answer': faq_data['answer'],
                    'order': i,
                    'is_active': True
                }
            )
        self.stdout.write(f'Created/updated {len(faqs)} FAQs')

    def populate_services(self):
        services = [
            {
                'name': 'Custom Website',
                'slug': 'web-design',
                'short_description': 'High-performance websites built with modern technologies like React and Next.js',
                'description': 'We build custom websites that are fast, secure, and optimized for search engines. Our modern tech stack ensures your website loads quickly and provides an excellent user experience.',
                'features_list': ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First', 'Custom CMS', 'Analytics Integration'],
                'starting_price': '₦250,000',
                'is_featured': True
            },
            {
                'name': 'E-commerce Store',
                'slug': 'ecommerce',
                'short_description': 'Complete online stores that convert visitors into customers',
                'description': 'Launch your online store with Paystack and Flutterwave payment integration. We build e-commerce platforms that are easy to manage and optimized for conversions.',
                'features_list': ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Analytics Dashboard', 'Mobile App Ready', 'Multi-currency Support'],
                'starting_price': '₦400,000',
                'is_featured': True
            },
            {
                'name': 'SEO Services',
                'slug': 'seo',
                'short_description': 'Boost your online visibility and drive targeted traffic',
                'description': 'Get found on Google with our comprehensive SEO services. We optimize your website for search engines and help you rank for keywords that matter to your business.',
                'features_list': ['Keyword Research', 'On-Page SEO', 'Content Strategy', 'Link Building', 'Local SEO', 'Monthly Reports'],
                'starting_price': '₦150,000/mo',
                'is_featured': True
            },
            {
                'name': 'Website Maintenance',
                'slug': 'maintenance',
                'short_description': '24/7 website maintenance and technical support',
                'description': 'Keep your website running smoothly with our maintenance packages. We handle updates, security, backups, and technical support so you can focus on your business.',
                'features_list': ['24/7 Support', 'Security Updates', 'Performance Monitoring', 'Backup & Recovery', 'Content Updates', 'Bug Fixes'],
                'starting_price': '₦70,000/mo',
                'is_featured': False
            },
            {
                'name': 'Mobile App Development',
                'slug': 'mobile-apps',
                'short_description': 'Native and cross-platform mobile applications',
                'description': 'Build mobile apps that your customers will love. We develop iOS and Android apps using React Native for faster development and lower costs.',
                'features_list': ['iOS & Android', 'React Native', 'Push Notifications', 'Offline Support', 'App Store Submission', 'Ongoing Support'],
                'starting_price': 'Get Quote',
                'is_featured': False
            },
            {
                'name': 'Digital Marketing',
                'slug': 'digital-marketing',
                'short_description': 'Grow your business with targeted digital marketing',
                'description': 'Reach more customers with our digital marketing services. We manage social media, Google Ads, and email marketing campaigns that drive results.',
                'features_list': ['Social Media Marketing', 'Google Ads', 'Email Marketing', 'Content Marketing', 'Analytics & Reporting', 'Strategy Consulting'],
                'starting_price': 'Get Quote',
                'is_featured': False
            },
        ]
        
        for i, service_data in enumerate(services):
            Service.objects.update_or_create(
                slug=service_data['slug'],
                defaults={
                    'name': service_data['name'],
                    'short_description': service_data['short_description'],
                    'description': service_data['description'],
                    'features_list': service_data['features_list'],
                    'starting_price': service_data['starting_price'],
                    'is_featured': service_data['is_featured'],
                    'order': i
                }
            )
        self.stdout.write(f'Created/updated {len(services)} services')

    def populate_testimonials(self):
        testimonials = [
            {
                'name': 'Adebayo Johnson',
                'company': 'TechStart Lagos',
                'position': 'CEO',
                'content': 'ProWeb Nigeria delivered an exceptional website that increased our leads by 300%. The team was professional, responsive, and delivered on time. Highly recommended!',
                'rating': 5
            },
            {
                'name': 'Chioma Okafor',
                'company': 'Fashion Hub',
                'position': 'Founder',
                'content': 'Our e-commerce store is beautiful and easy to manage. Sales have doubled since launch. The Paystack integration works flawlessly.',
                'rating': 5
            },
            {
                'name': 'Ibrahim Musa',
                'company': 'Abuja Consulting',
                'position': 'Managing Director',
                'content': 'Professional team, great communication, and they delivered on time. Our corporate website now ranks on the first page of Google. Will work with them again.',
                'rating': 5
            },
            {
                'name': 'Funmi Adeyemi',
                'company': 'Food Delivery Lagos',
                'position': 'Founder',
                'content': 'ProWeb Nigeria built us a platform that rivals international competitors. We are now the leading food delivery service in our area with thousands of daily orders.',
                'rating': 5
            },
            {
                'name': 'Dr. Olumide Adeyemi',
                'company': 'Healthcare Network',
                'position': 'Medical Director',
                'content': 'The hospital management system revolutionized our operations. We now serve patients more efficiently across all our locations. Excellent work!',
                'rating': 5
            },
            {
                'name': 'Kemi Adebola',
                'company': 'Fintech Startup',
                'position': 'CTO',
                'content': 'The mobile app exceeded our expectations. User engagement tripled within the first month of launch. Our retention rates have never been better.',
                'rating': 5
            },
        ]
        
        for i, testimonial_data in enumerate(testimonials):
            Testimonial.objects.update_or_create(
                name=testimonial_data['name'],
                company=testimonial_data['company'],
                defaults={
                    'position': testimonial_data['position'],
                    'content': testimonial_data['content'],
                    'rating': testimonial_data['rating'],
                    'is_featured': i < 3,
                    'order': i
                }
            )
        self.stdout.write(f'Created/updated {len(testimonials)} testimonials')

    def populate_blog_categories(self):
        categories = [
            'Rankings', 'SEO', 'Pricing', 'Guide', 'Comparison', 
            'E-commerce', 'Web Design', 'Digital Marketing', 'Tech Tips', 'Tech Reviews'
        ]
        for cat_name in categories:
            BlogCategory.objects.get_or_create(name=cat_name)
        self.stdout.write(f'Created {len(categories)} blog categories')

    def populate_blog_posts(self):
        posts = [
            {
                'title': 'Top 10 Best Web Designers in Nigeria 2025',
                'slug': 'top-10-best-web-designers-nigeria-2025',
                'excerpt': 'Discover the leading web design companies in Nigeria ranked by portfolio, reviews, and expertise. Find the perfect partner for your website project.',
                'category': 'Rankings',
                'read_time': 12,
                'is_featured': True,
                'is_published': True
            },
            {
                'title': 'Complete SEO Guide for Nigerian Businesses 2025',
                'slug': 'complete-seo-guide-nigerian-businesses-2025',
                'excerpt': 'Master search engine optimization with our comprehensive guide. Learn how to rank your Nigerian business on Google.',
                'category': 'SEO',
                'read_time': 15,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'How Much Does a Website Cost in Nigeria?',
                'slug': 'website-cost-nigeria-2025-pricing-guide',
                'excerpt': 'Understand website development costs in Nigeria. Complete pricing guide for different types of websites.',
                'category': 'Pricing',
                'read_time': 10,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'How to Choose a Web Designer in Nigeria',
                'slug': 'how-to-choose-web-designer-nigeria',
                'excerpt': 'Avoid scams and find the perfect web designer for your Nigerian business. Essential tips and red flags to watch for.',
                'category': 'Guide',
                'read_time': 10,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'WordPress vs Custom Website: Which is Better?',
                'slug': 'wordpress-vs-custom-website-nigeria',
                'excerpt': 'Compare WordPress and custom websites for Nigerian businesses. Pros, cons, and which one is right for you.',
                'category': 'Comparison',
                'read_time': 8,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Best Payment Gateways in Nigeria 2025',
                'slug': 'best-payment-gateways-nigeria',
                'excerpt': 'Compare Paystack, Flutterwave, and other payment gateways for Nigerian e-commerce websites.',
                'category': 'E-commerce',
                'read_time': 10,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Web Design Trends 2025',
                'slug': 'web-design-trends-2025',
                'excerpt': 'Stay ahead with the latest web design trends for 2025. Modern designs that convert visitors into customers.',
                'category': 'Web Design',
                'read_time': 8,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Digital Marketing for Nigerian SMEs',
                'slug': 'digital-marketing-nigerian-smes',
                'excerpt': 'Effective digital marketing strategies for small and medium businesses in Nigeria.',
                'category': 'Digital Marketing',
                'read_time': 12,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Best E-commerce Platforms Nigeria 2025',
                'slug': 'best-ecommerce-platforms-nigeria-2025',
                'excerpt': 'Compare the best e-commerce platforms for Nigerian businesses. Shopify, WooCommerce, and custom solutions.',
                'category': 'E-commerce',
                'read_time': 10,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Web Design Services in Lagos Nigeria',
                'slug': 'web-design-services-lagos-nigeria',
                'excerpt': 'Complete guide to web design services in Lagos. Find the best web designers for your Lagos business.',
                'category': 'Web Design',
                'read_time': 8,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Why Your Nigerian Business Needs a Professional Website',
                'slug': 'why-nigerian-business-needs-professional-website',
                'excerpt': 'Discover why having a professional website is essential for Nigerian businesses in 2025.',
                'category': 'Guide',
                'read_time': 7,
                'is_featured': False,
                'is_published': True
            },
            # Tech Tips
            {
                'title': '10 Next.js Performance Optimization Techniques',
                'slug': 'nextjs-performance-optimization-techniques',
                'excerpt': 'Learn advanced techniques to make your Next.js applications lightning fast with these proven optimization strategies.',
                'category': 'Tech Tips',
                'read_time': 8,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'JavaScript ES2024 Features You Should Know',
                'slug': 'javascript-es2024-features',
                'excerpt': 'Explore the latest JavaScript features that will improve your code quality and development experience.',
                'category': 'Tech Tips',
                'read_time': 6,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Building Secure Web Applications: A Complete Guide',
                'slug': 'building-secure-web-applications-guide',
                'excerpt': 'Comprehensive security practices every web developer should implement to protect their applications.',
                'category': 'Tech Tips',
                'read_time': 12,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'TypeScript Best Practices for Large Applications',
                'slug': 'typescript-best-practices-large-applications',
                'excerpt': 'Essential TypeScript patterns and practices for maintaining large-scale applications.',
                'category': 'Tech Tips',
                'read_time': 10,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Responsive Design with Tailwind CSS',
                'slug': 'responsive-design-tailwind-css',
                'excerpt': 'Master responsive design principles using Tailwind CSS utility classes and breakpoints.',
                'category': 'Tech Tips',
                'read_time': 7,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'API Design Best Practices for Modern Web Apps',
                'slug': 'api-design-best-practices',
                'excerpt': 'Learn how to design robust, scalable APIs that power modern web applications.',
                'category': 'Tech Tips',
                'read_time': 9,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Debugging JavaScript Like a Pro',
                'slug': 'debugging-javascript-like-pro',
                'excerpt': 'Advanced debugging techniques and tools to identify and fix JavaScript issues quickly.',
                'category': 'Tech Tips',
                'read_time': 8,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Mobile-First Development Strategy',
                'slug': 'mobile-first-development-strategy',
                'excerpt': 'Why mobile-first approach is crucial and how to implement it effectively in your projects.',
                'category': 'Tech Tips',
                'read_time': 6,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Git Workflow for Development Teams',
                'slug': 'git-workflow-development-teams',
                'excerpt': 'Establish efficient Git workflows that improve collaboration and code quality in your team.',
                'category': 'Tech Tips',
                'read_time': 11,
                'is_featured': False,
                'is_published': True
            },
            # Tech Reviews
            {
                'title': 'Next.js 14 vs React 18: Complete Comparison',
                'slug': 'nextjs-14-vs-react-18-comparison',
                'excerpt': 'Comprehensive comparison of Next.js 14 and React 18, covering performance, features, and use cases.',
                'category': 'Tech Reviews',
                'read_time': 12,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Vercel vs Netlify vs AWS: Hosting Showdown',
                'slug': 'vercel-vs-netlify-vs-aws-hosting',
                'excerpt': 'Detailed comparison of popular hosting platforms for modern web applications.',
                'category': 'Tech Reviews',
                'read_time': 10,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Tailwind CSS vs Styled Components: 2025 Review',
                'slug': 'tailwind-css-vs-styled-components-review',
                'excerpt': 'In-depth analysis of two popular CSS solutions for React applications.',
                'category': 'Tech Reviews',
                'read_time': 8,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'TypeScript vs JavaScript: When to Switch',
                'slug': 'typescript-vs-javascript-when-to-switch',
                'excerpt': 'Comprehensive guide on when and why to adopt TypeScript in your projects.',
                'category': 'Tech Reviews',
                'read_time': 9,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'Figma vs Adobe XD: Design Tool Comparison',
                'slug': 'figma-vs-adobe-xd-comparison',
                'excerpt': 'Detailed comparison of two leading design tools for web and mobile design.',
                'category': 'Tech Reviews',
                'read_time': 7,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'MongoDB vs PostgreSQL: Database Showdown',
                'slug': 'mongodb-vs-postgresql-database-showdown',
                'excerpt': 'Compare NoSQL vs SQL databases for modern web applications.',
                'category': 'Tech Reviews',
                'read_time': 11,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'VS Code Extensions: Top 20 for Web Developers',
                'slug': 'vs-code-extensions-top-20-web-developers',
                'excerpt': 'Essential VS Code extensions that will boost your productivity.',
                'category': 'Tech Reviews',
                'read_time': 6,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'React Native vs Flutter: Mobile Development',
                'slug': 'react-native-vs-flutter-mobile-development',
                'excerpt': 'Cross-platform mobile development framework comparison.',
                'category': 'Tech Reviews',
                'read_time': 13,
                'is_featured': False,
                'is_published': True
            },
            {
                'title': 'GitHub vs GitLab vs Bitbucket: Git Hosting',
                'slug': 'github-vs-gitlab-vs-bitbucket-git-hosting',
                'excerpt': 'Compare the top Git hosting platforms for your projects.',
                'category': 'Tech Reviews',
                'read_time': 8,
                'is_featured': False,
                'is_published': True
            },
        ]
        
        for post_data in posts:
            category = BlogCategory.objects.get(name=post_data['category'])
            Post.objects.update_or_create(
                slug=post_data['slug'],
                defaults={
                    'title': post_data['title'],
                    'excerpt': post_data['excerpt'],
                    'content': f"<p>{post_data['excerpt']}</p><p>Full content available on the website.</p>",
                    'category': category,
                    'read_time': post_data['read_time'],
                    'is_featured': post_data['is_featured'],
                    'is_published': post_data['is_published']
                }
            )
        self.stdout.write(f'Created/updated {len(posts)} blog posts')

    def populate_project_categories(self):
        categories = [
            'E-commerce', 'Construction', 'Freelancing', 'Hospitality',
            'Utilities & Payments', 'Metal Scrap', 'Web Development', 'Web App', 'Web Design'
        ]
        for cat_name in categories:
            ProjectCategory.objects.get_or_create(name=cat_name)
        self.stdout.write(f'Created {len(categories)} project categories')

    def populate_projects(self):
        projects = [
            {
                'title': 'UK E-commerce Store',
                'slug': 'uk-ecommerce-store',
                'category': 'E-commerce',
                'description': 'Modern online store with secure payments and inventory synchronization for smooth operations.',
                'results': '300% increase in monthly sales within 3 months',
                'technologies': ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
                'client': 'Fashion Retailer UK',
                'is_featured': True
            },
            {
                'title': 'Hitech Construction',
                'slug': 'hitech-construction',
                'category': 'Construction',
                'description': 'Infrastructure and civil works showcase with service pages, project highlights, and lead-capture CTAs.',
                'results': '800% increase in monthly leads within 3 months',
                'technologies': ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
                'client': 'Hitech Construction',
                'is_featured': True
            },
            {
                'title': 'Kata-Kara Marketplace',
                'slug': 'kata-kara-marketplace',
                'category': 'Freelancing',
                'description': 'A modern freelance marketplace connecting buyers and service providers with streamlined search and secure workflows.',
                'results': '170% increase in user signups within 3 months',
                'technologies': ['React', 'Node.js', 'MongoDB', 'Paystack'],
                'client': 'Kata-Kara Platform',
                'is_featured': True
            },
            {
                'title': 'Omnifood Web App',
                'slug': 'omnifood-web-app',
                'category': 'Hospitality',
                'description': 'Responsive food delivery experience with intuitive ordering, reservations, and optimized checkout.',
                'results': '400% increase in online orders within 3 months',
                'technologies': ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
                'client': 'Omnifood',
                'is_featured': False
            },
            {
                'title': 'Super-Jara Web App',
                'slug': 'super-jara-web-app',
                'category': 'Utilities & Payments',
                'description': 'Airtime/data top-ups, bill payments, and digital services. Fast, reliable, and affordable.',
                'results': '200% increase in transactions within 3 months',
                'technologies': ['React', 'Node.js', 'Paystack API', 'MongoDB'],
                'client': 'Super Jara',
                'is_featured': False
            },
            {
                'title': 'MetaScrap Web App',
                'slug': 'metascrap-web-app',
                'category': 'Metal Scrap',
                'description': 'Smart recycling platform that connects users with scrap buyers and nearby collection centers using AI matching.',
                'results': '100% increase in recycling connections within 3 months',
                'technologies': ['React', 'Python', 'AI/ML', 'Google Maps API'],
                'client': 'MetaScrap',
                'is_featured': False
            },
            {
                'title': 'Lagos E-commerce Store',
                'slug': 'lagos-ecommerce-store',
                'category': 'E-commerce',
                'description': 'Complete online store with payment integration and inventory management for Lagos fashion retailer.',
                'results': '500% increase in sales',
                'technologies': ['Next.js', 'Paystack', 'Tailwind CSS', 'Vercel'],
                'client': 'Fashion Store Lagos',
                'is_featured': False
            },
            {
                'title': 'Corporate Website',
                'slug': 'corporate-website',
                'category': 'Web Development',
                'description': 'Modern corporate website with CMS integration for easy content management.',
                'results': '300% more leads',
                'technologies': ['Next.js', 'React', 'Headless CMS', 'Tailwind CSS'],
                'client': 'Corporate Client',
                'is_featured': False
            },
            {
                'title': 'Healthcare Platform',
                'slug': 'healthcare-platform',
                'category': 'Web App',
                'description': 'Patient management system with appointment booking and medical records.',
                'results': '90% efficiency improvement',
                'technologies': ['React', 'Node.js', 'PostgreSQL', 'AWS'],
                'client': 'Healthcare Network',
                'is_featured': False
            },
            {
                'title': 'Restaurant Website',
                'slug': 'restaurant-website',
                'category': 'Web Design',
                'description': 'Beautiful restaurant website with online ordering and reservation system.',
                'results': '200% more orders',
                'technologies': ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
                'client': 'Restaurant Client',
                'is_featured': False
            },
        ]
        
        for i, project_data in enumerate(projects):
            category = ProjectCategory.objects.get(name=project_data['category'])
            Project.objects.update_or_create(
                slug=project_data['slug'],
                defaults={
                    'title': project_data['title'],
                    'description': project_data['description'],
                    'category': category,
                    'results': project_data['results'],
                    'technologies': project_data['technologies'],
                    'client': project_data['client'],
                    'is_featured': project_data['is_featured'],
                    'is_published': True,
                    'order': i
                }
            )
        self.stdout.write(f'Created/updated {len(projects)} projects')
