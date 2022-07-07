import Head from "next/head";
import type { ReactChildren } from "react";
import { Post } from "@/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PostLayout = ({
  children,
  meta,
}: {
  children: ReactChildren;
  meta: Post;
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Head>
        <title>{`${meta.title} | Osin.`}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/themes/prism-tomorrow.min.css"
        />
        <meta property="og:title" content={meta.title} />
        <meta
          property="og:image"
          content={`https://blog-osin-ogp-generator-xfcrhq2qba-an.a.run.app?title=${meta.title}`}
        />
      </Head>
      <Header />
      <article className="w-5/6 mt-16 prose prose-invert prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-teal-400 prose-h1:to-purple-500">
        <div className="w-full flex mb-4 gap-x-2 items-center">
          <span className="text-2xl">{meta.emoji}</span>
          <span className="text-slate-500">{meta.createdAt}</span>
        </div>
        {children}
      </article>
      <Footer />
    </div>
  );
};

export default PostLayout;
