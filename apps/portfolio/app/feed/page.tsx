"use client";

import { QueryProvider } from "../components/QueryProvider";
import { Feed } from "./components/FeedWrapper";

export default function FeedWrapper() {
  return (
    <QueryProvider>
      <Feed />
    </QueryProvider>
  );
}