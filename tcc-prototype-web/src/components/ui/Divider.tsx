import React from 'react';

const Divider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-full h-px bg-gray-200 dark:bg-gray-700 ${className}`} />
);

export default Divider;
