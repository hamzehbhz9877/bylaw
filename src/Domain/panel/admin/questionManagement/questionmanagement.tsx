import React, {useState} from 'react';
import {useGetQuery} from "Hooks/useGetQuery";
import {getAllQuestion} from "Services/shortlink";
import NoInformation from "Utils/noInfo/noinfo";
import Table from "Components/table/table";
import Add from "./add/add";
import Question from "Domain/panel/admin/questionManagement/question";
import useModalContext from "Context/modal/useModal";

//css
import "/public/css/pages/_questionManagement.scss";

const QuestionManagement = () => {

    const [initValue,setInitValue]=useState("")
    const [initPage,setInitPage]=useState(1)

    const {closeModal, openModal} = useModalContext()

    const {isLoading, data} = useGetQuery<QuestionManagement>({
        event: getAllQuestion,
        eventOption: {queryKey: ["testManagement", initPage,initValue]},
        values: {page: initPage, search: initValue},
        options: {keepPreviousData: true,cacheTime:0},
    });


    return (
        <section className="question-management">
            <button className="btn btn-primary mb-4" onClick={() => openModal(<Add close={closeModal}/>, {
                style: {content: {width: "600px"}},
            })}>
                اضافه کردن سوال جدید
            </button>
            <Table data={data?.questions} pages={data?.pages}
                   searchPlaceHolder={"جستجوی سوال..."}
                   initPage={initPage}
                   initValue={initValue}
                   pageChange={(page)=>setInitPage(page)}
                   valueChange={(value)=>setInitValue(value)}
                   tableHeadingItem={[
                       "ردیف",
                       "عنوان",
                       "تاریخ ایجاد",
                       "تاریخ ویرایش",
                       "عملیات",
                   ]}
            >
                {data?.questions?.map((question, index) =>
                    <Question key={index} index={index} data={question}/>)}
            </Table>
            {isLoading && "..."}
            <NoInformation data={data?.questions}/>
        </section>
    );
};

export default QuestionManagement;