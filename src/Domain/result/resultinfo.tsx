import React, {FC, useEffect, useState} from 'react';
import {isFloat} from "Hooks/useLodash";

type Props= {
    data: TestResult | undefined
    moreInfo: () => void
    retTest?: () => void
    hasReTest?: boolean
}

const ResultTest= ({data, retTest, moreInfo, hasReTest}:Props) => {

    const [state, setState] = useState<TestResult>({} as TestResult)

    useEffect(() => {
        localStorage.removeItem("currentTestId")
        if (data)
            setState({...data})
    }, [])

    const handleMoreTestInfo = () => moreInfo()

    const handleReTest = () => retTest && retTest()

    const {result, numberOfWrongAnswer, numberOfCorrectAnswer, fullName} = state

    const text = result === 1 ? "شما با موفقیت در آزمون قبول شدید" : "شما در این آزمون رد شدید";

    //@ts-ignore
    const answeredQuestion = numberOfCorrectAnswer + numberOfWrongAnswer

    // @ts-ignore
    const r = numberOfCorrectAnswer * 100/ 30
    const percentAccept: string|number = isFloat(r) ?r.toFixed(2):r
    if (!data)
        return null
    else
        return (
            <div className="m-auto result-test text-center">
                <div className="text-center my-4">
                    <h3>کاربر عزیز {fullName}</h3>
                    <p className={result === 1 ? "lead text-success" : "lead text-danger"}>{text}</p>
                    <p>شما به <b>{numberOfCorrectAnswer}</b> سوال از <b>30</b> سوال بدرستی جواب دادید</p>
                    <p>تعداد پاسخ های درست: <b className="text-success">{numberOfCorrectAnswer}</b></p>
                    <p>تعداد پاسخ های اشتباه: <b className="text-danger">{numberOfWrongAnswer}</b></p>
                    <p>تعداد پاسخ های داده نشده: <b
                        className="text-info">{30 - answeredQuestion}</b></p>
                    <p>درصد قبولی شما: {percentAccept}%</p>
                    <div className="mt-5">
                        <button className="btn btn-success" onClick={handleMoreTestInfo} role="button">اطلاعات بیشتر
                        </button>
                        {hasReTest &&
                        <button className="btn btn-success me-3" onClick={handleReTest} role="button">آزمون
                            مجدد</button>}
                    </div>

                </div>
            </div>

        );
};

export default ResultTest;