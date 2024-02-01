import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postApi } from '../utils';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Add your signup logic here using formData
    console.log('Form submitted:', formData);
    postApi('users/register', formData)
      .then((resp) => {
        setLoading(false);
        if (resp.success) {
          navigate('/dashboard');
        } else {
          alert(resp.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        alert(err.message);
      });
  };

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: 'url(/src/assets/img/bg.jpg)' }}
    >
      <section className=" p-6">
        <div className="container flex flex-col items-center">
          <div className="w-[500px] bg-white rounded-md p-[32px]">
            <img
              src="/src/assets/img/logo.png "
              alt="flowease-logo"
              className="mx-auto w-32"
            />
            <h1 className="text-base text-textDeep leading-10 text-center pt-[22px] capitalize">
              Sign up
            </h1>
            <form
              className="mt-[28px] w-[350px] mx-auto"
              onSubmit={handleSubmit}
            >
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={handleChange}
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
              {/* Confirm Password */}
              <div className="mt-7 relative">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
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
                  By creating your account you agree to the{' '}
                  <Link to="/terms" className="text-[#F4530F]">
                    Terms of service
                  </Link>{' '}
                  and{' '}
                  <Link to="/policy" className="text-[#F4530F]">
                    Policy
                  </Link>
                </p>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                // value="Signup"
                className="mt-[36px] bg-[#F4530F] w-full h-[48px] text-white rounded-2xl cursor-pointer"
              >
                {loading && (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                Signup
              </button>
              {/* Social Logins */}
              <div className="mt-[18px] flex flex-col lg:flex-row justify-between gap-[10px]">
                <div className="border py-[10px] px-[41px] lg:rounded-xl cursor-pointer flex items-center justify-center">
                  <Link to="/google-login" className="flex items-center gap-7">
                    <img
                      src="/src/assets/img/google.svg"
                      alt="google-logo"
                      className="w-[12px]"
                    />
                    <p className="font-semibold text-[14px]">Google</p>
                  </Link>
                </div>
                <div className="border px-[41px] rounded-xl cursor-pointer flex items-center justify-centerlg:mt-0">
                  <Link to="/apple-login" className="flex items-center gap-5">
                    <img
                      src="/src/assets/img/apple.svg"
                      alt="apple-logo"
                      className="w-[18px]"
                    />
                    <p className="font-semibold text-[14px]">Apple</p>
                  </Link>
                </div>
              </div>
              {/* Login Link */}
              <div className="mt-4">
                <p className="text-center text-sm">
                  Already have an account?
                  <Link to="/" className="font-bold cursor-pointer pl-1">
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

export default SignUp;
