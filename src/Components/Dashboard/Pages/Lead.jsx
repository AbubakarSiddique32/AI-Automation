import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    // Navigate to the /outreach route after submitting
    navigate("/dashboard/thirdparty");
  };

  return (
    <section className="w-full lg:p-[40px] sm:p-[30px] p-[16px]">
      <form className="xl:w-[70%]  md:w-[90%] w-full space-y-5 p-6 rounded-md m-auto">
        <h2 className="text-[26px] font-poppins font-[700] text-[#281D1B]">
          Lead Prioritization & Engagement Settings
        </h2>

        <div className="space-y-2">
          <label className="block text-[20px] font-public font-[700] text-[#281D1B]">
            Lead Prioritization Criteria
          </label>

          {/* Grid Layout for Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="rates">
              <h4 className=" font-public text-[13px] text-[#281D1B] font-[500] mb-[2px]">
                Open rates
              </h4>
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
                <option value="">Select</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                <option value="">Select</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="rates">
              <h4 className=" font-public text-[13px] text-[#281D1B] font-[500] mb-[2px]">
                Click rates
              </h4>
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
            </div>
            <div className="rates">
              <h4 className=" font-public text-[13px] text-[#281D1B] font-[500] mb-[2px]">
                LinkedIn replies
              </h4>
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
            </div>

            <div className="rates">
              <h4 className=" font-public text-[13px] text-[#281D1B] font-[500] mb-[2px]">
                Other
              </h4>
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
          </div>

          {/* Retry messaging option */}
          <div className="last">
            <h4 className=" font-public text-[13px] text-[#281D1B] font-[500] mb-[2px] mt-8">
              Retry with different messaging
            </h4>
            <select
              name="retryMessaging"
              value={formData.retryMessaging}
              onChange={handleChange}
              className="w-full  px-4 py-2 border text-sm text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
            >
              <option value="">Select option</option>
              <option value="Yes">Yes, retry with different messaging</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between items-center mt-4">
          <Link
            to="/dashboard/outreach"
            className="text-sm text-black hover:underline"
          >
            Back
          </Link>
          <button
            type="button"
            onClick={handleNext}
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
