import { ulid } from "ulid";
import { Blog } from "./Blog";
import { Post } from "../types/post";

export function Velog({ value }: { value: Post[] }) {
  return (
    <Blog>
      <Blog.List>
        {value?.map((post) => (
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