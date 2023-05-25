import React, { useState } from 'react'

const Tabs = ({tabs}) => {
let [activeTab,setActiveTab]=useState("");

    const handleTabClick = (index) => {
        setActiveTab(index);
      };
    
  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => handleTabClick(index)}
            style={{ cursor: 'pointer', fontWeight: activeTab === index ? 'bold' : 'normal' }}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      {tabs[activeTab] && <div>{tabs[activeTab].content}</div>}
    </div>
  )
}

export default Tabs
