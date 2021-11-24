import React from "react";
import Image from "next/image";
import imageBestGearSM from "../assets/shared/mobile/image-best-gear.jpg";
import imageBestGearMD from "../assets/shared/tablet/image-best-gear.jpg";
import imageBestGearLG from "../assets/shared/desktop/image-best-gear.jpg";

const About = () => {
  return (
    <section className="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:items-center flex flex-col gap-7 my-32 lg:my-52 justify-center">
      {/* for LG */}
      <div className="hidden lg:block h-[588px] order-2">
        <Image src={imageBestGearLG} className="rounded-lg w-full"></Image>
      </div>
      {/* for SM */}
      <div className="md:hidden lg:hidden block">
        <Image src={imageBestGearSM} className="rounded-lg w-full"></Image>
      </div>
      {/* for MD */}
      <div className="hidden md:block lg:hidden">
        <Image src={imageBestGearMD} className="rounded-lg w-full"></Image>
      </div>
      {/* text block */}
      <div className="text-center lg:order-1 md:w-[573px] mx-auto lg:w-[445px] lg:text-left">
        <p className="mb-7 text-h4 md:text-h2 font-bold uppercase">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </p>

        <p className="text-body opacity-70">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default About;
