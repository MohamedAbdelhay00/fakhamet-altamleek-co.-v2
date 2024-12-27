import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
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
import { useLocale } from "@/context/LocaleContext";

import NavLinks from "./NavLinks";
import LanguageSwitch from "../LanguageSwitch";

const MobileNav = ({ scrolled }: { scrolled: boolean }) => {
  const pathname = usePathname();
  const { locale } = useLocale();
  const t = useTranslations("home.nav");
  const theme = useTheme();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/right-white.svg"
          width={30}
          height={30}
          alt="Menu"
          className={`${
            (scrolled || pathname !== `/${locale}`) &&
            !document.documentElement.classList.contains("dark")
              ? "invert"
              : ""
          } ${locale === "ar" ? " -scale-x-100" : ""}`}
        />
      </SheetTrigger>
      <SheetContent side="left" className="border-none">
        <SheetHeader>
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <Link href="/" className="flex items-center gap-1">
            <Image
              src={
                theme.resolvedTheme === "dark"
                  ? "/images/logo_dark.png"
                  : "/images/logo.png"
              }
              width={50}
              height={50}
              alt="Logo"
            />
            <p className="font-poppins font-bold">
              {t("company-p1")}{" "}
              <span className="text-[#F36F21]">{t("company-p2")}</span>
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
