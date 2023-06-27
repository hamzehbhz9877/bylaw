import React, {useState} from 'react';
import {Form, Formik} from "formik";
import Input from "Components/input/input";
import {NavLink, useNavigate} from "react-router-dom";
import {initialValues, validationSchema} from "./validation";
import {useMutationQuery} from "Hooks/useMutationQuery";
import {register} from "Services/shortlink";
import ReCAPTCHA from "react-google-recaptcha";
import useAlert from "Context/alert/useAlert";
import MutationButton from "Components/button/mutation";


//css
import "/public/css/pages/_register.scss"

const Register = () => {
    const navigate = useNavigate()
    const [reCa, setRec] = useState<string|null>(null)
    const {addAlert} = useAlert()
    const {mutate} = useMutationQuery<null, Register>({
        event: register, options: {
            onSuccess: () => {
                navigate("/login")
            }
        }
    });

    const handleSubmit = (values: Register) => {
        // if (reCa)
            mutate(values);
        // else addAlert({type: "warning", message: "لطفا کادر من ربات نیستم را انتخاب کنید", timeout: 2})
    }

    return (
        <div className="register card mx-auto">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {(props) => {
                    return (
                        <Form>
                            <h4 className="text-center">ثبت نام</h4>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <Input type="text" label="نام" name="firstName"/>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <Input type="text" label="نام خانوادگی" name="lastName"/>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <Input type="text" label="نام کاربری" name="userName"/>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <Input type="email" label="ایمیل" name="email"/>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <Input type="password" label="رمز عبور" name="password"/>
                                </div>
                                <div className="col-md-6 col-sm-12"><Input type="password" label=" تکرار رمز عبور"
                                                                           name="rePassword"/></div>
                            </div>
{/*                             <ReCAPTCHA
                                className="mb-5"
                                sitekey="6LdBLXQdAAAAAJMzP6tCoYI6A8SikY3Ripf_1t76"
                                onChange={(e) => setRec(e)}
                                hl={"fa"}
                            /> */}
                            <div className="text-center">
                                <MutationButton type="submit" className="btn btn-primary">
                                    ثبت نام
                                </MutationButton>

                            </div>
                            <div className="have-account text-center mt-4">
                                <span>قبلا حساب دارید؟ </span>
                                <NavLink to="/login">
                                    <span>وارد شوید</span>
                                </NavLink>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
};

export default Register;
