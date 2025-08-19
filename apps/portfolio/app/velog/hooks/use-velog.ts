
import { Post } from '../types/post';
import { useVelogFetch } from './use-fetch';
import { useVelogStyle } from './use-style';

type UseVelogProps = {
  username: string;
  cursor?: string;
  target: "posts" | "post";
};

export function useVelog({ username, cursor, target }: UseVelogProps) {
  const { setVelogStyle } = useVelogStyle();
  const { data, isLoading, isError } = useVelogFetch({ target, username, cursor });
  
  const posts = data?.map((post: Post) => {
    return {
      ...post,
      body: setVelogStyle(post.body)
    };
  });

  return { posts, isLoading, isError };
}