import { Timeline, Rally } from "@repo/interaction";

export function introTimeline() {
  const introTl = Timeline({
    playback: "serial",
    playables: [
      Rally({
        target: ".introTitleFill",
        motions: [
          {
            delay: 0.02,
            split: "chars",
            splitDelay: 0.05,
            duration: 0.5,
            ease: "expo.in",
            color: { from: "#3182f6"},
            opacity: { from: 0, to : 1, duration: 0.45, ease: "power2.inOut"},
          },
        ],
      }),
    ],
  });
  return introTl;
}