import React, {FC, useRef, useState} from 'react';
import {ModalBody, ModalFooter, ModalHeader} from "Components/modal/template";
import {useMutationQuery} from "Hooks/useMutationQuery";
import {createQuestion} from "Services/shortlink";
import {queryClient} from "Store";
import QuestionBodyFormat from "Components/question/format/body";
import QuestionHeaderFormat from "Components/question/format/header";
import QuestionFooterFormat from "Components/question/format/footer";
import MutationButton from "Components/button/mutation";

type Props= {
    close: () => void
}

const Add= ({close}:Props) => {
    const optionRef=useRef<Array<string>>([])

    const [correctOption,setCorrectOption]=useState<number|null>(null)
    const [title,setTitle]=useState<Questions["title"]|null>(null)

    const {mutate} = useMutationQuery<null, Questions>({
        event: createQuestion, options: {
            onSuccess: async () => {
                await queryClient.invalidateQueries("testManagement")
                close()
            }
        }
    });

    const addQuestion = () => {
        const [optionA, optionB, optionC, optionD] = optionRef.current
        if (title && correctOption)
            mutate({
                title: title,
                optionA,
                optionB,
                optionC,
                optionD,
                correctOption: correctOption
            })
    }


    return (
        <>
            <ModalHeader>
                <h4 className="text-center">افزودن سوال</h4>
            </ModalHeader>
            <ModalBody>

                <QuestionHeaderFormat changeValue={(data) => setTitle(data)}/>

                {[1, 2, 3, 4].map((item, index) => {
                    return <QuestionBodyFormat key={index}
                                               changeValue={(data: string) => optionRef.current[index] = data}
                                               index={index} title={`جواب ${index + 1}`}/>
                })}

                <QuestionFooterFormat changeValue={(data) => setCorrectOption(data)}/>
            </ModalBody>
            <ModalFooter>
                <div className="text-center">
                    <MutationButton className="btn btn-success" onClick={addQuestion}>
                        تایید
                    </MutationButton>
                </div>
            </ModalFooter>
        </>
    );
};

export default Add;