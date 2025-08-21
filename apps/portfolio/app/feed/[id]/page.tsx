"use client";

import Loading from "./loading";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { getPostBySlug } from "../../stores/post";
import { useParams } from "next/navigation";
import { VelogPost } from "../../velog/components/VelogPost";

export default function DetailPage() {
    useEffect(() => window.scrollTo(0, 0), []);

    const { id } = useParams<{ id: string }>();
    const getPost = useAtomValue(getPostBySlug);
    const post = getPost(id);
    
    if (!post) return <Loading />;

    return <VelogPost post={post} />;
}