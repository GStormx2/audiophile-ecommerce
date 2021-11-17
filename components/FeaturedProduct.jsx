import React from 'react';
import Button from './Button';
import Image from 'next/image';
import headerImage from '../assets/home/mobile/image-header.jpg';

const FeaturedProduct = () => {
    
    return (
        <section className="relative flex justify-center items-center">
            <Image src={headerImage} alt="Headphone" />
            <div className="absolute z-10 top-52 text-center">
              <div className="px-6">
                <p className="uppercase text-overline text-gray-500 mb-3 ">new product</p>
                <h1 className="text-white text-[36px] leading-[40px] tracking-[1.29px] font-bold uppercase mb-4">xx99 mark II headphones</h1>
                <p className="text-body text-gray-400 mb-5">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</p>
                <Button type={'primary'}>see product</Button>
              </div>
            </div>
        </section>
    );
}

export default FeaturedProduct;
