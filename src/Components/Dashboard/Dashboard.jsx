import React from "react";
import ContactUI from "./Pages/ContactUI";
import DashNavbar from "./DashNavbar";
import SideMenu from "./SideMenu/SideMenu";
import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <DashNavbar />
      <div className=" flex" id="/dashboard">
        <SideMenu />

        <div className=" lg:w-[75%] w-full">
          <ContactUI />
          <Routes>{/* <Route path="/contactUI" element={} /> */}</Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
