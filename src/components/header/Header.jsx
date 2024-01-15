import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import HomeFeeds from "../homeFeeds/HomeFeeds";
// import feeds from "../../feedsData";
import Trending from "../trending/Trending";
import Userprofile from "../userProfile/UserProfile";
import LikedFeeds from "../likedFeeds/LikedFeeds";
import { ListingContext } from "../../context/listing-context";
import axios from "axios";
const Header = () => {
  const [home, setHome] = useState(true);
  function homeClickHandler(trigger) {
    if (trigger === "room") {
      setHome(true);
    } else {
      setHome(false);
    }
  }

  // const [feeds, setFeeds] = useState([]);
  // useEffect(() => {
  //   const fetchFeeds = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.quotable.io/quotes/random?limit=3"
  //       );
  //       const feedsData = response.data.map((item, index) => ({
  //         ...item,
  //         id: 0,
  //       }));
  //       setFeeds(feedsData);
  //       console.log(feedsData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchFeeds();
  // }, []);

  const { feeds, cartItems } = useContext(ListingContext);

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
            {feeds.map((item) => (
              <React.Fragment key={item.id}>
                {home ? (
                  <HomeFeeds item={item} />
                ) : cartItems[item._id] !== 0 ? (
                  <LikedFeeds item={item} />
                ) : null}
              </React.Fragment>
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
