import React, {useState} from 'react';
import {useGetQuery} from "Hooks/useGetQuery";
import {getAllUserTests} from "Services/shortlink";
import NoInformation from "Utils/noInfo/noinfo";
import Table from "Components/table/table";
import Test from "Domain/panel/admin/testManagement/test";



const TestManagement = () => {
    const [initValue,setInitValue]=useState("")
    const [initPage,setInitPage]=useState(1)

    const {data, isLoading} = useGetQuery<AllUserTest>({
        event: getAllUserTests,
        eventOption: {queryKey: ["testManagement", initPage,initValue]},
        values: {page: initPage, search: initValue},
        options: {keepPreviousData: true,cacheTime:0},
    });

    return (
        <section className="test-management">
            <Table pages={data?.pages} data={data?.tests}
                   searchPlaceHolder={"جستجوی کاربر..."}
                   initPage={initPage}
                   initValue={initValue}
                   pageChange={(page)=>setInitPage(page)}
                   valueChange={(value)=>setInitValue(value)}
                   tableHeadingItem={[
                       "ردیف",
                       "نام و نام خانوادگی",
                       "تاریخ ایجاد",
                       "نتیجه آزمون",
                       "عملیات",
                   ]}
            >
                {data?.tests?.map((test, index) =>
                    <Test key={index} index={index} data={test}/>)}
            </Table>
            {isLoading && "..."}
            <NoInformation data={data?.tests}/>
        </section>
    );
};

export default TestManagement;