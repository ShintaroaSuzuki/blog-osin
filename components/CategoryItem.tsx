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
        <p className="font-bold">{category.categoryName}</p>
        <p className="text-slate-500">{category.articleCount}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
