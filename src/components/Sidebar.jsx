import React, { useState } from "react";
import { CloseCircle, HambergerMenu } from "iconsax-react";
import ImgLogo from "../assets/img/logo.png";
import feLogo from "../assets/img/fe.png";
import { sideData } from "./Data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIcons, setHoveredIcons] = useState(Array(sideData.length).fill(false));
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHover(true);
  };

  const handleMouseLeave2 = () => {
    setIsHover(false);
  };

  const handleMouseEnter = (index) => {
    const updatedHoveredIcons = [...hoveredIcons];
    updatedHoveredIcons[index] = true;
    setHoveredIcons(updatedHoveredIcons);
  };

  const handleMouseLeave = (index) => {
    const updatedHoveredIcons = [...hoveredIcons];
    updatedHoveredIcons[index] = false;
    setHoveredIcons(updatedHoveredIcons);
  };

  return (
    <div className="">
      <div className="block absolute top-6 left-8 pt-1 md:pt-4" onClick={() => setIsOpen(!isOpen)}>
        <HambergerMenu size="24" color="#697689" className="block" />
      </div>
      <div
        className={`${
          isOpen ? "lg:w-60" : "hidden lg:block lg:w-20 translate-x-0:"
        } fixed sm:relative inset-y-0 left-0 overflow-y-auto sm:overflow-y-hidden w-[200px] z-10 sm:w-56 h-screen p-5 bg-[#F7F8FA] dark:text-gray-200 dark:bg-slate-800 dark:border-r-[1px] border-r-2 border-[#EBECF2] dark:border-slate-600 font-semibold transform duration-500 transition-colors`}
      >
        <div className="lg:block lg:absolute -right-[2px] top-[98px] cursor-pointer hidden" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)} onClick={() => setIsOpen(!isOpen)}>
          <svg
            width="7"
            height="28"
            viewBox="0 0 3 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${!isOpen && "rotate-180"}`}
          >
            <path
              d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
              fill={hoveredIcons[0] ? "#C7440D" : "#697689"} 
            />
          </svg>
        </div>
        <div className="lg:hidden sm:block absolute -right-3 top-4 sm:top-4 sm:-right-1 duration-500 -translate-x-full " onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} onClick={() => setIsOpen(!isOpen)}>
          <CloseCircle
            size=""
            color={isHover ? "#C7440D" : "#697689"}
            variant="Broken"
            className="w-[28px] sm:w-[32px]"
          />
        </div>
        <div className="flex gap-x-4 items-center">
          <img
            className={`w-12 cursor-pointer duration-500 pt-2 ${isOpen && "rotate-[360deg]"}`}
            src={feLogo}
            alt="logo"
          />
          <img
            className={`w-24 cursor-pointer duration-500 pt-2 ${!isOpen && "scale-0"}`}
            src={ImgLogo}
            alt="logo"
          />
        </div>
        <div className="mt-10 flex flex-col gap-4 relative">
          {sideData.map((data, i) => (
            <Link
              to={data.link}
              key={i}
              className=" group flex items-center rounded-md cursor-pointer hover:bg-[#F4530F] dark:hover:text-slate-400 hover:text-white transition-all duration-300 lg:text-sm text-[15px] gap-3 font-medium p-2"
              onMouseEnter={() => handleMouseEnter(i + 1)}
              onMouseLeave={() => handleMouseLeave(i + 1)}
            >
              <div>
                {React.cloneElement(data.icon, {
                  color: hoveredIcons[i + 1] ? "#fff" : "#697689",
                })}
              </div>
              <h2
                style={{ transitionDelay: `${i + 0.05}00ms` }}
                className={`whitespace-pre duration-500 ml-3 ${!isOpen && "scale-0 translate-x-28 overflow-hidden"}`}
              >
                {data.name}
              </h2>
              <h2
                className={`${isOpen && "hidden"} absolute left-28 bg-white font-medium whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
              >
                {data.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
