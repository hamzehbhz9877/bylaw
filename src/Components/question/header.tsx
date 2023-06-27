import React, {FC} from 'react';

type Props={
title:{text:string,image?:string}
index:number
}
const QuestionHeader = ({index,title}:Props) => {
    return (
        <div className="card-header p-4 question__header">
            <h6 className="mb-0">
                {index + 1}_{" "}{title.text}
            </h6>
            {
                title.image?.startsWith("data:image")
                &&
                <div className="text-center mx-auto question__header-image">
                    <img className="h-100" src={title.image} alt=""/>
                </div>
            }
        </div>
    );
};

export default QuestionHeader;