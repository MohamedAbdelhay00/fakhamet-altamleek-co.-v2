"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { useLocale } from "@/context/LocaleContext";

import MobileNav from "./MobileNav";
import ModeToggle from "../Theme";
import NavPages from "./NavPages";
import NavSection from "./NavSection";
import LanguageSwitch from "../LanguageSwitch";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { locale } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-3 transition-all duration-300 sm:px-24 ${
        scrolled || pathname !== `/${locale}`
          ? "border-b bg-light-700 shadow-none backdrop-blur-md dark:border-b-black dark:bg-dark-300"
          : "bg-transparent"
      }`}
    >
      <Link href="/">
        <div
          className={`size-12 rounded-lg bg-contain bg-no-repeat ${
            scrolled || pathname !== `/${locale}`
              ? "bg-logoLight dark:bg-logoDark"
              : "bg-logoTransparent"
          }`}
        ></div>
      </Link>

      {pathname === `/${locale}` ? (
        <NavSection scrolled={scrolled} />
      ) : (
        <NavPages />
      )}

      <div className="flex items-center gap-4">
        <ModeToggle />
        <div className="hidden items-center gap-4 sm:flex">
          <LanguageSwitch scrolled={scrolled} />
        </div>
        <div className="sm:hidden">
          <MobileNav scrolled={scrolled} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
