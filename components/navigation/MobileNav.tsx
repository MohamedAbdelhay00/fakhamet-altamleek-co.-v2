import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavLinks from "./NavLinks";
import LanguageSwitch from "../LanguageSwitch";

const MobileNav = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/right-white.svg"
          width={30}
          height={30}
          alt="Menu"
          className={`${
            scrolled && !document.documentElement.classList.contains("dark")
              ? "invert"
              : ""
          }`}
        />
      </SheetTrigger>
      <SheetContent side="left" className="border-none">
        <SheetHeader>
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <Link href="/" className="flex items-center gap-1">
            <Image src="/images/logo.png" width={50} height={50} alt="Logo" />
            <p className="font-poppins font-bold">
              Fakhamet <span className="text-[#F36F21]">Al Tamleek</span>
            </p>
          </Link>
          <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-5">
                <NavLinks isMobile />
                <LanguageSwitch scrolled />
              </section>
            </SheetClose>
          </div>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
