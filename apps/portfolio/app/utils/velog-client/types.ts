export interface GetPostsParams {
    cursor?: number;
    limit?: number;
    username: string;
    tag?: string;
  }
  
  export type GetPostsResponse = {
    posts: Array<{
      id: string;
      title: string | null;
      short_description: string | null;
      thumbnail: string | null;
      url_slug: string | null;
      released_at: any | null;
      updated_at: any;
      tags: Array<string>;
      user: {
        id: string;
        username: string;
        profile: { id: string; thumbnail: string | null; display_name: string };
      } | null;
    }>;
  };
  
  export interface GetPostByUrlSlugParams {
    username: string;
    url_slug: string;
  }
  
  export interface GetPostByUrlSlugResponse {
    post: {
      id: string;
      title: string | null;
      released_at: any | null;
      updated_at: any;
      body: string | null;
      short_description: string | null;
      is_markdown: boolean | null;
      is_private: boolean;
      is_temp: boolean | null;
      thumbnail: string | null;
      url_slug: string | null;
      tags: Array<string>;
      user: {
        id: string;
        username: string;
        profile: {
          id: string;
          display_name: string;
          thumbnail: string | null;
          short_bio: string;
          profile_links: Record<string, any>;
        };
      } | null;
    } | null;
  }

export interface PostListResponse {
  posts: any[];
}
  /**
   * export const postListGql = gql`
  query velogPosts($input: GetPostsInput!) {
    posts(input: $input) {
      id
      title
      short_description
      thumbnail
      user {
        username
        profile {
          thumbnail
        }
      }
    
    }
  }
`;
   */

  export interface PostResponse {
    post: {
      id: string;
      title: string | null;
      released_at: any | null;
      updated_at: any;
      body: string | null;
      short_description: string | null;
      is_markdown: boolean | null;
      is_private: boolean;
      is_temp: boolean | null;
    } | null;
}