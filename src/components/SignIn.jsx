import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/img/logo.png";
import bgFlow from "../assets/img/bg.jpg";


const SignInPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign-in logic here using formData
        console.log("Form submitted:", formData);
    };

    return (
        <div
            className="bg-cover bg-center bg-fixed h-screen"
            style={{ backgroundImage: `url(${bgFlow})` }}
        >
            <section className="p-10">
                <div className="container flex flex-col items-center">
                    <div className="w-[500px] bg-white rounded-md p-[32px]">
                        <img
                            src={logoImage}
                            alt="flowease-logo"
                            className="mx-auto w-32"
                        />
                        <h1 className="text-base text-textDeep leading-10 text-center pt-10 capitalize">
                            Let's sign you in
                        </h1>
                        <form
                            className="mt-10 w-[350px] mx-auto"
                            onSubmit={handleSubmit}
                        >
                            {/* Email */}
                            <div className="mt-7 relative">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    value={formData.password}
                                    onChange={handleChange}
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
                                    className="text-textColor text-sm font-sans"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            {/* Submit Button */}
                            <input
                                type="submit"
                                value="Sign In"
                                className="mt-[36px] bg-[#F4530F] w-full h-[48px] text-white rounded-2xl cursor-pointer"
                            />
                            {/* Social Logins */}
                            <div className="mt-10 flex flex-col lg:flex-row justify-between gap-[10px]">
                                <div className="border py-[10px] px-[41px] lg:rounded-xl cursor-pointer flex items-center justify-center">
                                    <Link
                                        to="/google-login"
                                        className="flex items-center gap-7"
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_3_274)">
                                                <path
                                                    d="M17.64 9.20443C17.64 8.56625 17.5827 7.95262 17.4764 7.36353H9V10.8449H13.8436C13.635 11.9699 13.0009 12.9231 12.0477 13.5613V15.8194H14.9564C16.6582 14.2526 17.64 11.9453 17.64 9.20443Z"
                                                    fill="#4285F4"
                                                />
                                                <path
                                                    d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z"
                                                    fill="#34A853"
                                                />
                                                <path
                                                    d="M3.96409 10.7101C3.78409 10.1701 3.68182 9.59325 3.68182 9.00007C3.68182 8.40689 3.78409 7.83007 3.96409 7.29007V4.95825H0.957273C0.347727 6.17325 0 7.5478 0 9.00007C0 10.4523 0.347727 11.8269 0.957273 13.0419L3.96409 10.7101Z"
                                                    fill="#FBBC05"
                                                />
                                                <path
                                                    d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z"
                                                    fill="#EA4335"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3_274">
                                                    <rect
                                                        width="18"
                                                        height="18"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className="font-semibold text-[14px]">
                                            Google
                                        </p>
                                    </Link>
                                </div>
                                <div className="border px-[41px] rounded-xl cursor-pointer flex items-center justify-center lg:mt-0">
                                    <Link
                                        to="/apple-login"
                                        className="flex items-center gap-5"
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.0502 20.28C16.0702 21.23 15.0002 21.08 13.9702 20.63C12.8802 20.17 11.8802 20.15 10.7302 20.63C9.29016 21.25 8.53016 21.07 7.67016 20.28C2.79016 15.25 3.51016 7.59 9.05016 7.31C10.4002 7.38 11.3402 8.05 12.1302 8.11C13.3102 7.87 14.4402 7.18 15.7002 7.27C17.2102 7.39 18.3502 7.99 19.1002 9.07C15.9802 10.94 16.7202 15.05 19.5802 16.2C19.0102 17.7 18.2702 19.19 17.0402 20.29L17.0502 20.28ZM12.0302 7.25C11.8802 5.02 13.6902 3.18 15.7702 3C16.0602 5.58 13.4302 7.5 12.0302 7.25Z"
                                                fill="black"
                                            />
                                        </svg>

                                        <p className="font-semibold text-[14px]">
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
                                        className="font-bold cursor-pointer pl-1"
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

export default SignInPage;
