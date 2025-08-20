import type { MetadataRoute } from 'next';
import type { PostType } from "./velog/types/post";

const BASE_URL = "https://tech-blog-portfolio.vercel.app";
const API_ENDPOINT = `${BASE_URL}/api/posts?username=oilater`;
const errorMessage = "[Sitemap] Velog 포스트를 가져오는데 실패했습니다 ❌";

const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/feed`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
  ];

async function getPosts(): Promise<PostType[]> {
  try {
    const response = await fetch(API_ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      return data.posts || [];
    }
  } catch (err) {
    console.error(errorMessage, err);
  }
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const postSitemap = posts.map((post) => ({
    url: `${BASE_URL}/${post.url_slug}`,
    lastModified: new Date(post.released_at),
  }));

  return [
    ...staticPages,
    ...postSitemap,
  ];
}