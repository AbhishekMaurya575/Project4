import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarSer from "./NavbarSer";
import NavbarCom from "./NavbarCom";
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="bg-black/40 w-full text-white h-[70px] lg:h-[10vh] flex justify-around items-center">
      <div>
        <FaBars className="h-[35px] w-[32px] sm:hidden"/>
      </div>
   <NavbarLogo/>
   <NavbarSer className="hidden md:flex"/>
   <NavbarCom className="hidden md:flex"/>

    </nav>
  );
};

export default Navbar;
