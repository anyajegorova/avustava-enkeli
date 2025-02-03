import React, { useState } from 'react'
import './Collapsible.css'
import { DownOutlined, UpOutlined } from '@ant-design/icons'

interface CollapsibleProps {
  title: string;
  bulletPoints: string[];
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, bulletPoints }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-container">
      <div className="collapsible-header" onClick={toggleOpen}>
        <span>{title}</span>
        {isOpen ? <UpOutlined /> : <DownOutlined />}
      </div>
      {isOpen && (
        <ul className="collapsible-content">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Collapsible
