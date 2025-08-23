"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { VelogPostList } from "../../velog/components/VelogPostList";
import { ListSkeleton } from "../../velog/skeletons/ListSkeleton";
import { postsStoreAtom } from "../../stores/post";
import * as styles from "../styles/Feed.css";
import { useFetchPosts } from "../../velog/hooks/use-fetch-posts";
import { useInfiniteScroll } from "../hooks/use-infinite-scroll";

export function Feed() {
  const accumulatedPosts = useAtomValue(postsStoreAtom);
  const setPosts = useSetAtom(postsStoreAtom);

  const { data: newPosts } = useFetchPosts({
    username: 'oilater',
    cursor: accumulatedPosts?.at(-1)?.id
  });

  const { observeRef } = useInfiniteScroll({
    onIntersect: () => {
      if (!newPosts) return;
      setPosts([...accumulatedPosts, ...newPosts]);
    }
  });

  const hasPosts = accumulatedPosts.length > 0;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.feedContainer}>Feed</h1>
      {hasPosts 
        ? <VelogPostList value={accumulatedPosts} ref={observeRef} />
        : <ListSkeleton /> 
      }
    </div>
  );
}