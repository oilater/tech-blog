"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { introTimeline } from "../timelines/IntroTimeline";
import * as styles from "../../styles/sections/Intro.css";

export function Intro() {
  const introScope = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    introTimeline().play();
  }, { scope: introScope });

  return (
    <div ref={introScope} className={styles.introWrapper}>
      <div className={`introTitleSection ${styles.introTitleSection}`}>
        <h1 className={`introTitle ${styles.baseTitle} ${styles.titleOrigin}`}>
          안녕하세요,<br />
          프론트엔드 개발자<br/> 
          <span className="subTitle">김성현</span>입니다.
        </h1>
        <h1 className={`introTitleFill ${styles.baseTitle} ${styles.title}`}>
          안녕하세요,<br />
          프론트엔드 개발자<br/> 
          <span className='subTitle'>김성현</span>입니다.
        </h1>
      </div>
    </div>
  );
}