import React from 'react';
import Button from './Button';

const FeaturedProduct = () => {
    
    return (
        <section className="flex justify-center items-center text-center bg-[#191919] h-[510px] px-4">
            <div>
                <p className="uppercase text-white">new product</p>
                <h1 className="text-white">xx99 mark II headphones</h1>
                <p className="text-white">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</p>
                <Button type={'ternary'}>shop</Button>
            </div>
        </section>
    );
}

export default FeaturedProduct;
