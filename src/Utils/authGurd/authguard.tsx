import React, {FC} from 'react';
import Cookie from "universal-cookie";
import {Navigate, useNavigate} from "react-router-dom";

type Props= {
    children: React.ReactNode
}

const AuthGuard= ({children}:Props) => {
    const cookie = new Cookie()
    const role = cookie.get("role")
    if (!role)
        return <Navigate to={"/login"} replace/>

    return (<>{children}</>);

};

export default AuthGuard;