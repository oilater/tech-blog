import { ulid } from "ulid";
import { Blog } from "./Blog";
import { PostType } from "../types/post";

type VelogPostListProps = {
  posts: PostType[];
  ref?: React.RefObject<HTMLDivElement | null>;
};

export function VelogPostList({ posts, ref }: VelogPostListProps) {
  return (
    <Blog>
      <Blog.List>
        {posts?.map((post) => (
          <Blog.Row
            key={ulid()}
            post={post}
            link={`/feed/${post.url_slug}`}
          />
        ))}
        {ref && <div ref={ref} />}
      </Blog.List>
    </Blog>
  );
}