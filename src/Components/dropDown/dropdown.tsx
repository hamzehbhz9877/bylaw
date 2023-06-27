import React, {FC, ForwardedRef} from 'react';
import {NavLink} from "react-router-dom";
import {FaHome, FaSignOutAlt, FaUser, FaUserTie} from "react-icons/fa";
import useAuth from "Context/authentication/useAuth";
import Cookie from "universal-cookie";

type Props= {
    closeMenu?: () => void
}

const Dropdown= React.forwardRef<HTMLDivElement,Props>(({closeMenu}, ref) => {
    const {role} = useAuth()
    const cookie=new Cookie()
    return (
        <div className="dropdown" ref={ref}>
            <ul>
                <li className="dropdown__item" onClick={closeMenu}>
                    <NavLink to={"/"}>
                        <i> <span>
                    <FaHome className="fa"/>
                            </span></i>
                        صفحه اصلی
                    </NavLink>
                </li>
                {(role??cookie.get("role")) === "admin" &&
                <li className="dropdown__item" onClick={closeMenu}>
                    <NavLink to={"/adminPanel/generalInfo"}>
                        <i> <span>
                     <FaUserTie className="fa"/>
                            </span></i>
                        پنل ادمین
                    </NavLink>
                </li>
                }

                <li className="dropdown__item" onClick={closeMenu}>
                    <NavLink to={"/userPanel/generalInfo"}>
                        <i> <span>
<FaUser className="fa"/>
                            </span></i>
                        پنل کاربری
                    </NavLink>
                </li>
                <li className="dropdown__item" onClick={closeMenu}>
                    <NavLink to={"/logout"}>
                        <i> <span>
<FaSignOutAlt className="fa"/>
                            </span></i>
                        خروج از حساب
                    </NavLink>
                </li>
            </ul>
        </div>
    );
});

export default Dropdown;