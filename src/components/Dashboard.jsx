import React, { useState } from "react";
import img1 from "../assets/img1.png";
import img4 from "../assets/img4.png";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { GoReport } from "react-icons/go";
import { MdOutlineLiveHelp } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { HiOutlineSearch } from "react-icons/hi";
import { MdNotificationsActive } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import Tasks from "./Tasks";
import task from "../task";
import Charts from "./Charts";
import PieChart from "./PieChart";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";
const Dashboard = ({ clicked, setClicked, name }) => {
  const [works, setWorks] = useState(task);
  function clickHandler() {
    toast.success("Logged Out Successfully");
  }
  return (
    <div className="h-full w-full flex relative">
      <div className="w-[15%] flex flex-col items-center">
        <img src={img1} alt="" height={150} width={150} />
        <div className="flex flex-col gap-96">
          <div className="flex flex-col gap-2 items-start">
            <NavLink to="/login/register/dashboard">
              <div className="p-3 px-4 flex gap-2 items-center font-bold justify-center hover:bg-blue-500 rounded-xl transition-all duration-300">
                <RxDashboard fontWeight={100} size={20} color="gray" />
                <button>Dashboard</button>
              </div>
            </NavLink>
            <NavLink to="/login/register/profile">
              <div className="p-3 px-4 flex gap-2 items-center font-bold justify-center  hover:bg-blue-500 rounded-xl transition-all duration-300">
                <CgProfile fontWeight={100} size={20} color="gray" />
                <button>My Profile</button>
              </div>
            </NavLink>
            <div className="p-3 px-4 flex gap-2 items-center font-bold justify-center  hover:bg-blue-500 rounded-xl transition-all duration-300">
              <AiOutlineHome fontWeight={100} size={20} color="gray" />
              <a href="">
                <button>Home</button>
              </a>
            </div>
            <div className="p-3 px-4 flex gap-2 items-center font-bold justify-center  hover:bg-blue-500 rounded-xl transition-all duration-300">
              <GoReport fontWeight={100} size={20} color="gray" />
              <button>About Us</button>
            </div>
            <NavLink to="/login/register/studymaterial">
              <div className="p-3 px-4 flex gap-2 items-center font-bold justify-center  hover:bg-blue-500 rounded-xl transition-all duration-300">
                <MdCastForEducation fontWeight={100} size={20} color="gray" />
                <button>Study Material</button>
              </div>
            </NavLink>
          </div>
          <div className="flex flex-col items-start">
            <div className="p-3 px-4 flex gap-2 items-center font-bold justify-center">
              <MdOutlineLiveHelp fontWeight={100} size={20} color="gray" />
              <button>Help</button>
            </div>
            <Link to="/login">
              <div className="pt-2 px-4 flex gap-2 items-center font-bold justify-center">
                <RiLogoutBoxLine fontWeight={100} size={20} color="gray" />
                <button onClick={clickHandler}>Log out</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[85%] flex flex-col h-max border bg-[#F6F8FF] absolute -z-0 right-0 rounded-l-[35px] shadow-2xl">
        <div className="p-6 w-full my-4 flex gap-56 items-center">
          <div className="flex items-center gap-2">
            <img src={img4} alt="" height={60} width={60} />
            <div className="flex flex-col items-start">
              <p className="font-bold text-xl tracking-wider">Hello {name}!</p>
              <p className="text-gray-400 text-sm">
                Do your best for this week
              </p>
            </div>
          </div>
          <div className="relative flex items-center gap-1 justify-center border-2 round m-2 px-4 rounded-3xl">
            <HiOutlineSearch color="gray" size={20} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="What do you want to study?"
              className="w-[350px] rounded-3xl border-none bg-transparent outline-transparent"
            />
          </div>
          <div className="flex justify-center gap-8 relative">
            {/* <div className="bg-red-600 rounded-full w-[10px] h-[10px] absolute top-0 right-16"></div> */}
            <BiMessageDots
              className="cursor-pointer"
              fontWeight={100}
              size={30}
            />
            <MdNotificationsActive
              fontWeight={100}
              size={30}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <h2 className="mb-6 flex px-8 text-2xl font-bold">My Task</h2>
            <div className="flex gap-4">
              <Tasks works={works} setWorks={setWorks} />
            </div>
          </div>
          <div className="flex flex-col mt-12">
            <h2 className="mb-6 flex px-8 text-2xl font-bold">
              Track Your Progress
            </h2>
            <div className="flex gap-48 items-center px-4">
              <Charts />
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
