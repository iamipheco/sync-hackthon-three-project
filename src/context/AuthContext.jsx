import React, { useState, useEffect, createContext, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [authUser, setAuthUser] = useState(() => {
        const storedToken = localStorage.getItem("authToken");
        return storedToken || null;
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signIn = async (body) => {
        const baseUrl = "https://flowease.onrender.com/api";

        try {
            setLoading(true);
            const res = await axios.post(`${baseUrl}/users/login`, body);

            if (res.data.success === true) {
                const token = res.data.message;
                localStorage.setItem("authToken", token);
                setAuthUser(token);
                navigate("/dashboard");
            }
        } catch (error) {
            throw error; // Propagate the error to handle it in components
        } finally {
            setLoading(false);
        }
    };

      useEffect(() => {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
          setAuthUser(storedToken);
          
        }
      }, []);

    const logOut = () => {
        localStorage.removeItem("authToken");
        setAuthUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider
            value={{
                authUser,
                loading,
                signIn,
                logOut,
                setAuthUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    return useContext(AuthContext);
}
