import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import "../trendingQuotes/TrendingQuotes.css";
import HomeFeeds from "../homeFeeds/HomeFeeds";
// import feeds from "../../feedsData";
import Trending from "../trending/Trending";
import Userprofile from "../userProfile/UserProfile";
import LikedFeeds from "../likedFeeds/LikedFeeds";
import { ListingContext } from "../../context/listing-context";
import axios from "axios";
import TrendingQuotes from "../trendingQuotes/TrendingQuotes";
const Header = () => {
  const {
    feeds,
    cartItems,
    setTrendTopic,
    trendTopic,
    TagFeeds,
    home,
    setHome,
    trendTag,
  } = useContext(ListingContext);
  function homeClickHandler(trigger) {
    if (trigger === "home") {
      setHome(true);
      setTrendTopic(false);
    }
    if (trigger === "like") {
      setTrendTopic(false);
      setHome(false);
    }
  }

  function trendClickHandler(trigger) {
    if (trigger === "trend") {
      setTrendTopic(false);
      setHome(true);
    }
  }
  console.log(
    Object.entries(cartItems)
      .filter(([key, value, item]) => value !== 0)
      .map(([key, value, item]) => {
        console.log(key, item);
        return key;
      })
  );

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="QuotverseMobile">Quotverse</div>
        <div className="menu-icon" onClick={handleClick}>
          <img
            src={click ? "../img/RightInfos.png" : "../img/RightInfos.png"}
            alt="Menu Icon"
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item-mobile">
            <div onClick={closeMobileMenu}>
              <div className="trending-mobile">
                <Trending />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="header">
        <div className="quotverse">Quotverse</div>
        <div className="home">
          <div className="homeTabs">
            <div className="homeIcon" onClick={() => homeClickHandler("home")}>
              <img
                src={!home ? "../img/homeIcon.png" : "../img/Home.png"}
                alt=""
              />
            </div>
            <div className="likeIcon" onClick={() => homeClickHandler("like")}>
              <img
                src={
                  home || trendTopic
                    ? "../img/likeIcon.png"
                    : "../img/likeActive.png"
                }
                alt=""
                style={
                  home || trendTopic ? {} : { height: "22px", width: "24px" }
                }
              />
            </div>
          </div>
        </div>
        <div className="trendingInfos">
          <div className="RightInfos" onClick={() => homeClickHandler()}>
            <img src="../img/RightInfos.png" alt="" />
          </div>
        </div>
      </div>

      <hr />
      <div className="header2">
        <div className="quotverse2">
          <Userprofile />
        </div>
        <div className="home2">
          <div className="homeContent2">
            {!trendTopic ? (
              home ? (
                feeds.map((item) => (
                  <React.Fragment key={item.id}>
                    <HomeFeeds item={item} />
                  </React.Fragment>
                ))
              ) : (
                Object.entries(cartItems)
                  .filter(([key, value, item]) => value !== 0)
                  .map(([key, value, item]) => (
                    <React.Fragment key={key}>
                      <LikedFeeds item={[key]} />
                    </React.Fragment>
                  ))
              )
            ) : (
              <>
                <div className="postTrend">
                  <div
                    className="postTrendarrow"
                    onClick={() => trendClickHandler("trend")}
                  >
                    <img src="../img/arrow.png" alt="" />
                  </div>
                  <div>
                    <div className="postTrendcontent">TOPIC</div>
                    <div className="postTrendWord"># {trendTag}</div>
                  </div>
                </div>
                {TagFeeds.map((item) => (
                  <React.Fragment key={item.id}>
                    <TrendingQuotes item={item} />
                  </React.Fragment>
                ))}
              </>
            )}
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
