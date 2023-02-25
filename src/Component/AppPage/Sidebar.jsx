import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected icon={HomeIcon} title="Home"></SidebarRow>
      <SidebarRow icon={WhatshotIcon} title="Trending"></SidebarRow>
      <SidebarRow icon={SubscriptionsIcon} title="Subscription"></SidebarRow>
      <hr></hr>
      <SidebarRow icon={VideoLibraryOutlinedIcon} title="Library"></SidebarRow>
      <SidebarRow icon={HistoryOutlinedIcon} title="History"></SidebarRow>
      <SidebarRow
        icon={OndemandVideoOutlinedIcon}
        title="Your videos"
      ></SidebarRow>
      <SidebarRow
        icon={WatchLaterOutlinedIcon}
        title="Watch later"
      ></SidebarRow>
      <SidebarRow icon={ThumbUpOutlinedIcon} title="Liked videos"></SidebarRow>
      <SidebarRow icon={ExpandMoreOutlinedIcon} title="Show more"></SidebarRow>
      <hr></hr>
    </div>
  );
}

export default Sidebar;
