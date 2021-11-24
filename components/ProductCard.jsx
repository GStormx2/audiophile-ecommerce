// component that shows each item in categories
// for example headphone list and description in /headphones

import Image from "next/image";
import React from "react";
import Button from "./Button";
import { makeUrl } from "../cloudinary_builder";

export const ProductCard = ({ type, order, children }) => {
  return (
    <div className="relative lg:grid lg:grid-cols-2 lg:grid-rows-1 flex flex-col justify-center lg:items-center gap-8 md:gap-14 lg:gap-24 mt-16 mb-5 md:mt-32 lg:mt-40">
      {/* mobile */}
      <div className="relative block md:hidden w-full h-[352px] bg-[#f1f1f1] rounded-lg">
        <Image
          className="object-contain"
          src={makeUrl(children.categoryImage.mobile)}
          alt={children.name}
          layout="fill"
        />
      </div>
      {/* tablet */}
      <div className="relative hidden md:block lg:hidden h-[352px] bg-[#f1f1f1] rounded-lg">
        <Image
          className="object-contain "
          src={makeUrl(children.categoryImage.tablet)}
          alt={children.name}
          layout="fill"
        />
      </div>
      {/* desktop */}
      <div className="relative hidden lg:block lg:h-[560px] lg:w-[540] rounded-lg">
        <Image
          className="object-contain"
          src={makeUrl(children.categoryImage.desktop)}
          alt={children.name}
          layout="fill"
        />
      </div>
      {/* text block */}
      <div
        className={
          "mx-auto text-center max-w-[572px] lg:w-[447px] lg:mx-0 lg:text-left " +
          (order === "first" ? "lg:order-first" : "lg:order-none")
        }
      >
        <p
          className={
            "text-overline uppercase text-[#D87D4A] " +
            (children.new === false ? "hidden" : "block")
          }
        >
          NEW PRODUCT
        </p>
        <p className="text-h4 md:text-h2 md:px-24 lg:px-0 font-bold uppercase mt-5">
          {children.name}
        </p>
        <p className="mt-5 text-black opacity-70">{children.description}</p>
        <div className="mt-6 lg:mt-12">
          <Button link={`/${type}/${children.slug}`} type={"primary"}>
            see prodcut
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
