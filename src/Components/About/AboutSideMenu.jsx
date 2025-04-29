import React from "react";
import { Link } from "react-scroll";

const AboutSideMenu = () => {
  const links = [
    { link: "Overview", section: "overview" },
    { link: "Features", section: "features" },
    { link: "Testimonials", section: "testimonials" },
    { link: "Impact", section: "impact" },
  ];
  return (
    <div>
      <ul className=" flex lg:gap-3 lg:flex-col lg:fixed justify-center gap-8 flex-wrap">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                to={link.section}
                smooth={true}
                duration={500}
                spy={true}
                offset={-130}
                className=" cursor-pointer hover:font-bold"
              >
                {link.link}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutSideMenu;
