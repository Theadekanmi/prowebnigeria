import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import FloatingWhatsApp from '../../../components/FloatingWhatsApp'
import { Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'

// Content data for each tech tip ID
const techTipsData = {
  '1': {
    title: "10 Next.js Performance Optimization Techniques",
    category: "Next.js",
    readTime: "8 min read",
    author: "ProWeb Team",
    date: "Oct 15, 2025",
    content: `
      <h2>Introduction</h2>
      <p>Next.js is a powerful React framework that offers exceptional performance out of the box. However, there are several advanced techniques you can implement to make your applications even faster and more efficient.</p>
      
      <h2>1. Image Optimization</h2>
      <p>Use the Next.js Image component to automatically optimize images. This includes lazy loading, responsive images, and modern formats like WebP.</p>
      <pre><code>import Image from 'next/image'

export default function MyComponent() {
  return (
    &lt;Image
      src="/hero.jpg"
      alt="Hero"
      width={1200}
      height={600}
      priority
    /&gt;
  )
}</code></pre>
      
      <h2>2. Server-Side Rendering (SSR)</h2>
      <p>Use SSR for dynamic content that needs to be fresh on every request. This improves SEO and initial page load performance.</p>
      
      <h2>3. Static Site Generation (SSG)</h2>
      <p>For content that doesn't change frequently, use SSG to pre-render pages at build time. This provides the fastest possible load times.</p>
      
      <h2>4. Incremental Static Regeneration (ISR)</h2>
      <p>ISR allows you to update static pages after build time without rebuilding the entire site. Perfect for content that changes occasionally.</p>
      
      <h2>5. Code Splitting</h2>
      <p>Next.js automatically code splits your application. You can further optimize by using dynamic imports for components that aren't immediately needed.</p>
      
      <h2>6. Font Optimization</h2>
      <p>Use next/font to automatically optimize and load Google Fonts or custom fonts efficiently.</p>
      
      <h2>7. API Route Optimization</h2>
      <p>Implement caching strategies for your API routes to reduce database queries and improve response times.</p>
      
      <h2>8. Bundle Analysis</h2>
      <p>Regularly analyze your bundle size using @next/bundle-analyzer to identify and eliminate unnecessary dependencies.</p>
      
      <h2>9. Prefetching</h2>
      <p>Take advantage of Next.js automatic prefetching for Link components to make navigation feel instant.</p>
      
      <h2>10. Edge Functions</h2>
      <p>Deploy API routes and middleware to the edge for faster response times globally.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these optimization techniques, you can significantly improve your Next.js application's performance, providing a better experience for your users and improving your search engine rankings.</p>
    `
  },
  '2': {
    title: "JavaScript ES2024 Features You Should Know",
    category: "JavaScript",
    readTime: "6 min read",
    author: "ProWeb Team",
    date: "Oct 12, 2025",
    content: `
      <h2>Introduction</h2>
      <p>JavaScript continues to evolve with exciting new features in ES2024. Let's explore the latest additions that will make your code more expressive and maintainable.</p>
      
      <h2>1. Array.prototype.findLast() and findLastIndex()</h2>
      <p>These methods allow you to find the last element in an array that matches a condition, making reverse searches more intuitive.</p>
      
      <h2>2. Promise.withResolvers()</h2>
      <p>A new utility for creating promises with external resolve/reject control, useful for complex async patterns.</p>
      
      <h2>3. Object.groupBy() and Map.groupBy()</h2>
      <p>Convenient methods for grouping array elements by a key function, eliminating the need for manual reduce operations.</p>
      
      <h2>4. Hashbang Grammar</h2>
      <p>Improved support for shebang (#!) syntax in JavaScript files, enhancing Node.js script execution.</p>
      
      <h2>5. Symbols as WeakMap Keys</h2>
      <p>You can now use Symbols as keys in WeakMaps, providing more flexible memory management patterns.</p>
      
      <h2>Conclusion</h2>
      <p>These new features bring JavaScript closer to being a more expressive and developer-friendly language. Start incorporating them into your projects today!</p>
    `
  },
  '3': {
    title: "Building Secure Web Applications: A Complete Guide",
    category: "Security",
    readTime: "12 min read",
    author: "ProWeb Team",
    date: "Oct 10, 2025",
    content: `
      <h2>Introduction</h2>
      <p>Security is not optional when building web applications. This comprehensive guide covers essential security practices every developer should implement.</p>
      
      <h2>1. Input Validation and Sanitization</h2>
      <p>Always validate and sanitize user input on both client and server sides. Never trust user-provided data.</p>
      
      <h2>2. Authentication and Authorization</h2>
      <p>Implement robust authentication using industry-standard libraries. Use JWT tokens securely and implement proper session management.</p>
      
      <h2>3. HTTPS Everywhere</h2>
      <p>Always use HTTPS in production to encrypt data in transit. Configure proper SSL/TLS certificates.</p>
      
      <h2>4. SQL Injection Prevention</h2>
      <p>Use parameterized queries or ORMs to prevent SQL injection attacks. Never concatenate user input into SQL queries.</p>
      
      <h2>5. Cross-Site Scripting (XSS) Prevention</h2>
      <p>Sanitize output, use Content Security Policy (CSP) headers, and escape user-generated content.</p>
      
      <h2>6. Cross-Site Request Forgery (CSRF) Protection</h2>
      <p>Implement CSRF tokens and use SameSite cookies to protect against CSRF attacks.</p>
      
      <h2>7. Dependency Security</h2>
      <p>Regularly update dependencies and use tools like npm audit to identify known vulnerabilities.</p>
      
      <h2>Conclusion</h2>
      <p>Security is an ongoing process. Regular audits, updates, and following security best practices are essential for protecting your applications and users.</p>
    `
  },
  '4': {
    title: "TypeScript Best Practices for Large Applications",
    category: "TypeScript",
    readTime: "10 min read",
    author: "ProWeb Team",
    date: "Oct 8, 2025",
    content: `
      <h2>Introduction</h2>
      <p>TypeScript can significantly improve code quality in large applications. Here are essential patterns and practices for maintaining large-scale TypeScript projects.</p>
      
      <h2>1. Strict Type Checking</h2>
      <p>Enable strict mode in tsconfig.json to catch more errors at compile time. This includes strictNullChecks, strictFunctionTypes, and more.</p>
      
      <h2>2. Use Type Aliases and Interfaces Wisely</h2>
      <p>Create reusable types for common data structures. Use interfaces for object shapes and type aliases for unions and intersections.</p>
      
      <h2>3. Modular Type Definitions</h2>
      <p>Organize types in separate files and modules. Use index files to re-export commonly used types.</p>
      
      <h2>4. Generic Constraints</h2>
      <p>Use generic constraints to create flexible yet type-safe functions and components.</p>
      
      <h2>5. Utility Types</h2>
      <p>Leverage TypeScript's utility types (Partial, Pick, Omit, etc.) to create new types from existing ones.</p>
      
      <h2>Conclusion</h2>
      <p>Following these practices will help you build maintainable, scalable TypeScript applications that stand the test of time.</p>
    `
  },
  '5': {
    title: "Responsive Design with Tailwind CSS",
    category: "UI/UX",
    readTime: "7 min read",
    author: "ProWeb Team",
    date: "Oct 5, 2025",
    content: `
      <h2>Introduction</h2>
      <p>Tailwind CSS makes responsive design intuitive with its mobile-first utility classes. Learn how to create beautiful, responsive layouts efficiently.</p>
      
      <h2>1. Mobile-First Approach</h2>
      <p>Start with mobile styles (default) and use breakpoint prefixes (sm:, md:, lg:, xl:, 2xl:) to add styles for larger screens.</p>
      
      <h2>2. Breakpoint Strategy</h2>
      <p>Understand Tailwind's default breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px).</p>
      
      <h2>3. Responsive Typography</h2>
      <p>Use responsive text sizes: text-sm md:text-base lg:text-lg for scalable typography.</p>
      
      <h2>4. Flexible Grid Layouts</h2>
      <p>Use grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for responsive grid systems that adapt to screen sizes.</p>
      
      <h2>5. Spacing and Padding</h2>
      <p>Apply responsive spacing: p-4 md:p-6 lg:p-8 to adjust padding based on screen size.</p>
      
      <h2>Conclusion</h2>
      <p>Tailwind's responsive utilities make it easy to create designs that work beautifully on all devices without writing custom media queries.</p>
    `
  },
  '6': {
    title: "API Design Best Practices for Modern Web Apps",
    category: "Backend",
    readTime: "9 min read",
    author: "ProWeb Team",
    date: "Oct 3, 2025",
    content: `
      <h2>Introduction</h2>
      <p>Well-designed APIs are the backbone of modern web applications. Follow these best practices to create robust, scalable APIs.</p>
      
      <h2>1. RESTful Design Principles</h2>
      <p>Follow REST conventions: use proper HTTP methods (GET, POST, PUT, DELETE), meaningful URLs, and status codes.</p>
      
      <h2>2. Versioning</h2>
      <p>Implement API versioning from the start. Use URL versioning (/api/v1/) or header-based versioning.</p>
      
      <h2>3. Error Handling</h2>
      <p>Return consistent error responses with appropriate HTTP status codes and clear error messages.</p>
      
      <h2>4. Pagination</h2>
      <p>Always implement pagination for list endpoints to improve performance and user experience.</p>
      
      <h2>5. Rate Limiting</h2>
      <p>Protect your API with rate limiting to prevent abuse and ensure fair usage.</p>
      
      <h2>6. Documentation</h2>
      <p>Maintain comprehensive API documentation using tools like OpenAPI/Swagger.</p>
      
      <h2>Conclusion</h2>
      <p>Good API design makes integration easier, improves developer experience, and sets your application up for long-term success.</p>
    `
  },
  '7': {
    title: "Debugging JavaScript Like a Pro",
    category: "JavaScript",
    readTime: "8 min read",
    author: "ProWeb Team",
    date: "Oct 1, 2025",
    content: `
      <h2>Introduction</h2>
      <p>Effective debugging is a crucial skill for every JavaScript developer. Master these techniques to identify and fix issues quickly.</p>
      
      <h2>1. Browser DevTools Mastery</h2>
      <p>Learn to use breakpoints, step through code, inspect variables, and use the console effectively in Chrome DevTools or Firefox Developer Tools.</p>
      
      <h2>2. Console Methods</h2>
      <p>Use console.log(), console.table(), console.group(), and console.time() strategically for better debugging output.</p>
      
      <h2>3. Source Maps</h2>
      <p>Enable source maps in your build process to debug minified/transpiled code as if it were the original source.</p>
      
      <h2>4. Network Tab</h2>
      <p>Use the Network tab to inspect API calls, identify failed requests, and analyze response times.</p>
      
      <h2>5. React DevTools</h2>
      <p>For React applications, use React DevTools to inspect component state, props, and hooks.</p>
      
      <h2>6. Error Tracking</h2>
      <p>Implement error tracking tools like Sentry in production to catch and monitor errors in real-time.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering debugging tools and techniques will significantly improve your productivity and code quality.</p>
    `
  },
  '8': {
    title: "Mobile-First Development Strategy",
    category: "Mobile",
    readTime: "6 min read",
    author: "ProWeb Team",
    date: "Sep 28, 2025",
    content: `
      <h2>Introduction</h2>
      <p>Mobile-first development is an approach where you design and develop for mobile devices first, then progressively enhance the experience for larger screens. This strategy is crucial in today's mobile-dominated world.</p>
      
      <h2>Why Mobile-First?</h2>
      <p>With over 60% of web traffic coming from mobile devices, starting with mobile ensures your site works well for the majority of users. It also forces you to prioritize content and features.</p>
      
      <h2>1. Start with the Smallest Screen</h2>
      <p>Begin your design process with the smallest screen size. This constraint helps you focus on the most essential content and functionality.</p>
      
      <h2>2. Use Responsive Breakpoints</h2>
      <p>Use CSS media queries to add complexity as screen size increases. Start with base mobile styles and add min-width queries for larger screens.</p>
      
      <h2>3. Touch-Friendly Design</h2>
      <p>Ensure buttons and interactive elements are at least 44x44 pixels for easy tapping. Add adequate spacing between clickable elements.</p>
      
      <h2>4. Performance Optimization</h2>
      <p>Mobile users often have slower connections. Optimize images, minimize JavaScript, and use lazy loading to improve performance.</p>
      
      <h2>5. Test on Real Devices</h2>
      <p>Emulators are useful but nothing beats testing on actual mobile devices to understand the real user experience.</p>
      
      <h2>Conclusion</h2>
      <p>Mobile-first development leads to better user experiences across all devices and forces you to make smart decisions about content and features.</p>
    `
  },
  '9': {
    title: "Git Workflow for Development Teams",
    category: "DevOps",
    readTime: "11 min read",
    author: "ProWeb Team",
    date: "Sep 25, 2025",
    content: `
      <h2>Introduction</h2>
      <p>A well-defined Git workflow is essential for team collaboration. It ensures code quality, reduces conflicts, and streamlines the development process.</p>
      
      <h2>1. Git Flow</h2>
      <p>Git Flow uses multiple branches for features, releases, and hotfixes. It's ideal for projects with scheduled releases and multiple versions in production.</p>
      
      <h2>2. GitHub Flow</h2>
      <p>A simpler alternative where you branch from main, make changes, open a pull request, and merge after review. Perfect for continuous deployment.</p>
      
      <h2>3. Trunk-Based Development</h2>
      <p>Developers work on short-lived feature branches and merge frequently to the main branch. Requires good CI/CD and feature flags.</p>
      
      <h2>4. Commit Message Best Practices</h2>
      <p>Write clear, descriptive commit messages. Use conventional commits format: type(scope): description. Example: feat(auth): add password reset flow.</p>
      
      <h2>5. Code Review Process</h2>
      <p>All code should be reviewed before merging. Use pull request templates, require approvals, and run automated tests on every PR.</p>
      
      <h2>6. Branch Naming Conventions</h2>
      <p>Use consistent naming: feature/description, bugfix/description, hotfix/description. Include ticket numbers if applicable.</p>
      
      <h2>Conclusion</h2>
      <p>Choose a Git workflow that fits your team size and release cadence. Consistency is more important than which specific workflow you choose.</p>
    `
  }
}

// Force static generation - no server rendering needed
export const dynamic = 'force-static'
export const dynamicParams = false

// Generate static params for all tech tips at build time
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
  ]
}

export function generateMetadata({ params }) {
  const id = params.id
  const tip = techTipsData[id] || techTipsData['1']
  
  return {
    title: `${tip.title} | ProWeb Nigeria`,
    description: tip.content.replace(/<[^>]*>/g, '').substring(0, 160),
    alternates: {
      canonical: `/resources/tech-tips/${id}`,
    },
    robots: {
      index: true,
      follow: true,
    }
  }
}

export default function TechTipDetailPage({ params }) {
  const tipId = params.id
  const tip = techTipsData[tipId] || techTipsData['1']

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/resources/tech-tips"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tech Tips
            </Link>

            {/* Header */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-8">
              <div className="mb-6">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  {tip.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {tip.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>{tip.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{tip.readTime}</span>
                </div>
                <span>{tip.date}</span>
              </div>

              <div className="flex gap-4">
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
              <div dangerouslySetInnerHTML={{ __html: tip.content }} />
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Need Help with Web Development?</h2>
              <p className="text-xl mb-6 text-white/90">
                Our team specializes in building high-performance web applications.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Get in Touch
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
