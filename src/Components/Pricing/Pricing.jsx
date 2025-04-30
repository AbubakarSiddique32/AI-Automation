import React from "react";
import PricingPlan from "./PricingPlan";
import ComparePlans from "./ComparePlans";
import FAQ from "./FAQ";

const Pricing = () => {
  return (
    <div>
      <div className="pricing-plan border-b border-[#000000]">
        <PricingPlan />
      </div>
      <div className="compare-plan border-b border-[#000000]">
        <ComparePlans />
      </div>
      <div className="faq border-b border-[#000000] mb-5">
        <FAQ />
      </div>
    </div>
  );
};

export default Pricing;
