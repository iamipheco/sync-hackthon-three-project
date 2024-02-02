// import React, { useState, useEffect, useContext } from 'react';
// import { jwtDecode } from 'jwt-decode';
// import axios from "axios";
// import { motion } from "framer-motion";


// const AuthContext = React.createContext()

// export function useAuth() {
//     return useContext(AuthContext)
// }


// export function AuthProvider(props) {
//     const [authUser, setAuthUser] = useState(false)
//     const [loading, setIsLoading] = useState(true)

//     const baseUrl = "https://flowease.onrender.com/api";

//     const signIn = async (body) => {
//         try {
//             const res = await axios.post(`${baseUrl}/users/login`, body);

//             if (res.data.success === true) {
//                 const decodedToken = jwtDecode(res.data.message);
//                 localStorage.setItem("authToken", JSON.stringify(res.data));
//                 setAuthUser(decodedToken);
//                 console.log("res.data", res.data);
//                 return res.data;
//             } else {
//                 throw new Error("Authentication failed");
//             }
//         } catch (error) {
//             return null;
//         }
//     };

//     const logOut = () => {
//         localStorage.removeItem("authToken");
//         setAuthUser(null);
//     };

//     useEffect(() => {
//         const storedToken = localStorage.getItem("authToken");
//         if (storedToken) {
//             const decodedToken = jwtDecode(storedToken);
//             setAuthUser(decodedToken);
//         }
//         setLoading(false);
//     }, []);


//     return (
//         <AuthContext.Provider  value={{ authUser, actions: { signIn, logOut, setAuthUser } }}>
//              {loading ? (
//                 <div className="fixed w-full min-h-screen z-50 bg-black opacity-30 flex justify-center items-center h-screen">
//                     LOading....Please wait
//                 </div>
//             ) : (
//                 props.children
//             )}
//             </AuthContext.Provider>
//     )
// }