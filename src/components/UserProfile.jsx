import React, { useRef, useState, useEffect } from "react";
import UserProfPic from "../assets/img/user-prof.png";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { AiOutlineUser, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const UserProfile = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const userProRef = useRef(null);

    const handleArrowClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (userProRef.current && !userProRef.current.contains(e.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [userProRef]);

    const dropdownItems = [
        { icon: <AiOutlineUser />, text: "My Workspace" },
        { icon: <MdEmail />, text: "justin@gmail.com" },
        { icon: <AiOutlineSetting />, text: "Settings" },
        { icon: <AiOutlineLogout />, text: "Logout" },
    ];

    return (
        <>
            <div
                className="relative sm:relative sm:flex border rounded-full justify-center items-center px-1 py-1 lg:px-2 lg:py-2 gap-2 lg:gap-4 lg:mx-2"
                style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "#787486",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleArrowClick}
            >
                <img
                    src={UserProfPic}
                    alt="user-prof"
                    className="w-[32px] h-[32px] sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full sm:hover:bg-[#34CAA5]"
                />
                <div className="leading-4 hidden lg:block dark:lg:block">
                    <h4 className="text-[14px] text-right font-normal text-[#26282C] dark:text-white">
                        Justin Bergson
                    </h4>
                    <p className="text-[12px] pt-1 text-right font-extralight color-[#787486] dark:text-slate-400">
                        justin@gmail.com
                    </p>
                </div>
                <div
                    ref={userProRef}
                    className="hidden sm:block p-1 transition-colors duration-500"
                >
                    <HiOutlineDotsVertical size="18" className="hidden sm:block" />
                </div>
                {isDropdownOpen && (
                    <div className="flex absolute md:left-8 top-10 -right-4 sm:-right-1 sm:top-9 md:top-12 mt-2 lg:top-[55px] lg:right-2 dark:text-white dark:bg-slate-800 bg-white dark:font-medium rounded-md ">
                        {dropdownItems.map((item, index) => (
                            <div key={index} className="flex  flex-col justify-center items-center">

                                
                                <span className="ml-2">{item.icon} {item.text}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default UserProfile;
