import fs from "fs";
import { Post, Category, CategoryPost } from "@/types";

export const getAllPosts = async () => {
  const posts: Post[] = [];
  const paths = fs.readdirSync("./pages/posts");
  await Promise.all(paths.map((path) => pathToPosts(path, posts)));
  await (async () => {
    posts.sort((a, b) => {
      if (a.createdAt > b.createdAt) return -1;
      return 1;
    });
  })();
  return posts;
};

const pathToPosts = async (path: string, posts: Post[]) => {
  const module = await import(`../pages/posts/${path}`);
  const pathname = path.replace(".mdx", "");
  posts.push({ ...module.meta, pathname });
};

export const getCategory = async () => {
  const categories: Category[] = [];
  const paths = fs.readdirSync("./pages/posts");
  for (let path of paths) await pathToCategories(path, categories);
  await (async () => {
    categories.sort((a, b) => {
      if (a.articleCount > b.articleCount) return -1;
      return 1;
    });
  })();
  return categories;
};

const pathToCategories = async (path: string, categories: Category[]) => {
  const module = await import(`../pages/posts/${path}`);
  for (let i = 0; i < module.meta.categories.length; i++) {
    await (async () => {
      let categoryName = module.meta.categories[i];
      let categoryPath = await categoryToPathname(categoryName);
      let categoryExists = false;
      for (let j = 0; j < categories.length; j++) {
        if (categories[j].categoryName == categoryName) {
          categories[j].articleCount++;
          categoryExists = true;
          break;
        }
      }
      if (!categoryExists) {
        categories.push({ categoryName, categoryPath, articleCount: 1 });
      }
    })();
  }
};

export const getCategoryPaths = async (categories: Category[]) => {
  const paths: { params: { categoryPath: string } }[] = [];
  await Promise.all(
    categories.map((category) =>
      (async () => {
        paths.push({
          params: {
            categoryPath: categoryToPathname(category.categoryName),
          },
        });
      })()
    )
  );
  return paths;
};

export const getCategoryPosts = async (categories: Category[]) => {
  const categoryPosts: CategoryPost[] = [];
  const paths = fs.readdirSync("./pages/posts");
  await Promise.all(
    categories.map((category) =>
      (async () => {
        const posts: Post[] = [];
        await Promise.all(
          paths.map((path) =>
            pathToCategoryPosts(path, category.categoryName, posts)
          )
        );
        categoryPosts.push({
          category: category.categoryName,
          pathname: categoryToPathname(category.categoryName),
          posts,
        });
      })()
    )
  );
  await (async () => {
    for (let i = 0; i < categoryPosts.length; i++) {
      await (async () => {
        categoryPosts[i].posts.sort((a, b) => {
          if (a.createdAt > b.createdAt) return -1;
          return 1;
        });
      })();
    }
  })();
  return categoryPosts;
};

const pathToCategoryPosts = async (
  path: string,
  categoryName: string,
  posts: Post[]
) => {
  const module = await import(`../pages/posts/${path}`);
  for (let i = 0; i < module.meta.categories.length; i++) {
    await (async () => {
      let category = module.meta.categories[i];
      if (category == categoryName) {
        posts.push({ ...module.meta, pathname: path.replace(".mdx", "") });
      }
    })();
  }
};

const categoryToPathname = (category: string) => {
  return category.replace(/[^0-9a-zA-Z]/g, "-").toLowerCase();
};
