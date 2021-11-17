import Image from "next/image";
import React from "react";
import arrowSVG from "../assets/shared/desktop/icon-arrow-right.svg";

const Button = ({ type, children }) => {
  let myButton = "";
  if (type === "primary") {
    return (
      <button className="h-[48px] w-[160px] bg-[#D87D4A] text-subtitle font-bold text-white hover:bg-[#FBAF85] uppercase">
        {children}
      </button>
    );
  } else if (type === "secondary-1") {
    return (
      <button className="h-[48px] w-[160px] bg-[#FFFFFF] text-[#191919] border-2 border-[#191919] text-subtitle font-bold hover:bg-[#191919] hover:text-white uppercase">
        {children}
      </button>
    );
  } else if (type === "secondary-2") {
    return (
      <button className="h-[48px] w-[160px] bg-[#191919] text-white border-2 border-[#191919] text-subtitle font-bold hover:bg-white hover:text-[#191919] uppercase">
        {children}
      </button>
    );
  } else if (type === "ternary") {
    return (
      <div className="flex justify-between items-center w-[58px] h-[18px] font-bold text-subtitle text-black opacity-50 hover:text-[#D87D4A] hover:cursor-pointer uppercase">
        <div>{children}</div>
        <Image src={arrowSVG} alt="arrow" />
      </div>
    );
  }
};

export default Button;
