// import { Post } from "../types/post";
import { PostList } from "./PostList";

type Props = {
    posts?: any[];
}

export function Velog({posts}: Props) {
    if (!posts) return null;
    
    return <PostList posts={posts} />;
}