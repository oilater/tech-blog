"use client";

import Loading from "./loading";
import { useAtomValue } from "jotai";
import { getPostBySlug } from "../stores/post";
import { useParams } from "next/navigation";
import { VelogPost } from "../velog/components/VelogPost";

export default function DetailPage() {
    const { url_slug } = useParams<{ url_slug: string }>();
    const getPost = useAtomValue(getPostBySlug);
    const post = getPost(url_slug);

    if (!post) return <Loading />;

    return <VelogPost post={post} />;
}