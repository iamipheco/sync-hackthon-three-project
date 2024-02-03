import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/img/logo.png";
import bgFlow from "../assets/img/bg.jpg";
import AppleSVG from "./SVGs/AppleSVG";
import axios from "axios";
import GoogleSVG from "./SVGs/GoogleSVG";
import LoadingSVG from "./SVGs/LoadingSVG";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    const baseUrl = "https://flowease.onrender.com/api";

    const handleSignIn = async (e) => {
        e.preventDefault();

        const body = {
            email,
            password,
        };

        try {
            setIsLoading(true);

            const resp = await axios.post(`${baseUrl}/users/login`, body);

            if (resp.data.success === true) {
                setIsLoading(false);
                setErrors("");
                navigate("/dashboard");
            } else {
                throw new Error(
                    resp.data.message || "An error occurred during sign-in."
                );
            }
        } catch (error) {
            setErrors(error.response.data.message);
            setIsLoading(false);
            
            setTimeout(() => {
                setErrors("");
            }, 10000); // clear error message after 10 seconds
        }
    };

    return (
        <div
            className="bg-cover bg-center bg-fixed h-screen"
            style={{ backgroundImage: `url(${bgFlow})` }}
        >
            <section className="p-10">
                <div className="container flex flex-col items-center">
                    <div className="w-full max-w-[500px] bg-white rounded-md p-[32px]">
                        <img
                            src={logoImage}
                            alt="flowease-logo"
                            className="mx-auto w-32"
                        />
                        <h1 className="text-base text-textDeep leading-10 text-center pt-10 capitalize">
                            Let's sign you in
                        </h1>
                        <div className="">
                            {/* error message */}
                            {errors && (
                                <p className="text-red-500 text-sm text-center mt-5">
                                    {errors}
                                </p>
                            )}
                        </div>

                        <form
                            className="mt-10 w-full mx-auto max-w-[350px]"
                            onSubmit={(e) => handleSignIn(e)}
                        >
                            {/* Email */}
                            <div className="mt-7 relative">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="peer h-[48px] w-full border-2 border-gray-300 text-textColor focus:outline-none font-sans pl-6
                  placeholder-transparent rounded-2xl"
                                />
                                <label
                                    htmlFor="Email"
                                    className="bg-white px-2 absolute left-6 -top-2 font-sans text-sm peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-600
                  peer-placeholder-shown:top-3
                  transition all
                  peer-focus:-top-2
                  peer-focus:text-textColor
                  peer-focus:text-sm"
                                >
                                    Email
                                </label>
                            </div>
                            {/* Password */}
                            <div className="mt-7 relative">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="peer h-[48px] w-full border-2 border-gray-300 text-textColor focus:outline-none font-sans pl-6
                  placeholder-transparent rounded-2xl"
                                />
                                <label
                                    htmlFor="password"
                                    className="bg-white px-2 absolute left-6 -top-2 font-sans text-sm peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-600
                  peer-placeholder-shown:top-3
                  transition all
                  peer-focus:-top-2
                  peer-focus:text-textColor
                  peer-focus:text-sm"
                                >
                                    Password
                                </label>
                            </div>

                            {/* Remember me and Forgot Password */}
                            <div className="mt-6 flex justify-between items-center">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        id="rememberMe"
                                        className="w-[18px] h-[18px] mr-2"
                                    />
                                    <label
                                        htmlFor="rememberMe"
                                        className="text-textColor text-sm font-sans"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    to="/forgot-password"
                                    className="text-textColor text-sm font-sans text-[#F4530F] hover:text-slate-950 duration-300"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="mt-9 bg-gradient-to-b from-[#F4530F] to-[#ff6929] hover:from-[#ff6929] hover:to-[#F4530F] transition-all  w-full h-[48px] text-white rounded-2xl cursor-pointer"
                            >
                                {isLoading && (
                                    
                                    <LoadingSVG /> // loading spinner
                                )}
                                Sign In
                            </button>
                            {/* Social Logins */}
                            <div className="mt-6 flex  lg:flex-row justify-around gap-[10px]">
                                <div className="border py-2 px-8  rounded-lg cursor-pointer flex items-center justify-center lg:mt-0">
                                    <Link
                                        to="/google-login"
                                        className="flex items-center gap-3"
                                    >
                                        <GoogleSVG width="18" height="18" />
                                        <p className="font-semibold text-[16px] mr-2">
                                            Google
                                        </p>
                                    </Link>
                                </div>
                                <div className="border py-2 px-8  rounded-lg cursor-pointer flex items-center justify-center lg:mt-0">
                                    <Link
                                        to="/apple-login"
                                        className="flex items-center gap-2"
                                    >
                                        <AppleSVG width="24" height="24" />
                                        <p className="font-semibold text-[16x] mr-2">
                                            Apple
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            {/* Sign Up Link */}
                            <div className="mt-10">
                                <p className="text-center text-sm">
                                    Don't have an account?{" "}
                                    <Link
                                        to="/signup"
                                        className="font-bold cursor-pointer pl-1 hover:text-[#F4530F] duration-300"
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignIn;
