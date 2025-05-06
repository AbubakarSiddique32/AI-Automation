import React from "react";
import { useState } from "react";
import navImage from "../../Images/nav-logo.png";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";

const Datas = [
  {
    title: "Account",
    items: ["Profile Information", "Change Password"],
  },
  {
    title: "Notifications",
    items: ["Email Alerts", "Push Notifications"],
  },
  {
    title: "Privacy",
    items: ["Data Sharing Preferences", "Activity Status"],
  },
  {
    title: "Campaign",
    items: ["API Hierarchy"],
  },
];

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
          {Datas.map((data, index) => (
            <div className="side-account" key={index}>
              <h4 className="text-[#1B2128] font-[700] font-outfit text-[20px] mb-[20px] mt-[30px]">
                {data.title}
              </h4>
              <ul className="flex flex-col gap-1">
                {data.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to=""
                      className="text-[#000000] font-[500] font-outfit text-[15px] hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashNavbar;
