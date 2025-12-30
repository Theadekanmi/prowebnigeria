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

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
          {/* Hero Section with Purple Gradient */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">ProWeb Nigeria</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto px-2">
              Building high-performance web solutions that drive measurable growth for ambitious Nigerian businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Story</span>
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed text-sm md:text-base">
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
            
            <div className="relative" data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 25px 50px rgba(147, 51, 234, 0.15)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="ProWeb Nigeria Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                {/* Stats Overlay */}
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
      <section className="py-12 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Our Mission & Vision</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200" data-aos="fade-up" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <Target className="w-6 h-6 md:w-7 md:h-7 text-purple-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 md:mb-4">Our Mission</h3>
                <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                  To empower businesses across Nigeria and Africa with cutting-edge digital solutions that drive exponential growth, enhance customer engagement, and establish a commanding online presence in the digital marketplace.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200" data-aos="fade-up" data-aos-delay="100" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-purple-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 md:mb-4">Our Vision</h3>
                <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                  To be recognized as the leading digital transformation partner for businesses across Africa, renowned for innovation, uncompromising quality, and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-4 md:p-6 border border-neutral-200" 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <value.icon className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-neutral-900 mb-2">{value.title}</h3>
                  <p className="text-neutral-600 text-xs md:text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div data-aos="fade-right">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 md:mb-6">Why Choose ProWeb Nigeria?</h2>
                <div className="space-y-4">
                  {[
                    'Modern tech stack: React, Next.js, Node.js',
                    'Mobile-first, responsive designs',
                    'SEO optimized from day one',
                    'Fast loading speeds on Nigerian networks',
                    'Ongoing support and maintenance',
                    'Transparent pricing, no hidden fees'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4" data-aos="fade-left">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-4 md:p-6 text-center border border-neutral-200"
                    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">{stat.value}</div>
                    <div className="text-neutral-600 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">{stat.value}</div>
                <div className="text-purple-200 text-sm md:text-base">{stat.label}</div>
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
