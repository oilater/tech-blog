import type { ReactNode } from "react";
import * as styles from "../styles/components/Card.css";
import Link from "next/link";

type CardProps = {
  link: string;
  isInternal: boolean;
  children: ReactNode;
};

type CardImageProps = {
  image: string;
};

type CardTitleProps = {
  children: ReactNode;
};

type CardDescriptionProps = {
  children: ReactNode;
};

type CardTagsProps = {
  children: ReactNode;
};

export function Card({ link, isInternal, children }: CardProps) {
  return (
    <Link href={link} className={styles.card} target={isInternal ? undefined : "_blank"}>
      {children}
    </Link>
  );
}

function CardImage({ image }: CardImageProps) {
  return (
    <div className={styles.cardImageWrapper}>
      <img src={image} alt="content image" className={styles.cardImage} />
    </div>
  );
}

function CardContent({ children }: { children: ReactNode }) {
  return <div className={styles.cardContent}>{children}</div>;
}

function CardTitle({ children }: CardTitleProps) {
  return <p className={styles.cardTitle}>{children}</p>;
}

function CardDescription({ children }: CardDescriptionProps) {
  return <p className={styles.cardDescription}>{children}</p>;
}

function CardTags({ children }: CardTagsProps) {
  return <div className={styles.cardTags}>{children}</div>;
}

Card.Image = CardImage;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Tags = CardTags;