import React from "react";
import ContactUI from "./Pages/ContactUI";
import DashNavbar from "./DashNavbar";
import SideMenu from "./SideMenu/SideMenu";
import { Route, Routes, useLocation } from "react-router-dom";
import CompanyDetails from "./Pages/CompanyDetails";
import OutReach from "./Pages/OutReach";
import Lead from "./Pages/Lead";
import ThirdPartyIntegrations from "./Pages/ThirdParty.jsx";
import FinalConfirmation from "./Pages/FinalConfirmation.jsx";

const Dashboard = () => {
  const location = useLocation();

  const isFinalConfirmation = location.pathname.includes("finalconfirmation");
  return (
    <>
      <DashNavbar />
      <div className=" flex">
        {/* Hide SideMenu on Final Confirmation page */}
        {!isFinalConfirmation && <SideMenu />}

        <div
          className={`w-full p-4 ${!isFinalConfirmation ? "lg:w-[75%]" : ""}`}
        >
          {/* Nested Routes for Dashboard */}
          <Routes>
            <Route path="/" element={<ContactUI />} />
            <Route path="/companydetails" element={<CompanyDetails />} />
            <Route path="/outreach" element={<OutReach />} />
            <Route path="/lead" element={<Lead />} />
            <Route path="/thirdparty" element={<ThirdPartyIntegrations />} />
            <Route path="/finalconfirmation" element={<FinalConfirmation />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
