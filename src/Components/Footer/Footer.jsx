import React from "react";
import NavbarCom from "../Navbar/NavbarCom";
import NavbarLogo from "../Navbar/NavbarLogo";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-[20px] h-[240px] w-full">
      <NavbarLogo />
      <NavbarCom className="   md:float-right " />
      <div className="flex justify-center items-center gap-2 mt-10">
        <div className="h-0 w-full border-t-2 border-gray-500"></div>

        <img
          src="src\assets\images.jpeg"
          className="w-[40px] h-[40px] bg-white rounded-full"
        />
        <img
          src="src\assets\github image.png"
          className="w-[40px] h-[40px] bg-white rounded-full"
        />

        <div className="h-0 w-full border-t-2 border-gray-500"></div>
      </div>
      <div>
        <ul className="items-center justify-self-center flex text-sm gap-4 mt-4">
          <li>Conditions of Use </li>
          <li>Privacy Notice</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
