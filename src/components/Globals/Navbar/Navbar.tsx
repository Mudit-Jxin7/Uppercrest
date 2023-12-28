"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "@/data/animation-config";

const activeClassName = "selected Link";
const activeStyleCallback = ({ isActive }: { isActive: Boolean }) =>
  isActive ? activeClassName : "Link";

const Links = () => {
  return (
    <>
      <Link
        className="hover:text-slate-400 transition-all cursor-pointer"
        href="/"
      >
        Home
      </Link>
      <Link
        className="hover:text-slate-400 transition-all cursor-pointer"
        href="/about"
      >
        About
      </Link>
      <Link
        className="hover:text-slate-400 transition-all cursor-pointer"
        href="/contact"
      >
        Contact
      </Link>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hrefggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <nav className="h-10 flex flex-row justify-between mx-10 items-center mt-5 mb-5 overflow-hidden">
        <div>Cosedge</div>
        <div className="hidden justify-end gap-5 md:flex ">
          <Links />
        </div>

        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={hrefggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="mt-4 basis-full md:hidden"
          >
            <motion.div
              className="ml-10"
              variants={mobileNavListVariant}
              {...mobileNavExitProps}
            >
              <Link href="/">Home</Link>
            </motion.div>
            <motion.div
              className="ml-10"
              variants={mobileNavListVariant}
              {...mobileNavExitProps}
            >
              <Link href="/about">About</Link>
            </motion.div>
            <motion.div
              className="ml-10"
              variants={mobileNavListVariant}
              {...mobileNavExitProps}
            >
              <Link href="/contact">Contact</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;