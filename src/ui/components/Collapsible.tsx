import React, { useState } from 'react'
import '../styles/Collapsible.css'
import { DownOutlined, UpOutlined } from '@ant-design/icons'

interface CollapsibleProps {
  title: string;
  bulletPoints: string[];
  icon: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, bulletPoints, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-container">
      <div className="collapsible-header" onClick={toggleOpen}>
        <div className="left-content">
          <div className="icon-container">{icon}</div>
          <span>{title}</span>
        </div>
        {isOpen ? <UpOutlined /> : <DownOutlined />}
      </div>
      <ul className={`collapsible-content ${isOpen ? 'open' : ''}`}>
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  )
}

export default Collapsible
