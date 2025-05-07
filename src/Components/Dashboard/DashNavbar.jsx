import React from "react";
import { useState } from "react";
import navImage from "../../Images/nav-logo.png";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import image2 from "../../Images/Main-1.jpeg";

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

        <div className="right sm:flex gap-7 items-center sm:block hidden">
          <div className="search">
            <button>
              <IoSearchOutline className="w-[24px] h-[24px] object-cover" />
            </button>
          </div>
          <div className="grid ">
            <button>
              <IoGridOutline className="w-[24px] h-[24px]" />
            </button>
          </div>
          <div className="profile">
            <div className="profile-img w-[48px] h-[48px] bg-[#9A9494]  rounded-full border  border-[#00000000]">
              <img
                src={image2}
                alt=""
                className="w-full object-cover h-full rounded-full"
              />
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
            className="absolute w-[90%] max-h-[80vh] overflow-y-auto   top-[80px] sm:left-9 left-5 bg-white rounded-lg p-5 flex flex-col items-center text-center gap-4 lg:hidden shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="right w-full flex justify-between items-center sm:hidden flex-row-reverse ">
              <div className="mobile-right flex gap-7">
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
              </div>
              <div className="profile">
                <div className="profile-img w-[48px] h-[48px] bg-[#9A9494]  rounded-full border  border-[#00000000]">
                  <img
                    src={image2}
                    alt=""
                    className="w-full object-cover h-full rounded-full"
                  />
                </div>
              </div>
            </div>

            {Datas.map((data, index) => (
              <div className="side-account " key={index}>
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
        </div>
      )}
    </div>
  );
};

export default DashNavbar;
