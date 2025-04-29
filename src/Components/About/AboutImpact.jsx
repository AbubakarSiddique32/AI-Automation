import React from "react";

const AboutImpact = () => {
  return (
    <div className=" flex py-[50px] lg:flex-row flex-col">
      <div className=" lg:w-1/2 w-full text-center mb-8">
        <p className=" text-[28px] font-[400]">Our Impact</p>
      </div>
      <div className="lg:w-1/2 w-full flex flex-wrap gap-5 justify-center">
        <div className=" lg:w-[45%]  w-[96%] m-auto border-t-2 border-black py-5 px-6">
          <h4 className=" text-[48px] font-[400] font-poppins">500+</h4>
          <p className=" text-[20px] font-[300]">Companies Onboarded</p>
        </div>
        <div className="  lg:w-[45%]  w-[96%] m-auto border-t-2 border-black py-5 px-6">
          <h4 className=" text-[48px] font-[400] font-poppins">20%</h4>
          <p className=" text-[20px] font-[300]">
            Increase in Sales Efficiency
          </p>
        </div>
        <div className="  lg:w-[45%]  w-[96%] m-auto border-t-2 border-black py-5 px-6">
          <h4 className=" text-[48px] font-[400] font-poppins">95%</h4>
          <p className=" text-[20px] font-[300]">Customer Satisfaction Rate</p>
        </div>
        <div className=" lg:w-[45%]  w-[96%] m-auto lg:m-0 border-t-2 border-black py-5 px-6">
          <h4 className=" text-[48px] font-[400] font-poppins">30+</h4>
          <p className=" text-[20px] font-[300]">Countries Served</p>
        </div>
      </div>
    </div>
  );
};

export default AboutImpact;
