import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, Clock, Users, Award } from 'lucide-react'

export const metadata = {
  title: 'Web Development Courses | ProWeb Nigeria Training',
  description: 'Learn web development in Nigeria. Professional training courses in HTML, CSS, JavaScript, React, Next.js and more. Join our classes in Lagos and Abuja.',
  keywords: ['web development courses nigeria', 'coding classes lagos', 'learn programming abuja', 'web design training']
}

export default function CoursesPage() {
  const courses = [
    {
      title: 'Web Development Fundamentals',
      duration: '8 Weeks',
      students: '50+',
      level: 'Beginner',
      topics: ['HTML & CSS', 'JavaScript Basics', 'Responsive Design', 'Git & GitHub']
    },
    {
      title: 'Advanced React & Next.js',
      duration: '12 Weeks',
      students: '30+',
      level: 'Intermediate',
      topics: ['React Components', 'State Management', 'Next.js', 'API Integration']
    },
    {
      title: 'Full Stack Development',
      duration: '16 Weeks',
      students: '20+',
      level: 'Advanced',
      topics: ['Frontend & Backend', 'Database Design', 'Authentication', 'Deployment']
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Web Development{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Courses
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Learn from industry professionals. Build real projects. Get job ready.
            </p>
            </div>
          </div>
        </section>

      <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-purple-600 text-sm font-semibold mb-2">{course.level}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <Users className="w-4 h-4" />
                      <span>{course.students} Students</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">What you will learn:</h4>
                    <ul className="space-y-1">
                      {course.topics.map((topic, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">• {topic}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                      href="/contact"
                    className="w-full block text-center py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Enroll Now
                  </Link>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start Learning Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join our next cohort and kickstart your web development career.
            </p>
            <Link
                href="/contact"
              className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            </div>
          </div>
        </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}


