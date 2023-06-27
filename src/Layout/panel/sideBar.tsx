import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

type Props= {
    sidebar: boolean
    links: { text: string, path: string }[]
}

const SideBar= ({sidebar, links}:Props) => {
    return (
        <aside>
            <div className={`panel__sidebar ${sidebar ? "panel__sidebar--open" : ""}`}>
                <ul>
                    {
                        links.map(value => {
                            return <li key={value.path}><NavLink to={value.path}>{value.text}</NavLink></li>
                        })
                    }
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;