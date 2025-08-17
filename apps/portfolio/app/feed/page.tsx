"use client";

import { FeedContent } from "../components/FeedContent";
import { VelogProvider } from "../components/VelogProvider";

export default function Feed() {
    return (
        <VelogProvider>
            <FeedContent />
        </VelogProvider>
    )
}