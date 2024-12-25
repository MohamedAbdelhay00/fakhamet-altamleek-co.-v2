"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl"; // Ensure you have next-intl integrated
import React from "react";

import { SheetClose } from "@/components/ui/sheet";
import sidebarLinks from "@/constants/index";
import { cn } from "@/lib/utils";

const NavLinks = ({ isMobile = false }: { isMobile: boolean }) => {
  const pathname = usePathname();
  const locale = useLocale(); // Dynamically fetch the current locale
  const links = sidebarLinks(locale);

  return (
    <>
      {links.map((item) => {
        const isActive = pathname === item.route;

        const LinkComponent = (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              isActive
                ? "bg-[#F36F21] text-white shadow-md"
                : "text-gray-600 hover:text-[#F36F21] hover:bg-gray-100",
              "flex items-center justify-start gap-4 rounded-lg p-4 transition-all duration-300"
            )}
          >
            <p
              className={cn(
                isActive ? "font-semibold" : "font-normal",
                !isMobile && "max-lg:hidden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );

        return isMobile ? (
          <SheetClose asChild key={item.route}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
