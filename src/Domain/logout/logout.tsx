import React, {useEffect} from 'react';
import useAuth from "Context/authentication/useAuth";

const Logout = () => {

    const {resetCookie} = useAuth()
    useEffect(() => {
        resetCookie()
    }, [])
    return null

};

export default Logout;