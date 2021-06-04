import React, { useState, useEffect } from 'react';
import './style.css';
import { BsPerson, BsCalendar, BsChatSquareDots, BsBell, BsGear } from "react-icons/bs";
import { sharedColors } from '../../theme/sharedColor';
import { routers } from '../../config/router';
import { Link } from "react-router-dom";

const navIcons = [
    {
        route: routers.HOMEPAGE,
        element: <BsPerson size="33px" color={sharedColors.primaryFontColor} />,
        id: 'home',
        name: 'Patients',
    }, {
        route: routers.CALENDAR_PAGE,
        element: <BsCalendar size="33px" color={sharedColors.primaryFontColor} />,
        id: 'calendar',
        name: 'Schedule',
    }, {
        route: routers.CHATPAGE,
        element: <BsChatSquareDots size="33px" color={sharedColors.primaryFontColor} />,
        id: 'chat',
        name: 'Chat',
    }, {
        route: routers.NOTIFICATION,
        element: <BsBell size="33px" color={sharedColors.primaryFontColor} />,
        id: 'notify',
        name: 'Notifications',
    }, {
        route: routers.SETTINGS,
        element: <BsGear size="33px" color={sharedColors.primaryFontColor} />,
        id: 'setting',
        name: 'Settings',
    },
]

export const SideBar = ({select}) => {
    // Style for special text
    const specialColorFont = {
        color: sharedColors.primaryFontColor,
    }

    const [navMenu, setNavMenu] = useState(navIcons);
    const [selectedTab, setSelectedTab] = useState();

    // Set selected tab icon highlihgt when selectedTab changes
    useEffect(() => {
        setSelectedTab(select)
    }, [select]);

    return (
        <div className="side-bar">
            <h1 className="side-bar-full-title">nexpil<span style={specialColorFont}>.</span></h1>
            <h1 className="side-bar-reduced-title">n<span style={specialColorFont}>.</span></h1>
            <div className="navigation-icons-container">
                {navMenu.map((item, i) =>
                    <Link key={i} className="navigation-icons-row" to={item.route}>
                        <div id={item.id} className={item.id !== selectedTab ? "navigation-icon-none-selected" : "navigation-icon-selected"}>
                            {item.element}
                            <p className="navigation-icons-name">{item.name}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div >
    )
}
