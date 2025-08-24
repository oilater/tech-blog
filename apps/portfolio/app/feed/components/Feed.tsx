"use client";

import * as styles from "../styles/Feed.css";
import { useAtom } from "jotai";
import { VelogPostList } from "../../velog/components/VelogPostList";
import { ListSkeleton } from "../../velog/skeletons/ListSkeleton";
import { postsStoreAtom } from "../../stores/post";
import { useFetchPosts } from "../../velog/hooks/use-fetch-posts";
import { useInfiniteScroll } from "../hooks/use-infinite-scroll";

export function Feed() {
  const [posts, setPosts] = useAtom(postsStoreAtom);

  const { data: fetchedPosts, isLoading } = useFetchPosts({
    username: 'oilater',
    cursor: posts?.at(-1)?.id
  });

  console.log(fetchedPosts);

  const { observeRef } = useInfiniteScroll({
    onIntersect: () => {
      if(fetchedPosts) setPosts([...posts, ...fetchedPosts]);
    }
  });

  if (isLoading && posts.length === 0) return <ListSkeleton />;
  

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.feedContainer}>Feed</h1>
      <VelogPostList value={posts} ref={observeRef} />
    </div>
  );
}