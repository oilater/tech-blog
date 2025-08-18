import { gql } from "graphql-request";

export const postGql = gql`
  query readPost($input: ReadPostInput!) {
    post(input: $input) {
      id
      title
      released_at
      updated_at
      body
      short_description
      is_markdown
      is_private
      is_temp
      thumbnail
      comments_count
      url_slug
      likes
      tags
      user {
        id
        username
        profile {
          id
          display_name
          thumbnail
          short_bio
          profile_links
        }
      }
    }
  }
`;