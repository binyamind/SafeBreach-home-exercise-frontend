import {
  QueryKey,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { requestSearch } from "../requests/services/search";
import { Person } from "../models/Person";

const QUERY_KEY: QueryKey = ["search"];

export const useSearch = (
  { q }: { q: string },
  onSuccess: ({ data }: { data: Array<Person> }) => void,
  onError: (e: any) => void,
  enabled: boolean
) => {
  return useQuery([...QUERY_KEY, q], requestSearch, {
    onSuccess,
    enabled: enabled,
  });
};
