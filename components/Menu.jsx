import Link from 'next/link';
import router, { useRouter } from 'next/router';
import React from "react";

const Menu = () => {
  function handleClick(e) {
    e.preventDefault();
    router.push("/")
  }
  return (
    <div className="md:flex md:gap-8 grid grid-cols-1 grid-rows-4 gap-4 text-center text-subtitle font-bold">
      <a href="#" onClick={handleClick} className="block uppercase text-white hover:text-[#D87D4A]">
        home
      </a>
      <Link href="/headphones" >
        <a className="block uppercase text-white hover:text-[#D87D4A]">
          headphones
        </a>
      </Link>
      <Link href="/speakers">
        <a className="block uppercase text-white hover:text-[#D87D4A]">
          speakers
        </a>
      </Link>
      <Link href="/earphones">
        <a className="block uppercase text-white hover:text-[#D87D4A]">
          earphones
        </a>
      </Link>
    </div>
  );
};

export default Menu;
