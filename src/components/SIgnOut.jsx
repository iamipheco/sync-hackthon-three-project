import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignOut = () => {
   const { logOut } = useAuth()
    logOut()

   return <Navigate to="/" />;
};

export default SignOut;