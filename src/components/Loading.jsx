import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
