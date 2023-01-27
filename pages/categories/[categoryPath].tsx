import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import {
    getCategoryPaths,
    getCategory,
    getCategoryPosts
} from '@/utils/getData';
import { CategoryPost, Post } from '@/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostItem from '@/components/PostItem';

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

const getCategoryName = async (
    categoryPosts: CategoryPost[],
    categoryPath: string
): Promise<string> => {
    for (let i = 0; i < categoryPosts.length; i++) {
        if (categoryPosts[i].pathname == categoryPath) {
            return categoryPosts[i].category;
        }
    }
    return '';
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
    const categories = await getCategory();
    const categoryPaths = getCategoryPaths(categories);
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
            category: await getCategoryName(categoryPosts, categoryPath)
        }
    };
};

const Page = ({ posts, category }: { posts: Post[]; category: string }) => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center pt-16">
                <p className="mb-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
                    {category}
                </p>
                <div className="w-3/4 flex flex-col items-center gap-y-8 min-h-screen">
                    {posts.map((post, i) => (
                        <PostItem key={`post_${i}`} post={post} />
                    ))}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Page;
