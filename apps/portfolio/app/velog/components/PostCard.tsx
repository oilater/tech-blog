import { PostType } from "../types/post";
import * as styles from "../styles/PostCard.css";
import Link from "next/link";
import { getRelativeDays } from "../utils/day";

type PostCardProps = {
  post: PostType;
  link: string;
};

export function PostCard({ post, link }: PostCardProps) {
  const hasTags = post?.tags && post.tags.length > 0;

  return (
    <Link className={styles.card} href={link}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{post?.title}</h2>
        <p className={styles.cardDescription}>{post?.short_description}</p>
      </div>

      {hasTags && (
        <div className={styles.cardTags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.cardTag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className={styles.cardFooter}>
        <time className={styles.cardDate}>
          {getRelativeDays(post.released_at)}
        </time>
      </div>
    </Link>
  );
}