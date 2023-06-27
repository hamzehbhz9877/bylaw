import React from 'react';
import {NavLink} from "react-router-dom";
import DropDownMenu from "Layout/dropdownmenu";
import useAuth from "Context/authentication/useAuth";
import Cookie from "universal-cookie";

const Header = () => {
    const {userName} = useAuth()
    const user=new Cookie().get("fullName")
    return (
        <header className="header d-flex align-items-center justify-content-between">
            <ul>
                <li className="header__item"><NavLink to={"/"}>خانه</NavLink></li>
            </ul>
            <ul className="d-flex align-items-center">
                {(userName??user) ?
                    <li>
                        <DropDownMenu userName={userName??user}/>
                    </li> :
                    <>
                        <li className="header__item"><NavLink to={"login"}>ورود</NavLink></li>
                        <li className="header__item"><NavLink to={"register"}>عضویت</NavLink></li>
                    </>
                }

            </ul>
        </header>
    );
};

export default Header;