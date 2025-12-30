import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Image from 'next/image'
import { Users, Target, Award, TrendingUp, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'About ProWeb Nigeria | Web Design Company',
  description: 'Learn about ProWeb Nigeria - a leading web design company in Nigeria. We build high-performance websites for businesses in Lagos, Abuja, and nationwide.',
  alternates: { canonical: '/about' }
}

const values = [
  { icon: Users, title: 'Client-Focused', description: 'We put our clients first, understanding their unique needs' },
  { icon: Target, title: 'Results-Driven', description: 'Every project focuses on delivering measurable results' },
  { icon: Award, title: 'Quality Excellence', description: 'Highest standards in code quality and design' },
  { icon: TrendingUp, title: 'Innovation', description: 'Latest technologies and best practices' }
]

const stats = [
  { value: '22+', label: 'Happy Clients' },
  { value: '20+', label: 'Projects' },
  { value: '3+', label: 'Years' },
  { value: '24/7', label: 'Support' }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="px-4 sm:px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">ProWeb Nigeria</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
            Building high-performance web solutions that drive measurable growth for ambitious Nigerian businesses.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 bg-white">
        <div className="px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Story</span>
              </h2>
              <div className="space-y-3 text-neutral-600 text-sm md:text-base">
                <p>ProWeb Nigeria is a leading web design and development company specializing in high-performance websites, e-commerce solutions, and mobile applications.</p>
                <p>With over 3 years of experience and 20+ successful projects, we help businesses across Nigeria establish a powerful online presence.</p>
                <p>We helped a Lagos-based e-commerce store achieve a 500% increase in sales through strategic web development and digital marketing.</p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 40px rgba(147, 51, 234, 0.15)' }}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="ProWeb Nigeria Team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/90 to-transparent p-4">
                <div className="grid grid-cols-2 gap-4 text-white text-center">
                  <div>
                    <div className="text-2xl font-bold">3+</div>
                    <div className="text-xs text-purple-200">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-xs text-purple-200">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-neutral-50">
        <div className="px-4 sm:px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 md:p-6 border border-neutral-200">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Our Mission</h3>
              <p className="text-neutral-600 text-sm">
                To empower businesses across Nigeria and Africa with cutting-edge digital solutions that drive growth and establish a commanding online presence.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 md:p-6 border border-neutral-200">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Our Vision</h3>
              <p className="text-neutral-600 text-sm">
                To be recognized as the leading digital transformation partner for businesses across Africa, renowned for innovation and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-20 bg-white">
        <div className="px-4 sm:px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-neutral-200">
                <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <value.icon className="w-4 h-4 text-purple-600" />
                </div>
                <h3 className="text-sm font-bold text-neutral-900 mb-1">{value.title}</h3>
                <p className="text-neutral-600 text-xs">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-neutral-50">
        <div className="px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Why Choose Us?</h2>
              <div className="space-y-3">
                {[
                  'Modern tech: React, Next.js, Node.js',
                  'Mobile-first, responsive designs',
                  'SEO optimized from day one',
                  'Fast loading on Nigerian networks',
                  'Ongoing support & maintenance',
                  'Transparent pricing'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center border border-neutral-200">
                  <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
                  <div className="text-neutral-600 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-10 md:py-14 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-purple-200 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
