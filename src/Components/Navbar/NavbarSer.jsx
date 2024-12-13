import React from "react";
import { FaSearch,FaMicrophone } from "react-icons/fa";


const NavbarSer = ({ className }) => {
  return (
    <div className={` w-[50%]  md:w-[40%] lg:w-[50%] justify-center items-center flex ${className}`}>
      <div className="flex bg-white justify-around items-center p-2 rounded-full w-[80%]">
        <FaSearch className="h-[20px] m-1 text-black" />
        <input
          type="text"
          placeholder="Search here"
          className="text-black  outline-none w-full text-base border-e-2 "
        />
        <FaMicrophone className="h-[20px] m-1 text-blue-400" />
      </div>
    </div>
  );
};

export default NavbarSer;
