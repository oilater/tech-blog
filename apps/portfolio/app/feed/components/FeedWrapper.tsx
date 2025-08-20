import { useAtomValue, useSetAtom } from "jotai";
import { VelogPostList } from "../../velog/components/VelogPostList";
import { ListSkeleton } from "../../skeletons/ListSkeleton";
import { postsStoreAtom } from "../../stores/post";
import * as styles from "../styles/Feed.css";
import { useVelog } from "../../velog/hooks/use-velog";
import { button } from "../../styles/components/Button.css";


export function Feed() {
    const posts = useAtomValue(postsStoreAtom);
    const nextCursor = posts[posts.length - 1]?.id;
    const { posts: nextPosts } = useVelog({ 
        username: 'oilater', 
        endpoint: 'posts', 
        cursor: nextCursor 
    });

    const setPosts = useSetAtom(postsStoreAtom);
    if (posts.length === 0) return <ListSkeleton />;
  
    return (
      <>    
      <button className={button} onClick={() => {
        if (nextPosts) {
          setPosts([...posts, ...nextPosts]);
        }
      }}>
        <span>다음 글 불러오기</span>
      </button>
      <div className={styles.wrapper}>
        <h1 className={styles.feedContainer}>Feed</h1>
        <VelogPostList posts={posts} />
      </div>
      </>
    );
}