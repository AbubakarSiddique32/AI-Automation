import React from "react";
import image1 from "../../Images/product-1.png";
import image2 from "../../Images/product-2.png";
import image3 from "../../Images/product-3.png";
import image4 from "../../Images/product-4.png";

const MainImages = () => {
  return (
    <div className=" w-full flex  justify-center gap-5">
      {/* Left Column */}
      <div className="w-[30%] flex flex-col gap-3">
        <div className="w-[100%] h-auto bg-gray-300 rounded-2xl">
          <img src={image1} alt="Image" className="w-full object-cover" />
        </div>
        <div className="w-[80%] h-auto bg-gray-300 rounded-2xl">
          <img src={image2} alt="Image" className="w-full object-cover" />
        </div>
      </div>

      {/* Middle Column */}
      <div className=" w-[30%] flex flex-col gap-3">
        <div className="w-[80%] h-auto bg-gray-300 rounded-2xl">
          <img src={image3} alt="Image" className="w-full object-cover" />
        </div>
        <div className="w-[60%] h-auto bg-gray-300 rounded-2xl">
          <img src={image4} alt="Image" className="w-full object-cover" />
        </div>
      </div>

      {/* Right Column */}
      <div className=" w-[30%] flex flex-col gap-3">
        <div className="w-[60%] h-auto  bg-gray-300 rounded-2xl mt-10 md:mt-20">
          <img src={image1} alt="Image" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default MainImages;
