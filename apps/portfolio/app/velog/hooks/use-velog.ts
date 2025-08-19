import { useState, useEffect } from 'react';
import { Post } from '../types/post';
import { useVelogStyle } from './use-style';
import { useVelogFetch } from './use-fetch';

type UseVelogProps = {
  username: string;
  cursor?: string;
};

export function useVelog({ username, cursor }: UseVelogProps) {
  const { fetchPosts } = useVelogFetch();
  const { setVelogStyle } = useVelogStyle();

  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;
    
    const loadVelogPosts = async () => {
      try {
        const fetched = await fetchPosts({ username, cursor });
        const transformedPosts = await Promise.all(
          fetched.map(async (post: Post) => ({
            id: post.id,
            title: post.title,
            description: post.description,
            body: await setVelogStyle(post.body),
            createdAt: post.createdAt,
            tags: post.tags,
          }))
        );
        setPosts(transformedPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : '에러가 발생했어요 🥲');
      }
    };

    loadVelogPosts();
  }, [username, cursor]);

  return { posts, error };
}