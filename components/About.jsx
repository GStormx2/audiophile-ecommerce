import React from "react";
import Image from "next/image";
import imageBestGear from "../assets/shared/mobile/image-best-gear.jpg";

const About = () => {
  return (
    <section className="grid grid-col-1 grid-rows-2 my-32 items-center justify-center">
      <div className="rounded-lg overflow-hidden">
        <Image src={imageBestGear}></Image>
      </div>
      <div className="">
        <div className="">
          <p className="text-h4 font-bold uppercase text-center">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio
            gear
          </p>
        </div>
        <div>
          <p className="text-body text text-center opacity-50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
