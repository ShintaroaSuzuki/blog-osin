import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Post } from "@/types";
import { Fragment } from "react";

const PostItem = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post.pathname}`} passHref>
      <div className="flex flex-col justify-between items-center bg-slate-800 rounded-lg p-5 h-44 w-full">
        <span className="text-5xl">{post.emoji}</span>
        <div className="flex flex-col justify-center items-center gap-y-1">
          <h2 className="text-base">{post.title}</h2>
          <span className="text-sm text-slate-500">{`${formatDistanceToNow(
            new Date(post.createdAt)
          )} ago`}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
