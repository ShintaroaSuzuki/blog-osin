import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import HamburgerIcon from "./HamburgerIcon";
import CloseIcon from "./CloseIcon";

const MenuItems = [
  {
    name: "New Posts",
    path: "/new-posts",
  },
  {
    name: "Categories",
    path: "/categories",
  },
  {
    name: "About Me",
    path: "/about-me",
  },
] as const;

const Header = () => {
  return (
    <header className="w-screen fixed z-10">
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
        <Menu as={Fragment}>
          <Menu.Button>
            {({ open }) => (open ? <CloseIcon /> : <HamburgerIcon />)}
          </Menu.Button>
          <div className="fixed z-20 w-full top-14 pl-4 pr-8 flex flex-col left-0">
            <Transition
              as="div"
              className="w-full bg-slate-800 flex flex-row justify-between px-2 py-2 rounded-md origin-top-right drop-shadow-lg"
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="w-full">
                <nav className="flex flex-col w-full my-2">
                  {MenuItems.map((item) => (
                    <Menu.Item key={item.name}>
                      <Link href={item.path}>
                        <a className="text-slate-100 hover:text-slate-300 hover:bg-slate-700 p-2 w-full rounded">
                          {item.name}
                        </a>
                      </Link>
                    </Menu.Item>
                  ))}
                </nav>
              </Menu.Items>
            </Transition>
          </div>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
