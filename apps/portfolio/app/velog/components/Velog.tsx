"use client";

import { PortfolioConfig } from "../../../config";
import { useVelog } from "../hooks/use-velog";
import { PostList } from "./PostList";

export function Velog() {
    const { posts, error } = useVelog({
        username: PortfolioConfig.velogId,
    });
    
    if (error) return <div>에러: {error}</div>;
    if (!posts) return null;
    
    return <PostList posts={posts} />;
}