"use client";

import * as styles from "../../styles/sections/Content.css";
import { useRef } from "react";
import { useAtom } from "jotai";
import { useGSAP } from "@gsap/react";
import { useScrollTrigger } from "@repo/interaction";
import { contentTimeline } from "../../(home)/timelines/contentTimeline";
import { animationPlayStateAtom } from "../../stores/timeline";
import { Top } from "../../components/Top";
import { ReactNode } from "react";

type ContentSectionProps = {
  title: string;
  description: string;
  children: ReactNode;
  sectionClassName?: string;
};

export function ContentSection({ 
  title, 
  description, 
  children, 
  sectionClassName 
}: ContentSectionProps) {
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
            <span className="topTitle">{title}</span>
          </Top.Paragraph>
        }
      />

      <div className={`mainDescription ${styles.mainDescription}`}>
        <p>{description}</p>
      </div>

      <div className={`contentSection ${sectionClassName || ''}`}>
        {children}
      </div>
    </div>
  );
}