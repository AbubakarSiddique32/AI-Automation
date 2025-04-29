import React from "react";
import image1 from "../../Images/Main-1.jpeg";
import image2 from "../../Images/Main-2.jpeg";
import image3 from "../../Images/Main-3.jpeg";
import image4 from "../../Images/Main-4.jpeg";
import image5 from "../../Images/Main-5.jpeg";
const MainImages = () => {
  return (
    <div className=" w-full flex  gap-5">
      {/* Left Column */}
      <div className="lg:w-[25%] sm:w-[30%] w-[35%] flex flex-col gap-5">
        <div className="w-[100%] h-auto bg-gray-300 rounded-[20px]">
          <img
            src={image1}
            alt="Image"
            className="w-full object-cover sm:rounded-[20px] rounded-[10px]"
          />
        </div>
        <div className="w-[80%] h-auto bg-gray-300 rounded-[20px] ">
          <img
            src={image2}
            alt="Image"
            className="w-full object-cover sm:rounded-[20px] rounded-[10px]"
          />
        </div>
      </div>

      {/* Middle Column */}
      <div className=" lg:w-[20%] sm:w-[25%] w-[30%] flex flex-col gap-8">
        <div className="w-[100%] h-auto bg-gray-300 rounded-[20px]">
          <img
            src={image3}
            alt="Image"
            className="w-full object-cover sm:rounded-[20px] rounded-[10px]"
          />
        </div>
        <div className="w-[80%] h-auto bg-gray-300 rounded-[20px]">
          <img
            src={image4}
            alt="Image"
            className="w-full object-cover sm:rounded-[20px] rounded-[10px]"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className=" sm:w-[25%] w-[30%]  flex flex-col gap-5">
        <div className="lg:w-[60%] w-[80%] h-auto  bg-gray-300 mt-8 sm:mt-12 lg:mt-16 rounded-[20px]">
          <img
            src={image5}
            alt="Image"
            className="w-full object-cover sm:rounded-[20px] rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MainImages;
