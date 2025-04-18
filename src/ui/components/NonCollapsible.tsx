import React from 'react'
import '../styles/NonCollapsible.css'
import Reveal from '../../reveal_components/Reveal';

interface NonCollapsibleProps {
  title: string;
  bulletPoints: string[];
  icon: React.ReactNode;
}

const NonCollapsible: React.FC<NonCollapsibleProps> = ({ title, bulletPoints, icon }) => {
  return (
    <div className="non-collapsible-container">
      <div className="non-collapsible-header">
        <Reveal>
          <div className="left-content">
            <div className="icon-container">{icon}</div>
            <span>{title}</span>
          </div>
        </Reveal>
      </div>
      <ul className="non-collapsible-content">
        {bulletPoints.map((point, index) => (

          <Reveal>
            <li key={index}>{point}</li>
          </Reveal>

        ))}
      </ul>
    </div>
  )
}

export default NonCollapsible
