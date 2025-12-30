import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import FloatingWhatsApp from '../../../components/FloatingWhatsApp'
import { Clock, User, ArrowLeft, Star, ThumbsUp, ThumbsDown } from 'lucide-react'
import Link from 'next/link'

const techReviewsData = {
  '1': { title: "Next.js 14 vs React 18: Complete Comparison", category: "Frameworks", rating: 4.8, readTime: "12 min read", author: "ProWeb Team", date: "Oct 15, 2025", pros: ["Excellent performance with automatic optimization", "Server-side rendering out of the box", "Great developer experience"], cons: ["Steeper learning curve for beginners", "Opinionated structure may limit flexibility"], verdict: "Excellent choice for full-stack applications that need SEO and performance", content: `<h2>Introduction</h2><p>Next.js 14 and React 18 are both powerful tools for building modern web applications, but they serve different purposes.</p><h2>What is React 18?</h2><p>React 18 is the latest major version of the React library, bringing new features like concurrent rendering and automatic batching.</p><h2>What is Next.js 14?</h2><p>Next.js 14 is a full-stack React framework built on top of React 18. It adds server-side rendering, static site generation, and API routes.</p><h2>When to Use React 18</h2><p>Building single-page applications, when you need maximum flexibility, or integrating into existing projects.</p><h2>When to Use Next.js 14</h2><p>Building full-stack web applications, e-commerce websites, content-heavy websites, or when SEO is important.</p><h2>Conclusion</h2><p>For most commercial projects, especially those requiring SEO, Next.js 14 is the superior choice.</p>` },
  '2': { title: "Vercel vs Netlify vs AWS: Hosting Showdown", category: "Hosting", rating: 4.6, readTime: "10 min read", author: "ProWeb Team", date: "Oct 12, 2025", pros: ["Easy deployment with Git integration", "Great performance with global CDN", "Excellent support"], cons: ["Pricing can add up for high traffic", "Limited customization options"], verdict: "Vercel wins for Next.js projects, Netlify for JAMstack, AWS for enterprise needs", content: `<h2>Introduction</h2><p>Choosing the right hosting platform is crucial for your web application's success.</p><h2>Vercel</h2><p>Vercel is optimized for Next.js and provides seamless deployment with excellent developer experience.</p><h2>Netlify</h2><p>Netlify excels at hosting JAMstack applications with features like form handling and serverless functions.</p><h2>AWS</h2><p>AWS offers the most flexibility and scalability, but with a steeper learning curve.</p><h2>Conclusion</h2><p>For Next.js projects, Vercel provides the best experience. For JAMstack sites, Netlify is excellent.</p>` },
  '3': { title: "Tailwind CSS vs Styled Components: 2025 Review", category: "Tools", rating: 4.7, readTime: "8 min read", author: "ProWeb Team", date: "Oct 10, 2025", pros: ["Utility-first approach speeds up development", "Great performance with purged CSS", "Excellent tooling"], cons: ["Initial learning curve", "HTML can look cluttered"], verdict: "Tailwind for utility-first lovers, Styled Components for component-scoped styling", content: `<h2>Introduction</h2><p>Both Tailwind CSS and Styled Components are popular CSS solutions, but they take different approaches.</p><h2>Tailwind CSS</h2><p>Tailwind uses utility classes that you compose in your HTML/JSX. It is fast to develop with and highly customizable.</p><h2>Styled Components</h2><p>Styled Components allows you to write CSS-in-JS with component-scoped styles.</p><h2>Conclusion</h2><p>Choose Tailwind for rapid development and utility-first workflow.</p>` },
  '4': { title: "TypeScript vs JavaScript: When to Switch", category: "Languages", rating: 4.9, readTime: "9 min read", author: "ProWeb Team", date: "Oct 8, 2025", pros: ["Catch errors at compile time", "Better IDE support", "Improved code documentation"], cons: ["Initial setup overhead", "Learning curve for type system"], verdict: "TypeScript for large applications and teams, JavaScript for small projects", content: `<h2>Introduction</h2><p>TypeScript adds static typing to JavaScript, providing better tooling and catching errors early.</p><h2>When to Use TypeScript</h2><p>Large codebases with multiple developers, complex applications, and long-term projects.</p><h2>When JavaScript is Fine</h2><p>Small projects, prototypes, and quick scripts.</p><h2>Conclusion</h2><p>TypeScript is increasingly becoming the standard for professional web development.</p>` },
  '5': { title: "Figma vs Adobe XD: Design Tool Comparison", category: "Design", rating: 4.5, readTime: "7 min read", author: "ProWeb Team", date: "Oct 5, 2025", pros: ["Excellent collaboration features", "Web-based, works on any platform", "Great for team workflows"], cons: ["Requires internet connection", "Can be resource-intensive"], verdict: "Figma for collaboration, Adobe XD for Adobe ecosystem integration", content: `<h2>Introduction</h2><p>Both Figma and Adobe XD are powerful design tools.</p><h2>Figma Strengths</h2><p>Real-time collaboration, web-based accessibility, and excellent prototyping features.</p><h2>Adobe XD Strengths</h2><p>Seamless integration with Photoshop, Illustrator, and other Adobe tools.</p><h2>Conclusion</h2><p>Figma has become the industry standard for collaborative design.</p>` },
  '6': { title: "MongoDB vs PostgreSQL: Database Showdown", category: "Databases", rating: 4.6, readTime: "11 min read", author: "ProWeb Team", date: "Oct 3, 2025", pros: ["Flexible schema for rapid development", "Great for document-based data", "Horizontal scaling"], cons: ["Less mature than SQL databases", "Can be complex for relational data"], verdict: "MongoDB for document-based data, PostgreSQL for relational data", content: `<h2>Introduction</h2><p>MongoDB (NoSQL) and PostgreSQL (SQL) represent two different database paradigms.</p><h2>MongoDB</h2><p>Perfect for document-based data and rapid prototyping.</p><h2>PostgreSQL</h2><p>Ideal for relational data, complex queries, and transactions.</p><h2>Conclusion</h2><p>Choose MongoDB for flexible, document-based applications. Choose PostgreSQL for structured, relational data.</p>` },
  '7': { title: "VS Code Extensions: Top 20 for Web Developers", category: "Tools", rating: 4.8, readTime: "6 min read", author: "ProWeb Team", date: "Oct 1, 2025", pros: ["Massive extension ecosystem", "Lightweight and fast", "Excellent Git integration"], cons: ["Can become slow with many extensions"], verdict: "Must-have extensions: ESLint, Prettier, GitLens, Live Server", content: `<h2>Introduction</h2><p>VS Code extensions can dramatically improve your productivity.</p><h2>Essential Extensions</h2><p>ESLint for JavaScript linting, Prettier for code formatting, GitLens for enhanced Git capabilities.</p><h2>Conclusion</h2><p>These extensions will significantly boost your productivity.</p>` },
  '8': { title: "React Native vs Flutter: Mobile Development", category: "Mobile", rating: 4.4, readTime: "13 min read", author: "ProWeb Team", date: "Sep 28, 2025", pros: ["Write once, run on iOS and Android", "Large community", "Hot reload"], cons: ["Larger app sizes", "Some native features require bridges"], verdict: "React Native for web developers, Flutter for performance-critical apps", content: `<h2>Introduction</h2><p>Both React Native and Flutter enable cross-platform mobile development.</p><h2>React Native</h2><p>If you know React, React Native is a natural choice.</p><h2>Flutter</h2><p>Flutter offers excellent performance and a comprehensive widget library.</p><h2>Conclusion</h2><p>Choose React Native if you are a web developer familiar with React.</p>` },
  '9': { title: "GitHub vs GitLab vs Bitbucket: Git Hosting", category: "Tools", rating: 4.7, readTime: "8 min read", author: "ProWeb Team", date: "Sep 25, 2025", pros: ["Extensive features and integrations", "Large community", "Built-in CI/CD"], cons: ["Learning curve for advanced features", "Some features require paid plans"], verdict: "GitHub for open source, GitLab for DevOps, Bitbucket for Atlassian users", content: `<h2>Introduction</h2><p>Choosing the right Git hosting platform is crucial for team collaboration.</p><h2>GitHub</h2><p>GitHub is the largest and most popular Git hosting service.</p><h2>GitLab</h2><p>GitLab offers a complete DevOps platform with built-in CI/CD.</p><h2>Bitbucket</h2><p>Bitbucket integrates seamlessly with Jira and other Atlassian tools.</p><h2>Conclusion</h2><p>All three platforms are excellent choices. Consider your team's existing tools.</p>` }
}

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }]
}

export function generateMetadata({ params }) {
  const review = techReviewsData[params.id] || techReviewsData['1']
  return {
    title: `${review.title} | ProWeb Nigeria`,
    description: review.content.replace(/<[^>]*>/g, '').substring(0, 160),
    alternates: { canonical: `/resources/tech-reviews/${params.id}` }
  }
}

export default function TechReviewDetailPage({ params }) {
  const review = techReviewsData[params.id] || techReviewsData['1']

  const renderStars = (rating) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className={`w-5 h-5 ${star <= Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}`} />
      ))}
      <span className="ml-2 font-semibold text-neutral-900">{rating}/5</span>
    </div>
  )

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/resources/tech-reviews" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tech Reviews
            </Link>

            <div className="bg-white rounded-xl p-8 md:p-12 border border-neutral-200 mb-8" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">{review.category}</span>
                {renderStars(review.rating)}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">{review.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-neutral-600 mb-8">
                <div className="flex items-center gap-2"><User className="w-5 h-5" /><span>{review.author}</span></div>
                <div className="flex items-center gap-2"><Clock className="w-5 h-5" /><span>{review.readTime}</span></div>
                <span>{review.date}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4"><ThumbsUp className="w-5 h-5 text-green-600" /><h3 className="font-bold text-neutral-900">Pros</h3></div>
                  <ul className="space-y-2">
                    {review.pros.map((pro, i) => <li key={i} className="flex items-start text-sm text-neutral-700"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>{pro}</li>)}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4"><ThumbsDown className="w-5 h-5 text-red-600" /><h3 className="font-bold text-neutral-900">Cons</h3></div>
                  <ul className="space-y-2">
                    {review.cons.map((con, i) => <li key={i} className="flex items-start text-sm text-neutral-700"><span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>{con}</li>)}
                  </ul>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="font-bold text-neutral-900 mb-2">Our Verdict:</h3>
                <p className="text-neutral-700">{review.verdict}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-12 border border-neutral-200 prose prose-lg max-w-none" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <div dangerouslySetInnerHTML={{ __html: review.content }} />
            </div>

            <div className="mt-12 bg-neutral-900 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Building with These Tools?</h2>
              <p className="text-neutral-400 mb-6">Our team specializes in both React and Next.js development.</p>
              <Link href="/contact" className="inline-block bg-white text-neutral-900 hover:bg-neutral-100 font-semibold px-8 py-4 rounded-lg transition-colors">Get Expert Consultation</Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
