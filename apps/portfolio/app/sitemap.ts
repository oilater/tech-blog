import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://tech-blog-portfolio.vercel.app";
  
  return [
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
}