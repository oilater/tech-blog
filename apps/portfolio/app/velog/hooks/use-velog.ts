import { PostType } from '../types/post';
import { useFetch } from './use-fetch';

type UseVelogProps = {
  username: string;
  cursor?: string;
};

type UseVelogReturn = {
  posts: PostType[];
  isLoading: boolean;
  isError: boolean;
} | {
  posts: null;
  isLoading: boolean;
  isError: boolean;
};

export function useVelog({ username, cursor }: UseVelogProps): UseVelogReturn {
  const params = new URLSearchParams({ username });
  if (cursor) params.append("cursor", cursor);

  const { data, isLoading, isError } = useFetch({ 
    username, 
    cursor, 
    endpoint: `/api/posts?${params}`,
  });

  if (isLoading) {
    return { posts: null, isLoading: true, isError: false };
  }
  
  if (isError || !data) {
    return { posts: null, isLoading: false, isError: true };
  }
  
  return { posts: data, isLoading: false, isError: false };
}