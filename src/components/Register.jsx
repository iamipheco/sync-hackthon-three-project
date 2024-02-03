import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/img/logo.png";
import bgFlow from "../assets/img/bg.jpg";
import axios from "axios";
import GoogleSVG from "./SVGs/GoogleSVG";
import AppleSVG from "./SVGs/AppleSVG";
import LoadingSVG from "./SVGs/LoadingSVG";

const Register = () => {
    const [fullname, setFullName] = useState(""); // Fixed the syntax error
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState("");

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        localStorage.setItem("email", JSON.stringify(newEmail));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            email,
            full_name: fullname,
            password,
        };

        const baseUrl = "https://flowease.onrender.com/api";

        setErrors(""); // Changed passwordError to setErrors

        if (password.length < 5) {
            setIsLoading(false);
            setErrors("Password should be at least 5 characters");

            setTimeout(() => {
                setErrors("");
            }, 5000); // clear error message after 10 seconds
        } else if (password !== confirmPassword) {
            setIsLoading(false);
            setErrors("Passwords do not match");

            setTimeout(() => {
                setErrors("");
            }, 5000); // clear error message after 10 seconds
        } else {
            try {
                setIsLoading(true);
                const res = await axios.post(`${baseUrl}/users/register`, body);

                if (res.data.success === true) {
                    setIsLoading(false);
                    setErrors("");
                    navigate("/verify");
                } else {
                    throw new Error(
                        res.data.message || "An error occurred during sign-in."
                    );
                }
            } catch (error) {
                setErrors(error.response.data.message);
                setIsLoading(false);
                console.log(error);

                setTimeout(() => {
                    setErrors("");
                }, 5000); // clear error message after 10 seconds
            }
        }
    };

    const navigate = useNavigate();

    return (
        <div
            className="bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${bgFlow})` }}
        >
            <section className="p-6">
                <div className="container flex flex-col items-center">
                    <div className="w-full max-w-[500px] bg-white rounded-md p-[32px]">
                        <img
                            src={logoImage}
                            alt="flowease-logo"
                            className="mx-auto w-32"
                        />
                        <h1 className="text-base text-textDeep leading-10 text-center pt-[22px] capitalize">
                            Sign Up
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
                            className="mt-[28px] w-full mx-auto max-w-[350px]"
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            {/* Full Name */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="full_name"
                                    name="full_name"
                                    placeholder="Full Name"
                                    value={fullname}
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                    className="peer h-[48px] w-full border-2 border-gray-300 text-textColor focus:outline-none font-sans pl-6
                  placeholder-transparent rounded-2xl"
                                />
                                <label
                                    htmlFor="Full Name"
                                    className="bg-white px-2 absolute left-6 -top-2 font-sans text-sm peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-600
                  peer-placeholder-shown:top-3
                  transition all
                  peer-focus:-top-2
                  peer-focus:text-textColor
                  peer-focus:text-sm"
                                >
                                    Full Name
                                </label>
                            </div>
                            {/* Email */}
                            <div className="mt-7 relative">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
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
                            {/* Confirm Password */}
                            <div className="mt-7 relative">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className="peer h-[48px] w-full border-2 border-gray-300 text-textColor focus:outline-none font-sans pl-6
                  placeholder-transparent rounded-2xl"
                                />
                                <label
                                    htmlFor="confirmPassword"
                                    className="bg-white px-2 absolute left-6 -top-2 font-sans text-sm peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-600
                  peer-placeholder-shown:top-3
                  transition all
                  peer-focus:-top-2
                  peer-focus:text-textColor
                  peer-focus:text-sm"
                                >
                                    Confirm Password
                                </label>
                            </div>
                            {/* Terms and Conditions */}
                            <div className="mt-4 flex flex-row gap-2 justify-between items-center">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="checkbox"
                                    className="w-[32px] h-[32px]"
                                />
                                <p className="text-[12px] text-textColor font-sans">
                                    By creating your account you agree to the{" "}
                                    <Link
                                        to="/terms"
                                        className="text-[#F4530F]"
                                    >
                                        Terms of service
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        to="/policy"
                                        className="text-[#F4530F]"
                                    >
                                        Policy
                                    </Link>
                                </p>
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
                                Signup
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
                            {/* Login Link */}
                            <div className="mt-5">
                                <p className="text-center text-sm">
                                    Already have an account?
                                    <Link
                                        to="/"
                                        className="font-bold cursor-pointer pl-1 hover:text-[#F4530F] duration-300"
                                    >
                                        Login
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

export default Register;
