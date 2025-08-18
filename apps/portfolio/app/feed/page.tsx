"use client";

import { Velog } from "../components/Velog";
import { useVelog } from "../hooks/use-velog";

export default function Feed() {
    const { posts, error } = useVelog("oilater");
    
    if (error) return <div>에러: {error}</div>;
    
    return (
        <div>
            <h1>Feed</h1>
            <Velog posts={posts} />
        </div>
    )
}