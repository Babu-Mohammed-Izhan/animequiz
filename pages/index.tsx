import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anime Quiz</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center flex-col min-h-screen bg-gradient-to-tr from-indigo-600 to-violet-500">
        <h1 className="lg:text-8xl text-6xl md:px-16 pb-16 text-white font-Quicksand">
          Anime Quiz
        </h1>
        <div className="flex items-center justify-center flex-col">
          <button className="text-4xl font-medium py-3 font-Quicksand w-52 bg-white rounded-3xl my-3 shadow-lg active:animate-press">
            <Link href="/levels" passHref>
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 to-violet-500">
                Start
              </span>
            </Link>
          </button>
          <button className="text-4xl font-medium py-3 font-Quicksand w-52 bg-white rounded-3xl my-3 shadow-lg active:animate-press">
            <Link href="/rules" passHref>
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 to-violet-500">
                Rules
              </span>
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
