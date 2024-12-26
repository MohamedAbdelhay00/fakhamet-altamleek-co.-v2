"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

import { useLocale } from "@/context/LocaleContext";

import { Button } from "../ui/button";

const ContactUsSection = () => {
  const t = useTranslations("home.cta");
  const { routes } = useLocale();
  return (
    <section className="bg-light-700 px-6 py-16 dark:bg-dark-300 sm:px-12 md:px-24">
      <div className="relative overflow-hidden rounded-3xl bg-dark-400 p-10 text-center dark:bg-dark-200 sm:p-20">
        {/* Decorative Elements */}
        <div className="absolute left-8 top-1/2 size-10 -translate-y-1/2 rounded-lg bg-primary opacity-80"></div>
        <div className="absolute right-8 top-1/2 size-10 -translate-y-1/2 rounded-lg bg-dark-300 opacity-80"></div>

        <div className="relative z-10 flex flex-col items-center space-y-6">
          {/* Avatars */}
          <div className="flex -space-x-4">
            {["/images/c1.jpg", "/images/c2.jpg", "/images/c3.jpg"].map(
              (src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`User ${index + 1}`}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-light-700 dark:border-dark-300"
                />
              )
            )}
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold leading-tight text-light-700 dark:text-light-800 sm:text-4xl">
            {t("title")}
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-lg text-light-400 dark:text-light-500">
            {t("subtitle")}
          </p>

          {/* CTA Button */}
          <Link href={routes.contactUs}>
            <Button className="rounded-full bg-primary px-8 py-4 font-semibold text-light-800 transition-all duration-300 hover:bg-[#D95F1D] hover:shadow-lg">
              {t("button")}
              <Image
                src="/icons/arrow.svg"
                width={20}
                height={20}
                alt="contact us"
                className="invert"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
