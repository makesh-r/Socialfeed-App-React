import React from 'react'
import './components/App.scss';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import { useState } from 'react';
import { Outlet } from "react-router-dom";

const MainPage = () => {
    const [tog, setTog] = useState(true);
    const [ham, setHam] = useState('hamno');
    const showHam = () => {
        if (tog) {
            setHam("hamyes");
            setTog(!tog);
        }
        else {
            setHam("hamno");
            setTog(!tog);
        }
    }

    return (
        <>
            <TopBar showHam={showHam} />
            <SideBar side={ham} />
            <Outlet />
        </>
    )
}

export default MainPage
