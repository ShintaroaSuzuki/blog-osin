import { Post } from "./post";

export type CategoryPost = {
  pathname: string;
  category: string;
  posts: Post[];
};
