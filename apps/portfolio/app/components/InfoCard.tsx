import Image from 'next/image';
import * as styles from "../styles/components/InfoCard.css";

type InfoCardProps = {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
  isHighPriority?: boolean;
};

export function InfoCard({ title, description, image, onClick, isHighPriority }: InfoCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardImageWrapper}>
      <Image
        src={image}
        alt={title}
        fill
        className={styles.cardImage}
        priority={isHighPriority}
        quality={85}
        fetchPriority={isHighPriority ? 'high' : 'auto'}
      />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}