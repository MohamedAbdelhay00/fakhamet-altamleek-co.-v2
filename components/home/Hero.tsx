"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

import { useLocale } from "@/context/LocaleContext";

import { Button } from "../ui/button";

function Hero() {
  const t = useTranslations("home");
  const { routes } = useLocale();
  return (
    <div className="flex h-screen w-full flex-col justify-center gap-y-6 bg-heroLight bg-cover bg-no-repeat px-6 dark:bg-heroDark sm:px-12 md:px-24">
      {/* Content */}
      <div className="z-10">
        <h1 className="text-3xl font-bold leading-tight text-light-800 dark:text-light-800 sm:text-4xl md:text-5xl lg:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="my-5 w-full font-open-sans text-base font-normal leading-relaxed text-light-500 dark:text-light-500 sm:w-10/12 sm:text-lg md:w-7/12 md:text-xl">
          {t("hero.subtitle")}
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href={routes.contactUs}>
            <Button
              size="lg"
              className="w-full bg-primary-500 font-poppins font-semibold text-light-800 hover:bg-[#D95A1B] dark:bg-primary-500 dark:text-light-800 dark:hover:bg-[#D95A1B] sm:w-auto"
            >
              {t("hero.buttons.contactUs")}
            </Button>
          </Link>
          <Link href={routes.projects}>
            <Button
              size="lg"
              className="w-full bg-light-800 font-semibold text-dark-100 hover:bg-light-500 dark:bg-dark-200 dark:text-light-500 dark:hover:bg-dark-300 sm:w-auto"
            >
              {t("hero.buttons.viewProjects")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
