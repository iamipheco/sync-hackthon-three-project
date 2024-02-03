import React from "react";
import {  Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const Protected = ({ children }) => {
  const { authUser } = useAuth();
  
  return (
    authUser ? children   : <Navigate to="/signin" />
  );
};

export default Protected;