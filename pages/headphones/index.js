import Head from "next/head";
import FeaturedProduct from "../../components/FeaturedProduct";
import Categories from "../../components/Categories";
import Showcase from "../../components/Showcase";
import About from "../../components/About";
import { ProductCard } from "../../components/ProductCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Headphones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* main children container */}
      <main className="relative lg:flex lg:justify-center lg:items-center overflow-x-hidden">
        <div className="absolute top-0 lg:block lg:w-screen bg-[#191919] h-[740px]"></div>
        <div className="relative max-w-[1200px]">
          <header className="relative h-[195px] bg-[#191919]">
            {/* "headphones title" */}
            <h1 className="absolute left-1/2 bottom-7 transform -translate-x-1/2 -transform-y-1/2 text-center text-h4 font-bold text-white px-8 uppercase">
              headphones
            </h1>
          </header>
          {/* content body */}
          <div className="px-6 md:px-9 lg:px-0">
           {/* product cards go here */}
           <section className="mb-40">
             <ProductCard />
           </section>
           <Categories />
           <About />
          </div>
        </div>
      </main>
    </>
  );
}
