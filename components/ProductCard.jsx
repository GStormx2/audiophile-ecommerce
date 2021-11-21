import Image from "next/image";
import React from "react";
import Button from "./Button";
import { makeUrl } from "../cloudinary_builder";

import img from "../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";

export const ProductCard = ({ children }) => {
  return (
    <div className="relative flex flex-col justify-center gap-8 md:gap-14 mt-16 mb-5 md:mt-32">
      {/* mobile */}
      <div className="relative block md:hidden w-full h-[352px] bg-[#f1f1f1]">
        <Image className="object-contain" src={makeUrl(children.categoryImage.mobile)} alt="xx59 headphone" layout="fill" />
      </div>
      {/* tablet */}
      <div className="relative hidden md:block lg:hidden h-[352px] bg-[#f1f1f1]">
        <Image className="object-contain" src={makeUrl(children.categoryImage.tablet)} alt="xx59 headphone" layout="fill"/>
      </div>
      {/* desktop */}
      <div className="relative hidden lg:block">
        <Image className="" src={makeUrl(children.categoryImage.desktop)} alt="xx59 headphone" layout="fill"/>
      </div>
      <div className="mx-auto text-center max-w-[572px]">
        <p
          className={
            "text-overline uppercase text-[#D87D4A] " +
            (children.new === false ? "hidden" : "block")
          }
        >
          new product
        </p>
        <p className="text-h4 md:text-h2 md:px-24 font-bold uppercase mt-5">{children.name}</p>
        <p className="mt-5 text-black opacity-70">{children.description}</p>
        <div className="mt-6">
          <Button link={`/${children.slug}`} type={"primary"}>
            see prodcut
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
