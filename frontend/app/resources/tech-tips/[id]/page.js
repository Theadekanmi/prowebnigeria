import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import FloatingWhatsApp from '../../../components/FloatingWhatsApp'
import { Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'

const techTipsData = {
  '1': { title: "10 Next.js Performance Optimization Techniques", category: "Next.js", readTime: "8 min read", author: "ProWeb Team", date: "Oct 15, 2025", content: `<h2>Introduction</h2><p>Next.js is a powerful React framework that offers exceptional performance out of the box. However, there are several advanced techniques you can implement to make your applications even faster.</p><h2>1. Image Optimization</h2><p>Use the Next.js Image component to automatically optimize images. This includes lazy loading, responsive images, and modern formats like WebP.</p><h2>2. Server-Side Rendering (SSR)</h2><p>Use SSR for dynamic content that needs to be fresh on every request. This improves SEO and initial page load performance.</p><h2>3. Static Site Generation (SSG)</h2><p>For content that does not change frequently, use SSG to pre-render pages at build time. This provides the fastest possible load times.</p><h2>4. Incremental Static Regeneration (ISR)</h2><p>ISR allows you to update static pages after build time without rebuilding the entire site.</p><h2>5. Code Splitting</h2><p>Next.js automatically code splits your application. You can further optimize by using dynamic imports for components that are not immediately needed.</p><h2>Conclusion</h2><p>By implementing these optimization techniques, you can significantly improve your Next.js application's performance.</p>` },
  '2': { title: "JavaScript ES2024 Features You Should Know", category: "JavaScript", readTime: "6 min read", author: "ProWeb Team", date: "Oct 12, 2025", content: `<h2>Introduction</h2><p>JavaScript continues to evolve with exciting new features in ES2024. Let us explore the latest additions that will make your code more expressive.</p><h2>1. Array.prototype.findLast()</h2><p>These methods allow you to find the last element in an array that matches a condition.</p><h2>2. Promise.withResolvers()</h2><p>A new utility for creating promises with external resolve/reject control.</p><h2>3. Object.groupBy()</h2><p>Convenient methods for grouping array elements by a key function.</p><h2>Conclusion</h2><p>These new features bring JavaScript closer to being a more expressive and developer-friendly language.</p>` },
  '3': { title: "Building Secure Web Applications: A Complete Guide", category: "Security", readTime: "12 min read", author: "ProWeb Team", date: "Oct 10, 2025", content: `<h2>Introduction</h2><p>Security is not optional when building web applications. This guide covers essential security practices.</p><h2>1. Input Validation</h2><p>Always validate and sanitize user input on both client and server sides.</p><h2>2. Authentication</h2><p>Implement robust authentication using industry-standard libraries.</p><h2>3. HTTPS Everywhere</h2><p>Always use HTTPS in production to encrypt data in transit.</p><h2>4. SQL Injection Prevention</h2><p>Use parameterized queries or ORMs to prevent SQL injection attacks.</p><h2>Conclusion</h2><p>Security is an ongoing process. Regular audits and updates are essential.</p>` },
  '4': { title: "TypeScript Best Practices for Large Applications", category: "TypeScript", readTime: "10 min read", author: "ProWeb Team", date: "Oct 8, 2025", content: `<h2>Introduction</h2><p>TypeScript can significantly improve code quality in large applications.</p><h2>1. Strict Type Checking</h2><p>Enable strict mode in tsconfig.json to catch more errors at compile time.</p><h2>2. Use Type Aliases and Interfaces</h2><p>Create reusable types for common data structures.</p><h2>3. Generic Constraints</h2><p>Use generic constraints to create flexible yet type-safe functions.</p><h2>Conclusion</h2><p>Following these practices will help you build maintainable TypeScript applications.</p>` },
  '5': { title: "Responsive Design with Tailwind CSS", category: "UI/UX", readTime: "7 min read", author: "ProWeb Team", date: "Oct 5, 2025", content: `<h2>Introduction</h2><p>Tailwind CSS makes responsive design intuitive with its mobile-first utility classes.</p><h2>1. Mobile-First Approach</h2><p>Start with mobile styles and use breakpoint prefixes for larger screens.</p><h2>2. Breakpoint Strategy</h2><p>Understand Tailwind's default breakpoints: sm (640px), md (768px), lg (1024px).</p><h2>3. Responsive Typography</h2><p>Use responsive text sizes for scalable typography.</p><h2>Conclusion</h2><p>Tailwind's responsive utilities make it easy to create designs that work on all devices.</p>` },
  '6': { title: "API Design Best Practices for Modern Web Apps", category: "Backend", readTime: "9 min read", author: "ProWeb Team", date: "Oct 3, 2025", content: `<h2>Introduction</h2><p>Well-designed APIs are the backbone of modern web applications.</p><h2>1. RESTful Design</h2><p>Follow REST conventions: use proper HTTP methods and meaningful URLs.</p><h2>2. Versioning</h2><p>Implement API versioning from the start.</p><h2>3. Error Handling</h2><p>Return consistent error responses with appropriate HTTP status codes.</p><h2>Conclusion</h2><p>Good API design makes integration easier and improves developer experience.</p>` },
  '7': { title: "Debugging JavaScript Like a Pro", category: "JavaScript", readTime: "8 min read", author: "ProWeb Team", date: "Oct 1, 2025", content: `<h2>Introduction</h2><p>Effective debugging is a crucial skill for every JavaScript developer.</p><h2>1. Browser DevTools</h2><p>Learn to use breakpoints, step through code, and inspect variables.</p><h2>2. Console Methods</h2><p>Use console.log(), console.table(), and console.time() strategically.</p><h2>3. Source Maps</h2><p>Enable source maps to debug minified code as if it were the original source.</p><h2>Conclusion</h2><p>Mastering debugging tools will significantly improve your productivity.</p>` },
  '8': { title: "Mobile-First Development Strategy", category: "Mobile", readTime: "6 min read", author: "ProWeb Team", date: "Sep 28, 2025", content: `<h2>Introduction</h2><p>Mobile-first development is an approach where you design for mobile devices first.</p><h2>Why Mobile-First?</h2><p>With over 60% of web traffic coming from mobile devices, starting with mobile ensures your site works well for the majority.</p><h2>1. Start Small</h2><p>Begin your design process with the smallest screen size.</p><h2>2. Touch-Friendly Design</h2><p>Ensure buttons are at least 44x44 pixels for easy tapping.</p><h2>Conclusion</h2><p>Mobile-first development leads to better user experiences across all devices.</p>` },
  '9': { title: "Git Workflow for Development Teams", category: "DevOps", readTime: "11 min read", author: "ProWeb Team", date: "Sep 25, 2025", content: `<h2>Introduction</h2><p>A well-defined Git workflow is essential for team collaboration.</p><h2>1. Git Flow</h2><p>Git Flow uses multiple branches for features, releases, and hotfixes.</p><h2>2. GitHub Flow</h2><p>A simpler alternative where you branch from main and merge after review.</p><h2>3. Commit Messages</h2><p>Write clear, descriptive commit messages using conventional commits format.</p><h2>Conclusion</h2><p>Choose a Git workflow that fits your team size and release cadence.</p>` }
}

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }]
}

export function generateMetadata({ params }) {
  const tip = techTipsData[params.id] || techTipsData['1']
  return {
    title: `${tip.title} | ProWeb Nigeria`,
    description: tip.content.replace(/<[^>]*>/g, '').substring(0, 160),
    alternates: { canonical: `/resources/tech-tips/${params.id}` }
  }
}

export default function TechTipDetailPage({ params }) {
  const tip = techTipsData[params.id] || techTipsData['1']

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/resources/tech-tips" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tech Tips
            </Link>

            <div className="bg-white rounded-xl p-8 md:p-12 border border-neutral-200 mb-8" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">{tip.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-6 mb-6">{tip.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-neutral-600 mb-6">
                <div className="flex items-center gap-2"><User className="w-5 h-5" /><span>{tip.author}</span></div>
                <div className="flex items-center gap-2"><Clock className="w-5 h-5" /><span>{tip.readTime}</span></div>
                <span>{tip.date}</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-12 border border-neutral-200 prose prose-lg max-w-none" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <div dangerouslySetInnerHTML={{ __html: tip.content }} />
            </div>

            <div className="mt-12 bg-neutral-900 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Need Help with Web Development?</h2>
              <p className="text-neutral-400 mb-6">Our team specializes in building high-performance web applications.</p>
              <Link href="/contact" className="inline-block bg-white text-neutral-900 hover:bg-neutral-100 font-semibold px-8 py-4 rounded-lg transition-colors">Get in Touch</Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
