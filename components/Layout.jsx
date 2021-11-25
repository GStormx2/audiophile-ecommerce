import React from 'react';
import Header from './Header';
import Footer from './Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="relative lg:block w-screen max-w-full bg-[#191919] lg:h-[98px] h-[90px] overflow-hidden">
        
      </div>
      <main>{children}</main>
      <div className="relative lg:grid lg:justify-center lg:items-center bg-[#191919] overflow-x-hidden">
        <div className="w-screen max-w-[1200px]">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}