import React from "react";
import { useState } from "react";
import navImage from "../../Images/nav-logo.png";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
const DashNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className=" w-full py-5 ">
      <nav className=" w-[90%] m-auto flex items-center justify-between ">
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-8 h-1 bg-[#2A6B53]"></span>
            <span className="block w-8 h-1 bg-[#2A6B53]"></span>
            <span className="block w-8 h-1 bg-[#2A6B53]"></span>
          </div>
        </div>
        <div className="center w-[25%] xl:w-[10%] lg:w-[13%] md:w-[15%] sm:w-[20%] ">
          <Link to="/">
            <img src={navImage} alt="" className="w-full object-cover" />
          </Link>
        </div>

        <div className="right flex gap-7 items-center">
          <div className="search">
            <button className=" ">
              <IoSearchOutline className="w-[24px] h-[24px] object-cover" />
            </button>
          </div>
          <div className="grid ">
            <button className="">
              <IoGridOutline className="w-[24px] h-[24px]" />
            </button>
          </div>
          <div className="profile">
            <div className="profile-img w-[48px] h-[48px] bg-[#9A9494]  rounded-full border  border-[#00000000]">
              <img src="" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute w-1/2 top-[80px] left-5 bg-white shadow-lg rounded-lg p-5 flex flex-col items-start gap-4 lg:hidden">
          <Link to="/about" className="text-[#20262A] text-[18px] font-[500]">
            About
          </Link>
          <Link to="/pricing" className="text-[#20262A] text-[18px] font-[500]">
            Pricing
          </Link>
          <Link
            to="/login"
            className="font-poppins font-[500] text-[18px] bg-[#2A6B53] text-white py-[10px] px-[30px] rounded-full border-2 border-white cursor-pointer hover:bg-green-950 hover:scale-105"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashNavbar;
