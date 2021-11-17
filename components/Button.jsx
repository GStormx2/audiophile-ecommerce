import React from 'react';

const Button = ({ type, children }) => {
  let myButton = '';
  if (type === 'primary') {
    return <button className="h-[48px] w-[160px] bg-[#D87D4A] text-subtitle font-bold text-white hover:bg-[#FBAF85] uppercase">{children}</button>
  }
  else if (type === 'secondary') {
    return <button className="h-[48px] w-[160px] bg-[#FFFFFF] text-[#191919] border-2 border-[#191919] text-subtitle font-bold hover:bg-[#191919] hover:text-white uppercase">{children}</button>

  }
  else if (type === 'ternary') {
   return (
    <div className="flex justify-between items-center w-[58px] h-[18px] text-subtitle text-white hover:text-[#D87D4A] hover:cursor-pointer uppercase">
      <div>{children}</div>
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
      </svg>
    </div>
    );
  }
}

export default Button;