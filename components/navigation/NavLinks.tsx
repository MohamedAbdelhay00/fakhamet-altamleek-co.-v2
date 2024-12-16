"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SheetClose } from "@/components/ui/sheet";
import sidebarLinks from "@/constants";
import { cn } from "@/lib/utils";

const NavLinks = ({ isMobile = false }: { isMobile: boolean }) => {
  const pathname = usePathname();
  const userId = 1;

  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        if (item.route === "/profile") {
          if (userId) item.route = `${item.route}/${userId}`;
          else return null;
        }

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
