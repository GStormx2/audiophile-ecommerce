// contains the image, title, description and price 
// also includes counter component and button

import React from 'react';
import Image from 'next/image';
import { makeUrl } from '../cloudinary_builder';
import Counter from './Counter';
import Button from './Button';

const ProductDescription = ({ children }) => {
  const formatPrice = (price) => {
    let numStr = String(price);
    let newStr = "";
    for (let i=numStr.length - 1; i >= 0; i--) {
      if ( (i + 1) !== numStr.length && (i + 1) % 3 === 0 ) {
        newStr = newStr + "," + numStr[numStr.length - 1 - i];
      }
      else {
        newStr = newStr + numStr[numStr.length - 1 - i];
      } 
    }
    return newStr;
  }

  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:items-center gap-5 md:gap-16 lg:gap-32">
      {/* Image divs for different screen sizes */}
      {/* mobile */}
      <div className="relative block md:hidden h-[327px] bg-[#f1f1f1] overflow-hidden rounded-lg">
        <Image className="object-contain " src={makeUrl(children.image.mobile)} alt={children.name} layout="fill"/>
      </div>
      {/* tablet */}
      <div className="relative hidden md:h-[480px] md:block lg:hidden bg-[#f1f1f1] rounded-lg overflow-hidden">
        <Image className="object-contain " src={makeUrl(children.image.tablet)} alt={children.name} layout="fill"/>
      </div>
      {/* desktop */}
      <div className="relative hidden lg:block lg:h-[560px] rounded-lg overflow-hidden">
        <Image className="object-contain " src={makeUrl(children.image.desktop)} alt={children.name} layout="fill"/>
      </div>
      {/* container for other stuff */}
      <div className="lg:w-[446px]">
        {/* NEW PRODUCT wording */}
        <p
          className={
            "text-overline uppercase text-[#D87D4A] " +
            (children.new === false ? "hidden" : "block")
          }
        >
          NEW PRODUCT
        </p>
        {/* name of the item */}
        <h1 className="text-h4 md:text-h2 font-bold uppercase mt-5 pr-16">{children.name}</h1>
        {/* description of the item */}
        <p className="mt-5 lg:mt-10 text-body text-black opacity-70">{children.description}</p>
        {/* price of the item */}
        <p className="text-h6 font-bold my-7 lg:my-10">{"$ " + formatPrice(children.price)}</p>
        {/* container for counter and ADD TO CART button */}
        <div className="flex gap-5 w-full">
          <Counter />
          <Button type={"primary"}>add to cart</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;