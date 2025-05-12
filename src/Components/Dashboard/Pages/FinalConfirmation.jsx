import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FinalConfirmation = () => {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    // Navigate to the /outreach route after submitting
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full md:p-6 p-0 bg-white text-gray-900 font-sans">
      {/* Top Info Section */}
      <div className="w-[90%] mx-auto">
        <h2 className="text-[28px] text-[#000000] font-[400] font-poppins mb-4">
          Review Your Information
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-[400] text-[17px] text-[#000000] font-gothic mb-1">
              Project Details
            </h4>
            <p className="font-[400] text-[17px] text-[#00000099] font-gothic ">
              AI Sales Automation Setup
            </p>
          </div>
          <div>
            <h4 className="font-[400] text-[17px] text-[#000000] font-gothic mb-1">
              Team
            </h4>
            <p className="font-[400] text-[17px] text-[#00000099] font-gothic">
              Alexis Thornton
            </p>
            <p className="font-[400] text-[17px] text-[#00000099] font-gothic">
              Riley Mendez
            </p>
          </div>
          <div>
            <h4 className="font-[400] text-[17px] text-[#000000] font-gothic mb-1">
              Date
            </h4>
            <p className="font-[400] text-[17px] text-[#00000099] font-gothic">
              October 2023
            </p>
          </div>
        </div>

        {/* Edit Sections */}
        <div className="mt-6  text-right">
          <h4 className=" font-poppins font-[400] text-[15px] text-[#000000]">
            Edit Sections
          </h4>
          <ul className="space-y-1 mt-1 list-none">
            <li>
              <Link
                to=""
                className=" font-gothic font-[400] text-[15px] text-[#000000] cursor-pointer"
              >
                Personal Info
              </Link>
            </li>
            <li>
              <Link
                to=""
                className=" font-gothic font-[400] text-[15px] text-[#000000] cursor-pointer"
              >
                Company Info
              </Link>
            </li>
            <li>
              <Link
                to=""
                className=" font-gothic font-[400] text-[15px] text-[#000000] cursor-pointer"
              >
                Payment Details
              </Link>
            </li>
            <li>
              <Link
                to=""
                className=" font-gothic font-[400] text-[15px] text-[#000000] cursor-pointer"
              >
                Preferences
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-gray-300 " />

      {/* Review + Confirmation Section */}
      <div className="text-center w-[70%] m-auto">
        <div className="information text-left">
          <h2 className="text-[28px] font-[400] font-poppins text-[#000000]">
            Review Your Information
          </h2>
          <h4 className="text-[17px] font-gothic font-[400] text-[#000000] mt-2">
            Project Details
          </h4>
          <p className="text-[17px] font-gothic font-[400] text-[#00000099] ">
            AI Sales Automation Setup
          </p>
        </div>

        <div className="final-section mt-10 ">
          <h1 className="text-[64px] font-[400] font-poppins mb-4 text-[#000000] ">
            Final Confirmation
          </h1>
          <p className="text-[24px] font-poppins font-[400] text-[#000000]">
            I confirm that the above details are correct and I am ready to start
            using AI Sales Automation.
          </p>

          <button
            className="mt-6 px-5 py-2 bg-[#276951] text-[#FFFBFA] text-[20px] font-poppins font-[400] rounded-[22px] hover:bg-emerald-800"
            onClick={handleNext}
          >
            Finish & Enter Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalConfirmation;
