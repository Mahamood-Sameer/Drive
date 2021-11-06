import React, { useState } from "react";
import "./Header.css";
import logo from "./Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import OfflinePinOutlinedIcon from "@mui/icons-material/OfflinePinOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Tooltip } from "@mui/material";
import { auth } from "../fbase";
import AddToDriveOutlinedIcon from "@mui/icons-material/AddToDriveOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
// Menu Box
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

function Header({ User }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const Logout = () => {
    auth.signOut().then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="header">
      <Tooltip title="Menu">
        <MenuIcon
          className="header__menuicon_responsive"
          onClick={handleClickMenu}
        />
      </Tooltip>
      <div className="header__logo__box">
        <img src={logo} alt="logo" />
        <p>Drive</p>
      </div>
      <div className="header__search__box">
        <SearchIcon />
        <input type="text" placeholder="Search in Drive" />
      </div>
      <div className="header__icons">
        <OfflinePinOutlinedIcon className="icons icons_none" />
        <HelpOutlineIcon className="icons icons_none" />
        <SettingsOutlinedIcon className="icons icons_none" />
        <AppsIcon className="icons icons_none" />
        <Avatar src={User.photoURL} className="icons" />
        <Button
          className="icons btn_logout"
          onClick={() => {
            Logout();
          }}
        >
          <LogoutIcon /> Logout
        </Button>
      </div>

      {/* -------------------- Menu ---------------------- */}

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleCloseMenu} style={{color:"blue",backgroundColor:"lightgray"}} className="responsive__menu"><AddToDriveOutlinedIcon /> My Drive</MenuItem>
        <MenuItem onClick={handleCloseMenu} className="responsive__menu"><ImportantDevicesOutlinedIcon />Computers</MenuItem>
        <MenuItem onClick={handleCloseMenu} className="responsive__menu"><PeopleAltOutlinedIcon />Shared with me</MenuItem>
        <MenuItem onClick={handleCloseMenu} className="responsive__menu"><QueryBuilderOutlinedIcon />Recent</MenuItem>
        <MenuItem onClick={handleCloseMenu} className="responsive__menu"><StarBorderOutlinedIcon />Stared</MenuItem>
        <MenuItem onClick={handleCloseMenu} className="responsive__menu"><DeleteOutlineOutlinedIcon />Bin</MenuItem>
        <MenuItem onClick={handleCloseMenu} className="responsive__menu"><CloudOutlinedIcon />Storage</MenuItem>
        <MenuItem onClick={handleCloseMenu} className="responsive__menu"><SearchIcon />Search</MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
