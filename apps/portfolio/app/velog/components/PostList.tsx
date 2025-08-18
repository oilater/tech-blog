import type { Post } from "../types/post";
import { ulid } from "ulid";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={ulid()} post={post} />
      ))}
    </div>
  );
}

function Post({ post }: { post: Post }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
    );
}
