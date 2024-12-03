import React, { useState, useEffect } from "react";
import bookdata from "../bookdata";
import img1 from "../assets/img1.png";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { GoReport } from "react-icons/go";
import { MdOutlineLiveHelp } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
const Book = ({ book }) => (
  <div className="flex py-4 px-2 border border-black rounded-2xl shadow-md hover:bg-[#0D77EC] cursor-pointer transition-all duration-300">
    <div className="flex flex-col w-[250px] h-max gap-2">
      <div className="flex w-[250px] h-[250px]">
        <img
          src={book.image_url}
          alt={`${book.title} Book Cover`}
          className="border rounded-xl"
        />
      </div>
      <h2 className="flex px-2 py1 font-semibold text-xl">{book.title}</h2>
      <p className="flex px-2 text-lg font-medium">{book.class}</p>
      <a href={book.download_link} download>
        <div className="flex px-2 gap-2 items-center ">
          <BsDownload size={30} color="green" />
          Download
        </div>
      </a>
    </div>
  </div>
);

const BookList = ({ books }) => (
  <div className="w-full flex flex-wrap justify-center gap-8 p-6">
    {books.map((book, index) => (
      <Book key={index} book={book} />
    ))}
  </div>
);

function StudyMaterial() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call or data loading process
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when data is loaded
    }, 2000); // Simulate a 2-second loading time
  }, []);

  function clickHandler() {
    toast.success("Logged Out Successfully");
  }
  const [classFilter, setClassFilter] = useState("All");
  const [subjectFilter, setSubjectFilter] = useState("All");

  const filteredBooks = bookdata.filter((book) => {
    // Check if the book matches the selected class and subject filters.
    return (
      (classFilter === "All" || book.class === classFilter) &&
      (subjectFilter === "All" || book.subject === subjectFilter)
    );
  });

  const classOptions = [
    "All",
    "Firstyear",
    "Firstyear",
    "Firstyear",
    "Firstyear",
    
    // "Class 1",
    // "Class 2",
    // "Class 3",
    // "Class 4",
    // "Class 5",
    // "Class 6",
    // "Class 7",
    // "Class 8",
    // "Class 9",
    // "Class 10",
  ];
  const subjectOptions = [
    "All",
    "Mathematics",
    "English",
    "Science",
    "Hindi" /* Add more subject options */,
  ];

  return (
    <div className="h-full w-full flex relative">
      <div className="w-[15%] flex flex-col items-center">
        <img src={img1} alt="" height={150} width={150} />
        <div className="flex flex-col gap-[580px]">
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
      <div className="w-[85%] flex flex-col max-h-max border bg-[#F6F8FF] absolute -z-0 right-0 rounded-l-[35px] shadow-2xl">
        <div className="flex flex-col gap-6">
          <h1 className="flex p-8 font-bold text-3xl">Study Material</h1>
          <div className="flex gap-4 justify-center">
            <label className="flex gap-2 items-center">
              Filter by Class:
              <select
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
              >
                {classOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex gap-2 items-center">
              Filter by Subject:
              <select
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
              >
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {isLoading ? (
            <div className="w-full h-[600px] flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            // Display the spinner while loading
            <BookList books={filteredBooks} />
          )}
        </div>
      </div>
    </div>
  );
}

export default StudyMaterial;
