import React from 'react';

const Card: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-card p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);

export default Card;
