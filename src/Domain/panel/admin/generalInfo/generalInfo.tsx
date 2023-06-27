import React from 'react';
import {useGetQuery} from "Hooks/useGetQuery";
import {generalInfo} from "Services/shortlink";

//css
import "/public/css/pages/_generalinfo.scss"

const GeneralInfo = () => {

    const {data, isLoading} = useGetQuery<GeneralInfo>({
        event: generalInfo,
        eventOption: {queryKey: "getGeneralInfo"},
    });


    if (isLoading) {
        return <span>در حال دریافت اطلاعات...</span>
    } else
        return (
            <section className="general-info">
                <div
                    className="d-flex flex-md-row flex-column align-items-center  gap-3 justify-content-center general-info-test mt-4">
                    <div className="card">
                        <p>تعداد آزمون های موفق</p>
                        <span>{data?.numberOfAllTests}</span>
                    </div>
                    <div className="card">
                        <p>تعداد آزمون های قبول شده</p><span>{data?.numberOfAcceptedTests}</span>
                    </div>
                    <div className="card">
                        <p>تعداد آزمون های رد شده</p><span>{data?.numberOfFailedTests}</span>
                    </div>
                </div>
            </section>

        );
};

export default GeneralInfo;