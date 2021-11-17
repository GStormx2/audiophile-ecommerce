import Image from "next/image";
import React from "react";
import headphonePNG from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerPNG from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonePNG from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Button from "./Button";

// headphone - 1.04 : 1
// speaker - 1.07 : 1
// earphone - 1.15 : 1

const Categories = () => {
  return (
    <section className="md:flex-row md:px-8 md:gap-5 flex flex-col justify-center items-center gap-16 mt-24">
      <div className="relative flex items-end justify-center bg-[#F2F2F2] w-[327px] h-[165px] rounded-lg">
        <div className="absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={headphonePNG}
            width={146}
            height={140}
            alt="headphone shop now"
            layout="fixed"
          />
        </div>
        <div className="flex flex-col justify-between gap-2.5 items-center mb-5">
          <p className="text-body font-bold tracking-[1.07px] uppercase">
            headphones
          </p>
          <Button type={"ternary"}>shop</Button>
        </div>
      </div>
      <div className="relative flex items-end justify-center bg-[#F2F2F2] w-[327px] h-[165px] rounded-lg">
        <div className="absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            className="absolute z-10"
            src={speakerPNG}
            width={150}
            height={140}
            alt="speakers shop now"
            layout="fixed"
          />
        </div>
        <div className="flex flex-col justify-between gap-2.5 items-center mb-5">
          <p className="text-body font-bold tracking-[1.07px] uppercase">
            speakers
          </p>
          <Button type={"ternary"}>shop</Button>
        </div>
      </div>
      <div className="relative flex items-end justify-center bg-[#F2F2F2] w-[327px] h-[165px] rounded-lg">
        <div className="absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            className="absolute z-10"
            src={earphonePNG}
            width={161}
            height={140}
            alt="earphones show now"
            layout="fixed"
          />
        </div>
        <div className="flex flex-col justify-between gap-2.5 items-center mb-5">
          <p className="text-body font-bold tracking-[1.07px] uppercase">
            earphones
          </p>
          <Button type={"ternary"}>shop</Button>
        </div>
      </div>
    </section>
  );
};
export default Categories;
