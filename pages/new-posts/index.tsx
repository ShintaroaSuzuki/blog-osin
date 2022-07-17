import { GetStaticProps } from "next";
import { getAllPosts } from "@/lib/getData";
import { Post } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostItem from "@/components/PostItem";

const getPosts = (allPosts: Post[]): Post[] => {
  return allPosts.slice(0, 5);
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: getPosts(allPosts),
    },
  };
};

const Page = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-16">
        <p className="mb-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
          New Posts
        </p>
        <div className="w-3/4 flex flex-col items-center gap-y-8 min-h-screen">
          {posts.map((post, i) => (
            <PostItem key={`post_${i}`} post={post} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
