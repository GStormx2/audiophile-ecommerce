import Head from 'next/head'
import Header from '../components/Header';
import FeaturedProduct from '../components/FeaturedProduct';
import Categories from '../components/Categories';
import NewRelease from '../components/NewReleases';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FeaturedProduct />
        <Categories />
        <NewRelease />
        <About />
      </main>
    </>
  )
}
