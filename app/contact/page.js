import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Contact ProWeb Nigeria - Get Your Free Quote Today',
  description: 'Ready to transform your business with a high-performance website? Contact ProWeb Nigeria for a free consultation and quote. We serve Lagos, Abuja, and all of Nigeria.',
  keywords: [
    'contact proweb nigeria',
    'web design quote nigeria',
    'website consultation lagos',
    'web development abuja',
    'free website quote nigeria'
  ]
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">
        <ContactForm />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}