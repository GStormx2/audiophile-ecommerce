import Head from "next/head";
import { db, storage } from "../../firebase";
import { collection, query, getDocs } from "firebase/firestore";
import Categories from "../../components/Categories";
import About from "../../components/About";
import ProductCard from "../../components/ProductCard";

export default function Headphones({ headphones, images }) {
  return (
    <>
      <Head>
        <title>Headphones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* main children container */}
      <div className="relative h-[195px] lg:h-[336px] bg-[#191919]">
          {/* "headphones title" */}
          <h1 className="absolute left-1/2 bottom-7 lg:bottom-0 lg:top-[60%] lg:left-[50%] transform -translate-x-1/2 -transform-y-1/2 text-center text-white text-h4 lg:text-h2 font-bold px-8 uppercase">
            headphones
          </h1>
        </div>
      <main className="relative lg:flex lg:justify-center lg:items-center overflow-x-hidden">
        <div className="relative max-w-[1200px]">
          
          {/* content body */}
          <div className="px-6 md:px-9 lg:px-0">
            {/* product cards go here */}
            <section className="mb-40">
              {headphones.map((item, index) => {
                if ((index + 1) % 2 == 0) {
                  return <ProductCard order={"first"} key={item.slug}>{item}</ProductCard>
                }
                return <ProductCard order={"none"} key={item.slug}>{item}</ProductCard>;
              })}
            </section>
            <Categories />
            <About />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const headphones = [];

  const q = query(collection(db, "headphones"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((val) => {
    headphones.push(val.data());
  });

  return {
    props: {
      headphones: headphones,
    },
  };
}
