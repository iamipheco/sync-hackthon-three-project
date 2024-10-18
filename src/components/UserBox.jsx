import React from "react";
import { dropdownData } from "./Data";
import { Link } from "react-router-dom";

const UserBox = () => {
    return (
        <div className="bg-slate-300">
            <div className="max-w-52 p-5 bg-slate-50 shadow-sm rounded-md">
                <div className="flex flex-col justify-center items-center">
                    <img
                        src=""
                        alt=""
                        srcSet=""
                        className="p-7 bg-slate-600 rounded-full"
                    />
                    <div className="flex gap-2 items-center">
                        <h1 className="font-semibold pt-1 text-sm">
                            My workspace
                        </h1>{" "}
                        <span className="p-1 mt-1 rounded-full bg-green-500">
                            {" "}
                        </span>
                    </div>
                    <p className="text-xs text-gray-400 ">myemailfro.com</p>
                </div>
                <div className="">
                    {dropdownData.map((data, i) => (
                        <Link
                            to={data.link}
                            key={i}
                            className={`${
                                data.margin &&
                                "pt-2 border-t  border-slate-300 m-0 p-0"
                            } flex items-center gap-2 mt-4 mb-2 text-slate-600 text-sm`}
                        >
                            <div>{data.icon}</div>
                            <h3>{data.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserBox;
