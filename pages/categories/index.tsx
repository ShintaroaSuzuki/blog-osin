import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryItem from "@/components/CategoryItem";
import { getCategory } from "@/lib/getData";
import { Category } from "@/types";

export const getStaticProps = async () => {
  return {
    props: {
      categories: await getCategory(),
    },
  };
};

const Page = ({ categories }: { categories: Category[] }) => {
  return (
    <>
      <Head>
        <title>Osin.</title>
      </Head>
      <Header />
      <div className="flex flex-col items-center w-full pt-16 min-h-screen gap-y-4 ">
        <p className="mb-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
          New Posts
        </p>
        {categories &&
          categories.map((category: Category) => {
            return <CategoryItem category={category} key={`${category}`} />;
          })}
      </div>
      <Footer />
    </>
  );
};

export default Page;
