import { Form, Formik, FormikHelpers } from 'formik';
import { initialValues, validationSchema } from './validation';
import { useMutationQuery } from 'Hooks/useMutationQuery';
import Input from 'Components/input/input';
import { changePassword } from 'Services/shortlink';
import useAuth from "Context/authentication/useAuth";

//css
import "/public/css/pages/_changepassword.scss"

const ChangePassword = () => {

    const {resetCookie}=useAuth()
    const user = useMutationQuery<null, ChangePassword>({event: changePassword });

    const handleSubmit = async (
        values: ChangePassword,
        actions: FormikHelpers<ChangePassword>
    ) => {
        user.mutate(values, {
            onSuccess: () => {
                actions.resetForm();
                resetCookie()
            },
        });
    };

    return (
                <section className="change-password card mx-auto">
                    <div className="card__header-title">
                        <h4 className="text-center">تغییر رمز</h4>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {() => {
                            return (
                                <Form>
                                    <Input name="oldPassword" type="password" label="رمز فعلی" />
                                    <Input
                                        name="newPassword"
                                        type="password"
                                        label="رمز عبور جدید"
                                    />
                                    <Input
                                        name="confirmPassword"
                                        type="password"
                                        label="تکرار رمز عبور جدید"
                                    />
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-success">
                                            ثبت
                                        </button>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </section>
    );
};

export default ChangePassword;
