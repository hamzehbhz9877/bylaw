import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import Cookie from "universal-cookie";
import useAlert from "Context/alert/useAlert";
import {useEffect} from "react";
import useAuth from "Context/authentication/useAuth";
import {useNavigate} from "react-router";


export const instant = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

export const CancelToken = () => {
    const controller = new AbortController();
    instant.defaults.signal = controller.signal
    return controller;
};


const Interceptor = ({children}: any) => {

    const {addAlert} = useAlert()

    const {resetCookie, setCookie} = useAuth()

    const replace = useNavigate()

    useEffect(() => {
        const request = instant.interceptors.request.use(
            (config: AxiosRequestConfig): AxiosRequestConfig => {
                const {token} = new Cookie().getAll();

                config.headers = {
                    Accept: 'application/json',
                };

                if (token !== undefined) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                return config;
            },
            function (error) {
                return Promise.reject(error);
            }
        );

        const response = instant.interceptors.response.use(
            (res: AxiosResponse): AxiosResponse => {
                return res;
            },
            async (error) => {
                const cookie = new Cookie().getAll();
                const originalConfig = error.config;

                if (error.response.status !== 401 && error.response.status >= 400 && error.response.data.message) {
                    addAlert({
                        message: error.response.data.message,
                        timeout: 5,
                        type: "danger",
                    })
                    // if (error.response.status === 403){
                    //     replace("/", {replace: true})
                    // }
                }

                if (error.response.status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true;
                    if (!cookie.token) {
                        addAlert({
                            message: error.response.data.message,
                            timeout: 5,
                            type: "danger",
                        })
                        // replace("/", {replace: true})
                    } else {
                        try {
                            const {data}: AxiosResponse<Api<Authentication>> = await axios.post('https://bylaw.onrender.com/users/refreshToken', {refreshToken: cookie.refreshToken});
                            if (data.isSuccess) {
                                setCookie(data.data)
                                axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.data.token;
                                return instant(originalConfig);
                            }
                        } catch (err) {
                             resetCookie()
                        }
                    }
                }
                return Promise.reject(error);
            }
        );
        return () => {
            instant.interceptors.request.eject(request)
            instant.interceptors.response.eject(response)
        }
    }, [])

    return children ?? null
};
export default Interceptor
