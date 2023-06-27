import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {Formik, Form} from "formik"
import Input from "Components/input/input";
import useAuth from "Context/authentication/useAuth";
import ReCAPTCHA from "react-google-recaptcha";
import useAlert from "Context/alert/useAlert";
import {initialValues, validationSchema} from "Domain/login/validation";
import MutationButton from "Components/button/mutation";

//css
import "/public/css/pages/_login.scss"

const Login = () => {

    const {mutate}=useAuth()
    const {addAlert} = useAlert()

    const [reCa, setRec] = useState<string|null>(null)


    const handleSubmit=(values:Login)=>{
        // if (reCa)
            mutate(values);
        // else addAlert({type: "warning", message: "لطفا کادر من ربات نیستم را انتخاب کنید", timeout: 2})
    }

    return (
        <div className="login card mx-auto">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {() =>{
                    return (
                        <Form>
                                <h4 className="text-center">ورود</h4>
                                <Input type="email" label="ایمیل" name="email" />
                                <Input type="password" label="رمز عبور" name="password"/>
{/*                             <ReCAPTCHA
                                className="mb-5"
                                sitekey={import.meta.env.VITE_GOOGLE_reCAPTCHA_SITE_KEY}
                                onChange={(e) => setRec(e)}
                                hl={"fa"}
                            /> */}
                                <div className="text-center">
                                    <MutationButton  type="submit" className="btn btn-primary">
                                        ورود
                                    </MutationButton>
                                </div>
                                <div className="not-have-account text-center mt-4">
                                    <span>حساب ندارید؟ </span>
                                    <NavLink to="/register">
                                        <span>ثبت نام کنید</span>
                                    </NavLink>
                                </div>
                        </Form>
                    )}}
            </Formik>
        </div>

    );
};

export default Login;
