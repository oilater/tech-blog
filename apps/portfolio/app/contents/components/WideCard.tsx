import Link from "next/link";
import * as styles from "../../styles/components/WideCard.css";
import { ContentData } from "../types";

type WideCardProps = {
  value: ContentData;
};

export function WideCard({ value }: WideCardProps) {
  return (
    <Link href={value.link} className={styles.wideCard}>
      <div className={styles.cardImageWrapper}>
        <img src={value.image} alt={value.title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <span className={`${styles.categoryText}`}>{value.subTitle}</span>
        <h3 className={`${styles.cardTitle}`}>{value.title}</h3>
        <p className={`${styles.cardDescription}`}>{value.description}</p>
      </div>
    </Link>
  );
}