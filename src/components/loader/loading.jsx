import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex-col flex items-center justify-center">
      <img
        className="w-32 animate-pulse"
        src="../../assets/dslogo1.png"
        alt="Loading"
      />
    </div>
  );
};

export default Loading;
