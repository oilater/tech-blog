'use client';

import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { postsStoreAtom } from '../../stores/post';
import { useFetchPosts } from '../hooks/use-fetch-posts';

export function VelogPostLoader() {
  const { data: posts } = useFetchPosts({ username: 'oilater' });
  const setPostMap = useSetAtom(postsStoreAtom);

  useEffect(() => {
    if (posts) setPostMap(posts);
  }, [posts, setPostMap]);

  return null;
}
