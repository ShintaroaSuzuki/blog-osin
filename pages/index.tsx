import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col min-h-screen">
      <Head>
        <title>oshin</title>
        <meta name="description" content="oshin's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-w-3/4 sm:min-w-1/2">
        <div className="flex flex-col items-center my-10 sm:my-10">
          <Image src="/grinning-cat-with-smiling-eyes.png" alt="home header image" width={100} height={100} />
        </div>
        <h1 className="text-3xl font-bold tracking-wide">
          Oshin
        </h1>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
