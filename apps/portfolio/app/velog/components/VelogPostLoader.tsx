"use client";

import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { postsStoreAtom } from "../../stores/post";
import { useVelog } from "../hooks/use-velog";

export function VelogPostLoader() {
  const { posts } = useVelog({ username: 'oilater' });
  const setPostMap = useSetAtom(postsStoreAtom);

  useEffect(() => {
    if (posts) setPostMap(posts);
  }, [posts, setPostMap]);

  return null;
}