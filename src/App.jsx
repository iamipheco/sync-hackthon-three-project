import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import MainLayout from "./components/MainLayout";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/Register";
//import EmailVerify from "./components/pages/EmailVerify";
import ForgetPassword from "./components/ForgetPassword";
import Protected from "./HOC/Protected";
import CreateProject from "./components/CreateProject";
import UserSearch from "./components/UseSearch";
import UserBox from "./components/UserBox";
import SignOut from "./components/SIgnOut";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/at" element={<UserSearch />} />
                <Route path="/box" element={<UserBox />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/logout" element={<SignOut/>} />
                <Route path="/forgot-password" element={<ForgetPassword />} />
                
                {/* <Route path="/verify" element={<EmailVerify />} /> */}

                <Route
                    path="/dashboard"
                    element={
                      <Protected>
                            <MainLayout />
                        </Protected>
                    }
                >
                    <Route index element={<Dashboard />} />
                    {/* Removed the leading slash from 'create-project' */}
                    <Route path="create-project" element={<CreateProject />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
