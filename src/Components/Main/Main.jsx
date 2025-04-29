import React from "react";
import MainImages from "./MainImages";
import MainText from "./MainText";

const Main = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 px-10 py-10 xl:pb-[100px] lg:pb-[130px] lg:relative">
      <div className="w-full  flex justify-start lg:relative left-0">
        <MainImages />
      </div>
      <div className="w-full lg:w-[60%] flex justify-center items-end md:justify-end lg:absolute xl:bottom-[1%] xl:right-[7%] lg:bottom-[0%] lg:right-[5%] ">
        <MainText />
      </div>
    </section>
  );
};

export default Main;
