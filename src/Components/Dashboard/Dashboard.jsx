import React from "react";
import ContactUI from "./Pages/ContactUI";
import DashNavbar from "./DashNavbar";
import SideMenu from "./SideMenu/SideMenu";
import { Route, Routes } from "react-router-dom";
import CompanyDetails from "./Pages/CompanyDetails";
import OutReach from "./Pages/OutReach";
import Lead from "./Pages/Lead";
const Dashboard = () => {
  return (
    <>
      <DashNavbar />
      <div className=" flex">
        <SideMenu />

        <div className="w-full lg:w-[75%] p-4">
          {/* Nested Routes for Dashboard */}
          <Routes>
            <Route path="/" element={<ContactUI />} />
            <Route path="/companydetails" element={<CompanyDetails />} />
            <Route path="/outreach" element={<OutReach />} />
            <Route path="/lead" element={<Lead />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
