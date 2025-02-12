import React from 'react';
import '../styles/Title.css';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="title">
      {text}
    </div>
  );
}

export default Title;
