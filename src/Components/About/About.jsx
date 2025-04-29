import React from "react";
import AboutSideMenu from "./AboutSideMenu";
import AboutData from "./AboutData";

const About = () => {
  return (
    <div className=" flex py-[30px] lg:px-[50px] lg:flex-row flex-col px-[10px] ">
      <div className=" lg:w-[20%] w-[100%] p-[10px] ">
        <AboutSideMenu />
      </div>
      <div className=" lg:w-[80%] w-[100%] flex flex-col">
        <AboutData />
      </div>
    </div>
  );
};

export default About;
