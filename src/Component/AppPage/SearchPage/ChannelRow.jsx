import React from "react";
import "./ChannelRow.css";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";

function ChannelRow({
  channelImage,
  channelName,
  noOfVideos,
  description,
  subs,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar
        className="channelRow__logo"
        alt={channelName}
        src={channelImage}
      ></Avatar>

      <div className="channelRow__text">
        <h4>
          {channelName} {verified && <VerifiedIcon />}
        </h4>

        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
