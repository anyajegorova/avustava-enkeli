import React from 'react'
import '../styles/NonCollapsible.css'

interface NonCollapsibleProps {
  title: string;
  bulletPoints: string[];
  icon: React.ReactNode;
}

const NonCollapsible: React.FC<NonCollapsibleProps> = ({ title, bulletPoints, icon }) => {
  return (
    <div className="non-collapsible-container">
      <div className="non-collapsible-header">
        <div className="left-content">
          <div className="icon-container">{icon}</div>
          <span>{title}</span>
        </div>
      </div>
      <ul className="non-collapsible-content">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  )
}

export default NonCollapsible
