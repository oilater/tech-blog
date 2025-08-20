import * as styles from './styles/PostSkeleton.css';

export function PostSkeleton() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
            <div className={styles.title}></div>
            <div className={styles.description}></div>
            <div className={styles.tags}>
                <div className={styles.tag}></div>
                <div className={styles.tag}></div>
                <div className={styles.tag}></div>
                <div className={styles.tag}></div>
            </div>
            </div>
        </div>
    );
}