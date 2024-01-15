import React from "react";
import "./HomeFeeds.css";

const HomeFeeds = ({ item }) => {
  const { name, desc, tag1, tag2, tag3 } = item;
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
            <div className="postLike">
              <img src="../img/Like.png" alt="" />
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
