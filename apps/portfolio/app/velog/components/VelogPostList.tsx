import { ulid } from "ulid";
import { Blog } from "./Blog";
import { PostType } from "../types/post";

type VelogPostListProps = {
  posts: PostType[];
};

export function VelogPostList({ posts }: VelogPostListProps) {
  return (
    <Blog>
      <Blog.List>
        {posts?.map((post) => (
          <Blog.Row
            key={ulid()}
            post={post}
            link={`/${post.url_slug}`}
          />
        ))}
      </Blog.List>
    </Blog>
  );
}