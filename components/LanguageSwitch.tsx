"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; // For client-side routing
import * as React from "react";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/LocaleContext";

export default function LanguageSwitch({ scrolled }: { scrolled: boolean }) {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const { locale } = useLocale(); // Get the current locale

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
        <span>
          {locale === "en" ? <span>English</span> : <span>العربية</span>}
        </span>
        <Image
          src="/icons/language.svg"
          width={20}
          height={20}
          alt="language icon"
          className="dark:invert"
        />
      </Button>
      <p
        className={`hidden cursor-pointer font-bold sm:block ${
          scrolled || pathname !== `/${locale}`
            ? "text-dark-100 dark:text-light-800"
            : "text-light-800"
        } hover:text-primary-500`}
        onClick={() => handleLocaleSwitch(locale === "en" ? "ar" : "en")}
      >
        {locale === "en" ? "English" : "العربية"}
      </p>
    </>
  );
}
