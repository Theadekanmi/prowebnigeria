import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import ContactForm from '../components/ContactForm'

export const metadata = {
  title: 'Contact ProWeb Nigeria | Free Quote',
  description: 'Contact ProWeb Nigeria for a free website consultation and quote. We build high-performance websites for Lagos, Abuja & all Nigeria.',
  alternates: { canonical: '/contact' }
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Touch</span>
            </h1>
            <p className="text-xl text-neutral-600">Get a free consultation and quote. We reply fast.</p>
          </div>
        </div>
      </section>

      <div className="pb-20 bg-white">
        <ContactForm />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
