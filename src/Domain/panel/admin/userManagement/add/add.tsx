import React, {FC} from 'react';
import {Form, Formik} from "formik";
import Input from "Components/input/input";
import {ModalBody, ModalFooter, ModalHeader} from "Components/modal/template";
import {initialValues,validationSchema} from "Domain/register/validation";
import {useMutationQuery} from "Hooks/useMutationQuery";
import {register} from "Services/shortlink";
import {queryClient} from "Store";
import MutationButton from "Components/button/mutation";


type Props={
    close:()=>void
}
const Add = ({close}:Props) => {
    const {mutate} = useMutationQuery<null, Register>({
        event: register, options: {
            onSuccess: () => {
                queryClient.invalidateQueries("userManagement")
                close()
            }
        }
    });
    const handleSubmit=(values:Register)=>{
        mutate(values)
    }
    return (
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {() =>{
                    return (
                        <Form>
                            <ModalHeader>
                                <h4 className="text-center">افزودن کاربر</h4>
                            </ModalHeader>
                            <ModalBody>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <Input type="text" label="نام" name="firstName" />
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
                                    <div className="col-md-6 col-sm-12"> <Input type="password" label=" تکرار رمز عبور" name="rePassword"/></div>
                                </div>
                            </ModalBody>

                            <ModalFooter>
                                <div className="text-center">
                                    <MutationButton  type="submit" className="btn btn-success" >
                                        تایید
                                    </MutationButton>                                </div>
                            </ModalFooter>
                        </Form>
                    )}}
            </Formik>
    );
};

export default Add;