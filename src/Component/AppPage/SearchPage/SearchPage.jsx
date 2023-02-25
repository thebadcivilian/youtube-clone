import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import TuneIcon from "@mui/icons-material/Tune";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon></TuneIcon>
        <h2>FILTER</h2>
      </div>
      <hr></hr>
      <ChannelRow
        channelImage="https://i.stack.imgur.com/BRryU.jpg"
        channelName="The Vlog Tube"
        noOfVideos="69"
        verified
        subs="3.2M subscribers"
        description="Welcome to The VlogTube.
        on our Channel, you will get Interesting  Vlog Videos, City Tour, Development News, and many more.
        So, please Subscribe to Our Youtube Channel."
      ></ChannelRow>

      <hr></hr>

      <VideoRow
        videoTitle="🔴 My City tour | 2023"
        views="564K"
        channelName="The Vlog Tube"
        timestamp="2 days ago"
        subs="3.2M"
        videoDescription="My City tour in 2023"
        image="https://myethiopiatravel.com/wp-content/uploads/Addis-Ababa-City-Tours-My-Ethiopia-Travel-Hidden-Treasures-Tours-and-Transfers-Ethiopia.jpg"
      />
      <VideoRow
        videoTitle="🔴 My City tour | 2023"
        views="564K"
        channelName="The Vlog Tube"
        timestamp="2 days ago"
        subs="3.2M"
        videoDescription="My City tour in 2023"
        image="https://myethiopiatravel.com/wp-content/uploads/Addis-Ababa-City-Tours-My-Ethiopia-Travel-Hidden-Treasures-Tours-and-Transfers-Ethiopia.jpg"
      />
      <VideoRow
        videoTitle="🔴 My City tour | 2023"
        views="564K"
        channelName="The Vlog Tube"
        timestamp="2 days ago"
        subs="3.2M"
        videoDescription="My City tour in 2023"
        image="https://myethiopiatravel.com/wp-content/uploads/Addis-Ababa-City-Tours-My-Ethiopia-Travel-Hidden-Treasures-Tours-and-Transfers-Ethiopia.jpg"
      />
      <VideoRow
        videoTitle="🔴 My City tour | 2023"
        views="564K"
        channelName="The Vlog Tube"
        timestamp="2 days ago"
        subs="3.2M"
        videoDescription="My City tour in 2023"
        image="https://myethiopiatravel.com/wp-content/uploads/Addis-Ababa-City-Tours-My-Ethiopia-Travel-Hidden-Treasures-Tours-and-Transfers-Ethiopia.jpg"
      />
      <VideoRow
        videoTitle="🔴 My City tour | 2023"
        views="564K"
        channelName="The Vlog Tube"
        timestamp="2 days ago"
        subs="3.2M"
        videoDescription="My City tour in 2023"
        image="https://myethiopiatravel.com/wp-content/uploads/Addis-Ababa-City-Tours-My-Ethiopia-Travel-Hidden-Treasures-Tours-and-Transfers-Ethiopia.jpg"
      />
      <VideoRow
        videoTitle="🔴 My City tour | 2023"
        views="564K"
        channelName="The Vlog Tube"
        timestamp="2 days ago"
        subs="3.2M"
        videoDescription="My City tour in 2023"
        image="https://myethiopiatravel.com/wp-content/uploads/Addis-Ababa-City-Tours-My-Ethiopia-Travel-Hidden-Treasures-Tours-and-Transfers-Ethiopia.jpg"
      />
      <VideoRow
        videoTitle="🔴 My City tour | 2023"
        views="564K"
        channelName="The Vlog Tube"
        timestamp="2 days ago"
        subs="3.2M"
        videoDescription="My City tour in 2023"
        image="https://myethiopiatravel.com/wp-content/uploads/Addis-Ababa-City-Tours-My-Ethiopia-Travel-Hidden-Treasures-Tours-and-Transfers-Ethiopia.jpg"
      />
      <VideoRow
        videoTitle="🔴 My City tour | 2023"
        views="564K"
        channelName="The Vlog Tube"
        timestamp="2 days ago"
        subs="3.2M"
        videoDescription="My City tour in 2023"
        image="https://myethiopiatravel.com/wp-content/uploads/Addis-Ababa-City-Tours-My-Ethiopia-Travel-Hidden-Treasures-Tours-and-Transfers-Ethiopia.jpg"
      />
      <VideoRow
        videoTitle="🔴 My City tour | 2023"
        views="564K"
        channelName="The Vlog Tube"
        timestamp="2 days ago"
        subs="3.2M"
        videoDescription="My City tour in 2023"
        image="https://myethiopiatravel.com/wp-content/uploads/Addis-Ababa-City-Tours-My-Ethiopia-Travel-Hidden-Treasures-Tours-and-Transfers-Ethiopia.jpg"
      />
      <VideoRow
        videoTitle="🔴 My City tour | 2023"
        views="564K"
        channelName="The Vlog Tube"
        timestamp="2 days ago"
        subs="3.2M"
        videoDescription="My City tour in 2023"
        image="https://myethiopiatravel.com/wp-content/uploads/Addis-Ababa-City-Tours-My-Ethiopia-Travel-Hidden-Treasures-Tours-and-Transfers-Ethiopia.jpg"
      />
    </div>
  );
}

export default SearchPage;
