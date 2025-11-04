import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  ExternalLink, 
  Calendar, 
  User,
  ArrowRight,
  Filter,
  Search,
  TrendingUp,
  Award,
  Zap,
  Shield,
  Smartphone,
  Code2,
  Database,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Tech Reviews & Tool Comparisons - Web Development Tools',
  description: 'In-depth reviews of web development tools, frameworks, and technologies. Compare the best tools for your next project with expert insights.',
  keywords: [
    'web development tools review',
    'nextjs vs react comparison',
    'javascript framework review',
    'web design tools nigeria',
    'tech tool comparison',
    'development tool reviews',
    'programming tools'
  ],
  openGraph: {
    title: 'Tech Reviews & Tool Comparisons - Web Development Tools',
    description: 'In-depth reviews of web development tools, frameworks, and technologies. Expert insights to help you choose the right tools.',
    url: 'https://prowebnigeria.ng/resources/tech-reviews',
    siteName: 'ProWeb Nigeria',
    images: [
      {
        url: 'https://prowebnigeria.ng/og-tech-reviews.jpg',
        width: 1200,
        height: 630,
        alt: 'ProWeb Nigeria - Tech Reviews & Tool Comparisons',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function TechReviewsPage() {
  const categories = [
    { name: 'All Reviews', count: 28, active: true },
    { name: 'Frameworks', count: 8 },
    { name: 'Tools', count: 12 },
    { name: 'Hosting', count: 5 },
    { name: 'Design', count: 3 }
  ];

  const featuredReviews = [
    {
      id: 1,
      title: "Next.js 14 vs React 18: Complete Comparison",
      excerpt: "Comprehensive comparison of Next.js 14 and React 18, covering performance, features, and use cases to help you choose the right framework.",
      category: "Frameworks",
      rating: 4.8,
      pros: ["Server-side rendering", "Built-in optimization", "Great developer experience"],
      cons: ["Learning curve", "Opinionated structure"],
      author: "ProWeb Team",
      date: "Oct 15, 2025",
      readTime: "12 min read",
      image: "/reviews/nextjs-vs-react.jpg",
      featured: true,
      tags: ["Next.js", "React", "Framework Comparison"],
      verdict: "Excellent for full-stack applications",
      icon: Code2,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Vercel vs Netlify vs AWS: Hosting Showdown",
      excerpt: "Detailed comparison of popular hosting platforms for modern web applications, including pricing, features, and performance analysis.",
      category: "Hosting",
      rating: 4.6,
      pros: ["Easy deployment", "Great performance", "Excellent support"],
      cons: ["Pricing can add up", "Limited customization"],
      author: "ProWeb Team",
      date: "Oct 12, 2025",
      readTime: "10 min read",
      image: "/reviews/hosting-comparison.jpg",
      featured: true,
      tags: ["Hosting", "Vercel", "Netlify", "AWS"],
      verdict: "Vercel wins for Next.js projects",
      icon: Globe,
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Tailwind CSS vs Styled Components: 2025 Review",
      excerpt: "In-depth analysis of two popular CSS-in-JS solutions, comparing developer experience, performance, and maintainability.",
      category: "Tools",
      rating: 4.7,
      pros: ["Utility-first approach", "Great performance", "Excellent tooling"],
      cons: ["Initial learning curve", "HTML can look cluttered"],
      author: "ProWeb Team",
      date: "Oct 10, 2025",
      readTime: "8 min read",
      image: "/reviews/tailwind-vs-styled.jpg",
      featured: true,
      tags: ["CSS", "Tailwind", "Styled Components"],
      verdict: "Tailwind for utility-first lovers",
      icon: Zap,
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const allReviews = [
    {
      id: 4,
      title: "TypeScript vs JavaScript: When to Make the Switch",
      category: "Languages",
      rating: 4.9,
      author: "ProWeb Team",
      date: "Oct 8, 2025",
      readTime: "9 min read",
      excerpt: "Comprehensive guide on when and why to adopt TypeScript in your projects.",
      tags: ["TypeScript", "JavaScript"],
      verdict: "TypeScript for large applications"
    },
    {
      id: 5,
      title: "Figma vs Adobe XD: Design Tool Comparison",
      category: "Design",
      rating: 4.5,
      author: "ProWeb Team",
      date: "Oct 5, 2025",
      readTime: "7 min read",
      excerpt: "Detailed comparison of two leading design tools for web and mobile design.",
      tags: ["Figma", "Adobe XD", "Design Tools"],
      verdict: "Figma for collaboration"
    },
    {
      id: 6,
      title: "MongoDB vs PostgreSQL: Database Showdown",
      category: "Databases",
      rating: 4.6,
      author: "ProWeb Team",
      date: "Oct 3, 2025",
      readTime: "11 min read",
      excerpt: "Compare NoSQL vs SQL databases for modern web applications.",
      tags: ["MongoDB", "PostgreSQL", "Database"],
      verdict: "Depends on your data structure"
    },
    {
      id: 7,
      title: "VS Code Extensions: Top 20 for Web Developers",
      category: "Tools",
      rating: 4.8,
      author: "ProWeb Team",
      date: "Oct 1, 2025",
      readTime: "6 min read",
      excerpt: "Essential VS Code extensions that will boost your productivity.",
      tags: ["VS Code", "Extensions", "Productivity"],
      verdict: "Must-have for developers"
    },
    {
      id: 8,
      title: "React Native vs Flutter: Mobile Development",
      category: "Mobile",
      rating: 4.4,
      author: "ProWeb Team",
      date: "Sep 28, 2025",
      readTime: "13 min read",
      excerpt: "Cross-platform mobile development framework comparison.",
      tags: ["React Native", "Flutter", "Mobile"],
      verdict: "React Native for web developers"
    },
    {
      id: 9,
      title: "GitHub vs GitLab vs Bitbucket: Git Hosting",
      category: "Tools",
      rating: 4.7,
      author: "ProWeb Team",
      date: "Sep 25, 2025",
      readTime: "8 min read",
      excerpt: "Compare the top Git hosting platforms for your projects.",
      tags: ["GitHub", "GitLab", "Bitbucket"],
      verdict: "GitHub for open source"
    }
  ];

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'text-success-600';
    if (rating >= 4.0) return 'text-warning-600';
    return 'text-error-600';
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < fullStars
                ? 'text-yellow-500 fill-current'
                : index === fullStars && hasHalfStar
                ? 'text-yellow-500 fill-current opacity-50'
                : 'text-neutral-300'
            }`}
          />
        ))}
        <span className={`ml-2 font-semibold ${getRatingColor(rating)}`}>
          {rating}
        </span>
      </div>
    );
  };

  return (
    <main className="min-h-screen">
      <Header />
      
        {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-success-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-success-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <Award className="w-4 h-4" />
              <span>Tech Reviews & Comparisons</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 animate-fade-in-up animation-delay-200">
              Honest Reviews of
              <span className="block gradient-text">Web Development Tools</span>
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Make informed decisions with our comprehensive reviews and comparisons of web development 
              tools, frameworks, and technologies. Based on real-world experience and testing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
              <Link
                href="#reviews"
                className="btn-primary btn-lg group shadow-xl hover:shadow-2xl"
              >
                <span>Browse Reviews</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary btn-lg shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                <span>Request Review</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">28+</div>
                <div className="text-sm text-neutral-600">Tools Reviewed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success-600 mb-2">4.7</div>
                <div className="text-sm text-neutral-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">50+</div>
                <div className="text-sm text-neutral-600">Hours Testing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning-600 mb-2">12</div>
                <div className="text-sm text-neutral-600">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Search */}
      <section className="section bg-white border-b border-neutral-200">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search & Filter */}
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  className="pl-10 pr-4 py-2 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300"
                />
              </div>
              <button className="px-4 py-2 border border-neutral-300 rounded-xl hover:bg-neutral-50 transition-colors">
                <Filter className="w-5 h-5 text-neutral-600" />
              </button>
            </div>
          </div>
          </div>
        </section>

      {/* Featured Reviews */}
      <section id="reviews" className="section bg-gradient-to-br from-neutral-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Featured Reviews
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our most comprehensive and popular tool reviews and comparisons
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredReviews.map((review, index) => (
              <article
                key={review.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Header */}
                <div className={`h-48 bg-gradient-to-br ${review.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                      {review.category}
                    </span>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        {renderStars(review.rating)}
                      </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <review.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {review.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {review.excerpt}
                  </p>

                  {/* Pros & Cons Preview */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="text-sm font-semibold text-success-700 mb-2 flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Pros
                      </h5>
                      <ul className="text-xs text-neutral-600 space-y-1">
                        {review.pros.slice(0, 2).map((pro, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1 h-1 bg-success-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-error-700 mb-2 flex items-center">
                        <ThumbsDown className="w-4 h-4 mr-1" />
                        Cons
                      </h5>
                      <ul className="text-xs text-neutral-600 space-y-1">
                        {review.cons.slice(0, 2).map((con, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1 h-1 bg-error-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Verdict */}
                  <div className="bg-gradient-to-r from-primary-50 to-success-50 rounded-xl p-3 mb-4">
                    <div className="text-sm font-semibold text-neutral-900 mb-1">Our Verdict:</div>
                    <div className="text-sm text-neutral-700">{review.verdict}</div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{review.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{review.date}</span>
                  </div>
                </div>

                  <Link
                    href={`/resources/tech-reviews/${review.id}`}
                    className="btn-primary btn-sm w-full group"
                  >
                    <span>Read Full Review</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
              ))}
            </div>
          </div>
        </section>

      {/* All Reviews */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Latest Reviews
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Stay updated with our latest tool reviews and technology comparisons
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review, index) => (
              <article
                key={review.id}
                className="bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {review.category}
                  </span>
                  {renderStars(review.rating)}
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-3 hover:text-primary-600 transition-colors">
                  {review.title}
                </h3>
                
                <p className="text-neutral-600 mb-4 line-clamp-2">
                  {review.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {review.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded-lg text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Verdict */}
                <div className="bg-gradient-to-r from-success-50 to-primary-50 rounded-lg p-3 mb-4">
                  <div className="text-xs font-semibold text-neutral-700 mb-1">Verdict:</div>
                  <div className="text-sm text-neutral-800">{review.verdict}</div>
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                  <span>{review.readTime}</span>
                  <span>{review.date}</span>
                </div>

                <Link
                  href={`/resources/tech-reviews/${review.id}`}
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center group"
                >
                  <span>Read Review</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary btn-lg shadow-lg hover:shadow-xl">
              <span>Load More Reviews</span>
              <TrendingUp className="w-5 h-5 ml-2" />
            </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Tool Review?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Looking for a review of a specific tool or technology? Our team can provide 
              detailed analysis and comparisons tailored to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <span>Request Custom Review</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                <span>Browse All Resources</span>
              </Link>
            </div>
            </div>
          </div>
        </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
