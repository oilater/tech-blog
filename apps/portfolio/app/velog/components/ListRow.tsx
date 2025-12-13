import Link from 'next/link';
import * as styles from '../styles/ListRow.css';
import { PostType } from '../types/post';
import { getRelativeDays } from '../utils/day';
import { Tag } from './Tag';

type ListRowProps = {
  post: PostType;
  link: string;
};

export function ListRow({ post, link }: ListRowProps) {
  const hasTags = post?.tags && post.tags.length > 0;

  return (
    <Link className={styles.card} href={link}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{post?.title}</h2>
        <p className={styles.cardDescription}>
          {post?.short_description}
        </p>
      </div>

      {hasTags && <Tag tags={post.tags} />}

      <div className={styles.cardFooter}>
        <time className={styles.cardDate}>
          {getRelativeDays(post.released_at)}
        </time>
      </div>
    </Link>
  );
}
