import {lazy} from "react";
import {Loadable} from "Routes/lazy/loadable";

const Login = Loadable(lazy(() => import('Domain/login/login')));
const Register = Loadable(lazy(() => import('Domain/register/register')));
const Test = Loadable(lazy(() => import('Domain/test/test')));
const Result = Loadable(lazy(() => import('Domain/result/result')));

export {Login,Test,Register,Result}