"use client";

import { VelogProvider } from "../velog/components/VelogProvider";
import { Feed } from "./components/Feed";

export default function FeedContainer() {
  return (
    <VelogProvider>
      <Feed />
    </VelogProvider>
  );
}