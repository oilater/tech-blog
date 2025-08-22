"use client";

import type { PostType } from "../types/post";
import { Post } from "./Post";
import { useVelogStyle } from "../hooks/use-style";
import { useEffect, useState } from "react";
import { getRelativeDays } from "../utils/day";

type VelogPostProps = {
  post: PostType;
};

export function VelogPost({ post }: VelogPostProps) {
  const [styledContent, setStyledContent] = useState<string>("");
  const { getVelogStyleAsync } = useVelogStyle();

  useEffect(() => {
    getVelogStyleAsync(post.body)
    .then((res) => setStyledContent(res));
  }, [post.body, getVelogStyleAsync]);

  return (
    <Post>
      <Post.Title title={post.title} />
      <Post.Description author="김성현" postedAt={getRelativeDays(post.released_at)} />
      <Post.Tags tags={post.tags} />
      <Post.Content body={styledContent} />
    </Post>
  );
}