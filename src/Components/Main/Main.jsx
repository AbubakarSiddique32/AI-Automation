import React from "react";
import MainImages from "./MainImages";
import MainText from "./MainText";

const Main = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 px-10 py-10">
      <div className="w-full md:w-1/2 flex justify-center">
        <MainImages />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-end md:justify-end">
        <MainText />
      </div>
    </section>
  );
};

export default Main;
