import { ulid } from "ulid";
import { Blog } from "./Blog";
import { PostType } from "../types/post";

export function VelogPostList({ posts }: { posts: PostType[] }) {
  return (
    <Blog>
      <Blog.List>
        {posts?.map((post) => (
          <Blog.Card
            key={ulid()}
            post={post}
            link={`/${post.url_slug}`}
          />
        ))}
      </Blog.List>
    </Blog>
  );
}