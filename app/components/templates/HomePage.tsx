import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Head>
        <title>Site under construction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <h1 className="p-4 text-4xl font-bold text-center text-white lg:text-7xl">
        Site under construction 🚧
      </h1>
    </div>
  );
};

export default Home;