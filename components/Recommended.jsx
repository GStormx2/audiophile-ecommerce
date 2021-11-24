import Image from 'next/image';
import React from 'react';
import { makeUrl } from '../cloudinary_builder';
import Button from './Button';

const Recommended = ({ type, children }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-5 mt-10 md:mt-0 lg:gap-10">
      {/* mobile */}
      <div className="relative md:hidden bg-[#f1f1f1] pb-[38%] rounded-lg overflow-hidden">
        <Image className="object-cover" src={makeUrl(children.image.mobile)} alt="recommended 1" layout="fill"/>
      </div>
      {/* tablet */}
      <div className="relative hidden md:block lg:hidden h-[318px] bg-[#f1f1f1] rounded-lg overflow-hidden">
        <Image className="object-cover" src={makeUrl(children.image.tablet)} alt="recommended 1" layout="fill"/>
      </div>
      {/* desktop */}
      <div className="relative hidden lg:block h-[318px] bg-[#f1f1f1] rounded-lg overflow-hidden">
        <Image className="object-cover" src={makeUrl(children.image.desktop)} alt="recommended 1" layout="fill"/>
      </div>
      <div>
        <p className="text-features-mobile font-bold mb-5 lg:mb-8">{children.name}</p>
        <Button link={`/${type}/${children.slug}`} type="primary">SEE PRODUCT</Button>
      </div>
    </div>
  );
}

export default Recommended;
