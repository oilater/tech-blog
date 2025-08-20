import { useQuery } from "@tanstack/react-query";

type FetchPostsProps = {
  endpoint: "posts" | "post";
  username: string;
  cursor?: string;
};

export function useVelogFetch({ endpoint, username, cursor }: FetchPostsProps) {
  return useQuery({
    queryKey: [endpoint, username, cursor],
    queryFn: async () => {
      const params = new URLSearchParams({ username });
      if (cursor) params.append("cursor", cursor);

      const response = await fetch(`/api/${endpoint}?${params}`);
      if (!response.ok) {
        throw new Error("포스트를 불러오지 못했어요 🥲");
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
    enabled: !!username,
  });
}
