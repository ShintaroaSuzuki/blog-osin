import Head from "next/head";
import PostItem from "@/components/PostItem";
import { getAllPosts } from "@/lib/getData";
import { Post } from "@/types";
import Footer from "@/components/Footer";

export const getStaticProps = async () => {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
};

const DOMAIN =
  process.env.NODE_ENV === "production"
    ? "https://osin.me"
    : "http://localhost:3000";

const Home = ({ posts }: { posts: ({ id: string } & Post)[] }) => {
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
        <h1>
          <span className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
            Osin.
          </span>
        </h1>
        <p className="text-sm text-slate-500 leading-loose">
          A software engineer
        </p>
        <div className="w-full flex flex-col items-center mt-10 gap-y-8">
          {posts &&
            posts.map((post) => {
              return (
                <PostItem
                  key={post.pathname}
                  pathname={post.pathname}
                  emoji={post.emoji}
                  title={post.title}
                  createdAt={post.createdAt}
                />
              );
            })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
