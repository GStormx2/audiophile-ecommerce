import Image from "next/image";
import React from "react";
import headphonePNG from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerPNG from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonePNG from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Button from "./Button";

// headphone - 1.04 : 1
// speaker - 1.07 : 1
// earphone - 1.15 : 1 w-[327px] h-[165px] lg:w-[350] lg:h-[204px]

const Categories = () => {
  return (
    <section className="md:gap-3 lg:gap-8 grid grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1 justify-center items-center gap-16">
      <div className="relative flex items-end justify-center bg-[#F2F2F2] h-[165px] lg:h-[204px] rounded-lg">
        {/**headphone small */}
        <div className="block lg:hidden absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={headphonePNG}
            width={146}
            height={140}
            alt="headphone shop now"
            layout="fixed"
          />
        </div>
        {/**headphone large */}
        <div className="hidden lg:block absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={headphonePNG}
            width={188}
            height={180}
            alt="headphone shop now"
            layout="fixed"
          />
        </div>
        <div className="flex flex-col justify-between gap-2.5 lg:gap-5 items-center mb-5 lg:mb-10">
          <p className="lg:text-h6 text-body font-bold tracking-[1.07px] uppercase">
            headphones
          </p>
          <Button link={"/headphones"} type={"ternary"}>shop</Button>
        </div>
      </div>
      <div className="relative flex items-end justify-center bg-[#F2F2F2] h-[165px] lg:h-[204px] rounded-lg">
        {/** speaker small */}
        <div className="lg:hidden block absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            className="absolute z-10"
            src={speakerPNG}
            width={150}
            height={140}
            alt="speakers shop now"
            layout="fixed"
          />
        </div>
        {/** speaker large */}
        <div className="hidden lg:block absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            className="absolute z-10"
            src={speakerPNG}
            width={193}
            height={180}
            alt="speakers shop now"
            layout="fixed"
          />
        </div>
        <div className="flex flex-col justify-between gap-2.5 lg:gap-5 items-center mb-5 lg:mb-10">
          <p className="lg:text-h6 text-body font-bold tracking-[1.07px] uppercase">
            speakers
          </p>
          <Button link={"/speakers"} type={"ternary"}>shop</Button>
        </div>
      </div>
      <div className="relative flex items-end justify-center bg-[#F2F2F2] h-[165px] lg:h-[204px] rounded-lg">
        {/** earphone small */}
        <div className="block lg:hidden absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            className="absolute z-10"
            src={earphonePNG}
            width={161}
            height={140}
            alt="earphones show now"
            layout="fixed"
          />
        </div>
        {/** earphone large */}
        <div className="hidden lg:block absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            className="absolute z-10"
            src={earphonePNG}
            width={218.5}
            height={190}
            alt="earphones show now"
            layout="fixed"
          />
        </div>
        <div className="flex flex-col justify-between gap-2.5 lg:gap-5 items-center mb-5 lg:mb-10">
          <p className="lg:text-h6 text-body font-bold tracking-[1.07px] uppercase">
            earphones
          </p>
          <Button link={"/earphones"} type={"ternary"}>shop</Button>
        </div>
      </div>
    </section>
  );
};
export default Categories;
