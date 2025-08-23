"use client";

import { useRef } from "react";
import { useAtom } from "jotai";
import { useGSAP } from "@gsap/react";
import { useScrollTrigger } from "@repo/interaction";
import { contentTimeline } from "../../(home)/timelines/contentTimeline";
import { animationPlayStateAtom } from "../../stores/timeline";
import { CONTENTS } from "../data";
import { Top } from "../../components/Top";
import { ContentCard } from "./ContentCard";
import * as styles from "../../styles/sections/Content.css";

export function Content() {
  const [isPlayed, setIsPlayed] = useAtom(animationPlayStateAtom);
  const { animateScroll } = useScrollTrigger();
  const containerRef = useRef<HTMLDivElement>(null!);
  let contentTl: gsap.core.Timeline;

  useGSAP(() => {
    if (isPlayed('content')) return;
    contentTl = contentTimeline().eventCallback('onComplete', () => setIsPlayed('content'));
    
    animateScroll({
      target: '.topHr',
      timeline: contentTl,
      options: {
        start: 'top 85%',
        end: 'bottom 100%',
      },
    });
  }, {scope: containerRef});

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <hr className={`topHr ${styles.hr}`} />
      <Top.Root 
        title={
          <Top.Paragraph>
            <span className="topTitle">CONTENT </span>
          </Top.Paragraph>
        }
      />

      <div className={`mainDescription ${styles.mainDescription}`}>
        <p>새로운 것을 배우면 재밌는 서비스로 만들어봅니다.</p>
      </div>

      <div className={`contentSection ${styles.contentSection}`}>
        {CONTENTS.map((content) => (
          <ContentCard key={content.id} content={content}/>
        ))}
      </div>
    </div>
  );
}