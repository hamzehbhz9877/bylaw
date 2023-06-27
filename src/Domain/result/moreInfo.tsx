import React, {FC} from 'react';
import {useGetQuery} from "Hooks/useGetQuery";
import {moreInfo} from "Services/shortlink";
import QuestionHeader from "Components/question/header";
import QuestionBody from "Components/question/body";

type Props= {
    id: string | null
}

const MoreInfo= ({id}:Props) => {

    const {data, isLoading} = useGetQuery<GetRandomQuestions>({
        event: moreInfo,
        values: id,
        eventOption: {queryKey: "getMoreInfoQuestion"},
    });

    if (isLoading)
        return <span>در حال بررسی...</span>
    else
    return (
        <div className="more-info">
            {
                data?.questions?.map((question, index) => {
                    return <div key={index} className="question card bg-light mb-3 ">
                        <QuestionHeader title={question.title} index={index}/>
                        <QuestionBody data={question} isFinished={true}/>
                    </div>
                })
            }
        </div>
    );
};

export default MoreInfo;