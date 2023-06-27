import React, {
    FC, ReactNode, useEffect,
} from "react";
import Paginate from "Components/pagination";
import {MakePagination} from "Hooks/useTable/makePagination";
import useTable from "Hooks/useTable";
import TableSearch from "Components/search/search";
import {useIsMutating} from "react-query";

type Props = {
    tableHeadingItem: string[]
    pages: number | undefined
    data: any
    title?: string
    children: ReactNode
    initValue?: string
    initPage?: number
    pageChange?: (page: number) => void
    valueChange?: (page: string) => void
    searchPlaceHolder?: string
    hasSearch?: boolean
    hasPaginate?: boolean
}

const Table= ({
                              data, tableHeadingItem, initPage,
                              valueChange
                              , pageChange, hasSearch = true,
                              hasPaginate = true
                              , searchPlaceHolder, pages, initValue, children
                          }:Props) => {

    const {searchValue, setSearchValue, search: TSearch, paginate: Pag, ...rest} = useTable(
        {
            initialPage: initPage ?? 0, initialValue: initValue ?? "",
            paginate: Paginate,
            search: TableSearch
        });
    const makePagination = MakePagination(rest.currentPage, pages, rest.goTo);

    useEffect(() => {
        if (rest) {
            if (data?.length === 0 && rest.currentPage !== 1) {
                rest.goTo(rest.currentPage - 1)
            }
        }
    }, [data])

    useEffect(() => {
        if (pageChange)
            pageChange(rest.currentPage)
    }, [rest.currentPage])

    useEffect(() => {
        if (valueChange)
            valueChange(searchValue)
        if (searchValue)
            rest.goTo(1)
    }, [searchValue])

    const isMutating = useIsMutating();

    return (
        <>
            {hasSearch &&  <TSearch onChange={(data:string) =>
                setSearchValue(data)} placeholder={searchPlaceHolder}/>}

            <div className="table-wrapper position-relative">
                <div className="overflow-auto rounded-xl">
                    <table className="table table-striped text-center table-bordered" width="100%">
                        <thead>
                        <tr>
                            {tableHeadingItem.map((data: string) => (
                                <th key={data}>{data}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {children}
                        </tbody>
                    </table>
                </div>
                <div className={isMutating > 0 ? "content-block" : ""}/>
            </div>

            <Pag {...rest} pages={makePagination} total={pages??0}/>
        </>
    );
}

export default Table;
