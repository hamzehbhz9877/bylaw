import React, {FC} from 'react';
import {useLocation} from "react-router-dom";
import DropDownMenu from "Layout/dropdownmenu";
import useAuth from "Context/authentication/useAuth";
import Cookie from "universal-cookie";

type Props= {
    handleSidebar: () => void
    links: { text: string, path: string }[]
    type?: "userPanel" | "adminPanel"
}

const Header= ({links, handleSidebar}:Props) => {
    const location = useLocation()
    const title = links.find(link => location.pathname.includes(link.path))

    const {userName}=useAuth()
    const user=new Cookie().get("fullName")

    return (
        <header className="header panel__header d-flex align-items-center justify-content-between">
            <ul className="d-flex align-items-center">
                <li className="mobile mobile-menu">
                    <div>
                  <span role="button" className="user-select-auto" onClick={handleSidebar}>
                     &#x2630;
                </span>
                    </div>
                </li>
                <li className="desktop m-0">
                    <h5 className="page-title mb-0">{title?.text}</h5>
                </li>
            </ul>
            <ul className="d-flex align-items-center">
                {(userName??user)&&
                    <li>
                        <DropDownMenu userName={userName??user}/>
                    </li>
                }
            </ul>
        </header>
    );
};

export default Header;