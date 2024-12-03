import React from "react";
import Task from "./Task";
const Tasks = ({ works }) => {
  console.log(works);
  return (
    <div className="flex overflow-y-auto scroll-smooth no-scrollbar">
      {works.map((work) => {
        return <Task key={work.id} {...work}></Task>;
      })}
    </div>
  );
};

export default Tasks;
