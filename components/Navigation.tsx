import Link from "next/link";

const Navigation = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <Link href={href} passHref>
      <div className="my-4">
        <p className="text-lg font-bold mb-0.5">{`${title} →`}</p>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </Link>
  );
};

export default Navigation;
