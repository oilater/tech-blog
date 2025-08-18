"use client";

import { PortfolioConfig } from "../../config";
import { Velog } from "../velog/components/Velog";
import { useVelog } from "../velog/hooks/use-velog";

export default function Feed() {
    const { posts, error } = useVelog(PortfolioConfig.velogId);
    
    if (error) return <div>에러: {error}</div>;
    
    return (
        <div>
            <h1>Feed</h1>
            <Velog posts={posts} />
        </div>
    )
}