import { ContentSection } from "./ContentSection";
import { WideCard } from "./WideCard";
import { ARTICLES } from "../data";
import * as styles from "../../styles/sections/Content.css";

export function Work() {
  return (
    <ContentSection
      title="ARTICLE"
      description="최근 개발 경험을 공유해요."
      sectionClassName={styles.workSection}
    >
      {ARTICLES.map((work) => (
        <WideCard key={work.id} value={work} />
      ))}
    </ContentSection>
  );
}