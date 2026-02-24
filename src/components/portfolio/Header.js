import Link from "next/link";
import React from "react";
import { useTheme } from "context/ThemeContext";

const Header = ({ onSocialProofClick }) => {
  const { theme, toggleTheme, mounted } = useTheme();
  const themeLabel = mounted ? theme : "light";

  return (
    <header className="w-full border-b border-grey-border dark:border-[#2a2f3a] py-4 px-6 md:px-8 flex justify-between items-start bg-white dark:bg-[#0f1115] fixed top-0 left-0 right-0 z-40 transition-colors duration-200">
      <Link href="/">
        <h1 className="text-xl md:text-2xl font-bold tracking-tight text-black dark:text-[#f3f4f6]">
          Mishael Williams
        </h1>
        <p className="text-grey-text dark:text-[#b8c2d1] mt-0.5 text-sm md:text-base">
          Senior Full-Stack Engineer | AI Systems Architect
        </p>
        <p className="text-grey-text2 dark:text-[#8a94a4] mt-0.5 text-xs md:text-sm">
          Denver, USA | +1-720-827-3199
        </p>
      </Link>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-white dark:bg-[#121722] text-black dark:text-[#f3f4f6] border border-grey-border dark:border-[#2a2f3a] rounded-full text-sm md:text-base hover:border-grey-text dark:hover:border-[#4b5565] transition-all duration-300 cursor-pointer whitespace-nowrap"
          aria-label="Toggle dark and light mode"
        >
          {themeLabel === "dark" ? "light mode" : "dark mode"}
        </button>
        <button
          onClick={onSocialProofClick}
          className="px-4 py-2 bg-white dark:bg-[#121722] text-black dark:text-[#f3f4f6] border border-grey-border dark:border-[#2a2f3a] rounded-full text-sm md:text-base hover:border-grey-text dark:hover:border-[#4b5565] transition-all duration-300 cursor-pointer whitespace-nowrap"
        >
          social proof
        </button>
      </div>
    </header>
  );
};

export default Header;
