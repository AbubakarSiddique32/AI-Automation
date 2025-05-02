import React from "react";
import DashboardSideMenu from "./DashboardSideMenu";

const SideMenu = () => {
  return (
    <div className="side-menu xl:w-[25%] w-[30%] py-[30px] lg:block  hidden  ">
      <DashboardSideMenu />
    </div>
  );
};

export default SideMenu;
