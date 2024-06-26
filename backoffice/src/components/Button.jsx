import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ onClick,icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setIsClicked(initialState);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;