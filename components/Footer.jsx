import Image from "next/image";
import React from "react";
import facebooksvg from "../assets/socials/facebook.svg";
import twittersvg from "../assets/socials/twitter.svg";
import instagramsvg from "../assets/socials/instagram.svg";
import logosvg from "../assets/logo/logo.svg";
import Menu from './Menu';

const Footer = () => {
  return (
    <footer className="md:px-9">
      <div className="relative lg:flex lg:justify-between lg:items-center">
        <div className="absolute right-0 -bottom-20 hidden lg:flex justify-center gap-5">
          <Image src={facebooksvg} alt="facebook"></Image>
          <Image src={twittersvg} alt="twitter"></Image>
          <Image src={instagramsvg} alt="instagram"></Image>
        </div>
        <div className="md:items-start md:gap-14 md:mb-9 flex flex-col justify-between items-center gap-11 mb-11">
          <div className="w-[101px] h-[4px] bg-[#D87D4A] "></div>
          <Image src={logosvg} alt="Logo"/>
        </div>
        <div className="hidden lg:block mt-5">
          <Menu />
        </div>
      </div>
      <div className="block lg:hidden">
        <Menu />
      </div>
      <div className="px-5 lg:px-0 md:px-0 md:mb-20 lg:mb-11 mb-11 mt-11 lg:mt-0 grid grid-cols-1 text-white">
        <p className="md:text-left lg:w-[570px] text-center text-body text-white opacity-50">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>
      <div className="md:flex-row md:gap-0 md:justify-between flex flex-col text-center gap-5 pb-10">
        <p className="lg:mb-6 md:mb-0 mb-6 font-bold text-body text-white opacity-50">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="lg:hidden flex justify-center gap-5">
          <Image src={facebooksvg} alt="facebook"></Image>
          <Image src={twittersvg} alt="twitter"></Image>
          <Image src={instagramsvg} alt="instagram"></Image>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
