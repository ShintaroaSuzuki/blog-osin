import fs from "fs";
import { Post, Category, CategoryPost } from "@/types";

export const getAllPosts = async () => {
  const posts: Post[] = [];
  const paths = fs.readdirSync("./pages/posts");
  await Promise.all(
    paths.map(async (path) => {
      const module = await import(`../pages/posts/${path}`);
      const pathname = path.replace(".mdx", "");
      posts.push({ ...module.meta, pathname });
    })
  );
  posts.sort((a, b) => {
    if (a.createdAt > b.createdAt) return -1;
    return 1;
  });
  return posts;
};

export const getCategory = async () => {
  const categories: Category[] = [];
  const paths = fs.readdirSync("./pages/posts");
  for (let path of paths) {
    const module = await import(`../pages/posts/${path}`);
    module.meta.categories.forEach((category: string) => {
      const categoryName = category;
      const categoryPath = categoryToPathname(categoryName);
      let categoryExists = false;
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].categoryName === categoryName) {
          categories[i].articleCount++;
          categoryExists = true;
          break;
        }
      }
      if (!categoryExists) {
        categories.push({
          categoryName,
          categoryPath,
          articleCount: 1,
        });
      }
    });
  }
  categories.sort((a, b) => {
    if (a.articleCount > b.articleCount) return -1;
    return 1;
  });
  return categories;
};

export const getCategoryPaths = (categories: Category[]) => {
  const paths: { params: { categoryPath: string } }[] = [];
  categories.map((category) =>
    paths.push({
      params: {
        categoryPath: categoryToPathname(category.categoryName),
      },
    })
  );
  return paths;
};

export const getCategoryPosts = async (categories: Category[]) => {
  const categoryPosts: CategoryPost[] = [];
  const paths = fs.readdirSync("./pages/posts");
  await Promise.all(
    categories.map(async (category) => {
      const posts: Post[] = [];
      const categoryName = category.categoryName;
      await Promise.all(
        paths.map(async (path) => {
          const module = await import(`../pages/posts/${path}`);
          module.meta.categories.forEach((category: string) => {
            if (category === categoryName) {
              posts.push({
                ...module.meta,
                pathname: path.replace(".mdx", ""),
              });
            }
          });
        })
      );
      categoryPosts.push({
        category: categoryName,
        pathname: categoryToPathname(category.categoryName),
        posts,
      });
    })
  );
  categoryPosts.forEach((categoryPost) => {
    categoryPost.posts.sort((a, b) => {
      if (a.createdAt > b.createdAt) return -1;
      return 1;
    });
  });
  return categoryPosts;
};

const categoryToPathname = (category: string) => {
  return category.replace(/[^0-9a-zA-Z]/g, "-").toLowerCase();
};
