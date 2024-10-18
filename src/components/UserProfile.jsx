import React, { useRef, useState, useEffect } from "react";
import UserProfPic from "../assets/img/user-prof.png";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { userInfoData } from "../context/UserInfoContext";
import { dropdownData } from "./Data";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const userRef = useRef(null);
    const { userData } = userInfoData();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (e) => {
        if (userRef.current && !userRef.current.contains(e.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (!userData) {
        return null; // or Loading spinner or some placeholder
    }

    return (
        <div
            className="relative sm:flex border rounded-full justify-center items-center px-2 py-2 lg:px-2 lg:py-2 gap-4 lg:mx-2"
            style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "#787486",
            }}
            ref={userRef}
        >
            <img
                src={UserProfPic}
                alt="user-prof"
                className="w-10 h-10 rounded-full sm:hover:bg-[#34CAA5]"
            />
            <div className="leading-4 hidden lg:block dark:lg:block">
                <h4 className="text-[14px] text-center font-medium text-[#26282C] dark:text-white">
                    {userData.full_name}
                </h4>
                <p className="text-[12px] pt-1 text-right font-extralight text-slate-400 dark:text-slate-400">
                    {userData.email}
                </p>
            </div>
            <div className="hidden sm:block p-1" onClick={toggleDropdown}>
                <HiOutlineDotsVertical size="18" />
            </div>
            {isDropdownOpen && (
                <div className="absolute right-0 top-0 p-6 w-full max-w-60 bg-gray-100 rounded-t-3xl shadow-sm rounded-md">
                    <div className="flex flex-col justify-center items-center">
                        <img
                            src=""
                            alt=""
                            className="p-7 bg-gray-600 rounded-full"
                        />
                        <div className="flex gap-2 items-center">
                            <h1 className="font-semibold pt-1 text-sm">
                                My workspace
                            </h1>{" "}
                            <span className="p-1 mt-1 rounded-full bg-green-500">
                                {" "}
                            </span>
                        </div>
                        <p className="text-xs text-gray-400 mb-2 ">
                            {userData.email}
                        </p>
                    </div>
                    <div className="">
                        {dropdownData.map((data, i) => (
                            <Link
                                to={data.link}
                                key={i}
                                className={`${
                                    data.margin &&
                                    "pt-4 border-t border-gray-300"
                                } flex items-center gap-2 mt-4 mb-2 text-slate-600 text-sm`}
                            >
                                <div>{data.icon}</div>
                                <h3>{data.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
