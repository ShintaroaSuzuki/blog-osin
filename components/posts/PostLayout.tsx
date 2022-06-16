import type { ReactChildren } from "react";

const PostLayout = ({ children }: { children: ReactChildren }) => {
  return <div className="prose dark:prose-invert">{children}</div>;
};

export default PostLayout;
