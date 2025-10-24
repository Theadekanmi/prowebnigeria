'use client'

import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Counter from '../components/Counter'
import { Users, Target, Award, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'We put our clients first, understanding their unique needs and delivering tailored solutions'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every project is focused on delivering measurable business results and ROI'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in code quality, design, and user experience'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We stay ahead with the latest technologies and best practices in web development'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                ProWeb Nigeria
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Building high-performance web solutions that drive measurable growth for ambitious Nigerian businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Story</span>
                  </h2>
                  <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                    <p>
                      ProWeb Nigeria is a leading web design and development company specializing in creating 
                      high-performance websites, e-commerce solutions, and mobile applications that help businesses 
                      achieve their digital goals and drive real revenue growth.
                    </p>
                    <p>
                      With over 3 years of experience and 20+ successful projects delivered, we have helped businesses 
                      across Nigeria and beyond establish a powerful online presence that converts visitors into customers. 
                      Our team of expert developers, designers, and digital marketers work together to deliver solutions 
                      that do not just look beautiful, they drive measurable business results.
                    </p>
                    <p>
                      We are proud to have helped a Lagos-based e-commerce store achieve a 500% increase in sales through 
                      strategic web development and digital marketing. We have worked with businesses ranging from ambitious 
                      startups to established enterprises across various industries including fintech, healthcare, education, 
                      real estate, and retail.
                    </p>
                    <p>
                      Our approach combines cutting-edge technology with deep business understanding. We do not just build 
                      websites, we build digital assets that grow with your business, scale effortlessly, and deliver 
                      exceptional user experiences across all devices.
                    </p>
                    <p className="font-semibold text-gray-900">
                      Whether you need a stunning corporate website, a robust e-commerce platform, or a custom web application, 
                      we have the expertise and passion to bring your vision to life and exceed your expectations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="relative h-[600px] md:h-[700px]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl transform rotate-3"></div>
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-pink-900/90 z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Team collaboration and web development"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-8 text-center">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                      <h3 className="text-4xl md:text-5xl font-bold mb-4">3+</h3>
                      <p className="text-xl mb-6">Years of Excellence</p>
                      <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
                      <h3 className="text-4xl md:text-5xl font-bold mb-4">20+</h3>
                      <p className="text-xl mb-6">Successful Projects</p>
                      <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
                      <h3 className="text-4xl md:text-5xl font-bold mb-4">22+</h3>
                      <p className="text-xl">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission & <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Vision</span>
              </h2>
              <p className="text-xl text-gray-600">
                Driving digital transformation across Africa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl m-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To empower businesses across Nigeria and Africa with cutting-edge digital solutions that drive 
                    exponential growth, enhance customer engagement, and establish a commanding online presence in 
                    the digital marketplace. We are committed to delivering innovative web solutions that transform 
                    how businesses connect with their customers and achieve their goals.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-600 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl m-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be recognized as the leading digital transformation partner for businesses across Africa, 
                    renowned for innovation, uncompromising quality, and exceptional customer service. We envision 
                    a future where every business, regardless of size, has access to world-class digital solutions 
                    that enable them to compete globally and thrive in the digital economy.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Why Businesses Choose Us
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Proven Expertise</h4>
                  <p className="text-gray-600">
                    3+ years delivering high-performance solutions with measurable results
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Client-Centric Approach</h4>
                  <p className="text-gray-600">
                    22+ happy clients who trust us with their digital presence
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Real Results</h4>
                  <p className="text-gray-600">
                    Delivered 500% sales increase for clients through strategic solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter end={22} suffix="+" />
                </div>
                <div className="text-white/90">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter end={20} suffix="+" />
                </div>
                <div className="text-white/90">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter end={3} />
                </div>
                <div className="text-white/90">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-white/90">Support Available</div>
              </div>
            </div>
          </div>
      </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
