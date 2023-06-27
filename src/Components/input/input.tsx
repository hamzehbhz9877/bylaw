import React, {DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';
import {ErrorMessage,Field} from "formik";

type propsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>;

interface Props extends propsType {
    type: "text" | "number" | "email" | "password";
    label: string;
    name?: string;
}

const Input = ({type,label,name,...rest}:Props) => {
    return (
        <div className="form-group">
            <label className="form-label">{label}</label>
                <Field
                    name={name}
                    type={type}
                    className={`form-control ${rest.className??""}`}
                    {...rest}
                />
            {name && <ErrorMessage name={name} className="error-message" component="div"/>}
        </div>
    );
};

export default Input;