import Link from "next/link";
import { Category } from "@/types";

const CategoryItem = ({
  key,
  category,
}: {
  key: string;
  category: Category;
}) => {
  return (
    <Link href={`/categories/${category.categoryPath}`} passHref>
      <div
        key={key}
        className="flex w-3/4 justify-between bg-slate-800 rounded-lg p-5"
      >
        <p>{category.categoryName}</p>
        <p>{category.articleCount}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
