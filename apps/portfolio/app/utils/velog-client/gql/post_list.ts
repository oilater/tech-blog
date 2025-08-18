import { gql } from "graphql-request";

export const postListGql = gql`
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
      url_slug
      released_at
      updated_at
      tags
    }
  }
`;