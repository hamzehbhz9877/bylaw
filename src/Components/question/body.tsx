import React, {FC} from 'react';
import Option from "Components/question/option";

type option=Omit<Questions, "title"|"createdAt"|"updatedAt">

type Props= {
    data: option
    isFinished:boolean
}

const QuestionBody= ({data,isFinished}:Props) => {
    const {optionA, optionB, optionC, optionD, _id,correctOption,selectedOption} = data

    const checkAnswer=(index:number)=>{
        const selected=correctOption === index + 1 ? "bg-success py-2":""
        const wrongAnswer=selectedOption === index + 1 && selectedOption !== correctOption ? "bg-danger py-2":""
        return selected+wrongAnswer
    }

    return (
        <div className="card-body question__body">
            {[optionA, optionB, optionC, optionD].map((value, index) => {
                return (
                    <div key={index} className={`question__body-option ${isFinished&&checkAnswer(index)}`}
                    >
                        <Option index={index} _id={_id} value={value}
                                selectedItem={selectedOption}
                                isFinished={isFinished}/>
                    </div>
                )
            })}
        </div>
    );
};

export default QuestionBody;