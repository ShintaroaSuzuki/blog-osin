import Link from "next/link";
import { useState, useCallback } from "react";
import HeaderMenu from "@/components/HeaderMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <header className="w-screen fixed z-10">
      {isOpen && <HeaderMenu handleMenu={handleMenu} />}
      <div className="flex w-full justify-between items-center px-6 h-12 bg-slate-900 bg-opacity-100 backdrop-blur-sm">
        <Link href="/" passHref>
          <div className="flex flex-row items-center gap-x-1.5">
            <img
              className="mb-1"
              src="/grinning-cat-with-smiling-eyes.png"
              alt="home header image"
              width={28}
              height={28}
            />
            <p className="font-bold">Osin.</p>
          </div>
        </Link>
        <svg
          onClick={handleMenu}
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 8h16M4 16h16"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
