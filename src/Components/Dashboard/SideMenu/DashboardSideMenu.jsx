import React from "react";
import { Link } from "react-router-dom";

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

const DashboardSideMenu = () => {
  return (
    <div className="div  w-[100%] ">
      <div className="side-menu-body w-[80%] m-auto p-6 py-10 bg-[#F9F9F9] rounded-[15px] ">
        {Datas.map((data, index) => {
          return (
            <div className="side-account" key={index}>
              <h4 className=" text-[#1B2128] font-[700] font-outfit text-[20px] mb-[20px] mt-[30px]">
                {data.title}
              </h4>
              <ul className=" flex flex-col gap-1">
                {data.items.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to=""
                        className="text-[#000000] font-[500] font-outfit text-[15px] hover:underline "
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardSideMenu;
