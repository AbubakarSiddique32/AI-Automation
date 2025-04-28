import React from "react";
import AboutSideMenu from "./AboutSideMenu";
import AboutData from "./AboutData";

const About = () => {
  return (
    <div className=" flex py-[30px] px-[50px]">
      <div className=" w-[20%] ">
        <AboutSideMenu />
      </div>
      <div className=" w-[80%] flex flex-col">
        <AboutData />
      </div>
    </div>
  );
};

export default About;
