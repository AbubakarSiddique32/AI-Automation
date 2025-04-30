import React from "react";
import { TiTick } from "react-icons/ti";

const plans = [
  {
    name: "Starter",
    price: "$29",
    label: "Choose Plan",
    highlight: false,
    features: {
      "AI Insights": true,
      Analytics: true,
      Support: true,
      Integrations: true,
      "Community Access": true,
      Webinars: false,
      "Account Manager": false,
      Training: false,
      "Custom Features": false,
      "Data Export": true,
      Security: false,
    },
  },
  {
    name: "Professional",
    price: "$59",
    label: "Start with Plus",
    highlight: true,
    features: {
      "AI Insights": true,
      Analytics: true,
      Support: true,
      Integrations: true,
      "Community Access": true,
      Webinars: true,
      "Account Manager": true,
      Training: false,
      "Custom Features": false,
      "Data Export": false,
      Security: false,
    },
  },
  {
    name: "Enterprise",
    price: "Contact us",
    label: "Contact Sales",
    highlight: false,
    features: {
      "AI Insights": true,
      Analytics: true,
      Support: true,
      Integrations: true,
      "Community Access": true,
      Webinars: true,
      "Account Manager": true,
      Training: true,
      "Custom Features": true,
      "Data Export": true,
      Security: true,
    },
  },
];

const featureList = [
  "AI Insights",
  "Analytics",
  "Support",
  "Integrations",
  "Community Access",
  "Webinars",
  "Account Manager",
  "Training",
  "Custom Features",
  "Data Export",
  "Security",
];

const ComparePlans = () => {
  return (
    <div className="w-[90%] mx-auto  py-[50px]">
      <h2 className="text-[48px] font-[500] font-outfit text-center mb-14">
        Compare plans
      </h2>
      <div className="overflow-auto">
        <table className="min-w-full border border-black border-t-0 border-x-0  text-sm text-center">
          <thead>
            <tr className="">
              <th className=" p-3  text-left"> </th>
              {plans.map((plan, idx) => (
                <th
                  key={idx}
                  className="border border-t-0 border-r-0  border-black p-3"
                >
                  <div className="font-[500] text-[17px] mb-2 font-poppins">
                    {plan.name}
                  </div>
                  <div className="text-xl font-bold">
                    {plan.price.includes("$") ? (
                      <>
                        <span className="text-[28px] font-[400] text-[#000000]  font-outfit">
                          {plan.price}
                        </span>
                        <span className="text-[16px] font-[300] text-[#2A6B53] font-outfit">
                          /month
                        </span>
                      </>
                    ) : (
                      <span className="text-[28px] font-[400] text-[#000000]  font-outfit">
                        {plan.price}
                      </span>
                    )}
                  </div>
                  <button
                    className={`mt-2 px-4 py-2 rounded text-sm w-full ${
                      plan.highlight
                        ? "bg-[#2A6B53] text-[#FAFFFE]"
                        : "border border-black"
                    }`}
                  >
                    {plan.label}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureList.map((feature, i) => (
              <tr key={i}>
                <td className="border border-l-0 border-black  text-left text-[20px] font-poppins p-4 font-[400]">
                  {feature}
                </td>
                {plans.map((plan, idx) => (
                  <td
                    key={idx}
                    className="border border-black border-r-0 p-3 text-center"
                  >
                    {plan.features[feature] ? (
                      <TiTick className="text-black text-xl  m-auto" />
                    ) : (
                      ""
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparePlans;
