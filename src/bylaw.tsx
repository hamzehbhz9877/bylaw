import React from 'react';
import {useRoutes} from "react-router-dom";

import {getAllowedRoutes} from "Routes/premissions/route";
import MainLayout from "Layout/main/mainlayout";
import AdminLayout from "Layout/panel/admin";
import UserLayout from "Layout/panel/user";
import Logout from "Domain/logout/logout";
import AuthGuard from "Utils/authGurd/authguard";
import {Roles} from "Routes/roles";

const routes = [
    {
        path: "/*",
        element: <MainLayout/>
    },
    {
        path: "/adminPanel/*",
        element:
            <AuthGuard>
                <AdminLayout/>
            </AuthGuard>,
        permission: [Roles.ADMIN]
    },
    {
        path: "/userPanel/*",
        element: <UserLayout/>,
        permission: [Roles.USER,Roles.ADMIN]
    },
    {
        path: "/logout",
        element: <Logout/>,
    }
];


const Bylaw = () => {
    const allowedRoutes = getAllowedRoutes(routes)
    let element = useRoutes(allowedRoutes);
    return (
        <>
            {element}
        </>
    );
};

export default Bylaw;