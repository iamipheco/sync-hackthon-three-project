import React, { useEffect, useState } from "react";

const DateDisplay = ({ currentDate }) => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const formattedDate = currentDate.toLocaleString(undefined, options);

    return <p>{formattedDate}</p>;
};

const TimeDisplay = ({ currentTime }) => {
    const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
    };

    const formattedTime = currentTime.toLocaleString(undefined, options);

    return <p>{formattedTime}</p>;
};

const DateTimeDisplay = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="flex justify-between items-center ">
            <div className="flex item-center font-semibold ml-5">
                <DateDisplay currentDate={currentDateTime} /> &nbsp; - &nbsp;
                <TimeDisplay currentTime={currentDateTime} />
            </div>
            <div className="border  border-[#F4530F] rounded-xl py-2 px-7 mr-10 ">
                <p>Clock In</p>
            </div>
        </div>
    );
};

export default DateTimeDisplay;
