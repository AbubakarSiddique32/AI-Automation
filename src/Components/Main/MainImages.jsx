import React from "react";

const MainImages = () => {
  return (
    <div className=" w-full flex flex-wrap justify-center gap-5">
      {/* Left Column */}
      <div className="w-[30%] flex flex-col gap-3">
        <div className="w-[20%] h-[20%] bg-gray-300 rounded-2xl" />
        <div className="w-[15%] h-[15%] bg-gray-300 rounded-2xl" />
      </div>

      {/* Middle Column */}
      <div className=" w-[30%] flex flex-col gap-3">
        <div className="w-[15%] h-[15%] bg-gray-300 rounded-2xl" />
        <div className="w-[12%] h-[12%] bg-gray-300 rounded-2xl" />
      </div>

      {/* Right Column */}
      <div className=" w-[30%] flex flex-col gap-3">
        <div className="w-[12%] h-[12%]  bg-gray-300 rounded-2xl mt-10 md:mt-20" />
      </div>
    </div>
  );
};

export default MainImages;
