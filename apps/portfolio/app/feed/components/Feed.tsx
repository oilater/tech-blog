'use client';

import { useAtom } from 'jotai';
import { postsStoreAtom } from '../../stores/post';
import { VelogPostList } from '../../velog/components/VelogPostList';
import { useFetchPosts } from '../../velog/hooks/use-fetch-posts';
import { ListSkeleton } from '../../velog/skeletons/ListSkeleton';
import { useInfiniteScroll } from '../hooks/use-infinite-scroll';
import * as styles from '../styles/Feed.css';

export function Feed() {
  const [posts, setPosts] = useAtom(postsStoreAtom);

  const { data: fetchedPosts, isLoading } = useFetchPosts({
    username: 'oilater',
    cursor: posts?.at(-1)?.id,
  });

  const { observeRef } = useInfiniteScroll({
    onIntersect: () => {
      if (fetchedPosts) setPosts([...posts, ...fetchedPosts]);
    },
  });

  if (isLoading && posts.length === 0) {
    return <ListSkeleton />;
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.feedContainer}>Feed</h1>
      <VelogPostList posts={posts} ref={observeRef} />
    </div>
  );
}
