"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { VelogPostList } from "../../velog/components/VelogPostList";
import { ListSkeleton } from "../../velog/skeletons/ListSkeleton";
import { postsStoreAtom } from "../../stores/post";
import * as styles from "../styles/Feed.css";
import { useVelog } from "../../velog/hooks/use-velog";
import { useCallback } from "react";
import { useInfiniteScroll } from "../hooks/use-infinite-scroll";

export function Feed() {
    const posts = useAtomValue(postsStoreAtom);
    const setPosts = useSetAtom(postsStoreAtom);
    const nextCursor = posts[posts.length - 1]?.id;
    const { posts: nextPosts } = useVelog({ 
        username: 'oilater', 
        endpoint: 'posts', 
        cursor: nextCursor 
    });

    const onLoadMore = useCallback(() => {
      if (nextPosts) {
        setPosts([...posts, ...nextPosts]);
      }
    }, [nextPosts]);

    const { observeRef } = useInfiniteScroll({
        onIntersect: onLoadMore,
        rootMargin: '0px',
        threshold: 1.0
    });

    if (posts.length === 0) return <ListSkeleton />;
    
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.feedContainer}>Feed</h1>
        <VelogPostList posts={posts} ref={observeRef} />
      </div>
    );
}