import React from "react";
import TrendingTopic from "../trendingTopics/TrendingTopic";
import topics from "../../trendingData";
import "./Trending.css";
const Trending = () => {
  return (
    <>
      <div className="trendingbox">
        <div className="trendingTopics">
          Trending Topics{" "}
          <div className="trendingSettings">
            <img src="../img/settings.png" alt="" />
          </div>
        </div>
        <div className="qoutesAll">show all quotes</div>
        <div className="quotestag">
          {topics.map((item) => (
            <TrendingTopic item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Trending;
