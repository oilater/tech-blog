'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from '@repo/interaction';
import { progressBarContainer, progressBar } from '../styles/components/ScrollProgressBar.css';

export default function ScrollProgressBar({ trigger }: { trigger?: string }) {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const progressBar = progressBarRef.current;
    
    if (progressBar) {
      ScrollTrigger.create({
        trigger: trigger,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          gsap.to(progressBar, {
            width: `${self.progress * 100}%`,
            duration: 0.1,
            ease: 'none'
          });
        }
      });
    }
  }, [trigger]);

  return (
    <div className={progressBarContainer}>
      <div ref={progressBarRef} className={progressBar} />
    </div>
  );
}