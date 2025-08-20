import { PostType } from '../types/post';
import { useVelogFetch } from './use-fetch';

type UseVelogProps = {
  username: string;
  cursor?: string;
  target: "posts" | "post";
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

export function useVelog({ username, cursor, target }: UseVelogProps): UseVelogReturn {
  const { data, isLoading, isError } = useVelogFetch({ target, username, cursor });
  
  if (isLoading) {
    return { posts: null, isLoading: true, isError: false };
  }
  
  if (isError || !data) {
    return { posts: null, isLoading: false, isError: true };
  }
  
  return { posts: data, isLoading: false, isError: false };
}