import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

const RoadmapItem2 = ({ reverse, data, firstItem }) => {
  const { label, icon: Icon, list } = data;
  return (
    <div className="roadmap-i-wrapper">
      <div
        className={`roadmap-item ${reverse ? "rev-item" : "normal-item"} ${
          firstItem ? "first-item" : ""
        }`}
      >
        <div className="roadmap-list">
          <ul>
            {list.map(({ id, text }) => {
              return <li key={id}>{text}</li>;
            })}
          </ul>
        </div>
        <div className="roadmap-base">
          <div className="roadmap-icon">
            <Icon />
          </div>
          <div className="roadmap-dot"></div>
          <div className="roadmap-label">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapItem2;
