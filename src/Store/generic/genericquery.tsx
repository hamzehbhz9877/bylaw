import { QueryKey, useQuery, UseQueryOptions } from "react-query";
import { AxiosError } from "axios";

type Props= {
  event: Function;
  queryKey: QueryKey;
}

interface Option<T> {
  option: UseQueryOptions<T, AxiosError, T, QueryKey>;
}

const GenericQuery = <T extends {}>(
  { event, queryKey }: Props,
  option?: Option<T>["option"]
) => {
  const {...restQuery } = useQuery<T, AxiosError, T, QueryKey>({
    queryKey: queryKey,
    queryFn: ({ queryKey }) => event(queryKey),
    ...option,
  });

  return restQuery;
};

export default GenericQuery;
