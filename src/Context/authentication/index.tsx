import {createContext, FC, ReactNode, useEffect, useState} from "react";
import {useMutationQuery} from "Hooks/useMutationQuery";
import {login} from "Services/shortlink";
import Cookie from "universal-cookie";
import {useNavigate} from "react-router";
import {UseMutateFunction} from "react-query";
import {AxiosError} from "axios";



type auth={
    userName:string|null,
    role:string|null,
    resetCookie:()=>void,
    setCookie:(data: Authentication)=>void,
    data:Authentication|undefined,
    mutate: UseMutateFunction<Authentication, AxiosError<unknown, any>, Login, Authentication>
}

export const AuthProvider = createContext({} as auth);

type Props= {
    children: ReactNode
}

const Auth= ({children}:Props) => {
    const cookie = new Cookie();

    const replace = useNavigate();

    const [userName, setUserName] = useState<string|null>(null);
    const [role, setRole] = useState<string|null>(null);

    const {data, mutate} = useMutationQuery<Authentication, Login>({
        event: login, options: {
            onSuccess: (data) => {
                setCookie(data)
                replace("/")
            }
        }
    });

    const resetCookie = async () => {
        setUserName(null);
        setRole(null);
        await cookie.remove("token",{path:"/"});
        await cookie.remove("refreshToken",{path:"/"});
        await cookie.remove("role",{path:"/"});
        await cookie.remove("fullName",{path:"/"});
        replace("/login",{replace:true});
    };

    const setCookie = (data: Authentication) => {
        cookie.set("token", data.token, {path: "/"});
        cookie.set("refreshToken", data.refreshToken, {path: "/"});
        cookie.set("role", data.role, {path: "/"});
        cookie.set("fullName", data.fullName, {path: "/"});
    };

    useEffect(() => {
        if (data) {
            setUserName(data.fullName ?? null);
            setRole(data.role ?? null);
        }
    }, [data]);

    return (
        <AuthProvider.Provider
            value={{
                userName,
                role,
                resetCookie,
                setCookie,
                data,
                mutate
            }}
        >
            {children}
        </AuthProvider.Provider>
    );
};

export default Auth;
