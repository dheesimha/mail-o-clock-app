import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Apps, ArrowDropDown, Notifications } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="left-header">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png"
          alt=""
        />
      </div>

      <div className="middle-header">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown className="header_inputCaret" />
      </div>

      <div className="right-header">
        <IconButton>
          <Apps />
        </IconButton>

        <IconButton>
          <Notifications />
        </IconButton>

        <Avatar />
      </div>
    </div>
  );
}

export default Header;
