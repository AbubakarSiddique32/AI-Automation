import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ContactUI = () => {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/dashboard/companydetails");
  };

  return (
    <section className="  w-full lg:p-[40px] sm:p-[30px] p-[16px] ">
      <form className="xl:w-[70%]  md:w-[90%] w-full space-y-5 p-6 rounded-md m-auto ">
        <h2 className="text-[20px] font-poppins font-[700] text-[#281D1B]">
          Contact & User Information
        </h2>

        <div className="space-y-2">
          <label className="block text-[13px] font-public font-medium text-[#281D1B] ">
            User's Full Name
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-4 py-2 border text-[15px] font-[400] font-public text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[13px] font-public font-medium text-[#281D1B]">
            Role/Title
          </label>
          <select className="w-full px-4 py-2 border text-[15px] font-[400] font-public text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none">
            <option>Select role</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-[13px] font-public font-medium text-[#281D1B]">
            Work Email
          </label>
          <input
            type="email"
            placeholder="Enter work email"
            className="w-full px-4 py-2 border text-[15px] font-[400] font-public text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[13px] font-public font-medium text-[#281D1B]">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter phone number (optional)"
            className="w-full px-4 py-2 border text-[15px] font-[400] font-public text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
          />
        </div>

        <div className="flex gap-4 sm:flex-row flex-col">
          <div className="sm:w-1/2 w-full">
            <label className="block text-[13px]  font-public font-medium text-[#281D1B]">
              Enter Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border text-[15px] font-[400] font-public text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
            />
          </div>
          <div className="sm:w-1/2 w-full">
            <label className="block text-[13px] font-public font-medium text-[#281D1B]">
              Re-Enter Password
            </label>
            <input
              type="password"
              placeholder="Re-Enter Password"
              className="w-full px-4 py-2 border text-[15px] font-[400] font-public text-[#2E181466] border-gray-300 rounded-md bg-[#fdf9f8] focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Link
            to="/dashboard"
            type="button"
            className="text-sm text-black hover:underline"
          >
            Back
          </Link>
          <button
            type="submit"
            onClick={handleNext}
            className="bg-[#276951] font-public text-[15px]  text-white px-6 py-2 rounded-[16px] hover:bg-[#14362a]"
          >
            Next
          </button>
        </div>

        <div className="pt-2">
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-[13px] font-public font-[400]">
              Enable two-factor authentication (2FA)
            </span>
          </label>
        </div>
      </form>
    </section>
  );
};

export default ContactUI;
