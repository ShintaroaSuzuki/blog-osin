import type { ReactChildren } from "react";

const PostLayout = ({ children }: { children: ReactChildren }) => {
  return (
    <article className="my-8 mx-auto w-5/6 prose prose-sm prose-invert prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-teal-400 prose-h1:to-purple-500">
      {children}
    </article>
  );
};

export default PostLayout;
