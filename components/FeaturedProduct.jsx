import React from "react";
import Button from "./Button";
import Image from "next/image";
import headerImageSM from "../assets/home/mobile/image-header.jpg";
import headerImageMD from "../assets/home/tablet/image-header.jpg";

const FeaturedProduct = () => {
  return (
    <section className="relative flex justify-center items-center bg-[#191919]">
      <div className="relative md:hidden">
        <Image src={headerImageSM} alt="Headphone"></Image>
      </div>
      <div className="hidden md:block">
        <Image src={headerImageMD} alt="Headphone" />
      </div>
      <div className="absolute z-20 left-1/2 md:top-[52%] top-[57%] transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div>
          <p className="text-overline text-white opacity-[49.64%] mb-4 uppercase">
            new product
          </p>
          <h1 className="md:text-h1 text-white text-[36px] leading-[40px] tracking-[1.29px] font-bold uppercase mb-7">
            xx99 mark II headphones
          </h1>
          <p className="md:mx-4 text-body text-white opacity-75 mb-7">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </p>
          <Button type={"primary"}>see product</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
