import React, {FC} from 'react';
import useTimer from "Hooks/useTimer"
import QuestionHeader from "Components/question/header";
import QuestionBody from "Components/question/body";

//css
import "/public/css/pages/_test.scss"
import UseTest from "Hooks/useTest/usetest";
import {getRandomQuestion, test} from "Services/shortlink";
import {useGetQuery} from "Hooks/useGetQuery";
import {useNavigate, useSearchParams} from "react-router-dom";


const Test = () => {
        const [searchPrams, setSearchParams] = useSearchParams()
        const navigate = useNavigate()

        const {data, isLoading} = useGetQuery<GetRandomQuestions>({
            event: getRandomQuestion,
            eventOption: {queryKey: ["getRandomQuestion", searchPrams.get("id")]},
            values: localStorage.getItem("currentTestId") ?? searchPrams.get("id"),
            options: {
                cacheTime: 0, onSuccess: (data) => {
                    if (data.questions?.length > 0) {
                        localStorage.setItem("currentTestId", data._id)
                        setSearchParams({id: data._id})
                    } else {
                        localStorage.removeItem("currentTestId")
                    }
                },
            }
        });
        const {getCheck} = UseTest({data})

        const handleResultTest = async () => {
            const check = getCheck()
            localStorage.removeItem("answeredQuestion")
            console.log(check)
            //navigate to result page
            navigate("/result",{replace:true,state:check})
        };

        const {minutes, seconds} = useTimer({
            min: Number(data?.remindTime?.split(":")[0]),
            sec: Number(data?.remindTime?.split(":")[1]),
            timeOutFunc: handleResultTest
        })

    if (isLoading)
        return <div>در حال بارگیری سوالات...</div>

        return (
            <>
                {
                    data?.questions?.map((question, index) => {
                        return <div key={index} className="question card bg-light mb-3">
                            <QuestionHeader title={question.title} index={index}/>
                            <QuestionBody data={question} isFinished={false}/>
                        </div>
                    })
                }
                {!!data?.questions.length && data.questions.length > 0 &&
                <>
                    <div className="btn btn-warning test__remaining-time">
                        <h6>زمان باقیمانده آزمون</h6>
                        <span><b>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</b></span>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-success" onClick={handleResultTest}>پایان آزمون</button>
                    </div>
                </>
                }
            </>
        );
    }
;
export default Test;