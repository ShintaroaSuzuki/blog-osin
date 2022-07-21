import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MouseEventHandler } from "react";

const menuVariants = {
  open: { scale: 1, opacity: 1 },
  closed: { scale: 0, opacity: 0 },
};

const HeaderMenu = ({
  handleMenu,
}: {
  handleMenu: MouseEventHandler<SVGSVGElement>;
}) => {
  return (
    <div className="fixed z-20 w-full top-2 px-2 flex flex-col items-end">
      <AnimatePresence>
        <motion.div
          className="w-full bg-slate-800 flex flex-row justify-between px-4 py-2 rounded-md origin-top-right drop-shadow-lg"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <nav className="flex flex-col w-full my-2">
            <Link href="/new-posts">
              <a className="text-slate-100 hover:text-slate-300 py-2">
                New Posts
              </a>
            </Link>
            <Link href="/categories">
              <a className="text-slate-100 hover:text-slate-300 py-2">
                Categories
              </a>
            </Link>
            <Link href="/about-me">
              <a className="text-slate-100 hover:text-slate-300 py-2">
                About Me
              </a>
            </Link>
          </nav>
          <div>
            <svg
              onClick={handleMenu}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke={"rgb(241, 245, 249)"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeaderMenu;
