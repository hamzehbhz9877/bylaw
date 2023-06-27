import React, {FC, useRef} from 'react';
import useClickOutside from "Hooks/useOutsideClick";
import useAuth from "Context/authentication/useAuth";
import Dropdown from "Components/dropDown/dropdown";
import {FaAngleDown} from "react-icons/fa"

type Props= {
    userName: string
}

const DropDownMenu= ({userName}:Props) => {

    const clickRef = useRef<HTMLDivElement>(null);

    const menuRef = useRef<HTMLDivElement>(null);

    const openMenu = () => menuRef.current?.classList.toggle("active");

    const closeMenu = () => menuRef.current?.classList.remove("active");

    useClickOutside(clickRef, closeMenu);

    return (
        <div ref={clickRef}>
            <div onClick={openMenu}>{userName}
                <FaAngleDown className="fa"/>
            </div>
            <Dropdown ref={menuRef} closeMenu={closeMenu}/>
        </div>
    );
};

export default DropDownMenu;