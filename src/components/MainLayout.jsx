import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header />
                <div className="p-5 flex-1 overflow-x-hidden overflow-y-auto bg-[#FAFAFA] dark:bg-slate-800">
                        <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
