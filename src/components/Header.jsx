import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import UserProfile from "./UserProfile";
import Notifications from "./Notifications";
// import CalendarPaper from "./CalendarPaper";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiHandFill } from "react-icons/pi";

const Header = () => {
    return (
        <>
            <div className=" p-3 flex justify-center items-center border-b-[3px] border-b-[#f4f4f4] bg-[#fafafa] dark:bg-slate-800 dark:border-slate-600 dark:border-b-[2px] ">
                <div className=" mb-1 sm:mb-1 ml-16 lg:ml-5 flex items-center flex-auto lg:w-60 text-[12px] sm:text-[16px] lg:text-[16px] dark:text-white text-[#26282C] font-semibold transition-all duration-700 ">
                    <p className="text-xl">Welcome, Azeezat</p> <span className="ml-2"> <PiHandFill color="#F4530F" /> </span> 
                </div>
                <div className="mr-16">
                    <Link to="/create-project">
                        <div className="py-3 px-5 border rounded-md flex justify-center items-center gap-3">
                            <div className="bg-[#F4530F] border-none p-[2px] rounded-sm">
                                <FaPlus color="white" />
                            </div>
                            <p className="text-sm">Create a Project</p>
                        </div>
                    </Link>
                </div>
                {/* <div className="mr-4 hidden md:block md:shrink-0">

                <CalendarPaper />
                </div> */}
                <div className="mr-16 md:shrink-0">
                    <Notifications />
                </div>
                <div className="mr-5 md:shrink-0">
                    <UserProfile />
                </div>
            </div>
        </>
    );
};

export default Header;
