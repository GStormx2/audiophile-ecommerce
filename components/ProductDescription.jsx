// contains the image, title, description as well as features of an item
// also includes counter component and button

import React from 'react';
import Image from 'next/image';
import { makeUrl } from '../cloudinary_builder';
import Counter from './Counter';
import Button from './Button';

const ProductDescription = ({ children }) => {
  return (
    <div>
        {/* mobile */}
        <div className="relative block md:hidden w-full h-[352px] bg-[#f1f1f1]">
          <Image src={makeUrl(children.image.mobile)} alt={children.name}/>
        </div>
        {/* tablet */}
        <div className="relative hidden md:block lg:hidden h-[352px] bg-[#f1f1f1]">
          <Image src={makeUrl(children.image.tablet)} alt={children.name}/>
        </div>
        {/* desktop */}
        <div className="relative hidden lg:block">
          <Image src={makeUrl(children.image.desktop)} alt={children.name}/>
        </div>
        <p
          className={
            "text-overline uppercase text-[#D87D4A] " +
            (children.new === false ? "hidden" : "block")
          }
        >
          new product
        </p>
        <p className="text-h4 md:text-h2 font-bold uppercase mt-5">{children.name}</p>
        <p className="mt-5 text-black opacity-70">{children.description}</p>
        <p>{"$ " + children.price}</p>
        <div className="flex gap-5">
          <Counter />
          <Button type={"primary"}>add to cart</Button>
        </div>
        <p></p>
    </div>
  );
}

export default ProductDescription;