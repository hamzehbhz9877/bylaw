import {object, string} from "yup";

const initialValues={
    email:"",
    password:"",
}

const validationSchema = object({
    email:string().email("فرمت ایمیل وارد شده صحیح نمیباشد").required("لطفا ایمیل را وارد کنید").trim(),
    password: string().required("لطفا رمز عبور را وارد کنید").trim(),
});

export {initialValues,validationSchema}