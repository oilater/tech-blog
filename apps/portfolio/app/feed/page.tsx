"use client";

import * as styles from "./styles/Feed.css";
import { useAtomValue } from "jotai";
import { postsStoreAtom } from "../stores/post";
import { VelogPostList } from "../velog/components/VelogPostList";
import { ListSkeleton } from "../skeletons/ListSkeleton";

export default function Feed() {
  const posts = useAtomValue(postsStoreAtom);

  if (posts.length === 0) return <ListSkeleton />;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.feedContainer}>Feed</h1>
      <VelogPostList posts={posts} />
    </div>
  );
}