import Link from "next/link";
import * as styles from "../../styles/components/WideCard.css";
import { ContentData } from "../types";

type WideCardProps = {
  value: ContentData;
};

export function WideCard({ value }: WideCardProps) {
  return (
    <Link href={`/contents/${value.id}`} className={styles.wideCard}>
      <div className={styles.cardImageWrapper}>
        <img src={value.image} alt={value.title} className={styles.cardImage} loading="lazy" />
      </div>
      <div className={styles.cardContent}>
        <span className={`${styles.categoryText} ${styles.categoryTextHover}`}>{value.subTitle}</span>
        <h3 className={`${styles.cardTitle} ${styles.cardTitleHover}`}>{value.title}</h3>
        <p className={`${styles.cardDescription} ${styles.cardDescriptionHover}`}>{value.description}</p>
      </div>
    </Link>
  );
}