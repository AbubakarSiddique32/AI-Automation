import React from "react";
import { useState } from "react";
import navImage from "../../Images/nav-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className=" w-full py-5 ">
      <nav className=" w-[90%] m-auto flex items-center justify-between ">
        <div className="left w-[25%] xl:w-[10%] lg:w-[13%] md:w-[15%] sm:w-[20%] ">
          <Link to="/">
            <img src={navImage} alt="" className="w-full object-cover" />
          </Link>
        </div>

        <div className="right flex items-center gap-10">
          <ul className="  gap-4 font-bold cursor-pointer hidden sm:block sm:flex">
            <li className="hover:scale-105">
              <Link
                to="/about"
                className="text-[#20262A] text-[18px] font-[500] "
              >
                About
              </Link>
            </li>
            <li className="hover:scale-105">
              <Link
                to="/pricing"
                className="text-[#20262A]  text-[18px] font-[500] "
              >
                Pricing
              </Link>
            </li>
          </ul>

          <div className="button max-[650px]:hidden">
            <Link
              to="/login"
              className=" font-poppins font-[500] text-[18px] bg-[#2A6B53] text-white py-[10px] px-[40px] rounded-[100px]  cursor-pointer hover:bg-green-950 hover:scale-105"
            >
              Login
            </Link>
          </div>

          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-8 h-1 bg-[#2A6B53]"></span>
              <span className="block w-8 h-1 bg-[#2A6B53]"></span>
              <span className="block w-8 h-1 bg-[#2A6B53]"></span>
            </div>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-20"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute w-[90%] max-h-[80vh] overflow-y-auto no-scrollbar top-[80px] right-5 bg-white shadow-lg rounded-lg p-5 flex flex-col items-center gap-4 md:hidden "
            onClick={(e) => e.stopPropagation()}
          >
            <Link to="/about" className="text-[#20262A] text-[18px] font-[500]">
              About
            </Link>
            <Link
              to="/pricing"
              className="text-[#20262A] text-[18px] font-[500]"
            >
              Pricing
            </Link>
            <Link
              to="/login"
              className=" flex w-full items-center justify-center font-poppins font-[500] text-[18px] bg-[#2A6B53] text-white py-[10px] px-[30px] rounded-full border-2 border-white cursor-pointer hover:bg-green-950 hover:scale-105"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
