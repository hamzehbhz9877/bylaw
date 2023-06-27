import * as Yup from 'yup';

export const initialValues:ChangePassword = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

export const validationSchema = Yup.object({
  oldPassword: Yup.string()
    .min(6, 'پسورد باید حداقل حاوی شش کاراکتر باشد')
    .required('لطفا رمز عبور را وارد کنید')
    .trim(),
  newPassword: Yup.string()
    .min(6, 'رمز عبور جدید باید حداقل حاوی شش کاراکتر باشد')
    .required('لطفا رمز عبور جدید را وارد کنید')
    .trim(),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref('newPassword'), ''],
      'رمز عبور جدید با تکرار رمز عبور جدید برابر نیست'
    )
    .required('لطفا تکرار رمز عبور جدید را وارد کنید')
    .trim(),
});
