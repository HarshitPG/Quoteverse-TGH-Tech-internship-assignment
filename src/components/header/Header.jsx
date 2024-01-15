import React, { useState } from "react";
import "./Header.css";
import UserProfile from "../userProfile/userProfile";
import HomeFeeds from "../homeFeeds/HomeFeeds";
import feeds from "../../feedsData";
import Trending from "../trending/Trending";
const Header = () => {
  const [home, setHome] = useState(true);
  function homeClickHandler(trigger) {
    if (trigger === "room") {
      setHome(true);
    } else {
      setHome(false);
    }
  }
  return (
    <>
      <div className="header">
        <div className="quotverse">Quotverse</div>
        <div className="home">
          <div className="homeTabs">
            <div className="homeIcon" onClick={() => homeClickHandler("room")}>
              <img src="../img/homeIcon.png" alt="" />
            </div>
            <div className="likeIcon" onClick={() => homeClickHandler()}>
              <img src="../img/likeIcon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="trending"></div>
      </div>
      <hr />
      <div className="header2">
        <div className="quotverse2">
          <UserProfile />
        </div>
        <div className="home2">
          <div className="homeContent2">
            {feeds.map((item) => (
              <>{home ? <HomeFeeds item={item} key={item.id} /> : ""}</>
            ))}
          </div>
        </div>
        <div className="trending">
          <Trending />
        </div>
      </div>
    </>
  );
};

export default Header;
