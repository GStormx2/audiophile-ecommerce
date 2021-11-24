import React from 'react';

const InTheBox = ({ children }) => {
  return (
    <div className="flex flex-col md:grid md:grid-rows-1 md:grid-cols-2 lg:flex lg:gap-5 gap-5 md:gap-20">
      <h2 className="text-features-mobile md:text-h3 font-bold uppercase">In The Box</h2>
      <div>
        {children.map((val, index) => {
          
          return (
            <div key={index} className="flex gap-5 mt-2.5">
              <p className="text-body font-bold text-[#D87D4A]">{`${val.quantity}x`}</p>
              <p className="text-body font-medium opacity-70">{val.item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InTheBox;