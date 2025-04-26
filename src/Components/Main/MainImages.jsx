import React from "react";

const MainImages = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {/* Left Column */}
      <div className="flex flex-col gap-3">
        <div className="w-60 h-60 lg:w-56 lg:h-56  md:w-48 md:h-48 bg-gray-300 rounded-2xl" />
        <div className="w-52 h-52 lg:w-44 lg:h-44 md:w-38 md:h-38 bg-gray-300 rounded-2xl" />
      </div>

      {/* Middle Column */}
      <div className="flex flex-col gap-3">
        <div className="w-52 h-52 lg:w-44 lg:h-44 md:w-38 md:h-38 bg-gray-300 rounded-2xl" />
        <div className="w-44 h-44 lg:w-36 lg:h-36 md:w-28 md:h-28 bg-gray-300 rounded-2xl" />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-3">
        <div className="w-44 h-44 lg:w-36 lg:h-36 md:w-28 md:h-28 bg-gray-300 rounded-2xl mt-10 md:mt-20" />
      </div>
    </div>
  );
};

export default MainImages;
