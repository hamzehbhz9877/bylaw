import { useMutation, UseMutationOptions } from "react-query";
import { AxiosError } from "axios";

type Props= {
  event: Function;
}

interface Option<T, U> {
  option: UseMutationOptions<T, AxiosError, U, T>;
}

const GenericMutate = <T, U>(
  { event }: Props,
  option?: Option<T, U>["option"]
) => {
  const {...restQuery } = useMutation<
    T,
    AxiosError,
    U,
    T
  >((data: U) => event(data), {
    ...option,
  });
  return restQuery;
};

export default GenericMutate;
