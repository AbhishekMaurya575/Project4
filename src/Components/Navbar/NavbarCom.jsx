import React from "react";

const NavbarCom = ({className}) => {
  return (
    <div className={`bg-none w-[25%] md:w-[35%] lg:w-[25%] justify-around text-xl items-center flex gap-4 ${className}`}>
      <button className="">Home</button>
      <button className="">About</button>
      <button className="">Shop</button>
      <button className="">Contact</button>
    </div>
  );
};

export default NavbarCom;
