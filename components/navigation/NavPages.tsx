"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";

import { useLocale } from "@/context/LocaleContext";

const NavPages = () => {
  const pathname = usePathname();
  const { locale } = useLocale();
  const t = useTranslations("home.nav");
  const pageLinks = t.raw("pageLinks") as { href: string; label: string }[];

  return (
    <div className="hidden gap-8 sm:flex">
      {pageLinks.map((pageLink, index) => (
        <Link
          key={index}
          href={`/${locale}/${pageLink.href}`}
          className={`mx-1 transition-colors hover:text-primary-500 dark:hover:text-primary-500 ${
            pathname === `/${locale}/${pageLink.href}`
              ? "font-extrabold text-primary-500 dark:text-primary-500"
              : "font-semibold text-dark-100 dark:text-light-500"
          }`}
        >
          {pageLink.label}
        </Link>
      ))}
    </div>
  );
};

export default NavPages;
