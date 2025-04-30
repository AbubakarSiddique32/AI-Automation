import React from "react";
import { TiTick } from "react-icons/ti";

const PricingPlan = () => {
  return (
    <div className="pricing-plan">
      <div className="pricing-plan-body">
        <div className="pricing-heading text-center p-[20px] pt-[50px]">
          <h1 className=" text-[60px] font-[500] font-poppins text-black mb-[5px]">
            Flexible pricing plans
          </h1>
          <h4 className="text-[24px] font-[300] font-poppins">
            Choose the best plan for your business needs.
          </h4>
        </div>
        <div className="buying-plans">
          <div className="single-plan">
            <div className="sp-price flex flex-col gap-3">
              <h4 className=" text-[17px] font-[600] font-poppins text-[#000000]">
                Starter
              </h4>
              <h2 className=" text-[48px] font-[600] font-poppins text-[#000000]">
                $29 <span className="text-[20px] font-[300]">/month</span>
              </h2>
              <p className=" text-[13px] font-[300] ">Small businesses</p>
            </div>
            <div className="sp-button">
              <button className=" border rounded-[8px] px-[16px] py-[8px] text-[15px] font-roboto">
                Choose Plan
              </button>
            </div>
            <div className="plan-line w-full h-[1px] bg-black my-4"></div>
            <ul className=" flex flex-col gap-3 list-none">
              <li>
                <p className=" flex gap-2 text-[13px] font-[300] text-black">
                  <TiTick />
                  AI-driven insights
                </p>
              </li>
              <li>
                <p className=" flex gap-2 text-[13px] font-[300] text-black">
                  <TiTick />
                  Basic analytics
                </p>
              </li>
              <li>
                <p className=" flex gap-2 text-[13px] font-[300] text-black">
                  <TiTick />
                  Email support
                </p>
              </li>
              <li>
                <p className=" flex gap-2 text-[13px] font-[300] text-black">
                  <TiTick />
                  Limited integrations
                </p>
              </li>
              <li>
                <p className=" flex gap-2 text-[13px] font-[300] text-black">
                  <TiTick />
                  Community access
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
