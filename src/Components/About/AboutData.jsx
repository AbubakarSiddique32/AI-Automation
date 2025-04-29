import React from "react";
import AboutTestimonials from "./AboutTestimonials";
import AboutImpact from "./AboutImpact";

const AboutData = () => {
  return (
    <div className="">
      <section
        id="overview"
        className=" w-full lg:py-[50px] lg:px-[30px] py-[50px] px-[10px]"
      >
        <h4 className=" font-poppins md:text-[30px]  text-[20px] font-[500] text-center">
          The User Setup Wizard is your gateway to a streamlined AI-driven sales
          experience. Our mission is to make onboarding seamless, ensuring you
          have all the tools you need to succeed.
        </h4>
      </section>
      <section
        id="features"
        className="w-full lg:py-[50px] lg:px-[100px]  px-[20px] py-[50px] text-center"
      >
        <h4 className=" text-[20px] font-[400] font-poppins mb-20">
          Our mission is to empower sales teams with AI tools that optimize
          performance and drive results.
        </h4>
        <h3 className=" text-[34px] font-bold font-poppins">Dr. Elara Voss</h3>
        <p className=" text-[13px]">CEO & Founder</p>
      </section>
      <section id="testimonials">
        <AboutTestimonials />
      </section>
      <section id="impact">
        <AboutImpact />
      </section>
    </div>
  );
};

export default AboutData;
