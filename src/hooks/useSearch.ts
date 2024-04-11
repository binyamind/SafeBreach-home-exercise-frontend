import {
  QueryKey,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { requestSearch } from "../requests/services/search";

const QUERY_KEY: QueryKey = ["search"];

export const useSearch = (
  { q }: { q: string },
  onSuccess: any,
  onError: any,
  enabled: boolean
) => {
  return useQuery([...QUERY_KEY, q], requestSearch, {
    onSuccess,
    enabled: enabled,
  });
};
