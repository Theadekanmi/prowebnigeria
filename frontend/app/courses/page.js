import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { ArrowRight, Clock, Users } from 'lucide-react'

export const metadata = {
  title: 'Web Development Courses Nigeria | Learn Coding',
  description: 'Learn web development in Nigeria. Professional training courses in HTML, CSS, JavaScript, React, Next.js and more.',
  alternates: { canonical: '/courses' }
}

const courses = [
  { title: 'Web Development Fundamentals', duration: '8 Weeks', students: '50+', level: 'Beginner', topics: ['HTML & CSS', 'JavaScript Basics', 'Responsive Design', 'Git & GitHub'] },
  { title: 'Advanced React & Next.js', duration: '12 Weeks', students: '30+', level: 'Intermediate', topics: ['React Components', 'State Management', 'Next.js', 'API Integration'] },
  { title: 'Full Stack Development', duration: '16 Weeks', students: '20+', level: 'Advanced', topics: ['Frontend & Backend', 'Database Design', 'Authentication', 'Deployment'] }
]

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-purple-600 font-medium mb-3">Learn</p>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Web Development Courses</h1>
            <p className="text-xl text-neutral-600">Learn from industry professionals. Build real projects. Get job ready.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-purple-300 transition-all duration-300" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div className="text-purple-600 text-sm font-semibold mb-2">{course.level}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{course.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-neutral-600 text-sm"><Clock className="w-4 h-4" /><span>{course.duration}</span></div>
                  <div className="flex items-center space-x-2 text-neutral-600 text-sm"><Users className="w-4 h-4" /><span>{course.students} Students</span></div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 mb-2 text-sm">What you will learn:</h4>
                  <ul className="space-y-1">{course.topics.map((topic, idx) => <li key={idx} className="text-neutral-600 text-sm">• {topic}</li>)}</ul>
                </div>
                <Link href="/contact" className="w-full block text-center py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all">Enroll Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Learning Today</h2>
            <p className="text-neutral-400 mb-8">Join our next cohort and kickstart your web development career.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">Enroll Now <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
