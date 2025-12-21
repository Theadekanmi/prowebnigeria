import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Link from 'next/link';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Smartphone,
  Award,
  Target,
  ExternalLink,
  Calendar,
  MapPin
} from 'lucide-react';

export const metadata = {
  title: 'Case Studies | Real Results for Businesses',
  description: 'See how ProWeb Nigeria delivered measurable results: 500% sales increase for Lagos e-commerce, 300% user engagement for fintech, and more success stories.',
  keywords: [
    'prowebnigeria case studies',
    'web development results nigeria',
    'ecommerce success stories lagos',
    'fintech development nigeria',
    'website performance results'
  ]
};

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 'lagos-ecommerce-store',
      title: 'Lagos E-commerce Fashion Store',
      client: 'Fashion Retailer',
      industry: 'E-commerce',
      location: 'Lagos, Nigeria',
      challenge: 'Slow, non-responsive website losing sales to competitors with poor mobile experience and outdated payment integration.',
      solution: 'Custom Next.js e-commerce platform with Stripe integration, mobile-first design, and performance optimization.',
      results: {
        primary: { metric: '500%', label: 'Sales Increase', icon: TrendingUp },
        secondary: [
          { metric: '80%', label: 'Conversion Rate Improvement' },
          { metric: '3x', label: 'Page Speed Increase' },
          { metric: '95%', label: 'Mobile Performance Score' },
          { metric: '2.5s', label: 'Average Load Time' }
        ]
      },
      technologies: ['Next.js', 'React', 'Stripe', 'Tailwind CSS', 'Vercel'],
      testimonial: {
        quote: "ProWeb Nigeria completely transformed our business. The new website increased our sales by 500% in just 3 months! The mobile experience is now seamless and our customers love the fast checkout process.",
        author: "Adebayo Johnson",
        role: "CEO, Fashion Store Lagos"
      },
      timeline: '6 weeks',
      featured: true,
      completedDate: 'March 2024'
    },
    {
      id: 'nigerian-fintech-platform',
      title: 'Nigerian Fintech Mobile Platform',
      client: 'Financial Technology Startup',
      industry: 'Fintech',
      location: 'Abuja, Nigeria',
      challenge: 'Low user engagement, poor mobile experience, and complex user interface causing high abandonment rates.',
      solution: 'React Native mobile app with intuitive UI/UX design, advanced analytics, and seamless banking integration.',
      results: {
        primary: { metric: '300%', label: 'User Engagement', icon: Users },
        secondary: [
          { metric: '250%', label: 'Daily Active Users' },
          { metric: '4.8/5', label: 'App Store Rating' },
          { metric: '60%', label: 'User Retention Rate' },
          { metric: '40%', label: 'Reduced Support Tickets' }
        ]
      },
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Paystack API'],
      testimonial: {
        quote: "The mobile app exceeded our expectations. User engagement tripled within the first month of launch. Our customers now spend 3x more time in the app and our retention rates have never been better.",
        author: "Kemi Adebola",
        role: "CTO, Fintech Startup"
      },
      timeline: '8 weeks',
      featured: true,
      completedDate: 'January 2024'
    },
    {
      id: 'healthcare-management-system',
      title: 'Multi-Hospital Management System',
      client: 'Healthcare Network',
      industry: 'Healthcare',
      location: 'Nigeria-wide',
      challenge: 'Manual processes causing inefficiencies across 50+ hospitals with no centralized patient data management.',
      solution: 'Custom web application with real-time data synchronization, patient management, and analytics dashboard.',
      results: {
        primary: { metric: '50+', label: 'Hospitals Connected', icon: Award },
        secondary: [
          { metric: '70%', label: 'Time Savings in Operations' },
          { metric: '99.9%', label: 'System Uptime' },
          { metric: '100%', label: 'Data Accuracy' },
          { metric: '85%', label: 'Staff Satisfaction' }
        ]
      },
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Socket.io'],
      testimonial: {
        quote: "This system revolutionized our operations. We now serve patients more efficiently across all our locations. The real-time data sync has eliminated errors and improved patient care significantly.",
        author: "Dr. Olumide Adeyemi",
        role: "Medical Director, Hospital Network"
      },
      timeline: '12 weeks',
      featured: false,
      completedDate: 'November 2023'
    },
    {
      id: 'food-delivery-platform',
      title: 'Nigerian Food Delivery Platform',
      client: 'Food Tech Startup',
      industry: 'Food & Delivery',
      location: 'Lagos, Nigeria',
      challenge: 'Need for scalable platform to compete with international players while serving local Nigerian market needs.',
      solution: 'Full-stack web and mobile solution with real-time tracking, payment integration, and restaurant management.',
      results: {
        primary: { metric: '1000+', label: 'Daily Orders', icon: ShoppingCart },
        secondary: [
          { metric: '25min', label: 'Average Delivery Time' },
          { metric: '4.7/5', label: 'Customer Rating' },
          { metric: '200+', label: 'Partner Restaurants' },
          { metric: '15k+', label: 'Active Users' }
        ]
      },
      technologies: ['Next.js', 'React Native', 'Express.js', 'Redis', 'Google Maps API'],
      testimonial: {
        quote: "ProWeb Nigeria built us a platform that rivals international competitors. We're now the leading food delivery service in Lagos with thousands of daily orders and happy customers.",
        author: "Funmi Okafor",
        role: "Founder, Food Delivery Platform"
      },
      timeline: '10 weeks',
      featured: false,
      completedDate: 'September 2023'
    }
  ];

  const stats = [
    { number: "4", label: "Major Projects", icon: Award },
    { number: "500%", label: "Max Growth Achieved", icon: TrendingUp },
    { number: "50+", label: "Businesses Impacted", icon: Users },
    { number: "4.9/5", label: "Client Satisfaction", icon: Target }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-neutral-50 via-white to-primary-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-success-50 text-success-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              <span>Proven Results</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Real Projects,
              <span className="block gradient-text">Measurable Results</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Don't just take our word for it. See how we've helped Nigerian businesses achieve 
              extraordinary growth with our high-performance web solutions and modern technology stack.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <div className="flex items-center space-x-1 text-neutral-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{study.location}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-neutral-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{study.completedDate}</span>
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                      {study.title}
                    </h2>
                    <p className="text-lg text-neutral-600 mb-6">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-lg text-neutral-600 mb-8">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-success-50 to-primary-50 rounded-2xl p-8 mb-8">
                    <div className="text-center mb-6">
                      <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                        {study.results.primary.metric}
                      </div>
                      <div className="text-xl font-semibold text-neutral-900">
                        {study.results.primary.label}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.secondary.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-2xl font-bold text-primary-600 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-neutral-600">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-neutral-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                    <p className="text-neutral-700 italic mb-4">
                      "{study.testimonial.quote}"
                    </p>
                    <footer className="text-sm">
                      <strong className="text-neutral-900">{study.testimonial.author}</strong>
                      <span className="text-neutral-500"> — {study.testimonial.role}</span>
                    </footer>
                  </blockquote>
                </div>

                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur opacity-20"></div>
                    <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-neutral-200/50">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <study.results.primary.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-4xl font-bold gradient-text mb-2">
                          {study.results.primary.metric}
                        </div>
                        <div className="text-lg font-semibold text-neutral-900 mb-4">
                          {study.results.primary.label}
                        </div>
                        <div className="text-neutral-600 mb-6">
                          Completed in {study.timeline}
                        </div>
                        <div className="bg-neutral-50 rounded-xl p-4">
                          <div className="text-sm font-medium text-neutral-900 mb-2">
                            Project Highlights
                          </div>
                          <div className="text-xs text-neutral-600">
                            {study.industry} • {study.location} • {study.completedDate}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the businesses that have achieved extraordinary growth with our proven methodology. 
            Let's discuss how we can deliver similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-secondary btn-lg"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/services"
              className="btn-ghost btn-lg text-white border-white hover:bg-white hover:text-primary-600"
            >
              <span>View Our Services</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default CaseStudiesPage;