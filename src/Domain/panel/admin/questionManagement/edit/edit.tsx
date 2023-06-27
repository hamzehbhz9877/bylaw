import React, {FC, useRef, useState} from 'react';
import {useMutationQuery} from "Hooks/useMutationQuery";
import {editQuestion, getQuestion} from "Services/shortlink";
import {queryClient} from "Store";
import {useGetQuery} from "Hooks/useGetQuery";
import {ModalBody, ModalFooter, ModalHeader} from "Components/modal/template";
import QuestionHeaderFormat from "Components/question/format/header";
import QuestionBodyFormat from "Components/question/format/body";
import QuestionFooterFormat from "Components/question/format/footer";
import MutationButton from "Components/button/mutation";

type Props= {
    id: string|undefined
    close: () => void
}

const Edit= ({close, id}:Props) => {
    const optionRef=useRef<Array<string>>([])

    const [correctOption,setCorrectOption]=useState<number|null>(null)
    const [title,setTitle]=useState<Questions["title"]|null>(null)



    const {mutate} = useMutationQuery<null, Questions & {id:string}>({
        event: editQuestion, options: {
            onSuccess: () => {
                queryClient.invalidateQueries("testManagement")
                close()
            }
        }
    });

    const {data} = useGetQuery<Questions>({
        event: getQuestion,
        values: id, eventOption: {queryKey: "getSingleQuestion"}
    });


    const addQuestion = () => {
        const [optionA, optionB, optionC, optionD] = optionRef.current
        if (title && correctOption && id)
            mutate({title: title,
                optionA,
                optionB,
                optionC,
                optionD,
                correctOption: correctOption,id})
    }

    return (
        <>
            <ModalHeader>
                <h4 className="text-center">ویرایش سوال</h4>
            </ModalHeader>
            <ModalBody>
                <QuestionHeaderFormat data={data?.title}
                                      changeValue={(data)=>setTitle(data)}

                />
                {[data?.optionA,data?.optionB,data?.optionC,data?.optionD].map((item, index) => {
                    return <QuestionBodyFormat key={index}
                                               changeValue={(data:string)=>optionRef.current[index]=data}
                                               data={item} index={index} title={`جواب ${index+1}`}/>
                })}
                <QuestionFooterFormat initCorrectOption={data?.correctOption}
                                      changeValue={(data)=>setCorrectOption(data)}
                />
            </ModalBody>
            <ModalFooter>
                <div className="text-center">
                    <MutationButton disabled={true}  type="submit" className="btn btn-success" onClick={addQuestion}>
                        تایید
                    </MutationButton>                </div>
            </ModalFooter>
        </>
    );
};

export default Edit;