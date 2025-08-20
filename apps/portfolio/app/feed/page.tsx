"use client";

import { useAtomValue } from "jotai";
import { postsStoreAtom } from "../stores/post";
import { VelogPostList } from "../velog/components/VelogPostList";
import * as styles from "./styles/Feed.css";

export default function Feed() {
  const posts = useAtomValue(postsStoreAtom);

  return (
    <div>
      <h1 className={styles.feedContainer}>Feed</h1>
      <VelogPostList posts={posts} />
    </div>
  );
}