import React, {ChangeEvent, FC, useEffect, useState} from 'react';

type Props={
    initCorrectOption?:number|undefined
    changeValue?:(data:number)=>void
}

const QuestionFooterFormat = ({initCorrectOption,changeValue}:Props) => {

    const [correctOption,setCorrectOption]=useState(initCorrectOption)

    const radioChange=(e: ChangeEvent<HTMLInputElement>)=>{
        setCorrectOption(Number(e.target.value))
    }

    useEffect(() => {
        if (initCorrectOption) {
            setCorrectOption(initCorrectOption)
        }
    }, [initCorrectOption])

    useEffect(()=>{
        if (changeValue)
        changeValue(Number(correctOption))
    },[correctOption])

    return (
        <div className="pt-4">
            <h6>انتخاب گزینه صحیح:</h6>
            <div className="form-group d-flex justify-content-center questions-format__body-correct-option">
                {
                    [1, 2, 3, 4].map(value => {
                        return (
                            <div className="form-check" key={value}>
                                <input className="form-check-input"
                                       onChange={radioChange}
                                       aria-required
                                       type="radio"
                                       name="exampleRadios"
                                       id={`exampleRadios${value}`}
                                       value={value}
                                       checked={correctOption===value}
                                />
                                <label className="form-check-label" htmlFor={`exampleRadios${value}`}>
                                    {value}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default QuestionFooterFormat;