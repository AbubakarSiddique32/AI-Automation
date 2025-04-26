import React from "react";
import { useState } from "react";
import navImage from "../../Images/nav-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className=" w-full py-5 ">
      <nav className=" w-[90%] m-auto flex items-center justify-between ">
        <div className="left w-[25%] xl:w-[10%] lg:w-[13%] md:w-[15%] sm:w-[20%] ">
          <img src={navImage} alt="" className="w-full object-cover" />
        </div>

        <div className="right flex items-center gap-10">
          <ul className="  gap-4 font-bold cursor-pointer hidden sm:block sm:flex">
            <li className="hover:scale-105">
              <a href="" className="text-[#20262A] text-[18px] font-[500] ">
                About
              </a>
            </li>
            <li className="hover:scale-105">
              <a href="" className="text-[#20262A]  text-[18px] font-[500] ">
                Pricing
              </a>
            </li>
          </ul>

          <div className="button max-[650px]:hidden">
            <button className=" font-poppins font-[500] text-[18px] bg-[#2A6B53] text-white py-[10px] px-[40px] rounded-[100px] border-2 border-white cursor-pointer hover:bg-green-950 hover:scale-105">
              Login
            </button>
          </div>

          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-8 h-1 bg-black"></span>
              <span className="block w-8 h-1 bg-black"></span>
              <span className="block w-8 h-1 bg-black"></span>
            </div>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="absolute w-1/2 top-[80px] right-5 bg-white shadow-lg rounded-lg p-5 flex flex-col items-start gap-4 md:hidden">
          <a href="#" className="text-[#20262A] text-[18px] font-[500]">
            About
          </a>
          <a href="#" className="text-[#20262A] text-[18px] font-[500]">
            Pricing
          </a>
          <button className="font-poppins font-[500] text-[18px] bg-[#2A6B53] text-white py-[10px] px-[30px] rounded-full border-2 border-white cursor-pointer hover:bg-green-950 hover:scale-105">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
