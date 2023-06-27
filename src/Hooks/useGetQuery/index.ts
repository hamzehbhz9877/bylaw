import GenericQuery from "Store/generic/genericquery";
import { AxiosError, AxiosResponse } from "axios";
import { QueryFunctionContext, QueryKey, UseQueryOptions } from "react-query";
import { CancelToken } from "Services/httpservice";
import useAlert from "Context/alert/useAlert";

interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => void;
}

interface Option<T> {
  option: UseQueryOptions<T, AxiosError, T, QueryKey>;
}

interface Event<T> {
  queryKey: string | unknown[];
  queryFn?: (context: QueryFunctionContext) => Promise<T>;
}

function isAbortError(error: any): error is DOMException {
  if (error && error.name === "AbortError") {
    return true;
  }
  return false;
}

interface GetQuery<T> {
  event: any;
  eventOption: Event<T>;
  values?: any;
  options?: Option<T>["option"];
}

export const useGetQuery = <T extends {}>({
  event,
  eventOption,
  values,
  options,
}: GetQuery<T>) => {

  const { addAlert } = useAlert();

  return GenericQuery<T>(
    {
      ...eventOption,
      event: () => {
        const source = CancelToken();
        const promise: any = new Promise(async (resolve, reject) => {
          try {
            const { data }: AxiosResponse<Api<T>> = await event(values);
            if (data.isSuccess) {
              resolve(data.data) ;
            } else {
              addAlert({
                message:
                  data.message ??
                  "لینک ای پی ای ها رو بررسی کن همچین لینکی توی سرور نیست",
                timeout: 5,
                type: "danger",
              });
              if (data)
                resolve(data.data)
            }
          } catch (ex: unknown) {
            resolve([]);
            if (isAbortError(ex)) {
              alert("abort");
              reject(new Error("Request cancelled"));
            }
          }
        });

        promise.cancel = () => {
          source.abort();
        };

        return promise as PromiseWithCancel<any>;
      },
    },
    {
      ...options,
    }
  );
};
