import Image from "next/image";
import React from "react";
import facebooksvg from "../assets/socials/facebook.svg";
import twittersvg from "../assets/socials/twitter.svg";
import instagramsvg from "../assets/socials/instagram.svg";
import logosvg from "../assets/logo/logo.svg"
const Footer = () => {
  return (
    <footer className="md:px-12 bg-[#191919]">
      <div className="md:place-items-start flex flex-col justify-between items-center h-[60px] mb-7">
        <div className="w-[101px] h-[4px] bg-[#D87D4A]"></div>
        <Image src={logosvg} alt="Logo"/>
      </div>
      <div className="md:flex md:gap-5 grid grid-cols-1 grid-rows-4 gap-2 text-center text-subtitle font-bold mb-7">
        <a href="" className="block uppercase text-white">
          home
        </a>
        <a href="" className="block uppercase text-white">
          headphones
        </a>
        <a href="" className="block uppercase text-white">
          earphones
        </a>
        <a href="" className="block uppercase text-white">
          speakers
        </a>
      </div>
      <div className="md:px-0 grid grid-cols-1 text-white mb-7 px-5">
        <p className="md:text-left text-center text-gray-400">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>
      <div className="md:flex-row md:gap-0 md:justify-between flex flex-col text-center gap-5 pb-7">
        <p className="font-bold text-gray-300">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="flex justify-center gap-5">
          <Image src={facebooksvg} alt="facebook"></Image>
          <Image src={twittersvg} alt="twitter"></Image>
          <Image src={instagramsvg} alt="instagram"></Image>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
