import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/img/logo.png";
import bgFlow from "../assets/img/bg.jpg";
import axios from "axios";
import LoadingSVG from "./SVGs/LoadingSVG";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const baseUrl = "https://flowease.onrender.com/api";

  const handleForgetPassword = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post(`${baseUrl}/users/forgot-password`, {
        email,
      });

      setIsLoading(false);
      setSuccessMessage(response.data.message);
      setErrorMessage("");
    } catch (error) {
      setIsLoading(false);
      setSuccessMessage("");
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-fixed h-screen"
      style={{ backgroundImage: `url(${bgFlow})` }}
    >
      <section className="p-10 py-28">
        <div className="container flex flex-col items-center">
          <div className="w-full max-w-[500px] bg-white rounded-md p-[32px]">
            <img
              src={logoImage}
              alt="flowease-logo"
              className="mx-auto w-32"
            />
            <h1 className="text-base text-textDeep leading-10 text-center pt-10 capitalize">
              Forgot your password?
            </h1>
            <div className="">
              {errorMessage && (
                <p className="text-red-500 text-sm text-center mt-5">
                  {errorMessage}
                </p>
              )}
              {successMessage && (
                <p className="text-green-500 text-sm text-center mt-5">
                  {successMessage}
                </p>
              )}
            </div>

            <form
              className="mt-10 w-full mx-auto max-w-[350px]"
              onSubmit={(e) => handleForgetPassword(e)}
            >
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
                  htmlFor="email"
                  className="bg-white px-2 absolute left-6 -top-2 font-sans text-sm peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-600
                  peer-placeholder-shown:top-3
                  transition all
                  peer-focus:-top-2
                  peer-focus:text-textColor
                  peer-focus:text-sm capitalize"
                >
                  Enter your email address
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="mt-9 bg-gradient-to-b from-[#F4530F] to-[#ff6929] hover:from-[#ff6929] hover:to-[#F4530F] duration-700 hover:duration-700 w-full h-[48px] text-white rounded-2xl cursor-pointer"
              >

{/* bg-gradient-to-r from-cyan-500 to-blue-500 */}
                {isLoading && (
                  <LoadingSVG />
                )}
                Submit
              </button>

              <div className="mt-10">
                <p className="text-center text-sm">
                  Remember your password?{" "}
                  <Link
                    to="/"
                    className="font-bold cursor-pointer pl-1 hover:text-[#F4530F] duration-300"
                  >
                    Sign In
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

export default ForgetPassword;
