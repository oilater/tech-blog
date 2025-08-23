"use client";

import { useAtom } from "jotai";
import { VelogPostList } from "../../velog/components/VelogPostList";
import { ListSkeleton } from "../../velog/skeletons/ListSkeleton";
import { postsStoreAtom } from "../../stores/post";
import * as styles from "../styles/Feed.css";
import { useFetchPosts } from "../../velog/hooks/use-fetch-posts";
import { useInfiniteScroll } from "../hooks/use-infinite-scroll";

export function Feed() {
  const [posts, setPosts] = useAtom(postsStoreAtom);

  const { data: fetchedPosts } = useFetchPosts({
    username: 'oilater',
    cursor: posts?.at(-1)?.id
  });

  const { observeRef } = useInfiniteScroll({
    onIntersect: () => {
      fetchedPosts && setPosts([...posts, ...fetchedPosts]);
    }
  });

  const hasPosts = posts.length > 0;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.feedContainer}>Feed</h1>
      {hasPosts 
        ? <VelogPostList value={posts} ref={observeRef} />
        : <ListSkeleton /> 
      }
    </div>
  );
}