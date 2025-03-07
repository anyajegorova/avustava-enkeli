import React from 'react'
import '../styles/CustomButton.css'

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  filled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, filled = true }) => {
  return (
    <button
      className={`custom-button ${filled ? '' : 'transparent'}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default CustomButton
