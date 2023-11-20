import React from "react";

const Tabs = ({ tabs, activeTab, handleTabChange }) => {
  return (
    <ul className="tabs">
      {tabs.map((tab) => {
        return (
          <li className={`tab ${tab.value == activeTab.value ? "active" : ""}`}>
            <button
              className="d-flex align-items-center"
              onClick={() => handleTabChange(tab)}
            >
              <span>{tab.label}</span>
              <span className="tab-icon">
                <img src={tab.icon} alt="" />
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
