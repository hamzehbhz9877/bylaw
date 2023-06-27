import * as Yup from "yup";

const initialValues:Register={
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    password:"",
    rePassword:""
}

const validationSchema = Yup.object({
    firstName: Yup.string().required("لطفا نام کوچک را وارد کنید").trim(),
    lastName: Yup.string().required("لطفا نام خانوادگی را وارد کنید").trim(),
    userName:Yup.string().required("لطفا نام کاربری را وارد کنید").trim(),
    email:Yup.string().email("فرمت ایمیل وارد شده صحیح نمیباشد").required("لطفا ایمیل را وارد کنید").trim(),
    password:Yup.string().required("لطفا رمز عبور را وارد کنید").trim(),
    rePassword:Yup.string()
        .oneOf([Yup.ref('password'), null], 'رمز عبور با تکرار رمز عبور برابر نیست').required("لطفا تکرار رمز عبور را وارد کنید").trim()
});

export {initialValues,validationSchema}
