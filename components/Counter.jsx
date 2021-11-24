import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div className="flex items-center justify-between h-[48px] w-[120px] bg-[#F1F1F1]">
      <button className="h-[48px] w-[48px] text-subtitle opacity-50">-</button>
      <p className="text-subtitle font-bold">{counter}</p>
      <button className="h-[48px] w-[48px] text-subtitle opacity-50">+</button>
    </div>
  );
};

export default Counter;
