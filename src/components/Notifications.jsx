import React, { useState } from "react";
import { Notification1 } from "iconsax-react";

const Notifications = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative">
            <div
                className={`border rounded-full p-[3px] sm:p-[4px] md-[6px] lg-[8px] transition-colors duration-500 ease-in-out hover:bg-[#F4530F] hover:border-[#F4530F] cursor-pointer`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Notification1
                    size="18"
                    color={isHovered ? "#fff" : "#697689"}
                    variant="Broken"
                    className="w-[22px] md:w-[24px] lg:w-[28px] h-[22px] md:h-[24px] lg:h-[28px]"
                />

                {/* Badge for unread messages */}
                {isHovered && (
                    <div className="absolute -top-1 -right-2 sm:-top-1 sm:-right-1 bg-red-500 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center text-white text-[8px] font-semibold transition-opacity duration-300">
                        3
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notifications;
