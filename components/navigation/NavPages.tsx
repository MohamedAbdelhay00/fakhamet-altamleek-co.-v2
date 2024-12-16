"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavPages = () => {
  const pathname = usePathname();

  return (
    <div className="hidden gap-8 sm:flex">
      {[
        { href: "/", label: "Home" },
        { href: "/about-us", label: "About Us" },
        { href: "/projects", label: "Projects" },
        { href: "/contact-us", label: "Contact Us" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`mx-1 transition-colors hover:text-[#014A94] dark:hover:text-[#F36F21] ${
            pathname === link.href
              ? "font-bold text-[#014A94] dark:text-[#F36F21]"
              : "text-[#012D61] dark:text-gray-300"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavPages;
