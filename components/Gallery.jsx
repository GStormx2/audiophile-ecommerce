import Image from 'next/image';
import React from 'react';
import { makeUrl } from '../cloudinary_builder';

const Gallery = ({children}) => {
  console.log(children.first.desktop);
  console.log(children.second.desktop);
  console.log(children.third.desktop);
  return (
    <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-5 mt-20 lg:mt-40 lg:h-[592px]">
      {/* First image */}
      <>
        {/* mobile */}
        <div className="relative block md:hidden pb-[55%]">
          <Image className="w-full h-full object-cover rounded-lg" src={makeUrl(children.first.mobile)} alt="first gallery image" layout="fill"/>
        </div>
        {/* tablet */}
        <div className="relative hidden md:block lg:hidden pb-[55%]">
          <Image className="object-cover rounded-lg" src={makeUrl(children.first.tablet)} alt="first gallery image" layout="fill"/>
        </div>
        {/* desktop */}
        <div className="relative hidden lg:block h-[280px]">
          <Image className="w-full h-full object-cover rounded-lg" src={makeUrl(children.first.desktop)} alt="first gallery image" layout="fill"/>
        </div>
      </>
      {/* Second image */}
      <>
        {/* mobile */}
        <div className="relative block md:hidden pb-[55%]">
          <Image className="w-full h-full object-cover rounded-lg" src={makeUrl(children.second.mobile)} alt="first gallery image" layout="fill"/>
        </div>
        {/* tablet */}
        <div className="order-3 relative hidden md:block lg:hidden ">
          <Image className="w-full h-full object-cover rounded-lg" src={makeUrl(children.second.tablet)} alt="first gallery image" layout="fill"/>
        </div>
        {/* desktop */}
        <div className="order-3 relative hidden lg:block h-[280px]">
          <Image className="w-full h-full object-cover rounded-lg" src={makeUrl(children.second.desktop)} alt="first gallery image" layout="fill"/>
        </div>
      </>
      {/* Third image */}
      <>
        {/* mobile */}
        <div className="row-span-2 relative block md:hidden pb-[55%]">
          <Image className="w-full h-full object-cover rounded-lg" src={makeUrl(children.third.mobile)} alt="first gallery image" layout="fill"/>
        </div>
        {/* tablet */}
        <div className="row-span-2 relative hidden md:block lg:hidden pb-[55%]">
          <Image className="object-center rounded-lg" src={makeUrl(children.third.tablet)} alt="first gallery image" layout="fill"/>
        </div>
        {/* desktop */}
        <div className="row-span-2 relative hidden lg:block h-[592px]">
          <Image className="w-full h-full object-cover rounded-lg" src={makeUrl(children.third.desktop)} alt="first gallery image" layout="fill"/>
        </div>
      </>

    </div>
  );
}
export default Gallery;
