import React, { useContext } from "react";
import "./LikedFeeds.css";
import { ListingContext } from "../../context/listing-context";

const LikedFeeds = ({ item }) => {
  const { id, addToCart } = useContext(ListingContext);
  return (
    <>
      <div className="postCards">
        <div className="postPic">
          <img src="../img/profileIcon.png" alt="" />
        </div>
        <div className="postDetails">
          <div className="postName">{item.author}</div>
          <div className="postDesc">{item.content}</div>
          <div className="postRate">
            <div className="postLike" onClick={() => addToCart(item._id)}>
              <img src="../img/LikeRed.png" alt="" />
            </div>
            <div className="postComment">
              <img src="../img/Comment.png" alt="" />
            </div>
            <div className="postShare">
              <img src="../img/Send.png" alt="" />
            </div>
          </div>
          <div className="postTags">{item.tags}</div>
        </div>
      </div>
    </>
  );
};

export default LikedFeeds;
