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
      <main>
        <FeaturedProduct />
        <div className="px-6 md:px-9">
          <Categories />
          <Showcase />
          <About />
        </div>
      </main>
    </>
  );
}
