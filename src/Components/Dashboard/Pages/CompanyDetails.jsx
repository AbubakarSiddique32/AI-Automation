import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrAttachment } from "react-icons/gr";

const CompanyDetails = () => {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [targetMarket, setTargetMarket] = useState("");
  const [brochure, setBrochure] = useState(null);
  const [customerProfile, setCustomerProfile] = useState(null);

  const navigate = useNavigate(); // Make sure useNavigate is used here

  const handleFileChange = (e, setter) => {
    setter(e.target.files[0]);
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Navigate to the /outreach route after submitting
    navigate("/dashboard/outreach");
  };

  return (
    <section className="w-full lg:p-[40px] sm:p-[30px] p-[1px]">
      <form className="xl:w-[70%] md:w-[90%] w-full space-y-5 p-6 rounded-md m-auto">
        <h2 className="text-[20px] font-poppins font-[700] text-[#281D1B]">
          Company Details
        </h2>

        {/* Company Name */}
        <div className="space-y-2">
          <label className="block text-[13px] font-public font-medium text-[#281D1B]">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Enter your company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full px-4 py-2 border text-[15px] font-[400] font-public text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
          />
        </div>

        {/* Industry Dropdown */}
        <div className="space-y-2">
          <label className="block text-[13px] font-public font-medium text-[#281D1B]">
            Industry
          </label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full px-4 py-2 border text-[15px] font-[400] font-public text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
          >
            <option>Select industry</option>
            {/* Add other options here */}
          </select>
        </div>

        {/* Brochure Upload */}
        <div className="space-y-2">
          <label className="block text-[13px] font-public font-medium text-[#281D1B]">
            Upload Brochures/Pitch Decks
          </label>
          <div className="relative border-4 border-dotted rounded-[8px] p-[30px] ">
            <input
              type="file"
              id="brochure"
              onChange={(e) => handleFileChange(e, setBrochure)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <button
              type="button"
              className="w-full px-4 py-2 text-[15px] font-[400] font-public text-[#2E181466] rounded-md focus:outline-none"
            >
              <div className="flex flex-col items-center">
                {brochure ? (
                  brochure.name
                ) : (
                  <GrAttachment className="text-[black] mb-1" />
                )}
                <span className="text-[12px] text-[#6B6B6B]">
                  Add an attachment (optional)
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Target Market Dropdown */}
        <div className="space-y-2">
          <label className="block text-[13px] font-public font-medium text-[#281D1B]">
            Target Market
          </label>
          <select
            value={targetMarket}
            onChange={(e) => setTargetMarket(e.target.value)}
            className="w-full px-4 py-2 border text-[15px] font-[400] font-public text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
          >
            <option>Select target market</option>
            {/* Add other options here */}
          </select>
        </div>

        {/* Customer Profile Upload */}
        <div className="space-y-2">
          <label className="block text-[13px] font-public font-medium text-[#281D1B]">
            Ideal Customer Profile (PDF)
          </label>
          <div className="relative border-4 border-dotted rounded-[8px] p-[30px]">
            <input
              type="file"
              id="customerProfile"
              onChange={(e) => handleFileChange(e, setCustomerProfile)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <button
              type="button"
              className="w-full px-4 py-2 text-[15px] font-[400] font-public text-[#2E181466] rounded-md focus:outline-none"
            >
              <div className="flex flex-col items-center">
                {customerProfile ? (
                  customerProfile.name
                ) : (
                  <GrAttachment className="text-[black] mb-1" />
                )}
                <span className="text-[12px] text-[#6B6B6B]">
                  Add an attachment (optional)
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-between items-center mt-4">
          <Link to="/dashboard/" className="text-sm text-black hover:underline">
            Back
          </Link>
          <button
            type="button"
            onClick={handleNext} // Make sure the next step is handled here
            className="bg-[#276951] font-public text-[15px] text-white px-6 py-2 rounded-[16px] hover:bg-[#14362a]"
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default CompanyDetails;
