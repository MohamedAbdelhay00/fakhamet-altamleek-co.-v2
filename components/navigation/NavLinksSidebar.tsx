"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SheetClose } from "@/components/ui/sheet";
import dashboardSidebarLinks from "@/constants/dashboardLinks";
import { cn } from "@/lib/utils";

const NavLinks = ({ isMobile = false }: { isMobile: boolean }) => {
  const pathname = usePathname();
  const userId = 1;
  return (
    <>
      {dashboardSidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        if (item.route === "/profile") {
          if (userId) item.route = `${item.route}/${userId}`;
          else return null;
        }
        const LinkComponent = (
          <Link
            href={`${item.route}`}
            key={item.label}
            className={cn(
              isActive
                ? "bg-primary-500 rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex items-center justify-start gap-4 w-full bg-transparent p-4 transition-all duration-200 hover:bg-primary-100 active:bg-primary-100 rounded-lg"
            )}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={cn({ "dark:invert-colors": !isActive })}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
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
