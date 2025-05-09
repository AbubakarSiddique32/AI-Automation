import React, { useState } from "react";
import { Link } from "react-router-dom";

const Lead = () => {
  const [formData, setFormData] = useState({
    openRates: "",
    clickRates: "",
    linkedinReplies: "",
    other: "",
    retryMessaging: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full lg:p-[40px] sm:p-[30px] p-[16px]">
      <form className="xl:w-[70%] md:w-[90%] w-full space-y-5 p-6 rounded-md m-auto">
        <h2 className="text-[20px] font-poppins font-bold text-[#281D1B]">
          Lead Prioritization & Engagement Settings
        </h2>

        <div className="space-y-2">
          <label className="block text-[13px] font-public font-medium text-[#281D1B]">
            Lead Prioritization Criteria
          </label>

          {/* Grid Layout for Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="openRates"
              value={formData.openRates}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-sm text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
            >
              <option value="">Select</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <select
              name="clickRates"
              value={formData.clickRates}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-sm text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
            >
              <option value="">Select</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <select
              name="linkedinReplies"
              value={formData.linkedinReplies}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-sm text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
            >
              <option value="">Select</option>
              <option value="Many">Many</option>
              <option value="Few">Few</option>
            </select>

            <select
              name="other"
              value={formData.other}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-sm text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
            >
              <option value="">Select option</option>
              <option value="Response Time">Response Time</option>
              <option value="Engagement Score">Engagement Score</option>
            </select>
          </div>

          {/* Retry messaging option */}
          <select
            name="retryMessaging"
            value={formData.retryMessaging}
            onChange={handleChange}
            className="w-full mt-4 px-4 py-2 border text-sm text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
          >
            <option value="">Select option</option>
            <option value="Yes">Yes, retry with different messaging</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between items-center mt-4">
          <Link to="/previous" className="text-sm text-black hover:underline">
            Back
          </Link>
          <button
            type="button"
            className="bg-[#276951] text-white px-6 py-2 rounded-[16px] text-sm hover:bg-[#14362a]"
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default Lead;
