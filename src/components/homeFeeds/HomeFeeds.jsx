import React, { useContext, useRef, useState } from "react";
import "./HomeFeeds.css";
import { ListingContext } from "../../context/listing-context";

const HomeFeeds = ({ item }) => {
  const { id, name, desc, tag1, tag2, tag3 } = item;
  const { addToCart, removeFromCart, cartItems } = useContext(ListingContext);

  const [isLiked, setIsLiked] = useState(cartItems[id] > 0);

  const handleLikeDislike = () => {
    if (isLiked) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
    setIsLiked(!isLiked);
  };
  return (
    <>
      <div className="postCards">
        <div className="postPic">
          <img src="../img/profileIcon.png" alt="" />
        </div>
        <div className="postDetails">
          <div className="postName">{name}</div>
          <div className="postDesc">{desc}</div>
          <div className="postRate">
            <div className="postLike" onClick={handleLikeDislike}>
              <img
                src={!isLiked ? "../img/Like.png" : "../img/LikeRed.png"}
                alt=""
              />
            </div>
            <div className="postComment">
              <img src="../img/Comment.png" alt="" />
            </div>
            <div className="postShare">
              <img src="../img/Send.png" alt="" />
            </div>
          </div>
          <div className="postTags">
            {tag1 ?? ""}
            {tag2 ? " . " : ""}
            {tag2 ?? ""}
            {tag3 ? " . " : ""}
            {tag3 ?? ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFeeds;
