import { useQuery } from "@tanstack/react-query";

type FetchProps = {
  endpoint: string;
  username: string;
  cursor?: string;
};

export function useFetch({ endpoint, username, cursor }: FetchProps) {
  return useQuery({
    queryKey: [endpoint, username, cursor],
    queryFn: async () => {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("데이터를 불러오지 못했어요 🥲");
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
    enabled: !!username,
  });
}