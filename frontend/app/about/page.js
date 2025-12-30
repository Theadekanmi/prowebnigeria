'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Target, Award, TrendingUp, CheckCircle, ArrowRight, Zap, Shield, Clock } from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const values = [
  { icon: Users, title: 'Client-Focused', description: 'We put our clients first, understanding their unique needs and delivering tailored solutions' },
  { icon: Target, title: 'Results-Driven', description: 'Every project is focused on delivering measurable business results and ROI' },
  { icon: Award, title: 'Quality Excellence', description: 'We maintain the highest standards in code quality, design, and user experience' },
  { icon: TrendingUp, title: 'Continuous Innovation', description: 'We stay ahead with the latest technologies and best practices in web development' }
]

const stats = [
  { value: '22+', label: 'Happy Clients' },
  { value: '20+', label: 'Projects Completed' },
  { value: '3+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' }
]

const whyChooseUs = [
  { icon: Zap, title: 'Modern Technologies', description: 'React, Next.js, Node.js, and cutting-edge frameworks' },
  { icon: Shield, title: 'SEO Optimized', description: 'Built-in SEO best practices from day one' },
  { icon: Clock, title: 'Fast Delivery', description: 'Quick turnaround without compromising quality' },
  { icon: Users, title: 'Dedicated Support', description: 'Ongoing maintenance and 24/7 support' }
]

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="relative px-4 sm:px-6 max-w-6xl mx-auto text-center">
          <div data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">ProWeb Nigeria</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Building high-performance web solutions that drive measurable growth for ambitious Nigerian businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Story</span>
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  ProWeb Nigeria is a leading web design and development company specializing in creating high-performance websites, e-commerce solutions, and mobile applications that help businesses achieve their digital goals and drive real revenue growth.
                </p>
                <p>
                  With over 3 years of experience and 20+ successful projects delivered, we have helped businesses across Nigeria and beyond establish a powerful online presence that converts visitors into customers.
                </p>
                <p>
                  We are proud to have helped a Lagos-based e-commerce store achieve a 500% increase in sales through strategic web development and digital marketing. We have worked with businesses ranging from ambitious startups to established enterprises across various industries including fintech, healthcare, education, real estate, and retail.
                </p>
                <p>
                  Our approach combines cutting-edge technology with deep business understanding. We do not just build websites, we build digital assets that grow with your business, scale effortlessly, and deliver exceptional user experiences across all devices.
                </p>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="ProWeb Nigeria Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/90 to-transparent p-6">
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold">3+</div>
                      <div className="text-sm text-purple-200">Years of Excellence</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">20+</div>
                      <div className="text-sm text-purple-200">Successful Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="px-4 sm:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-neutral-200/50 border border-neutral-100 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
              <p className="text-neutral-600 leading-relaxed">
                To empower businesses across Nigeria and Africa with cutting-edge digital solutions that drive growth, increase revenue, and establish a commanding online presence in an increasingly digital world.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-neutral-200/50 border border-neutral-100 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Our Vision</h3>
              <p className="text-neutral-600 leading-relaxed">
                To be recognized as the leading digital transformation partner for businesses across Africa, renowned for innovation, quality, and delivering exceptional results that exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 sm:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-aos="fade-up">Our Core Values</h2>
          <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            The principles that guide everything we do
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-xl shadow-neutral-200/50 border border-neutral-100 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{value.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Why Choose ProWeb Nigeria?</h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                We combine technical expertise with business acumen to deliver websites that not only look great but also drive real results for your business.
              </p>
              <div className="space-y-4">
                {[
                  'Modern technologies: React, Next.js, Node.js, Python',
                  'Mobile-first, fully responsive designs',
                  'SEO optimized from day one for Google rankings',
                  'Fast loading speeds optimized for Nigerian networks',
                  'Ongoing support and maintenance packages',
                  'Transparent pricing with no hidden fees'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 text-center shadow-xl shadow-neutral-200/50 border border-neutral-100 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">{stat.value}</div>
                  <div className="text-neutral-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="relative px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 sm:px-6 max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with a powerful online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transition-all"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/portfolio" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-100 text-neutral-700 font-bold rounded-xl hover:bg-neutral-200 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
