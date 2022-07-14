import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
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
    <div>
      <Head>
        <title>Osin.</title>
      </Head>
      {categories &&
        categories.map((category: Category) => {
          return (
            <div
              key={category.categoryName}
              className="flex justify-between mx-20 my-10"
            >
              <p>{category.categoryName}</p>
              <p>{category.articleCount}</p>
            </div>
          );
        })}
      <Footer />
    </div>
  );
};

export default Page;
