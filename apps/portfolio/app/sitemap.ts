import { MetadataRoute } from "next";
import type { PostType } from "./velog/types/post";

const errorMessage = "[Sitemap] Velog 포스트를 가져오는데 실패했습니다 ❌";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = "https://tech-blog-portfolio.vercel.app";

  const staticUrls = ["/", "/feed", "/about"];
  const staticSitemap = staticUrls.map((url) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
  }));

  let velogPosts: PostType[] = [];
  try {
    const velogResponse = await fetch(`${BASE_URL}/api/posts?username=oilater`);
    if (velogResponse.ok) {
      const velogData: PostType[] = await velogResponse.json();
      velogPosts = velogData || [];
    }
  } catch (err) {
    console.error(errorMessage, err);
  }

  const velogSitemap = velogPosts.map((post) => ({
    url: `${BASE_URL}/${post.url_slug}`,
    lastModified: new Date(post.released_at),
  }));

  return [...staticSitemap, ...velogSitemap];
}