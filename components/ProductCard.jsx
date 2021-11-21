import Image from "next/image";
import React from "react";
import Button from './Button';

import img from "../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";

export const ProductCard = ({ children }) => {
  return (
    <div className="flex flex-col justify-center gap-5 mt-16">
      {/* image div */}
      <div>
        <Image className="rounded-lg" src={img} alt="xx59 headphone" />
      </div>
      <div className="text-center">
        <p className="text-overline uppercase text-[#D87D4A]">new product</p>
        <p className="text-h4 font-bold uppercase mt-5">xx99 mark II headphones</p>
        <p className="mt-5 text-black opacity-70">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <div className="mt-6">
          <Button type={"primary"}>see prodcut</Button>
        </div>
      </div>
    </div>
  );
};
