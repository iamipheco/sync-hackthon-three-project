
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TOKEN_KEY, authenticatedFetchApi, postApi } from '../utils';
import { UserContext } from '../utils/UserContext';
import logoImage from "../assets/img/logo.png";
import bgFlow from "../assets/img/bg.jpg";

const SignInPage = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getUserProfile = (callback, error = (f) => f) => {
    authenticatedFetchApi('users/user')
      .then((resp) => {
        console.log(resp);
        if (resp && resp.success) {
          callback(resp.message);
        } else {
          error(resp);
        }
      })
      .catch((err) => {
        error(err);
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Add your sign-in logic here using formData
    // console.log("Form submitted:", formData);

    postApi('users/login', formData)
      .then((resp) => {
        if (resp.success) {
          localStorage.setItem(TOKEN_KEY, resp.message);
          const callback = (data) => {
            setLoading(false);
            setUser(data);
            navigate('/dashboard');
          };
          const errCb = () => setLoading(false);
          getUserProfile(callback, errCb);
        } else {
          setLoading(false);
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
                            <button
                type="submit"
                disabled={loading}
                // value="Sign In"
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
                Sign In
              </button>
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
              </div>
              {/* Sign Up Link */}
              <div className="mt-10">
                <p className="text-center text-sm">
                  Don't have an account?{' '}
                  <Link to="/signup" className="font-bold cursor-pointer pl-1">
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
