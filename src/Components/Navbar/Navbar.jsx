import React from "react";

import navImage from "../../Images/nav-logo.png";

const Navbar = () => {
  return (
    <div className=" w-full py-5 ">
      <nav className=" w-[90%] m-auto flex items-center justify-between">
        <div className="left w-[10%]">
          <img src={navImage} alt="" className="w-full object-cover" />
        </div>

        <div className="right flex items-center gap-10">
          <ul className=" flex gap-4 font-bold cursor-pointer ">
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

          <div className="button">
            <button className=" font-poppins font-[500] text-[18px] bg-[#2A6B53] text-white py-[10px] px-[40px] rounded-[100px] border-2 border-white cursor-pointer hover:bg-green-950 hover:scale-105">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
