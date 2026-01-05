import { Suspense } from 'react'
import BlogPostClient from './BlogPostClient'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://prowebnaija.pythonanywhere.com/api'

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params
  
  try {
    const res = await fetch(`${API_URL}/blog/posts/${slug}/`, { 
      next: { revalidate: 3600 },
      headers: { 'Accept': 'application/json' }
    })
    
    if (res.ok) {
      const post = await res.json()
      return {
        title: `${post.title} | ProWeb Nigeria Blog`,
        description: post.excerpt || post.meta_description || `Read ${post.title} on ProWeb Nigeria Blog`,
        keywords: post.keywords || 'web design nigeria, website development, SEO',
        alternates: {
          canonical: `https://prowebnigeria.ng/blog/${slug}`,
        },
        openGraph: {
          title: post.title,
          description: post.excerpt || post.meta_description,
          url: `https://prowebnigeria.ng/blog/${slug}`,
          type: 'article',
          publishedTime: post.created_at,
          modifiedTime: post.updated_at,
          authors: [post.author || 'ProWeb Nigeria'],
          images: [
            {
              url: post.featured_image || 'https://prowebnigeria.ng/logo.webp',
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
        },
        twitter: {
          card: 'summary_large_image',
          title: post.title,
          description: post.excerpt || post.meta_description,
          images: [post.featured_image || 'https://prowebnigeria.ng/logo.webp'],
        },
      }
    }
  } catch (error) {
    console.error('Failed to fetch post metadata:', error)
  }
  
  return {
    title: 'Blog Post | ProWeb Nigeria',
    description: 'Read our latest insights on web design, SEO, and digital marketing in Nigeria.',
  }
}

// Fetch post data server-side
async function getPost(slug) {
  try {
    const res = await fetch(`${API_URL}/blog/posts/${slug}/`, { 
      next: { revalidate: 3600 },
      headers: { 'Accept': 'application/json' }
    })
    
    if (res.ok) {
      return await res.json()
    }
  } catch (error) {
    console.error('Failed to fetch post:', error)
  }
  return null
}

// Generate Article Schema
function generateArticleSchema(post) {
  if (!post) return null
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt || post.meta_description,
    "image": post.featured_image || "https://prowebnigeria.ng/logo.webp",
    "author": {
      "@type": "Person",
      "name": post.author || "ProWeb Nigeria"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ProWeb Nigeria",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prowebnigeria.ng/logo.webp"
      }
    },
    "datePublished": post.created_at,
    "dateModified": post.updated_at || post.created_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://prowebnigeria.ng/blog/${post.slug}`
    },
    "keywords": post.keywords || "web design nigeria, website development"
  }
}

// Generate Breadcrumb Schema
function generateBreadcrumbSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://prowebnigeria.ng"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://prowebnigeria.ng/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post?.title || "Article",
        "item": `https://prowebnigeria.ng/blog/${post?.slug}`
      }
    ]
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
  
  return (
    <>
      {/* Article Schema for rich snippets */}
      {post && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateArticleSchema(post))
          }}
        />
      )}
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(post))
        }}
      />
      
      {/* Server-rendered content for SEO crawlers */}
      {post && (
        <article className="sr-only">
          <h1>{post.title}</h1>
          <p>By {post.author || 'ProWeb Nigeria'} | Published: {post.created_at}</p>
          <p>{post.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content?.substring(0, 500) || '' }} />
        </article>
      )}
      
      {/* Client-side interactive content */}
      <Suspense fallback={<BlogPostLoading />}>
        <BlogPostClient slug={slug} initialPost={post} />
      </Suspense>
    </>
  )
}

function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-neutral-500">Loading article...</p>
      </div>
    </div>
  )
}
