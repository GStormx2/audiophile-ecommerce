import Head from "next/head";
import { db, storage } from "../../firebase";
import Categories from "../../components/Categories";
import About from "../../components/About";
import { getDocs, query } from "@firebase/firestore";

export default function Items({ product }) {
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      {/* main children container */}
      <main className="relative lg:flex lg:justify-center lg:items-center overflow-x-hidden">
        <div className="relative max-w-[1200px]">
          {/* content body */}
          <div className="px-6 md:px-9 lg:px-0"></div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = [];
  const q = query(collection(db, "headphones"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((item) => {
    paths.push({ 
      param: { 
        slug: item.data() 
      } 
    });
  });

  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const slug = context.param.slug;
  let product;
  const q = query(collection(db, 'headphones'), where('slug', '==', slug));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(item => {
    product = item.data();
  })

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product: product,
    }
  }
}
