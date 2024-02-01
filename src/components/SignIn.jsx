import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            style={{ backgroundImage: "url(/src/assets/img/bg.jpg)" }}
        >
            <section className="p-10">
                <div className="container flex flex-col items-center">
                    <div className="w-[500px] bg-white rounded-md p-[32px]">
                        <img
                            src="/src/assets/img/logo.png"
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
                                        <img
                                            src="/src/assets/img/google.svg"
                                            alt="google-logo"
                                            className="w-[12px]"
                                        />
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
                                        <img
                                            src="/src/assets/img/apple.svg"
                                            alt="apple-logo"
                                            className="w-[18px]"
                                        />
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
