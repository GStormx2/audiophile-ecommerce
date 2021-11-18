import Head from "next/head";
import Header from "../components/Header";
import FeaturedProduct from "../components/FeaturedProduct";
import Categories from "../components/Categories";
import Showcase from "../components/Showcase";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative lg:flex lg:justify-center lg:items-center overflow-x-hidden">
        <div className="absolute top-0 lg:block lg:w-screen bg-[#191919] h-[740px]"></div>
        <div className="relative max-w-[1200px]">
          <FeaturedProduct />
          <div className="px-6 md:px-9">
            <Categories />
            <Showcase />
            <About />
          </div>
        </div>
      </main>
    </>
  );
}
