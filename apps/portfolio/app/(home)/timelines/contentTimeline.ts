import { Timeline, Rally } from "@repo/interaction";

export function contentTimeline() {

  const contentTl = Timeline({
    playback: "stagger",
    staggerDelay: 0.05,
    playables: [

      Rally({
        target: ".topHr",
        motions: [
          {
            duration: 0.3,
            ease: "power2.inOut",
            opacity: { from: 0 },
            translateY: { from: '20%' },
          }
        ],
      }),

      Rally({
        target: ".topTitle",
        motions: [
          {
            duration: 0.5,
            ease: "power2.out",
            opacity: { from: 0 },
            translateY: { from: '20%' }
          }
        ],
      }),

      Rally({
        target: ".mainDescription",
        motions: [
          {
            duration: 0.5,
            ease: "power2.out",
            opacity: { from: 0 },
            translateY: { from: '20%' }
          }
        ],
      }),

      Rally({
        target: ".contentSection",
        motions: [
          {
            duration: 0.4,
            ease: "power2.out",
            translateY: { from: '5%' },
            opacity: { from: 0 }
          }
        ],
      }),
    ],
  });

  return contentTl;
}