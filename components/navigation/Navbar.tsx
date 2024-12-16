"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import MobileNav from "./MobileNav";
import ModeToggle from "../Theme";
import NavSection from "./NavSection";
import NavPages from "./NavPages";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scrolling for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-5 transition-all duration-300 sm:px-24 ${
        scrolled || pathname !== "/"
          ? "bg-white/70 shadow-md backdrop-blur-md dark:bg-[#1F1F1F]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <div
          className={`h-12 w-12 bg-contain bg-no-repeat rounded-lg ${
            scrolled || pathname !== "/"
              ? "bg-logoLight dark:bg-logoDark"
              : "bg-logoTransparent"
          }`}
        ></div>
      </Link>

      {/* Conditional Navbar Rendering */}
      {pathname === "/" ? <NavSection /> : <NavPages />}

      {/* Mode Toggle and MobileNav */}
      <div className="flex items-center gap-4">
        <ModeToggle />
        <div className="sm:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
