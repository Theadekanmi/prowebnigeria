import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import Link from 'next/link'
import { Users, TrendingUp, Target, BarChart3, Globe, Mail, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Advertise With Us | Marketing Opportunities',
  description: 'Reach our engaged audience of tech professionals and business owners. Promote your brand through banner ads, sponsored content, and strategic partnerships.',
  alternates: { canonical: '/advertise' }
}

const advertisingOptions = [
  { name: 'Banner Ads', description: 'Prominent display advertising on our high-traffic pages', icon: Target, features: ['Above-the-fold placement', 'Responsive design', 'Click-through tracking', 'A/B testing options'] },
  { name: 'Sponsored Content', description: 'Native advertising that integrates seamlessly with our content', icon: TrendingUp, features: ['Content creation included', 'SEO optimization', 'Social media promotion', 'Performance analytics'] },
  { name: 'Newsletter Ads', description: 'Direct access to our engaged subscriber base', icon: Mail, features: ['Weekly newsletter placement', 'High engagement rates', 'Detailed analytics', 'Targeted audience'] },
  { name: 'Partnerships', description: 'Strategic collaborations for mutual growth', icon: Users, features: ['Co-branded content', 'Cross-promotion opportunities', 'Event collaborations', 'Long-term relationships'] }
]

const audienceStats = [
  { metric: 'Growing', label: 'Monthly Visitors', icon: Users },
  { metric: 'Active', label: 'Newsletter Subscribers', icon: Mail },
  { metric: 'Professional', label: 'Tech Audience', icon: Target },
  { metric: 'Global', label: 'Reach', icon: Globe }
]

const successStories = [
  { company: 'TechStart Nigeria', industry: 'SaaS Platform', result: '300% increase in website traffic', testimonial: 'Advertising on this platform helped us reach our target audience and significantly boost our online presence.' },
  { company: 'Digital Solutions Ltd', industry: 'Web Development', result: '200+ qualified leads generated', testimonial: 'The sponsored content campaign delivered exceptional ROI and helped us establish thought leadership.' },
  { company: 'Innovate Africa', industry: 'Tech Innovation', result: '150% growth in brand awareness', testimonial: 'Strategic partnership led to increased visibility and valuable networking opportunities.' }
]

export default function AdvertisePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Advertise <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">With Us</span>
            </h1>
            <p className="text-xl text-neutral-600">Reach our engaged audience of tech professionals, developers, and business owners.</p>
          </div>
        </div>
      </section>

      {/* Audience Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Audience</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">Connect with a highly engaged community of professionals.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {audienceStats.map((stat, index) => (
              <div key={stat.label} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">{stat.metric}</div>
                <div className="text-neutral-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertising Options */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Advertising Options</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">Choose from our range of advertising solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {advertisingOptions.map((option, index) => (
              <div 
                key={option.name} 
                className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-purple-300 transition-all" 
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <option.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{option.name}</h3>
                <p className="text-neutral-600 mb-4">{option.description}</p>
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full block text-center py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Success Stories</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">See how businesses achieved results through our platform.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <div 
                key={story.company} 
                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{story.company}</h3>
                <p className="text-purple-600 text-sm font-medium mb-4">{story.industry}</p>
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm mb-4">
                  <strong>Result:</strong> {story.result}
                </div>
                <p className="text-neutral-600 text-sm italic">"{story.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Advertise */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Advertise With Us?</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">Strategic partnerships that drive real business results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-aos="fade-up">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Targeted Audience</h3>
              <p className="text-purple-100 text-sm">Reach decision-makers and professionals in your industry.</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Measurable Results</h3>
              <p className="text-purple-100 text-sm">Track performance with detailed analytics and reporting.</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-purple-100 text-sm">Get guidance from our advertising specialists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Ready to Start Advertising?</h2>
            <p className="text-neutral-600 mb-8">Let us discuss your advertising goals and create a custom campaign.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://wa.me/2348100098339" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-300 text-neutral-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
