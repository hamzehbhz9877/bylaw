import {useCallback, useEffect, useState} from "react";
import TableSearch from "Components/search/search";
import Pagination from "Components/pagination/pagination";

type props={
  initialPage:number
  initialValue:string
  paginate:React.ComponentType<React.ComponentProps<typeof Pagination> & {total:number|undefined}>
  search:React.ComponentType<React.ComponentProps<typeof TableSearch>>
}
const useTable = ({initialPage,initialValue,paginate,search}:props) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const [searchValue, setValue] = useState<string>(initialValue);

  const setSearchValue = (values: string) => setValue(values);

  const goTo = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const nextPage = useCallback(
    () => setCurrentPage((currentPage: number) => currentPage + 1),
    []
  );

  const prevPage = useCallback(
    () => setCurrentPage((currentPage: number) => currentPage - 1),
    []
  );

  useEffect(() => {
    if (searchValue) {
      goTo(1)
    }
  }, [searchValue])

  return {
    currentPage,
    goTo,
    nextPage,
    prevPage,
    setSearchValue,
    searchValue,
    paginate,search
  };
};

export default useTable;
