"use client";

import { QueryProvider } from "../components/providers/QueryProvider";
import { Feed } from "./components/Feed";

export default function FeedWrapper() {
  return (
    <QueryProvider>
      <Feed />
    </QueryProvider>
  );
}