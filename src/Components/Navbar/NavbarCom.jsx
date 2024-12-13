import React from "react";
import { NavLink } from "react-router-dom";

const NavbarCom = ({className}) => {
  return (
    <div className={`bg-none w-[25%] md:w-[35%] lg:w-[25%] justify-around text-xl items-center flex gap-4 ${className}`}>
     <NavLink
  to=""
  className={({ isActive }) =>
    isActive ? " font-bold" : ""
  }
>
  <button>Home</button>
</NavLink>

     <NavLink to="About"     className={({ isActive }) =>
    isActive ? " font-bold" : ""
          }> <button className="">About</button></NavLink>
      <NavLink to="Shop"     className={({ isActive }) =>
    isActive ? " font-bold" : ""
          }>  <button className="">Shop</button></NavLink>
     <NavLink to="Contact"    className={({ isActive }) =>
    isActive ? "font-bold" : ""
          }>   <button className="">Contact</button></NavLink>
    </div>
  );
};

export default NavbarCom;
