import { useVelog } from "../hooks/use-velog";

export function FeedContent() {
    const { data: posts } = useVelog();
    
    return (
        <div>
        <h1>Feed</h1>
            {posts?.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.description }} />
                </div>
            ))}
    </div>
    )
}