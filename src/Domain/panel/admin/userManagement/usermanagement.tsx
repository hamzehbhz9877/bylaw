import React, { useState} from 'react';
import {useGetQuery} from "Hooks/useGetQuery";
import {getAllUser} from "Services/shortlink";
import NoInformation from "Utils/noInfo/noinfo";
import Table from "Components/table/table";
import Add from "./add/add";
import User from "Domain/panel/admin/userManagement/user";
import useModalContext from "Context/modal/useModal";


const UserManagement = () => {
    const {closeModal, openModal} = useModalContext()

    const [initValue,setInitValue]=useState("")
    const [initPage,setInitPage]=useState(1)

    const {isLoading, data} = useGetQuery<UserManagement>({
        event: getAllUser,
        eventOption: {queryKey: ["userManagement",initPage,initValue]},
        values: {page:initPage, search: initValue},
        options: {keepPreviousData: true,cacheTime:0},
    });

    return (
        <section className="user-management">
            <button className="btn btn-primary mb-4" onClick={() => openModal(<Add close={closeModal}/>, {
                style: {content: {width: "600px"}},
            })}>
                اضافه کردن کاربر جدید
            </button>
            <Table data={data?.users} pages={data?.pages}
                   searchPlaceHolder={"جستجوی کاربر..."}
                   initPage={initPage}
                   initValue={initValue}
                   pageChange={(page)=>setInitPage(page)}
                   valueChange={(value)=>setInitValue(value)}
                tableHeadingItem={[
                    "ردیف",
                    "نام",
                    "نام خانوادگی",
                    "نام کاربری",
                    "ایمیل",
                    "تاریخ ایجاد",
                    "تاریخ ویرایش",
                    "عملیات",
                ]}
            >
                {data?.users?.map((user, index) =>
                    <User key={index} index={index} data={user}/>)}
            </Table>
            {isLoading && "..."}
            <NoInformation data={data?.users}/>
        </section>
    );
};

export default UserManagement;