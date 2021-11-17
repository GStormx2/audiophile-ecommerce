import React from 'react';
import Button from './Button';
import Image from 'next/image';
import headerImage from '../assets/home/mobile/image-header.jpg';

const FeaturedProduct = () => {
    
    return (
        <section className="relative flex justify-center items-center text-center">
            <Image src={headerImage} alt="Headphone" />
            <div className="absolute z-10">
                <p className="uppercase text-overline text-gray-600">new product</p>
                <h1 className="text-white text-[36px] leading-[] font-bold uppercase">xx99 mark II headphones</h1>
                <p className="text-white text-body text-md">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</p>
                <Button type={'ternary'}>shop</Button>
            </div>
        </section>
    );
}

export default FeaturedProduct;
