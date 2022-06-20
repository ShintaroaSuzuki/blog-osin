import Head from "next/head";
import PostItem from "@/components/PostItem";
import { getAllPost } from "@/lib/getAllPost";
import { Post } from "@/types";
import Footer from "@/components/Footer";

export const getStaticProps = async () => {
  return {
    props: {
      posts: await getAllPost(),
    },
  };
};

const Home = ({ posts }: { posts: ({ id: string } & Post)[] }) => {
  return (
    <div className="flex items-center flex-col min-h-screen">
      <Head>
        <title>Osin.</title>
        <meta name="description" content="osin's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-3/4 sm:w-1/2 min-h-screen">
        <div className="flex flex-col items-center my-10 sm:my-10">
          <img
            src="/grinning-cat-with-smiling-eyes.png"
            alt="home header image"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-3xl font-bold tracking-wide">Osin.</h1>
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
