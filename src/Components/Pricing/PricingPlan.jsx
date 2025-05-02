import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const PricingPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Starter",
      price: "$29",
      subtitle: "Small businesses",
      btn: "Choose Plan",
      features: [
        "AI-driven insights",
        "Basic analytics",
        "Email support",
        "Limited integrations",
        "Community access",
      ],
    },
    {
      name: "Professional",
      price: "$59",
      subtitle: "Growing teams",
      btn: "Start with Plus",
      features: [
        "Advanced AI insights",
        "Team analytics",
        "Priority support",
        "Full integrations",
        "Community access",
      ],
    },
    {
      name: "Enterprise",
      price: "$99",
      subtitle: "Large Enterprise ",
      btn: "Contact Sales",
      features: [
        "Custom AI dashboards",
        "Unlimited analytics",
        "24/7 support",
        "All integrations",
        "Dedicated manager",
      ],
    },
  ];

  return (
    <div className="pricing-plan py-[30px] pb-[50px] ">
      <div className="pricing-plan-body ">
        <div className="pricing-heading text-center p-[20px] pt-[50px]">
          <h1 className=" md:text-[60px] text-[30px] font-[500] font-poppins text-black mb-[5px]">
            Flexible pricing plans
          </h1>
          <h4 className="md:text-[24px] text-[20px] font-[300] font-poppins">
            Choose the best plan for your business needs.
          </h4>
        </div>
        <div className="buying-plans xl:w-[80%] lg:w-[90%] w-[95%] md:flex-row flex-col m-auto flex justify-between pt-[30px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`single-plan md:w-[30%] w-[90%] m-auto md:mb-0 mb-4 p-[24px] rounded-[16px] border transition-all duration-300 ${
                selectedPlan === index
                  ? "bg-[#19332D0F] border-[#2A6B53] text-[#2A6B53]"
                  : "border-[#000000] text-black"
              }`}
            >
              <div className="sp-price flex flex-col mb-[15px]">
                <h4 className=" text-[17px] font-[600] font-poppins">
                  {plan.name}
                </h4>
                <h2 className=" text-[48px] font-[600] font-poppins">
                  {plan.price}
                  <span className="text-[20px] font-[300]">/month</span>
                </h2>
                <p className=" text-[13px] font-[300] ">{plan.subtitle}</p>
              </div>
              <div className="sp-button">
                <button
                  onClick={() => setSelectedPlan(index)}
                  className={`rounded-[8px] font-[600] px-[16px] py-[8px] text-[15px] font-roboto w-full border ${
                    selectedPlan === index
                      ? " text-[#FAFFFE] bg-[#2A6B53]"
                      : "border-black text-black"
                  }`}
                >
                  {plan.btn}
                </button>
              </div>
              <div className="plan-line w-full h-[1px] bg-black my-4"></div>
              <ul className=" flex flex-col gap-1 list-none">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <p
                      className={`flex gap-2 items-center text-[13px] font-[300] ${
                        selectedPlan === index ? "text-green-700" : "text-black"
                      }`}
                    >
                      <TiTick />
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
