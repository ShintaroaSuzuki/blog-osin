import fs from "fs";
import { Post } from "@/types";

export const getAllPost = async () => {
  const posts: Post[] = [];
  fs.readdirSync("./pages/posts").forEach(async (path) => {
    let module = await import(`../pages/posts/${path}`);
    let pathname = path.replace(".mdx", "");
    posts.push({ ...module.meta, pathname });
  });
  return posts;
};
