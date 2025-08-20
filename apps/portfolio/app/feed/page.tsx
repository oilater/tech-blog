"use client";

import { QueryProvider } from "../components/QueryProvider";
import { Feed } from "./components/Feed";

export default function FeedWrapper() {
  return (
    <QueryProvider>
      <Feed />
    </QueryProvider>
  );
}