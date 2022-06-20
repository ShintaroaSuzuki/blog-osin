import fs from "fs";
import { Post } from "@/types";

export const getAllPost = async () => {
  const posts: Post[] = [];
  const paths = fs.readdirSync("./pages/posts");
  let importProcessed = 0;
  paths.forEach(async (path) => {
    let module = await import(`../pages/posts/${path}`);
    let pathname = path.replace(".mdx", "");
    posts.push({ ...module.meta, pathname });
    importProcessed++;
    if (importProcessed == paths.length) {
      posts.sort((a, b) => {
        if (a.createdAt > b.createdAt) return -1;
        return 1;
      });
    }
  });
  return posts;
};
