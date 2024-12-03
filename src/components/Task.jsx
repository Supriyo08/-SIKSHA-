import React from "react";
import { GoProjectRoadmap } from "react-icons/go";
import ProgressBar from "@ramonak/react-progress-bar";
import img5 from "../assets/img5.png";

const Task = ({ id, task, logo, members, completed, folders }) => {
  return (
    <div className="px-4 my-5 transition-all duration-300">
      <div className="w-80 h-64 flex flex-col bg-gradient-to-tr from-amber-200 via-amber-200 to-red-400 shadow-md rounded-3xl hover:cursor-pointer relative hover:scale-105 transition-all duration-500">
        <div className="flex px-4 py-4 gap-2">
          <GoProjectRoadmap size={30} />
          <h2 className="font-bold text-xl">{task}</h2>
        </div>

        <div className="flex text-lg px-5 py-12 font-semibold">
          <p>{folders} folders</p>
        </div>
        <div className="absolute -right-5 top-20 opacity-70">
          <img src={img5} alt="" height={10} width={200} />
        </div>
        <div className="px-4 flex flex-col gap-1">
          <p className="flex px-2 font-semibold">Task Completed</p>
          <ProgressBar
            completed={completed}
            width={280}
            animateOnRender={true}
            customLabel={completed + "%"}
            bgColor="green"
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
