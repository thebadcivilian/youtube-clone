import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  channelName,
  subs,
  timestamp,
  videoTitle,
  image,
  videoDescription,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="video"></img>
      <div className="videoRow__text">
        <h3>{videoTitle}</h3>
        <p className="videoRow__headline">
          {channelName} •
          <span className="videoRow__subs">
            <span className="subsnumber">{subs}</span> subscribers
          </span>
          {views} • {timestamp}
        </p>
        <p className="videoRow__description">{videoDescription}</p>
      </div>
    </div>
  );
}

export default VideoRow;
