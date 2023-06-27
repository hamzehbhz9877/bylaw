import React from 'react';
import {useNavigate} from "react-router-dom";
import useAuth from "Context/authentication/useAuth";
import useAlert from "Context/alert/useAlert";
import {useGetQuery} from "Hooks/useGetQuery";
import {currentTestStatus} from "Services/shortlink";
import Cookie from "universal-cookie";


const Home = () => {
    const navigate = useNavigate()
    const {userName} = useAuth()
    const user=new Cookie().get("fullName")
    const {addAlert} = useAlert()
    const handleCurrentTest = () => {
        navigate(`/test?id=${localStorage.getItem("currentTestId")}`)
    }
    const handleStartTest = () => {
        if (userName??user) {
            navigate("/test")

        } else {
            navigate("/login")
            addAlert({
                showProgress: false,
                message: "برای شروع آزمون ابتدا باید وارد حساب کاربری خود شوید",
                timeout: 5,
                type: "warning",
            })
        }
    }
    const {data} = useGetQuery<{ remindTime:boolean }>({
        event: currentTestStatus,
        eventOption: {queryKey: ["currentTestStatus", localStorage.getItem("currentTestId")]},
        values: localStorage.getItem("currentTestId"),
        options: {
            enabled: !!localStorage.getItem("currentTestId"),
            onSuccess: (data) => {
                if (!data.remindTime) {
                    localStorage.removeItem("currentTestId")
                }
            }
        }
    });


    return (
        <div>
            <h4 className="text-center mb-5">به سرزمین آزمون خوش آمدید</h4>
            <p><b>آیین نامه رانندگی</b>، مجموعه ای از دستورات، قوانین و مقررات است که به منظور افزایش ایمنی در جاده ها و
                خیابان ها و کاهش تصادفات و حوادث رانندگی وضع شده اند. آموزش صحیح به افرادی که متقاضی دریافت انواع
                گواهینامه رانندگی با خودرو و ماشین های سنگین هستند امری ضروری است و اجرای دقیق آن بر عهده مؤسسات آموزشی
                معتبر می باشد.
            </p>
            <p>
                <b>آزمون آیین نامه اصلی</b> شامل بخش ها و مفاهیم متعددی است که به صورت مدون و کامل در کتاب راهنمای
                دریافت گواهینامه درج شده است. آشنایی با قوانین راهنمایی و رانندگی، قوانین ترافیکی و نحوه رانندگی ایمن با
                خودرو، آشنایی با سیستم های فنی یک خودرو، روش های تعمیرات و نگهداری قطعات خودرو و سایر موارد فرهنگ سازی
                رانندگی و حقوق شهروندی، مهم ترین سرفصل های آموزشی برای <b>تست آیین نامه اصلی</b> هستند.
            </p>
            <p>
                <b>آزمون آیین نامه آنلاین</b>، آزمون شبیه سازی شده راهنمایی و رانندگی مجموعا از <b>30</b> سوال تشکیل شده
                و شامل نمونه سوالاتی است که در آزمون نهایی آیین نامه رانندگی بوده و کاربران به عنوان شرکت کننده در آزمون
                باید در زمان مشخص به این سوالات پاسخ دهند. مدت زمانی که برای پاسخ گویی به این سوالات در نظر گرفته
                شده، <b>حداکثر 20 دقیقه</b> می باشد که در هربار رفرش <b>30</b> سوال به صورت تصادفی نشان داده می شود و
                هیچ آزمونی سوال های مشابه ندارد.
                نتیجه کامل آزمون بعد از گزینه پایان آزمون به صورت <b>درصدی</b> و <b>تعداد صحیح سوالات پاسخ داده
                شده</b>، <b>پاسخ داده نشده</b> و <b>اشتباه</b> و نتیجه <b>قبولی</b> و <b>ردشدن</b> آزمون دقیقا مثل <b>آزمون
                اصلی</b> به شما نشان داده می شود.
            </p>
            {
                <div className="text-center">
                    <button onClick={data?.remindTime ? handleCurrentTest : handleStartTest} type="button"
                            className="btn btn-success mt-3">
                        {data?.remindTime ? "ادامه آزمون ..." : "شروع آزمون"}
                    </button>
                </div>
            }

        </div>
    );
};

export default Home;


