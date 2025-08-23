import * as styles from './styles/ListSkeleton.css';

export function ListSkeleton() {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.blogList}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle} />
          <div className={styles.cardDescription} />
        </div>
        <div className={styles.tags}>
          <div className={styles.tag} />
          <div className={styles.tag} />
          <div className={styles.tag} />
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.cardDate} />
        </div>
      </div>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.blogList}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle} />
          <div className={styles.cardDescription} />
        </div>
        <div className={styles.tags}>
          <div className={styles.tag} />
          <div className={styles.tag} />
          <div className={styles.tag} />
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.cardDate} />
        </div>
      </div>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.blogList}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle} />
          <div className={styles.cardDescription} />
        </div>
      </div>
    </div>
    </>
  );
}