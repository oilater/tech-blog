import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Timeline } from './core/timeline';
import { Rally } from './core/rally';
import { useScrollTrigger } from './hooks/useScrollTrigger';


gsap.registerPlugin(
  ScrollTrigger,
  SplitText
);

export { Timeline, Rally, useScrollTrigger };
