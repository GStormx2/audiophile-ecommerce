import { useState } from 'react';
import Image from 'next/image';
import cartSVG from "../assets/shared/desktop/icon-cart.svg";

const CartBox = () => {
    const [isShown, setIsShown] = useState(false);
    function cartClick() {
        
    }

    return (
        <>
            <Image onClick={cartClick} className="hover:cursor-pointer" src={cartSVG} alt="cart" />
            <div className={`"absolute w-full h-screen bg-gray-200 opacity-25 " + ${isShown? "block" : "hidden"}`}>
            </div>
        </>
    );
}

export default CartBox;