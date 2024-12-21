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
          className={`mx-1 transition-colors hover:text-primary-500 dark:hover:text-primary-500 ${
            pathname === link.href
              ? "font-extrabold text-primary-500 dark:text-primary-500"
              : "font-semibold text-dark-100 dark:text-light-500"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavPages;
