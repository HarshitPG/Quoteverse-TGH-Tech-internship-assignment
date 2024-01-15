import React from "react";
import "./TrendingTopic.css";
const TrendingTopic = ({ item }) => {
  const { topic, tag, number } = item;
  return (
    <>
      <div className="qoutes">
        <div className="qoutesTopic">{topic}</div>
        <div className="qoutesHastag">{tag}</div>
        <div className="qoutesNumber">{number}</div>
      </div>
    </>
  );
};

export default TrendingTopic;
