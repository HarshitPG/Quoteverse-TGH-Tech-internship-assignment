import React from "react";
import "./TrendingTopic.css";
const TrendingTopic = ({ item }) => {
  return (
    <>
      <div className="qoutes">
        <div className="qoutesTopic">{item.name}</div>
        <div className="qoutesHastag">#{item.slug}</div>
        <div className="qoutesNumber">{item.quoteCount}</div>
      </div>
    </>
  );
};

export default TrendingTopic;
