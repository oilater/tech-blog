import type { MetadataRoute } from 'next';

const BASE_URL = "https://tech-blog-portfolio.vercel.app";

const STATIC_PAGES = [
  { url: BASE_URL, lastModified: new Date() },
  { url: `${BASE_URL}/feed`, lastModified: new Date() },
  { url: `${BASE_URL}/about`, lastModified: new Date() },
];

async function getPosts() {
  try {
    const response = await fetch(`${BASE_URL}/api/posts?username=oilater`);
    if (!response.ok) return [];
    
    const posts = await response.json();
    
    return posts.map((post: any) => ({
      url: `${BASE_URL}/feed/${post.id}`,
      lastModified: new Date(post.released_at || new Date()),
    }));
  } catch (error) {
    console.error('포스트 sitemap 생성 실패:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = STATIC_PAGES;
  const posts = await getPosts();
  
  return [...staticPages, ...posts];
}