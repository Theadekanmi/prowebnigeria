// API Configuration
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

// Helper function for API calls
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      next: { revalidate: 60 }, // Cache for 60 seconds
    });
    
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error);
    return null;
  }
}

// ============ BLOG ============
export async function getBlogPosts() {
  const data = await fetchAPI('/blog/posts/');
  return data?.results || data || [];
}

export async function getBlogPost(slug) {
  return fetchAPI(`/blog/posts/${slug}/`);
}

export async function getBlogCategories() {
  return fetchAPI('/blog/categories/') || [];
}

export async function getFeaturedPosts() {
  return fetchAPI('/blog/posts/featured/') || [];
}

// ============ PORTFOLIO ============
export async function getProjects() {
  const data = await fetchAPI('/portfolio/projects/');
  return data?.results || data || [];
}

export async function getProject(slug) {
  return fetchAPI(`/portfolio/projects/${slug}/`);
}

export async function getFeaturedProjects() {
  return fetchAPI('/portfolio/projects/featured/') || [];
}

export async function getProjectCategories() {
  return fetchAPI('/portfolio/categories/') || [];
}

// ============ CORE ============
export async function getTestimonials() {
  return fetchAPI('/core/testimonials/') || [];
}

export async function getFeaturedTestimonials() {
  return fetchAPI('/core/testimonials/featured/') || [];
}

export async function getTeamMembers() {
  return fetchAPI('/core/team/') || [];
}

export async function getFAQs() {
  return fetchAPI('/core/faqs/') || [];
}

export async function getServices() {
  return fetchAPI('/core/services/') || [];
}

export async function getService(slug) {
  return fetchAPI(`/core/services/${slug}/`);
}

export async function getSiteSettings() {
  return fetchAPI('/core/settings/');
}

// ============ CONTACT FORM ============
export async function submitContactForm(data) {
  try {
    const res = await fetch(`${API_URL}/core/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!res.ok) {
      throw new Error('Failed to submit');
    }
    
    return { success: true, message: 'Thank you! We will get back to you soon.' };
  } catch (error) {
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
}
