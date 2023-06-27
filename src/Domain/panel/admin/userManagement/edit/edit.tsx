import React, {FC} from 'react';
import {Form, Formik} from "formik";
import {ModalBody, ModalFooter, ModalHeader} from "Components/modal/template";
import Input from "Components/input/input";
import {useMutationQuery} from "Hooks/useMutationQuery";
import {editUser, getUser} from "Services/shortlink";
import {queryClient} from "Store";
import {useGetQuery} from "Hooks/useGetQuery";
import * as Yup from "yup";
import MutationButton from "Components/button/mutation";

type Props= {
    id: any
    close: () => void
}

type editUser=Omit<Register,"password"|"rePassword">


const Edit= ({id,close}:Props) => {
    const {mutate} = useMutationQuery<null, editUser & {id:number}>({
        event: editUser, options: {
            onSuccess: () => {
                queryClient.invalidateQueries("userManagement")
                close()
            }
        }
    });
    const {data} = useGetQuery<editUser>({event: getUser, values: id, eventOption: {queryKey: "getSingleUser"}});

    const handleSubmit = (values:editUser) => {
        mutate({...values,id})
    }
    return (
        <Formik
            initialValues={{
                firstName: data?.firstName??"",
                lastName: data?.lastName??"",
                userName: data?.userName??"",
                email: data?.email??""
            }}
            enableReinitialize
            onSubmit={handleSubmit}
            validationSchema={
                Yup.object({
                    firstName: Yup.string().required("لطفا نام کوچک را وارد کنید").trim(),
                    lastName: Yup.string().required("لطفا نام خانوادگی را وارد کنید").trim(),
                    userName:Yup.string().required("لطفا نام کاربری را وارد کنید").trim(),
                    email:Yup.string().email("فرمت ایمیل وارد شده صحیح نمیباشد").required("لطفا ایمیل را وارد کنید").trim()
                })
            }

        >
            {() => {
                return (
                    <Form>
                        <ModalHeader>
                            <h4 className="text-center">ویرایش کابر</h4>
                        </ModalHeader>
                        <ModalBody>
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
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <div className="text-center">
                                <MutationButton  type="submit" className="btn btn-success">
                                    تایید
                                </MutationButton>                            </div>
                        </ModalFooter>
                    </Form>
                )
            }}
        </Formik>
    );
};

export default Edit;