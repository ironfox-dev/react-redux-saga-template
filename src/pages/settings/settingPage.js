import React from 'react';
import './style.css';
import { SideBar } from '../../components';

export const SettingPage = () => {
    return (
        <div>
            <div className="intro-page-container">
                <SideBar select={"setting"} />
                <div className="main-section"></div>
            </div>
        </div>
    )
}
