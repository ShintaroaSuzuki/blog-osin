import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { getCategoryPaths, getCategory, getCategoryPosts } from "@/lib/getData";
import { CategoryPost, Post } from "@/types";
import PostItem from "@/components/PostItem";

type PathParams = {
  categoryPath: string;
};

const getPosts = async (
  categoryPosts: CategoryPost[],
  categoryPath: string
): Promise<Post[]> => {
  for (let i = 0; i < categoryPosts.length; i++) {
    if (categoryPosts[i].pathname == categoryPath) {
      return categoryPosts[i].posts;
    }
  }
  return [];
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const categories = await getCategory();
  const categoryPaths = await getCategoryPaths(categories);
  return { paths: categoryPaths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { categoryPath } = context.params as PathParams;
  const categories = await getCategory();
  const categoryPosts = await getCategoryPosts(categories);
  return {
    props: {
      posts: await getPosts(categoryPosts, categoryPath),
    },
  };
};

const Page = ({ posts }: { posts: Post[] }) => {
  const router = useRouter();
  const { categoryPath } = router.query;

  console.log(posts[0].pathname);

  return (
    <div>
      <p>{categoryPath}</p>
      {posts.map((post) => (
        <PostItem
          key={post.pathname}
          pathname={post.pathname}
          emoji={post.emoji}
          title={post.title}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
};

export default Page;
