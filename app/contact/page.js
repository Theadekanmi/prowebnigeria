import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Contact ProWeb Nigeria | Free Quote',
  description: 'Contact ProWeb Nigeria for a free website consultation and quote. We build high-performance websites for Lagos, Abuja & all Nigeria.',
  keywords: [
    'contact proweb nigeria',
    'web design quote nigeria',
    'website consultation lagos',
    'web development abuja',
    'free website quote nigeria'
  ],
  alternates: {
    canonical: '/contact',
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-10 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Contact</h1>
            <p className="text-lg text-gray-600">Get a free consultation and quote. We reply fast.</p>
          </div>
        </div>
      </section>
      <div className="pb-20">
        <ContactForm />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}