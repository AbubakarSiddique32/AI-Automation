import React from "react";
import ContactUI from "./Pages/ContactUI";
import DashNavbar from "./DashNavbar";
import SideMenu from "./SideMenu/SideMenu";

const Dashboard = () => {
  return (
    <>
      <DashNavbar />
      <div className=" flex" id="/dashboard">
        <SideMenu />

        <div className=" w-[75%]">
          <ContactUI />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
