import {
    Profile2User,
    Category,
    TrendUp,
    Box,
    DiscountShape
} from "iconsax-react";

import { LuClipboardList, LuUser2, LuUserPlus2, LuSettings, LuClock, LuPlus, LuArrowLeftFromLine} from "react-icons/lu";

import TimerSVG from "./SVGs/TimerSVG";
import DashSVG from "./SVGs/DashSVG";


export const sideData = [
    {
        name: "Dashboard",
        link: "",
        icon: <DashSVG width="25" height="24"/>,
    },
    {
        name: "Report",
        link: "",
        icon: <TimerSVG width="24" height="24"/>,
    },
    {
        name: "Projects",
        link: "",
        icon: <Profile2User color="#697689" variant="Broken"/>,
    },
    {
        name: "Clock in-out",
        link: "",
        icon: <Box color="#697689" variant="Broken"/>,
    },
    {
        name: "Settings",
        link: "",
        icon: <DiscountShape color="#697689" variant="Broken"/>,
    }
];




export const dropdownData = [
    {
        name: "Assign Task",
        link: "",
        icon: <LuClipboardList/>,
    },
    {
        name: "Time Tracking",
        link: "",
        icon: <LuClock/>,
    },
    {
        name: "Invte to FlowEase",
        link: "",
        icon: <LuUserPlus2/>,
    },
    {
        name: "Profile",
        link: "",
        icon: <LuUser2/>,
        margin: true
    },
    {
        name: "Settings",
        link: "",
        icon: <LuSettings/>,
    },
    {
        name: "Add another account",
        link: "",
        icon: <LuPlus/>,
    },
    {
        name: "Logout",
        link: "/logout",
        icon: <LuArrowLeftFromLine/>,
        margin: true
    }
];

