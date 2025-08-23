import { nanoid } from "nanoid";
import { Blog } from "./Blog";
import { PostType } from "../types/post";

type VelogPostListProps = {
  value: PostType[];
  ref?: React.RefObject<HTMLDivElement | null>;
};

export function VelogPostList({ value, ref }: VelogPostListProps) {
  return (
    <Blog>
      <Blog.List>
        {value?.map((post) => (
          <Blog.Row
            key={nanoid()}
            post={post}
            link={`/feed/${post.url_slug}`}
          />
        ))}
        {ref && <div ref={ref} />}
      </Blog.List>
    </Blog>
  );
}