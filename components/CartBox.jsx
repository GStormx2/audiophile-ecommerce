import { useState } from 'react';
import Image from 'next/image';
import cartSVG from "../assets/shared/desktop/icon-cart.svg";

const CartBox = () => {
    

    return (
        <>
            <div className={`"absolute z-10 w-full h-screen bg-gray-200 opacity-25 " + ${isShown? "block" : "hidden"}`}>
            
            </div>
        </>
    );
}

export default CartBox;