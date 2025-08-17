import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { BookOpen, Users, Clock, Star, Play, Code, Palette, Search, Database, Shield, GraduationCap } from 'lucide-react';

export default function CoursesPage() {
  const courses = [
    {
      title: 'Web Design Fundamentals',
      category: 'Design',
      level: 'Beginner',
      duration: '8 weeks',
             price: 'Custom pricing',
      rating: 4.8,
             students: 'Active',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      description: 'Learn the fundamentals of modern web design including UI/UX principles, color theory, and responsive design.',
      modules: [
        'Introduction to Web Design',
        'UI/UX Principles',
        'Color Theory & Typography',
        'Responsive Design',
        'Design Tools & Software',
        'Project: Portfolio Website',
        'Design Systems',
        'Final Project & Review'
      ],
      outcomes: [
        'Create professional website designs',
        'Understand user experience principles',
        'Master responsive design techniques',
        'Build a complete portfolio project'
      ]
    },
    {
      title: 'Frontend Development with React',
      category: 'Development',
      level: 'Intermediate',
      duration: '12 weeks',
             price: 'Custom pricing',
      rating: 4.9,
             students: 'Active',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      description: 'Master modern frontend development using React, Next.js, and modern JavaScript frameworks.',
      modules: [
        'JavaScript Fundamentals',
        'React Basics & Components',
        'State Management',
        'Routing & Navigation',
        'API Integration',
        'Next.js Framework',
        'Performance Optimization',
        'Testing & Deployment',
        'Advanced Patterns',
        'Project: E-commerce App',
        'Best Practices',
        'Final Project'
      ],
      outcomes: [
        'Build modern React applications',
        'Implement state management solutions',
        'Create responsive user interfaces',
        'Deploy production-ready apps'
      ]
    },
    {
      title: 'Backend Development with Django',
      category: 'Development',
      level: 'Intermediate',
      duration: '10 weeks',
             price: 'Custom pricing',
      rating: 4.7,
             students: 'Active',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      description: 'Learn backend development using Python and Django framework for building robust web applications.',
      modules: [
        'Python Fundamentals',
        'Django Framework Basics',
        'Models & Database Design',
        'Views & Templates',
        'User Authentication',
        'API Development',
        'Testing & Debugging',
        'Security Best Practices',
        'Deployment & Hosting',
        'Project: Blog Platform',
        'Performance Optimization',
        'Final Project'
      ],
      outcomes: [
        'Build Django web applications',
        'Design database schemas',
        'Implement REST APIs',
        'Deploy secure applications'
      ]
    },
    {
      title: 'SEO & Digital Marketing',
      category: 'Marketing',
      level: 'Beginner',
      duration: '6 weeks',
             price: 'Custom pricing',
      rating: 4.6,
             students: 'Active',
      icon: Search,
      color: 'from-orange-500 to-red-500',
      description: 'Master search engine optimization and digital marketing strategies to grow your online presence.',
      modules: [
        'SEO Fundamentals',
        'Keyword Research',
        'On-Page Optimization',
        'Technical SEO',
        'Content Marketing',
        'Link Building',
        'Analytics & Reporting',
        'Local SEO',
        'E-commerce SEO',
        'Project: SEO Audit',
        'Digital Marketing Basics',
        'Final Project'
      ],
      outcomes: [
        'Optimize websites for search engines',
        'Create effective content strategies',
        'Analyze and improve performance',
        'Implement digital marketing campaigns'
      ]
    },
    {
      title: 'Web Security & Best Practices',
      category: 'Security',
      level: 'Advanced',
      duration: '8 weeks',
             price: 'Custom pricing',
      rating: 4.9,
             students: 'Active',
      icon: Shield,
      color: 'from-red-500 to-red-700',
      description: 'Learn advanced web security techniques and best practices to protect your applications.',
      modules: [
        'Security Fundamentals',
        'Authentication & Authorization',
        'Input Validation & Sanitization',
        'SQL Injection Prevention',
        'XSS & CSRF Protection',
        'Secure API Development',
        'HTTPS & SSL/TLS',
        'Security Headers',
        'Penetration Testing',
        'Incident Response',
        'Compliance & Regulations',
        'Final Security Audit'
      ],
      outcomes: [
        'Implement security best practices',
        'Protect against common attacks',
        'Conduct security audits',
        'Handle security incidents'
      ]
    },
    {
      title: 'Full-Stack Web Development',
      category: 'Development',
      level: 'Advanced',
      duration: '16 weeks',
             price: 'Custom pricing',
      rating: 4.8,
             students: 'Active',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-600',
      description: 'Comprehensive course covering both frontend and backend development for complete web applications.',
      modules: [
        'Frontend Fundamentals',
        'Backend Development',
        'Database Design',
        'API Development',
        'Authentication Systems',
        'State Management',
        'Testing Strategies',
        'Performance Optimization',
        'DevOps & Deployment',
        'Project: Full-Stack App',
        'Advanced Patterns',
        'Final Capstone Project'
      ],
      outcomes: [
        'Build complete web applications',
        'Master full-stack development',
        'Deploy production applications',
        'Work with modern tech stacks'
      ]
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn Web Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the skills you need to build modern websites and applications. 
              Expert-led courses with hands-on projects and real-world experience.
            </p>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Course Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of courses designed to take you from beginner to expert.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Development</h3>
                <p className="text-gray-600">Frontend, backend, and full-stack development courses</p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600">UI/UX design and web design fundamentals</p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing</h3>
                <p className="text-gray-600">SEO, digital marketing, and growth strategies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Available Courses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our comprehensive course catalog and find the perfect learning path for your goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {courses.map((course, index) => (
                <div 
                  key={course.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center`}>
                      <course.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-2">
                        {renderStars(course.rating)}
                      </div>
                      <span className="text-sm text-gray-500">{course.rating}/5</span>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                        {course.category}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                        {course.level}
                      </span>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                                                 <span>{course.students} learners</span>
                      </div>
                    </div>
                  </div>

                  {/* Modules Preview */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Course Modules:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {course.modules.slice(0, 6).map((module, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Play className="w-3 h-3 text-blue-500" />
                          <span className="truncate">{module}</span>
                        </div>
                      ))}
                    </div>
                    {course.modules.length > 6 && (
                      <p className="text-sm text-gray-500 mt-2">
                        +{course.modules.length - 6} more modules
                      </p>
                    )}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">{course.price}</div>
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Learn With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our courses are designed to provide you with practical skills and real-world experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Instructors</h3>
                <p className="text-gray-600">Learn from industry professionals with years of experience</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hands-on Projects</h3>
                <p className="text-gray-600">Build real projects to apply what you learn</p>
              </div>

              <div className="text-center">
                                 <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                   <GraduationCap className="w-8 h-8 text-white" />
                 </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Certification</h3>
                <p className="text-gray-600">Earn certificates to showcase your skills</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Learning</h3>
                <p className="text-gray-600">Study at your own pace with lifetime access</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our courses. 
              Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-600/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Browse Courses
              </a>
              <a
                href="https://wa.me/08100098339"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-400 font-bold text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
