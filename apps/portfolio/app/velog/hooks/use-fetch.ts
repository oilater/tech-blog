type FetchPostsProps = {
    username: string;
    cursor?: string;
}

export function useVelogFetch() {
    const fetchPosts = async ({username, cursor}: FetchPostsProps) => {
        try {
          const params = new URLSearchParams({ username });
          if (cursor) params.append('cursor', cursor);
          const response = await fetch(`/api/post?${params}`);
    
          if (!response.ok) {
            throw new Error('포스트를 불러오지 못했어요 🥲');
          }
          return await response.json();
        } catch (err) {
          throw new Error('에러가 발생했어요 🥲');
        }
      };

      return { fetchPosts };
    
}