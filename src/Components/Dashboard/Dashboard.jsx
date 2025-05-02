import React from "react";
import ContactUI from "./Pages/ContactUI";
import DashNavbar from "./DashNavbar";
import SideMenu from "./SideMenu/SideMenu";

const Dashboard = () => {
  return (
    <div className=" flex">
      <DashNavbar />
      <SideMenu />

      <div className=" w-[75%]">
        <ContactUI />
      </div>
    </div>
  );
};

export default Dashboard;
