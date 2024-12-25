"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

import { useLocale } from "@/context/LocaleContext";

import { Button } from "../ui/button";

const AboutUs = () => {
  const { routes } = useLocale();
  const t = useTranslations("home");
  return (
    <section className="bg-light-700 px-6 py-16 dark:bg-dark-300 sm:px-12 md:px-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Side: Heading and Stats */}
        <div className="flex flex-col">
          <h2 className="mb-12 text-3xl font-bold text-dark-100 dark:text-light-800">
            {t("trustedAdvisors.title")}
          </h2>
          <div className="grid grow grid-cols-2 gap-6">
            {/* Stats Cards */}
            <div className="rounded-lg bg-light-800 p-6 text-center shadow-sm dark:bg-dark-200">
              <p className="text-2xl font-bold text-dark-100 dark:text-light-800">
                17K+
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {t("trustedAdvisors.stats.satisfiedCustomers")}
              </p>
            </div>
            <div className="rounded-lg bg-primary-500 p-6 text-center text-primary-foreground shadow-sm">
              <p className="text-2xl font-bold">25+</p>
              <p>{t("trustedAdvisors.stats.yearsOfExperience")}</p>
            </div>
            <div className="rounded-lg bg-light-800 p-6 text-center shadow-sm dark:bg-dark-200">
              <p className="text-2xl font-bold text-dark-100 dark:text-light-800">
                150+
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {t("trustedAdvisors.stats.awards")}
              </p>
            </div>
            <div className="rounded-lg bg-light-800 p-6 text-center shadow-sm dark:bg-dark-200">
              <p className="text-2xl font-bold text-dark-100 dark:text-light-800">
                25+
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {t("trustedAdvisors.stats.properties")}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Text and Image */}
        <div className="flex flex-col justify-between">
          <div className="mb-9">
            <p className="text-gray-600 dark:text-gray-300">
              {t("trustedAdvisors.subtitle")}
            </p>
          </div>
          <div className="flex gap-x-2 rounded-lg border-light-800 bg-light-800 p-3 dark:border dark:border-dark-200 dark:bg-dark-300">
            <div className="flex w-6/12 flex-col items-start justify-center gap-y-2">
              <p className="text-gray-600 dark:text-gray-300">
                {t("trustedAdvisors.subtitle2")}
              </p>
              <Link href={routes.aboutUs}>
                <Button className="rounded-lg bg-primary-500 px-6 py-3 transition-all duration-300 hover:bg-[#D95A1B] dark:bg-primary-500 dark:text-light-800 dark:hover:bg-[#D95A1B]">
                  {t("trustedAdvisors.seeMore")}
                  <Image
                    src="/icons/arrow.svg"
                    height={20}
                    width={20}
                    alt="arrow-icon"
                    className="invert"
                  />
                </Button>
              </Link>
            </div>
            <div className="h-[300px] w-6/12">
              <Image
                src="/images/about-us.jpg"
                width={300}
                height={300}
                alt="Forest Path"
                className="size-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
