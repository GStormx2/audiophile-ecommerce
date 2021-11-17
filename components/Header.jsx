import Image from "next/image";
import React from "react";
import logoSVG from "../assets/shared/desktop/logo.svg";
import hamburgerSVG from "../assets/shared/desktop/icon-hamburger.svg";
import cartSVG from "../assets/shared/desktop/icon-cart.svg";

const Header = () => {
  return (
    <header className="absolute top-0 z-20 bg-[#191919] h-[90px] w-full border-b-[1px] border-gray-700">
      <div className="flex justify-between items-center h-full px-6 md:px-10">
        <div className="md:hidden block">
          <Image src={hamburgerSVG} alt="menu" />
        </div>
        <div className="md:hidden block">
          <Image className="md:hidden" src={logoSVG} alt="logo" />
        </div>
        <div className="md:flex md:justify-between md:items-center md:gap-10 hidden">
          <Image className="" src={hamburgerSVG} alt="menu" />
          <Image src={logoSVG} alt="logo" />  
        </div>
        <Image src={cartSVG} alt="cart" />
      </div>
    </header>
  );
};

export default Header;
