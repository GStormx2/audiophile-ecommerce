import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrowSVG from "../assets/shared/desktop/icon-arrow-right.svg";

const Button = ({ link, type, children }) => {
  switch (type) {
    case "primary":
      return (
        <button className="h-[48px] w-[160px] bg-[#D87D4A] text-subtitle font-bold text-white hover:bg-[#FBAF85] uppercase">
          <Link href={!link === true ? "/" : link}>
            <a>{children}</a>
          </Link>
        </button>
      );
    case "secondary-1":
      return (
        <button className="h-[48px] w-[160px] text-[#191919] border-2 border-[#191919] text-subtitle font-bold hover:bg-[#191919] hover:text-white uppercase">
          <Link href={!link === true ? "/" : link}>
            <a>{children}</a>
          </Link>
        </button>
      );
    case "secondary-2":
      return (
        <button className="h-[48px] w-[160px] bg-[#191919] text-white border-2 border-[#191919] text-subtitle font-bold hover:bg-[#ffffff] hover:text-[#191919] uppercase">
          <Link href={!link === true ? "/" : link}>
            <a>{children}</a>
          </Link>
        </button>
      );
    case "ternary":
      return (
        <div className="flex justify-between items-center w-[58px] h-[18px] font-bold text-subtitle text-black opacity-50 hover:text-[#D87D4A] hover:cursor-pointer uppercase">
          <Link href={!link === true ? "/" : link}>
            <a>{children}</a>
          </Link>
          <Image src={arrowSVG} alt="arrow" />
        </div>
      );
  }
};

export default Button;
