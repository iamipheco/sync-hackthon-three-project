import React from 'react';

const ProgressBar = ({ progress, color }) => {
  return (
    <div className="relative w-full h-1  bg-gray-200 rounded">
      <div
        className="absolute h-2 rounded -bottom-[2px]"
        style={{ width: `${progress}%`, backgroundColor: color  }} 
      ></div>
    </div>
  );
};

export default ProgressBar;
