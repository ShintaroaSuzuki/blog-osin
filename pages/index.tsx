import Head from 'next/head';
import { getAllPosts } from '@/utils/getData';
import { Post } from '@/types';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const DOMAIN =
    process.env.NODE_ENV === 'production'
        ? 'https://osin.me'
        : 'http://localhost:3000';

const Home = () => {
    return (
        <div className="flex items-center flex-col min-h-screen">
            <Head>
                <title>Osin.</title>
                <meta
                    name="description"
                    content="旧帝飛び級リードエンジニアの気まぐれ技術ブログです"
                />
                <meta property="og:title" content="Osin." />
                <meta
                    property="og:description"
                    content="旧帝飛び級リードエンジニアの気まぐれ技術ブログです"
                />
                <meta property="og:image" content={`${DOMAIN}/top-ogp.png`} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-3/4 sm:max-w-lg min-h-screen">
                <div className="flex flex-col items-center my-10 sm:my-10">
                    <img
                        src="/grinning-cat-with-smiling-eyes.png"
                        alt="home header image"
                        width={100}
                        height={100}
                    />
                </div>
                <h1 className="mb-0.5">
                    <span className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
                        Osin.
                    </span>
                </h1>
                <p className="text-sm text-slate-500">A software engineer</p>
                <div className="my-8">
                    <Navigation
                        title="New Posts"
                        description="recent posts"
                        href="/new-posts"
                    />
                    <Navigation
                        title="Categories"
                        description="categories list of blog posts"
                        href="/categories"
                    />
                    <Navigation
                        title="About Me"
                        description="self-introduction"
                        href="/about-me"
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
