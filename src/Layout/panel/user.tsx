import React, {useState} from 'react';
import {useRoutes} from "react-router-dom";
import SideBar from "Layout/panel/sideBar";
import Backdrop from "Components/backdrop/backdrop";
import Header from "Layout/panel/header";
import {UserGeneralInfo,UserTestManagement,MoreInfoTest,ChangePassword} from "./lazy"

const route = [
    {element: <UserGeneralInfo/>, path: "generalInfo"},
    { path: "testManagement",
        children:[
            {
                index: true, element:  <UserTestManagement/>
            },
            {
                element: <MoreInfoTest/>, path: ":id"
            }
        ]
    },
    {element: <ChangePassword/>, path: "changePassword"},
]

const links=[
    {path:"generalInfo",text:"اطلاعات کلی آزمون ها"},
    {path:"testManagement",text:"مدیریت آزمون ها"},
    {path:"changePassword",text:"تغییر رمز عبور"},
    {path:"/logout",text:"خروج از حساب کاربری"},
]

const UserLayout = () => {

    const element = useRoutes(route)
    const [sideBar, setSidebar] = useState(false)

    const handleSidebar = () => setSidebar(!sideBar)

    return (
        <div className="panel__main">
            <Header links={links} handleSidebar={handleSidebar} type="userPanel"/>
            <SideBar sidebar={sideBar} links={links}/>
            <main>
                {element}

            </main>
            <Backdrop open={sideBar} closeSidebar={() => setSidebar(false)}/>
        </div>
    );
};

export default UserLayout;