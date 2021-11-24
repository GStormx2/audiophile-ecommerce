import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import { db } from "../../firebase";
import Categories from "../../components/Categories";
import About from "../../components/About";
import { getDocs, query, collection, where } from "firebase/firestore";
import ProductDescription from "../../components/ProductDescription";
import Features from '../../components/Features';
import InTheBox from '../../components/InTheBox';
import Gallery from "../../components/Gallery";
import Recommended from "../../components/Recommended";

export default function Items({ product }) {
  const router = useRouter();

  function backClick (e) {
    e.preventDefault();
    router.push(`/${product.category}`);
  }

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      {/* main content container */}
      <main className="relative lg:flex lg:justify-center lg:items-center overflow-x-hidden">
        <div className="relative max-w-[1200px]">
          {/* content body */}
          <div className="px-6 md:px-10 lg:px-0">
            {/* Go Back link */}
            <div className="my-5">
              <a className="hover:text-[#D87D4A]" href="#" onClick={backClick}>Go Back</a>
            </div>
            {/* product description card */}
            <ProductDescription>{product}</ProductDescription>
            {/* features description */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-24 lg:gap-80 lg:mt-40 mt-24">
              <Features>{product.features}</Features>
              {/* In The Box */}
              <InTheBox>{product.includes}</InTheBox>
            </div>
            {/* photo gallery for each item */}
            <Gallery>{product.gallery}</Gallery>
            {/* you may also like */}
            <h2 className="text-features-mobile md:text-h3 text-center font-bold uppercase mb-10 mt-24 lg:mt-40 lg:mb-14">you may also like</h2>
            {/* recommended items */}
            <div className="md:grid md:grid-cols-3 md:grid-rows-1 md:gap-5 text-center">
              {product.others.map((item, index) => {
                return <Recommended type={product.children} key={index}>{item}</Recommended>
              })}
            </div>
            <div className="mt-36 lg:mt-20">
              <Categories />
              <About />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = [];
  const q = query(collection(db, "earphones"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((item) => {
    paths.push({
      params: {
        slug: item.data().slug,
      },
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  let product;
  const q = query(collection(db, "earphones"), where("slug", "==", slug));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((item) => {
    product = item.data();
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: product,
    },
  };
}
