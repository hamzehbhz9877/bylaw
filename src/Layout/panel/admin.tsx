import React, {useState} from 'react';
import {useRoutes} from "react-router-dom";
import SideBar from "Layout/panel/sideBar";
import Backdrop from "Components/backdrop/backdrop";
import Header from "./header";
import {UserManagement,QuestionManagement,ChangePassword,MoreInfoTest,GeneralInfo,TestManagement} from "./lazy"

const route = [
    {element: <GeneralInfo/>, path: "generalInfo"},
    {element: <QuestionManagement/>, path: "questionManagement"},
    { path: "testManagement",
        children:[
            {
                index: true, element:  <TestManagement/>
            },
            {
                element: <MoreInfoTest/>, path: ":id"
            }
        ]
    },
    {element: <UserManagement/>, path: "userManagement"},
    {element: <ChangePassword/>, path: "changePassword"},
]
const links=[
    {path:"generalInfo",text:"اطلاعات کلی آزمون ها"},
    {path:"questionManagement",text:"مدیریت سوال ها"},
    {path:"testManagement",text:"مدیریت آزمون ها"},
    {path:"userManagement",text:"مدیریت کاربران"},
    {path:"changePassword",text:"تغییر رمز عبور"},
    {path:"/logout",text:"خروج از حساب کاربری"},
]
const AdminLayout = () => {

    const element = useRoutes(route)

    const [sideBar, setSidebar] = useState(false)

    const handleSidebar = () => setSidebar(!sideBar)

    return (
        <div className="panel__main">
            <Header links={links} handleSidebar={handleSidebar} />
            <SideBar sidebar={sideBar} links={links}/>
            <main>
                {element}
            </main>
            <Backdrop open={sideBar} closeSidebar={() => setSidebar(false)}/>
        </div>
    );
};

export default AdminLayout;