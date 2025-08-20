"use client";

import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { postsStoreAtom } from "../../stores/post";
import { useVelog } from "../hooks/use-velog";

export function VelogPostLoader() {
  const setPostMap = useSetAtom(postsStoreAtom);
  const { posts } = useVelog({ username: 'oilater', endpoint: 'posts' });

  useEffect(() => {
    setPostMap(posts ?? []);
  }, [posts, setPostMap]);

  return null;
}