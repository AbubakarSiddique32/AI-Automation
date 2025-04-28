import React from "react";

const AboutImpact = () => {
  return (
    <div className=" flex py-[30px]">
      <div className=" w-1/2">
        <p className=" text-[28px] font-[400]">Our Impact</p>
      </div>
      <div className="w-1/2 flex flex-wrap gap-5">
        <div className=" w-[48%] border-t-2 border-black py-5">
          <h4 className=" text-[48px] font-[400] font-poppins">500+</h4>
          <p className=" text-[20px] font-[300]">Companies Onboarded</p>
        </div>
        <div className=" w-[48%] border-t-2 border-black py-5">
          <h4 className=" text-[48px] font-[400] font-poppins">20%</h4>
          <p className=" text-[20px] font-[300]">
            Increase in Sales Efficiency
          </p>
        </div>
        <div className=" w-[48%] border-t-2 border-black py-5">
          <h4 className=" text-[48px] font-[400] font-poppins">95%</h4>
          <p className=" text-[20px] font-[300]">Customer Satisfaction Rate</p>
        </div>
        <div className=" w-[48%] border-t-2 border-black py-5">
          <h4 className=" text-[48px] font-[400] font-poppins">30+</h4>
          <p className=" text-[20px] font-[300]">Countries Served</p>
        </div>
      </div>
    </div>
  );
};

export default AboutImpact;
