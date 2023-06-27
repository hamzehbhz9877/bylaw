import React, {useState} from 'react';
import MoreInfo from "Domain/result/moreInfo";
import {useParams} from "react-router-dom";
import {useGetQuery} from "Hooks/useGetQuery";
import {getTestResult} from "Services/shortlink";
import ResultTest from "Domain/result/resultinfo";
import useAuth from "Context/authentication/useAuth";

const MoreInfoTest = () => {

    const {userName}=useAuth()
    const params = useParams()
    const [morInfo, setMoreInfo] = useState(false)

    const {data, isLoading} = useGetQuery<TestResult>({
        event: getTestResult,
        values: params.id,
        eventOption: {queryKey: ["getMoreInfo",params.id]},
        options:{cacheTime:0}
    });


    if (isLoading)
        return <span>"در حال دریافت اطلاعات"</span>
    else
        return (
            <div className="test-management-more-info">
                {data?.result !== 0 ?
                        <ResultTest moreInfo={() => {if (!morInfo) {setMoreInfo(true)}}}
                            data={Array.isArray(data) ? undefined : data}/>
                        : <>
                            <h3>کاربر عزیز {userName}</h3>
                            <p>نتیجه آزمون نامشخص میباشد</p>
                        </>
                }
                {morInfo && <MoreInfo id={String(params.id)}/>}
            </div>
        );
};

export default MoreInfoTest;