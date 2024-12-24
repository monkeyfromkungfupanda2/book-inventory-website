import React from "react";

const Tabs = ({ children, activeTab, setActiveTab }) => {
  return (
    <div>
      <div className="tab-buttons">
        {React.Children.map(children, (child) => (
          <button
            key={child.props.tabKey}
            className={activeTab === child.props.tabKey ? "active" : ""}
            onClick={() => setActiveTab(child.props.tabKey)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.map(children, (child) =>
          activeTab === child.props.tabKey ? child : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
