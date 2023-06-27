import React, {useEffect} from 'react';

const UseTest = ({data}: { data: GetRandomQuestions | undefined }) => {

    const getCheck = () => {
        let correctOption = [];
        if (data?.questions)
            for (var i = 0; i < data?.questions.length; i++) {
                var radios = document.getElementsByName(`radioCheck${data?.questions[i]._id}`) as NodeListOf<HTMLInputElement>;

                for (var j = 0; j < radios.length; j++) {
                    if (radios[j].checked) {
                        correctOption.push({
                            questionId: data?.questions[i]._id,
                            optionSelected: Number(radios[j].value)
                        });
                        break;
                    }
                }
            }
        return {testId: data?._id, correctOption}
    }
    const answeredQuestionBeforeRefresh = () => {
        const data = JSON.parse(localStorage.getItem("answeredQuestion") as string)
        if (data)
            for (var i = 0; i < data?.length; i++) {
                var radio = document.querySelector(`[name=radioCheck${data[i].questionId}][data-sld=d-${data[i].optionSelected}]`) as HTMLInputElement;

                if (radio)
                    radio.checked = true
            }
    }
    const beforeunload = (event: BeforeUnloadEvent) => {
        event.preventDefault()
        localStorage.setItem("answeredQuestion", JSON.stringify(getCheck().correctOption))
        return
    }
    useEffect(() => {
        if (data) {
            answeredQuestionBeforeRefresh()
            window.addEventListener('beforeunload', beforeunload)
        }
        return () => {
            window.removeEventListener("beforeunload", beforeunload)
        };
    }, [data]);

    return {getCheck}
};

export default UseTest;