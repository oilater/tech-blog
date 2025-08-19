import { useQuery } from "@tanstack/react-query";

type FetchPostsProps = {
  target: "posts" | "post";
  username: string;
  cursor?: string;
};

export function useVelogFetch({ target, username, cursor }: FetchPostsProps) {
  return useQuery({
    queryKey: [target, username, cursor],
    queryFn: async () => {
      const params = new URLSearchParams({ username });
      if (cursor) params.append("cursor", cursor);

      const response = await fetch(`/api/${target}?${params}`);
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
