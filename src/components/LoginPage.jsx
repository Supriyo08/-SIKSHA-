import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginPage = () => {
  const navigate = useNavigate();
  function accountHandler() {
    toast.success("LoggedIn Successfully");
    navigate("/login/register");
  }

  return (
    <div>
      <div className="w-full h-screen bg-[#0D77EC] relative overflow-x-hidden">
        <button className="flex items-center">
          <img src={img1} alt="" height={150} width={150} />
          <h2 className="text-white font-bold text-2xl m-[-20px]">
            ShikshaKendra
          </h2>
        </button>
        <div className="absolute w-[70%] h-screen -z-0 bg-[#F5F5F5] top-0 -right-5 rounded-3xl flex flex-col items-center justify-center">
          <h2 className="font-bold text-black font-sans mb-8 text-3xl ">
            Log In
          </h2>
          <div className="flex justify-center gap-16">
            <button className="flex items-center justify-center border rounded-md py-2 px-2 border-[#C9C9C9] gap-1 hover:bg-gray-300 transition-all duration-200">
              <FcGoogle size={20} />
              <p>Log In with Google</p>
            </button>
            <button className="flex items-center justify-center border rounded-md py-2 px-2 border-[#C9C9C9] gap-1  hover:bg-gray-300 transition-all duration-200">
              <FaFacebook size={20} />
              <p>Log In with Facebook</p>
            </button>
          </div>
          <p className="pt-5">-OR-</p>
          <div className="w-full flex flex-col items-center gap-8 ">
            <div class="w-1/2 relative z-0"></div>
            <div class="w-1/2 relative z-0">
              <input
                type="text"
                id="phone_number"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="phone_number"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
              >
                Phone Number
              </label>
            </div>
            <div class="w-1/2 relative z-0">
              <input
                type="password"
                id="password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="password"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
              >
                Password
              </label>
            </div>
            <button
              className="border w-[25rem] mt-6 py-2 px-4 rounded-lg bg-[#0D77EC] text-white font-bold hover:shadow-lg transition-all duration-200 "
              onClick={accountHandler}
            >
              Log In
            </button>
            <p className="-mt-5">
              Don't have an account?{" "}
              <Link className="text-blue-600 font-semibold" to="/">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className="absolute z-1 bottom-8 left-40">
          <img src={img2} alt="" height={500} width={500} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
