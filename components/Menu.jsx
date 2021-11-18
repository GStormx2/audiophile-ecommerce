import React from "react";

const Menu = () => {
  return (
    <div className="md:flex md:gap-8 grid grid-cols-1 grid-rows-4 gap-4 text-center text-subtitle font-bold">
      <a href="/" className="block uppercase text-white hover:text-[#D87D4A]">
        home
      </a>
      <a href="/headphones" className="block uppercase text-white hover:text-[#D87D4A]">
        headphones
      </a>
      <a href="/speakers" className="block uppercase text-white hover:text-[#D87D4A]">
        speakers
      </a>
      <a href="/earphones" className="block uppercase text-white hover:text-[#D87D4A]">
        earphones
      </a>
    </div>
  );
};

export default Menu;
