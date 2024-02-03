import React, { useState, useEffect, createContext, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const baseUrl = "https://flowease.onrender.com/api";

    const signIn = async (body) => {
        try {
            const res = await axios.post(`${baseUrl}/users/login`, body)

            if ( res.data.success === true ) {
                const decodedToken = jwtDecode(res.data.message);
                localStorage.setItem("authToken", res.data.message);
                setAuthUser(decodedToken)
            } else throw new Error("Authentication failed");
        } catch (error) {
            return null;
        }
    };
    // const signUp = async (body) => {
    //     try {
    //         const res = await axios.post(`${baseUrl}/users/register`, body);

    //         if (res.data.success) {
    //             setAuthUser(null);
    //             navigate("/verify");
    //         } else if (res.data.success === false ) {
    //             throw new Error(res.data.message);
    //         }else {
    //                 console.error(res.data.message);
    //             }
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const logOut = () => {
        localStorage.removeItem("authToken");
        setAuthUser(null);
    };

    useEffect(() => {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
            const decodedToken = jwtDecode(storedToken);
            setAuthUser(decodedToken);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authUser,
                    signIn,
                    //signUp,
                    logOut,
                    setAuthUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
