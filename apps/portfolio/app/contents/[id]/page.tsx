'use client';

import { use } from 'react';
import { createArticle } from '../components/Article';
import { articleMap } from '../data';

export default function Article({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const article = articleMap[id];
  if (!article) return null;

  return createArticle(article);
}
