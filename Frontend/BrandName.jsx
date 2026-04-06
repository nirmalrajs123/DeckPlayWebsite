import React from 'react';

const BrandName = ({ className = "" }) => {
  return (
    <span className={`brand-name ${className}`}>
      <span className="brand-deck">DECK</span>
      <span className="brand-play">PLAY</span>
    </span>
  );
};

export default BrandName;
