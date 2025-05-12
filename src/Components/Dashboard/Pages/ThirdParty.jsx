import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../../Images/profile.png";

const ThirdPartyIntegrations = () => {
  const [name, setName] = useState("");
  const [zohoEnabled, setZohoEnabled] = useState(false);
  const [klaviyoEnabled, setKlaviyoEnabled] = useState(false);
  const [kixieEnabled, setKixieEnabled] = useState(false);
  const [autoSync, setAutoSync] = useState(false);

  const [zohoKey, setZohoKey] = useState("");
  const [klaviyoKey, setKlaviyoKey] = useState("");
  const [kixieKey, setKixieKey] = useState("");

  const toggleClass = (enabled) =>
    `${
      enabled ? "bg-[#ded6d2]" : "bg-[#e5e5e5]"
    } relative inline-block w-10 h-6 rounded-full transition`;

  const circleClass = (enabled) =>
    `${
      enabled ? "translate-x-5" : "translate-x-0"
    } absolute left-[2px] top-[2px] w-5 h-5 bg-black rounded-full transition`;

  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    // Navigate to the /outreach route after submitting
    navigate("/dashboard/finalconfirmation");
  };

  return (
    <section className="w-full lg:p-[40px] sm:p-[30px] p-[16px]">
      <form className="xl:w-[70%] md:w-[90%] w-full space-y-6 p-6 rounded-md m-auto">
        <h2 className="text-[20px] font-poppins font-[700] text-[#281D1B]">
          Third-Party Integrations
        </h2>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="user-image w-[10%]">
            <img
              src={profile}
              alt="user"
              className="w-12 h-12 rounded-full bg-[#00000000]"
            />
          </div>
          <div className="user-data w-[85%]">
            <label className=" font-public font-[500] text-[13px] text-[#281D1B]">
              User Profile
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-[16px] bg-[#fdf9f8] text-[15px] font-public text-[#2E191466] border-gray-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Integration Toggles */}
        <div className="space-y-4 gap-6 flex flex-col">
          <h3 className="font-[700] text-[20px] font-public text-[#281D1B]">
            Integration Status
          </h3>

          {[
            {
              label: "Zoho CRM",
              text: "API Key Input Field & Status",
              state: zohoEnabled,
              setState: setZohoEnabled,
            },
            {
              label: "Klaviyo",
              text: "API Key Input Field & Status",
              state: klaviyoEnabled,
              setState: setKlaviyoEnabled,
            },
            {
              label: "Kixie",
              text: "API Key Input Field & Status",
              state: kixieEnabled,
              setState: setKixieEnabled,
            },
          ].map(({ label, text, state, setState }) => (
            <div
              key={label}
              className="flex items-center justify-between text-sm"
            >
              <div className="name-tag">
                <span className="font-[700] font-public text-[17px] text-[#281D1B] ">
                  {label}
                </span>
                <p className="font-[400] font-public text-[15px] text-[#2E19149E] mt-[2px]">
                  {text}
                </p>
              </div>
              <div className="on-off">
                <label className="relative inline-block w-10 h-6">
                  <input
                    type="checkbox"
                    checked={state}
                    onChange={() => setState(!state)}
                    className="opacity-0 w-0 h-0"
                  />
                  <span className={toggleClass(state)}>
                    <span className={circleClass(state)}></span>
                  </span>
                </label>
              </div>
            </div>
          ))}

          {/* Auto Sync */}
          <div className="flex items-center justify-between text-sm font-semibold">
            <span className="font-[700] font-public text-[17px] text-[#281D1B]">
              Automatically sync new leads with CRM
            </span>
            <label className="relative inline-block w-10 h-6">
              <input
                type="checkbox"
                checked={autoSync}
                onChange={() => setAutoSync(!autoSync)}
                className="opacity-0 w-0 h-0"
              />
              <span className={toggleClass(autoSync)}>
                <span className={circleClass(autoSync)}></span>
              </span>
            </label>
          </div>
        </div>

        {/* API Key Inputs */}
        <div className="space-y-4 py-3 pt-12">
          <h3 className="font-[700] font-public text-[20px] text-[#281D1B]">
            API Key Inputs
          </h3>

          {[
            {
              label: "Zoho CRM API Key",
              value: zohoKey,
              onChange: setZohoKey,
            },
            {
              label: "Klaviyo API Key",
              value: klaviyoKey,
              onChange: setKlaviyoKey,
            },
            {
              label: "Kixie API Key",
              value: kixieKey,
              onChange: setKixieKey,
            },
          ].map(({ label, value, onChange }, idx) => (
            <div key={idx} className="md:flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-[13px] font-public font-[500] text-[#281D1B] ">
                  {label}
                </label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder={`Enter ${label}`}
                  className="w-full px-4 py-2 border text-[#2E191466] text-[15px] font-public font-[400] border-gray-300 rounded-[8px] bg-[#fdf9f8] focus:outline-none"
                />
              </div>
              <div className="text-sm text-[#6B6B6B]">
                <label className=" text-[13px] font-public font-[500] text-[#281D1B]">
                  Status
                </label>
                <input
                  type="text"
                  placeholder="Connected / Not Connected"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  className="w-full px-4 py-2 border text-[#2E191466] text-[15px] font-public font-[400] border-gray-300 rounded-[8px] bg-[#fdf9f8] focus:outline-none"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-6">
          <Link
            to="/dashboard/lead "
            className="text-sm text-black hover:underline"
          >
            Back
          </Link>
          <button
            type="button"
            onClick={handleNext}
            className="bg-[#276951] text-white text-sm px-6 py-2 rounded-[16px] hover:bg-[#14362a]"
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default ThirdPartyIntegrations;
