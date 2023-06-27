import {useRoutes} from "react-router-dom";
import Home from "Domain/home/home";
import Header from "Layout/main/header";
import {Register,Test,Login,Result} from "./lazy"

const routes= [
    { index: true, element: <Home /> },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/test",
        element: <Test />,
    },
    {
        path: "/result",
        element: <Result />,
    },
]
const MainLayout = () => {
    const element=useRoutes(routes)
    return (
        <>
         <Header/>
            <main className="main" >
                {element}
            </main>
        </>
    );
};

export default MainLayout;