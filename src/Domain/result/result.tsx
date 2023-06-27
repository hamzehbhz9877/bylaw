import React, {useEffect, useState} from 'react';
import MoreInfo from "Domain/result/moreInfo";
import ResultTest from "Domain/result/resultinfo";
import {useLocation, useNavigate} from "react-router-dom";
import {useMutationQuery} from "Hooks/useMutationQuery";
import {test} from "Services/shortlink";

const Result = () => {
        const [morInfo, setMoreInfo] = useState(false)
        const [testId, setTestId] = useState<string | null>(null)
        const location = useLocation()
        const navigate = useNavigate()

        const {data, mutate, isLoading} = useMutationQuery<TestResult, postQuestion>({
            event: test,
        });

        useEffect(() => {
            const state = location.state as postQuestion
            if (state) {
                setTestId(state.testId)
                mutate(state)
            }
        }, [])


        const reTest = async () => {
            if (morInfo) setMoreInfo(!morInfo)
            await navigate("/test")
        }

        if (isLoading)
            return <div>در حال بررسی نتیجه...</div>

        return (
            <>
                <ResultTest
                    moreInfo={() => setMoreInfo(true)}
                    hasReTest={true}
                    data={data} retTest={reTest}/>
                {morInfo && <MoreInfo id={testId}/>}
            </>
        );
    }
;

export default Result;