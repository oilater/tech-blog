"use client";

import * as styles from "../../styles/sections/Work.css";
import { useRef } from "react";
import { useAtom } from "jotai";
import { useGSAP } from "@gsap/react";
import { useScrollTrigger } from "@repo/interaction";
import { contentTimeline } from "../../(home)/timelines/contentTimeline";
import { animationPlayStateAtom } from "../../stores/timeline";
import { Top } from "../../components/Top";
import { WideCard } from "./WideCard";
import { WORK_DATA } from "../data";

export function Work() {
  const [isPlayed, setIsPlayed] = useAtom(animationPlayStateAtom);
  const { animateScroll } = useScrollTrigger();
  const contentContainer = useRef<HTMLDivElement>(null!);
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
  }, {scope: contentContainer});

  return (
    <div ref={contentContainer} className={styles.wrapper}>
      <hr className={`topHr ${styles.hr}`} />
      <Top.Root 
        title={
          <Top.Paragraph>
            <span className="topTitle">IN START-UP</span>
          </Top.Paragraph>
        }
      />

      <div className={`mainDescription ${styles.mainDescription}`}>
        <p>스타트업에서의 개발 경험을 공유합니다.</p>
      </div>

      <div className={`contentSection ${styles.contentSection}`}>
        {WORK_DATA.map((work) => (
            <WideCard 
              key={work.id} 
              value={work} />
          ))}
      </div>
    </div>
  );
}