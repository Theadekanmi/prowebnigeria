import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import FloatingWhatsApp from '../../../components/FloatingWhatsApp'
import { Clock, User, ArrowLeft, Share2, Bookmark, Star, ThumbsUp, ThumbsDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'

// Content data for each tech review ID
const techReviewsData = {
  '1': {
    title: "Next.js 14 vs React 18: Complete Comparison",
    category: "Frameworks",
    rating: 4.8,
    readTime: "12 min read",
    author: "ProWeb Team",
    date: "Oct 15, 2025",
    pros: [
      "Excellent performance with automatic optimization",
      "Server-side rendering out of the box",
      "Great developer experience with fast refresh",
      "Built-in image optimization",
      "API routes for backend functionality"
    ],
    cons: [
      "Steeper learning curve for beginners",
      "Opinionated structure may limit flexibility",
      "Requires understanding of both client and server concepts"
    ],
    verdict: "Excellent choice for full-stack applications that need SEO and performance",
    content: `
      <h2>Introduction</h2>
      <p>Next.js 14 and React 18 are both powerful tools for building modern web applications, but they serve different purposes. In this comprehensive comparison, we'll explore the strengths, weaknesses, and ideal use cases for each.</p>
      
      <h2>What is React 18?</h2>
      <p>React 18 is the latest major version of the React library, bringing new features like concurrent rendering, automatic batching, and transitions. It's a library focused solely on building user interfaces.</p>
      
      <h2>What is Next.js 14?</h2>
      <p>Next.js 14 is a full-stack React framework built on top of React 18. It adds server-side rendering, static site generation, API routes, and many other features that React doesn't provide out of the box.</p>
      
      <h2>Performance Comparison</h2>
      <p>Next.js 14 offers superior performance for most real-world applications due to:</p>
      <ul>
        <li><strong>Automatic code splitting:</strong> Only loads JavaScript needed for each page</li>
        <li><strong>Image optimization:</strong> Automatically optimizes images with the Image component</li>
        <li><strong>Server-side rendering:</strong> Improves initial load time and SEO</li>
        <li><strong>Edge functions:</strong> Deploy code closer to users for faster response times</li>
      </ul>
      
      <h2>Developer Experience</h2>
      <p>Both offer excellent developer experience, but in different ways:</p>
      <ul>
        <li><strong>React 18:</strong> More flexibility, perfect for SPAs, easier to integrate with existing projects</li>
        <li><strong>Next.js 14:</strong> Opinionated structure speeds up development, includes routing and many features out of the box</li>
      </ul>
      
      <h2>SEO Capabilities</h2>
      <p>Next.js 14 is the clear winner for SEO-critical applications. With server-side rendering and static site generation, search engines can easily crawl and index your content. React 18 alone requires additional configuration for proper SEO.</p>
      
      <h2>When to Use React 18</h2>
      <ul>
        <li>Building single-page applications (SPAs)</li>
        <li>When you need maximum flexibility in architecture</li>
        <li>Integrating into existing projects</li>
        <li>Building component libraries</li>
        <li>When you don't need SEO</li>
      </ul>
      
      <h2>When to Use Next.js 14</h2>
      <ul>
        <li>Building full-stack web applications</li>
        <li>E-commerce websites</li>
        <li>Content-heavy websites (blogs, documentation)</li>
        <li>When SEO is important</li>
        <li>When you need API routes without a separate backend</li>
        <li>Enterprise applications</li>
      </ul>
      
      <h2>Our Verdict</h2>
      <p>Choose <strong>React 18</strong> if you're building a single-page application, need maximum flexibility, or are working on a project where SEO isn't critical.</p>
      <p>Choose <strong>Next.js 14</strong> if you're building a full-stack application, need excellent SEO, want faster development with built-in features, or are creating an e-commerce or content-heavy site.</p>
      
      <h2>Conclusion</h2>
      <p>Both React 18 and Next.js 14 are excellent choices, but they serve different purposes. Next.js 14 is essentially React 18 plus a comprehensive set of features for building production-ready applications. For most commercial projects, especially those requiring SEO, Next.js 14 is the superior choice.</p>
    `
  },
  '2': {
    title: "Vercel vs Netlify vs AWS: Hosting Showdown",
    category: "Hosting",
    rating: 4.6,
    readTime: "10 min read",
    author: "ProWeb Team",
    date: "Oct 12, 2025",
    pros: [
      "Easy deployment with Git integration",
      "Great performance with global CDN",
      "Excellent support and documentation",
      "Automatic HTTPS and SSL",
      "Built-in CI/CD"
    ],
    cons: [
      "Pricing can add up for high traffic",
      "Limited customization options",
      "Vendor lock-in concerns"
    ],
    verdict: "Vercel wins for Next.js projects, Netlify for JAMstack, AWS for enterprise needs",
    content: `
      <h2>Introduction</h2>
      <p>Choosing the right hosting platform is crucial for your web application's success. Let's compare three popular options: Vercel, Netlify, and AWS.</p>
      
      <h2>Vercel</h2>
      <p>Vercel is optimized for Next.js and provides seamless deployment with excellent developer experience. It offers automatic optimizations, preview deployments, and great performance out of the box.</p>
      
      <h2>Netlify</h2>
      <p>Netlify excels at hosting JAMstack applications with features like form handling, serverless functions, and edge functions. Great for static sites and modern web apps.</p>
      
      <h2>AWS (Amplify/Lambda)</h2>
      <p>AWS offers the most flexibility and scalability, but with a steeper learning curve. Best for enterprise applications that need extensive customization.</p>
      
      <h2>Conclusion</h2>
      <p>For Next.js projects, Vercel provides the best experience. For JAMstack sites, Netlify is excellent. For enterprise needs, AWS offers unmatched flexibility.</p>
    `
  },
  '3': {
    title: "Tailwind CSS vs Styled Components: 2025 Review",
    category: "Tools",
    rating: 4.7,
    readTime: "8 min read",
    author: "ProWeb Team",
    date: "Oct 10, 2025",
    pros: [
      "Utility-first approach speeds up development",
      "Great performance with purged CSS",
      "Excellent tooling and plugins",
      "Easy to maintain and scale"
    ],
    cons: [
      "Initial learning curve",
      "HTML can look cluttered with many classes",
      "Less component-scoped styling"
    ],
    verdict: "Tailwind for utility-first lovers, Styled Components for component-scoped styling needs",
    content: `
      <h2>Introduction</h2>
      <p>Both Tailwind CSS and Styled Components are popular CSS solutions, but they take very different approaches. Let's compare them.</p>
      
      <h2>Tailwind CSS</h2>
      <p>Tailwind uses utility classes that you compose in your HTML/JSX. It's fast to develop with, highly customizable, and results in smaller CSS bundles after purging.</p>
      
      <h2>Styled Components</h2>
      <p>Styled Components allows you to write CSS-in-JS with component-scoped styles. Great for dynamic styling and component encapsulation.</p>
      
      <h2>Conclusion</h2>
      <p>Choose Tailwind for rapid development and utility-first workflow. Choose Styled Components for dynamic, component-scoped styling needs.</p>
    `
  },
  '4': {
    title: "TypeScript vs JavaScript: When to Make the Switch",
    category: "Languages",
    rating: 4.9,
    readTime: "9 min read",
    author: "ProWeb Team",
    date: "Oct 8, 2025",
    pros: [
      "Catch errors at compile time",
      "Better IDE support and autocomplete",
      "Improved code documentation",
      "Easier refactoring",
      "Better team collaboration"
    ],
    cons: [
      "Initial setup overhead",
      "Learning curve for type system",
      "Slightly more verbose code"
    ],
    verdict: "TypeScript for large applications and teams, JavaScript for small projects",
    content: `
      <h2>Introduction</h2>
      <p>TypeScript adds static typing to JavaScript, providing better tooling and catching errors early. Here's when it makes sense to switch.</p>
      
      <h2>When to Use TypeScript</h2>
      <ul>
        <li>Large codebases with multiple developers</li>
        <li>Complex applications with many interdependencies</li>
        <li>Long-term projects that need maintainability</li>
        <li>When you want better IDE support</li>
      </ul>
      
      <h2>When JavaScript is Fine</h2>
      <ul>
        <li>Small projects and prototypes</li>
        <li>Quick scripts and one-off tasks</li>
        <li>When you need maximum flexibility</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>TypeScript is increasingly becoming the standard for professional web development. Start with JavaScript, but consider TypeScript as your projects grow.</p>
    `
  },
  '5': {
    title: "Figma vs Adobe XD: Design Tool Comparison",
    category: "Design",
    rating: 4.5,
    readTime: "7 min read",
    author: "ProWeb Team",
    date: "Oct 5, 2025",
    pros: [
      "Excellent collaboration features",
      "Web-based, works on any platform",
      "Great for team workflows",
      "Strong plugin ecosystem"
    ],
    cons: [
      "Requires internet connection",
      "Can be resource-intensive",
      "Steeper learning curve than some tools"
    ],
    verdict: "Figma for collaboration, Adobe XD for Adobe ecosystem integration",
    content: `
      <h2>Introduction</h2>
      <p>Both Figma and Adobe XD are powerful design tools. Figma excels at collaboration, while Adobe XD integrates well with the Adobe Creative Cloud suite.</p>
      
      <h2>Figma Strengths</h2>
      <p>Real-time collaboration, web-based accessibility, and excellent prototyping features make Figma ideal for teams.</p>
      
      <h2>Adobe XD Strengths</h2>
      <p>Seamless integration with Photoshop, Illustrator, and other Adobe tools makes XD great for designers already in the Adobe ecosystem.</p>
      
      <h2>Conclusion</h2>
      <p>Figma has become the industry standard for collaborative design, while Adobe XD remains strong for Adobe-centric workflows.</p>
    `
  },
  '6': {
    title: "MongoDB vs PostgreSQL: Database Showdown",
    category: "Databases",
    rating: 4.6,
    readTime: "11 min read",
    author: "ProWeb Team",
    date: "Oct 3, 2025",
    pros: [
      "Flexible schema for rapid development",
      "Great for document-based data",
      "Horizontal scaling capabilities",
      "JSON-like data structure"
    ],
    cons: [
      "Less mature than SQL databases",
      "Can be more complex for relational data",
      "Different query language to learn"
    ],
    verdict: "MongoDB for document-based data, PostgreSQL for relational data",
    content: `
      <h2>Introduction</h2>
      <p>MongoDB (NoSQL) and PostgreSQL (SQL) represent two different database paradigms. The choice depends on your data structure and requirements.</p>
      
      <h2>MongoDB</h2>
      <p>Perfect for document-based data, rapid prototyping, and when your schema is likely to change frequently. Great for content management and real-time applications.</p>
      
      <h2>PostgreSQL</h2>
      <p>Ideal for relational data, complex queries, transactions, and when data integrity is critical. Excellent for financial and analytical applications.</p>
      
      <h2>Conclusion</h2>
      <p>Choose MongoDB for flexible, document-based applications. Choose PostgreSQL for structured, relational data with complex queries.</p>
    `
  },
  '7': {
    title: "VS Code Extensions: Top 20 for Web Developers",
    category: "Tools",
    rating: 4.8,
    readTime: "6 min read",
    author: "ProWeb Team",
    date: "Oct 1, 2025",
    pros: [
      "Massive extension ecosystem",
      "Lightweight and fast",
      "Excellent Git integration",
      "Great debugging tools"
    ],
    cons: [
      "Can become slow with many extensions",
      "Some features require configuration"
    ],
    verdict: "Must-have extensions: ESLint, Prettier, GitLens, Live Server, Auto Rename Tag",
    content: `
      <h2>Introduction</h2>
      <p>VS Code extensions can dramatically improve your productivity. Here are the top 20 extensions every web developer should install.</p>
      
      <h2>Essential Extensions</h2>
      <ul>
        <li><strong>ESLint:</strong> JavaScript linting</li>
        <li><strong>Prettier:</strong> Code formatting</li>
        <li><strong>GitLens:</strong> Enhanced Git capabilities</li>
        <li><strong>Live Server:</strong> Local development server</li>
        <li><strong>Auto Rename Tag:</strong> Automatically rename paired tags</li>
      </ul>
      
      <h2>Framework-Specific</h2>
      <ul>
        <li>ES7+ React/Redux snippets</li>
        <li>Vetur (for Vue.js)</li>
        <li>Angular Language Service</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>These extensions will significantly boost your productivity and make VS Code even more powerful for web development.</p>
    `
  },
  '8': {
    title: "React Native vs Flutter: Mobile Development",
    category: "Mobile",
    rating: 4.4,
    readTime: "13 min read",
    author: "ProWeb Team",
    date: "Sep 28, 2025",
    pros: [
      "Write once, run on iOS and Android",
      "Large community and ecosystem",
      "Hot reload for fast development",
      "Native performance"
    ],
    cons: [
      "Larger app sizes",
      "Some native features require bridges",
      "Learning curve for mobile concepts"
    ],
    verdict: "React Native for web developers, Flutter for performance-critical apps",
    content: `
      <h2>Introduction</h2>
      <p>Both React Native and Flutter enable cross-platform mobile development. React Native uses JavaScript, while Flutter uses Dart.</p>
      
      <h2>React Native</h2>
      <p>If you know React, React Native is a natural choice. You can reuse your JavaScript skills and many npm packages. Great for teams with web development background.</p>
      
      <h2>Flutter</h2>
      <p>Flutter offers excellent performance and a comprehensive widget library. Uses Dart language, which may require learning a new language. Great for apps that need pixel-perfect UI.</p>
      
      <h2>Conclusion</h2>
      <p>Choose React Native if you're a web developer familiar with React. Choose Flutter if you want maximum performance and don't mind learning Dart.</p>
    `
  }
}

// Generate static params for all tech reviews at build time
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
  ]
}

export function generateMetadata({ params }) {
  const id = params.id
  const review = techReviewsData[id] || techReviewsData['1']
  
  return {
    title: `${review.title} | ProWeb Nigeria`,
    description: review.content.replace(/<[^>]*>/g, '').substring(0, 160),
    alternates: {
      canonical: `/resources/tech-reviews/${id}`,
    },
    robots: {
      index: true,
      follow: true,
    }
  }
}

export default function TechReviewDetailPage({ params }) {
  const reviewId = params.id
  const review = techReviewsData[reviewId] || techReviewsData['1']

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= Math.floor(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : star - 0.5 <= rating
                ? 'fill-yellow-400/50 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
        <span className="ml-2 text-gray-600 font-semibold">{rating}/5</span>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/resources/tech-reviews"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tech Reviews
            </Link>

            {/* Header */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-8">
              <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  {review.category}
                </span>
                {renderStars(review.rating)}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {review.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>{review.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{review.readTime}</span>
                </div>
                <span>{review.date}</span>
              </div>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <ThumbsUp className="w-5 h-5 text-green-600" />
                    <h3 className="font-bold text-gray-900">Pros</h3>
                  </div>
                  <ul className="space-y-2">
                    {review.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <ThumbsDown className="w-5 h-5 text-red-600" />
                    <h3 className="font-bold text-gray-900">Cons</h3>
                  </div>
                  <ul className="space-y-2">
                    {review.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verdict */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Our Verdict:</h3>
                <p className="text-gray-700">{review.verdict}</p>
              </div>

              <div className="flex gap-4 mt-6">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Bookmark className="w-5 h-5" />
                  <span>Save</span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: review.content }} />
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Building with These Tools?</h2>
              <p className="text-xl mb-6 text-white/90">
                Our team specializes in both React and Next.js development. Let us help you choose the right tool for your project.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
