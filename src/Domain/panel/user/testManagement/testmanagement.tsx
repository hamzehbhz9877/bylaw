import React, {useState} from 'react';
import {useGetQuery} from "Hooks/useGetQuery";
import {userTestResult} from "Services/shortlink";
import NoInformation from "Utils/noInfo/noinfo";
import Table from "Components/table/table";
import UserTest from "Domain/panel/user/testManagement/test";

const TestManagement = () => {

    const [initPage,setInitPage]=useState(1)

    const {data,isLoading} = useGetQuery<AllUserTest>({
        event: userTestResult,
        eventOption: {queryKey: ["userTestManagement", initPage]},
        values: {page: initPage},
        options: {keepPreviousData: true,cacheTime:0},
    });

    return (
        <section className="test-management-user">
            <Table pages={data?.pages} data={data?.tests}
                   initPage={initPage}
                   hasSearch={false}
                   pageChange={(page)=>setInitPage(page)}
                tableHeadingItem={[
                    "ردیف",
                    "تاریخ ایجاد",
                    "نتیجه آزمون",
                    "عملیات",
                ]}
            >
                {data?.tests?.map((test, index) =>
                    <UserTest key={index} index={index} data={test}/>)}
            </Table>
            {isLoading && "..."}
            <NoInformation data={data?.tests}/>
        </section>
    );
};

export default TestManagement;