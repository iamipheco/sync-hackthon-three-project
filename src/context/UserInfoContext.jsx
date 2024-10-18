import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router";

const UserInfoContext = createContext({});

export const UserInfoProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const baseUrl = "https://flowease.onrender.com/api";

        const getUserInfo = async () => {
            const token = localStorage.getItem("authToken");

            const config = {
                headers: {
                    Authorization: token,
                },
            };
            try {
                setLoading(true);
                setUserData(null);

                const res = await axios.get(`${baseUrl}/users/user`, config);
                const infoData = res.data;

                if (infoData.success === true) {
                    setUserData(infoData.message);
                }
                // console.log("My user info", infoData.message);
            } catch (error) {
                
                // Check if the error response contains the expired token message
                if (
                    error.response &&
                    error.response.data.success === false &&
                    error.response.data.message === "jwt expired"
                ) {
                   
                        localStorage.removeItem("authToken");
                        setUserData(null);
                        navigate("/");
                }
            } finally {
                setLoading(false);
            }
        };

        getUserInfo();
    }, [navigate]);

    return (
        <UserInfoContext.Provider value={{ userData }}>
            {loading ? <Spinner /> : children}
        </UserInfoContext.Provider>
    );
};


export const userInfoData = () => {
    return useContext(UserInfoContext);
};
