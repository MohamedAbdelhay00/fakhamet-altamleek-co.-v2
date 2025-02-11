"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/LocaleContext";

export default function LanguageSwitch({ scrolled }: { scrolled: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useLocale();

  // Function to handle locale switching
  const handleLocaleSwitch = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale; // Replace the locale in the path
    const newPath = segments.join("/"); // Reconstruct the path
    router.push(newPath); // Navigate to the new path
  };

  return (
    <>
      <Button
        onClick={() => handleLocaleSwitch(locale === "en" ? "ar" : "en")}
        variant="ghost"
        className="flex justify-between gap-2 sm:hidden"
      >
        <Image
          src="/icons/language.svg"
          width={20}
          height={20}
          alt="language icon"
          className="dark:invert"
        />
        <span className={`${locale === "ar" ? "font-poppins" : "font-cairo"}`}>
          {locale === "en" ? <span>العربية</span> : <span>English</span>}
        </span>
      </Button>
      <p
        className={`hidden cursor-pointer font-bold sm:block ${
          scrolled || pathname !== `/${locale}`
            ? "text-dark-100 dark:text-light-800"
            : "text-light-800"
        } hover:text-primary-500 dark:hover:text-primary-500 ${
          locale === "ar" ? "font-poppins" : "font-cairo"
        }`}
        onClick={() => handleLocaleSwitch(locale === "en" ? "ar" : "en")}
      >
        {locale === "en" ? "العربية" : "English"}
      </p>
    </>
  );
}
