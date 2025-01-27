"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import React from "react";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/LocaleContext";

type VisionMissionType = {
  vision: { title: string; description: string; icon: string };
  mission: { title: string; description: string; icon: string };
};

type CoreValueType = {
  title: string;
  description: string;
  icon: string;
};

type MilestoneType = {
  title: string;
  value: string;
  icon: string;
};

export default function AboutUs() {
  const t = useTranslations("aboutUs");
  const { locale } = useLocale();
  const theme = useTheme();

  const visionMission = t.raw("sections.visionMission") as VisionMissionType;
  const coreValues = t.raw("sections.coreValues.values") as CoreValueType[];
  const milestones = t.raw("sections.byTheNumbers.numbers") as MilestoneType[];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover"
        style={{ backgroundImage: "url('/images/about-us2.JPG')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="relative flex h-full items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-5xl font-extrabold">{t("title")}</h1>
            <p className="mt-2 text-lg text-gray-300">{t("breadcrumb")}</p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="px-6 py-16 sm:px-12 md:px-24">
        <h2 className="text-center text-3xl font-bold text-dark-100 dark:text-light-800">
          {t("sections.whoWeAre.title")}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div
            className="relative h-[300px] rounded-lg bg-cover bg-center shadow-lg"
            style={{ backgroundImage: "url('/images/cu.jpg')" }}
          ></div>
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              {t("sections.whoWeAre.description")}
            </p>
            <Link href={`/${locale}/contact-us`}>
              <Button className="rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-[#D95A1B]">
                {t("sections.whoWeAre.button")}
                <Image
                  src="/icons/arrow.svg"
                  width={20}
                  height={20}
                  alt="see more"
                  className={theme.resolvedTheme === "dark" ? "" : "invert"}
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 px-6 py-16 dark:bg-dark-300 sm:px-12 md:px-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {Object.values(visionMission).map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-dark-200"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-primary">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="invert-colors"
                />
              </div>
              <h4 className="text-lg font-bold text-dark-100 dark:text-light-800">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-16 sm:px-12 md:px-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-dark-100 dark:text-light-800">
          {t("sections.coreValues.title")}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-primary">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={32}
                  height={32}
                  className="invert-colors"
                />
              </div>
              <h4 className="text-lg font-bold text-dark-100 dark:text-light-800">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-white px-6 py-16 dark:bg-dark-300 sm:px-12 md:px-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-dark-100 dark:text-light-800">
          {t("sections.byTheNumbers.title")}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg bg-gray-50 p-6 shadow-md dark:bg-dark-400"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-primary">
                <Image
                  src={stat.icon}
                  alt={stat.title}
                  width={32}
                  height={32}
                  className="invert-colors"
                />
              </div>
              <h4 className="text-3xl font-bold text-dark-100 dark:text-light-800">
                {stat.value}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{stat.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary px-2 text-white">
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-4xl font-extrabold">
            {t("sections.callToAction.title")}
          </h2>
          <p className="mt-4 text-lg">
            {t("sections.callToAction.description")}
          </p>
          <Link href={`/${locale}/contact-us`}>
            <Button className="mt-8 rounded-lg bg-white px-10 py-5 font-bold text-primary hover:scale-105 hover:bg-primary-foreground hover:text-primary">
              {t("sections.callToAction.button")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
