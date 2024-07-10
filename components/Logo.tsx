import { Link } from "next-view-transitions";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <img src="/favicon.ico" alt="Logo" className="w-20 h-20" />
      <span className="font-medium text-black dark:text-white">Foundity</span>
    </Link>
  );
};