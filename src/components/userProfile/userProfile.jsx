import React from "react";
import "./userProfile.css";

const Userprofile = () => {
  return (
    <>
      <div className="profileBox">
        <div className="profilePic">
          <img src="../img/profileIcon.png" alt="" />
        </div>
        <div className="profileName">
          Harshit P G<div className="profileId">Harshit_P_G</div>
        </div>
        <div className="profileDesc">
          UI Developer | Let's redesign the world
        </div>
        <div className="profileLikes">2957 likes </div>
      </div>
    </>
  );
};

export default Userprofile;
