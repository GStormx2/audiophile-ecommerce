import Image from "next/image";
import React from "react";
import logoSVG from "../assets/shared/desktop/logo.svg";
import hamburgerSVG from "../assets/shared/desktop/icon-hamburger.svg";
import cartSVG from "../assets/shared/desktop/icon-cart.svg";
import Menu from './Menu';

const Header = () => {
  return (
    <header className="absolute left-1/2 top-12 transform -translate-x-1/2 -translate-y-1/2 z-20 h-[90px] w-full max-w-[1200px] lg:h-[100px] lg:px-10">
      <div className="flex justify-between items-center h-full px-6 md:px-10 lg:px-0">
        {/* hamburger icon */}
        <div className="md:hidden block">
          <Image src={hamburgerSVG} alt="menu" />
        </div>
        {/* audiophile logo */}
        <div className="md:hidden block lg:hidden">
          <Image src={logoSVG} alt="logo" />
        </div>
        {/* menus in large screen */}
        <div className="hidden lg:flex jusitify-between items-center gap-48">
          <Image src={logoSVG} alt="logo" />
          <Menu />
        </div>
        {/* container for hamburger, logo in small to medium screen */}
        <div className="md:flex md:justify-between md:items-center md:gap-10 hidden lg:hidden">
          <Image className="" src={hamburgerSVG} alt="menu" />
          <Image src={logoSVG} alt="logo" />
        </div>
        {/* cart logo */}
        <Image src={cartSVG} alt="cart" />
      </div>
      <div className="bg-[#f1f1f1] w-full max-w-[1200px] h-[1px] opacity-50"></div>
    </header>
  );
};

export default Header;
