import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ytlogo from "../../Assets/youtube_icon.png";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  // const allowInput = (e) => {
  //   setInputSearch(e.target.value);
  // };

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon></MenuIcon>
        <Link to="/">
          <img className="header__logo" src={ytlogo} alt="logo"></img>
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        ></input>

        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton"></SearchIcon>
        </Link>
        <MicNoneOutlinedIcon></MicNoneOutlinedIcon>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon"></VideoCallIcon>
        <AppsIcon className="header__icon"></AppsIcon>
        <NotificationsIcon className="header__icon"></NotificationsIcon>
        <Avatar src={ytlogo} alt="avatar"></Avatar>
      </div>
    </div>
  );
}

export default Header;
