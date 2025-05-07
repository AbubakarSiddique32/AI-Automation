import React, { useState } from "react";
import { Link } from "react-router-dom";

const OutReach = () => {
  const [tone, setTone] = useState("");
  const [template, setTemplate] = useState(null);
  const [preferredChannels, setPreferredChannels] = useState("");
  const [aiPersonalization, setAiPersonalization] = useState(false);

  const handleFileChange = (e) => {
    setTemplate(e.target.files[0]);
  };

  const handleToggle = () => {
    setAiPersonalization(!aiPersonalization);
  };

  return (
    <section className="w-full lg:p-[100px] sm:p-[30px] p-[16px]">
      <form className="xl:w-[70%] md:w-[90%] w-full space-y-5 p-6 rounded-md m-auto">
        <h2 className="text-[20px] font-poppins font-[700] text-[#281D1B]">
          Outreach & Messaging Preferences
        </h2>

        {/* Tone Selection */}
        <div className="space-y-2">
          <label className="block text-[13px] font-public font-medium text-[#281D1B]">
            Outreach Tone
          </label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full px-4 py-2 border text-[15px] font-[400] font-public text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
          >
            <option>
              Professional, Friendly, Casual, Industry-Specific, Other
            </option>
            {/* Add other options here */}
          </select>
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <label className="block text-[13px] font-public font-medium text-[#281D1B]">
            Upload Existing Email & LinkedIn Templates
          </label>
          <div className="border-dashed border-2 border-[#D2C6B2] rounded-md p-4 w-full">
            <div className="flex items-center justify-center">
              <input
                type="file"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center text-center text-[#9A9A9A]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 mb-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5a3 3 0 016 0v5h6V5a3 3 0 016 0v11a3 3 0 01-3 3H3a3 3 0 01-3-3V5a3 3 0 013-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  {template ? (
                    <span className="text-sm text-[#6B6B6B]">
                      {template.name}
                    </span>
                  ) : (
                    <span className="text-sm">
                      Add an attachment (optional)
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Preferred Outreach Channels */}
        <div className="space-y-2">
          <label className="block text-[13px] font-public font-medium text-[#281D1B]">
            Preferred Outreach Channels
          </label>
          <input
            type="text"
            value={preferredChannels}
            onChange={(e) => setPreferredChannels(e.target.value)}
            placeholder="Email, LinkedIn, SMS, Phone Calls via Kixie"
            className="w-full px-4 py-2 border text-[15px] font-[400] font-public text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
          />
        </div>

        {/* AI Message Personalization */}
        <div className="flex items-center space-x-3 mt-4">
          <label className="text-[13px] font-public font-medium text-[#281D1B]">
            AI Message Personalization
          </label>
          <div className="flex items-center">
            <span className="text-xs text-[#6B6B6B] mr-2">
              Allow AI to adjust tone and content dynamically
            </span>
            <label className="relative inline-block w-10 h-6">
              <input
                type="checkbox"
                checked={aiPersonalization}
                onChange={handleToggle}
                className="opacity-0 w-0 h-0"
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-between items-center mt-4">
          <Link
            to="/dashboard/companydetails"
            className="text-sm text-black hover:underline"
          >
            Back
          </Link>
          <button
            type="button"
            className="bg-[#276951] font-public text-[15px] text-white px-6 py-2 rounded-[16px] hover:bg-[#14362a]"
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default OutReach;
