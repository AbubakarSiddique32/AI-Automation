import React from "react";

const MainText = () => {
  return (
    <div className="flex flex-col items-center md:items-end text-center md:text-right">
      <p className="text-[18px] text-gray-600 mb-4 font-poppins">
        Brief overview of what the system does and what to <br />
        expect in the setup process
      </p>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight font-poppins">
        Welcome to AI <br /> Sales Automation
      </h1>
      <button className="mt-6 px-6 py-2 bg-[#276951] text-white rounded-full hover:bg-green-800 transition font-semibold">
        Get Started
      </button>
    </div>
  );
};

export default MainText;
