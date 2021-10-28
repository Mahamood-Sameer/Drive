import React from 'react'
import './Header.css'
import logo from './Logo.png'
import SearchIcon from '@mui/icons-material/Search';
import OfflinePinOutlinedIcon from '@mui/icons-material/OfflinePinOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';

function Header() {
    return (
        <div className="header">
            <div className="header__logo__box">
                <img src={logo} alt="logo" />
                <p>Drive</p>
            </div>
            <div className="header__search__box">
                <SearchIcon />
                <input type="text" placeholder="Search in Drive"/>
            </div>
            <div className="header__icons">
                <OfflinePinOutlinedIcon className="icons"/>
                <HelpOutlineIcon className="icons"/>
                <SettingsOutlinedIcon className="icons"/>
                <AppsIcon className="icons"/>
                <Avatar className="icons"/>
                <Button className="icons btn_logout"><LogoutIcon /> Logout</Button>
            </div>
        </div>
    )
}

export default Header
