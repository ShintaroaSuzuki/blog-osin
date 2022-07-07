import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full justify-center items-center h-12 fixed z-10 bg-[#0F172A] bg-opacity-95 backdrop-blur-sm">
      <Link href="/">
        <img
          className="mb-1 z-20"
          src="/grinning-cat-with-smiling-eyes.png"
          alt="home header image"
          width={28}
          height={28}
        />
      </Link>
    </header>
  );
};

export default Header;
