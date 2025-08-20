"use client";

import type { PostType } from "../types/post";
import { Post } from "./Post";
import { useVelogStyle } from "../hooks/use-style";
import { useEffect, useState } from "react";

export function VelogPost({ post }: { post: PostType }) {
  const [processedPost, setProcessedPost] = useState<string>("");
  const { getVelogStyleAsync } = useVelogStyle();

  useEffect(() => {
    getVelogStyleAsync(post.body).then((res) => setProcessedPost(res));
  }, [post.body]);

  return (
    <Post>
      <Post.Title title={post.title} />
      <Post.Tags tags={post.tags} />
      <Post.Content body={processedPost} />
    </Post>
  );
}