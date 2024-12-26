"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import MobileGallery from "@/components/gallery/MobileGallery";
import ImageGallery from "@/components/ImageGallery";
import TableC from "@/components/TableC";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/LocaleContext";

const ProjectDetails = () => {
  const t = useTranslations("projectDetails");
  const [isMobile, setIsMobile] = useState(false);
  const { locale } = useLocale();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = t.raw("images") as string[];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative">
        {isMobile ? (
          <div className="relative flex w-full justify-center overflow-hidden rounded-lg pt-20">
            <MobileGallery images={images} />
          </div>
        ) : (
          <div className="relative flex w-full justify-center overflow-hidden rounded-lg pt-20">
            <ImageGallery images={images} />
          </div>
        )}
      </div>

      {/* Details Section */}
      <section className="mt-6 flex flex-col items-start justify-between md:flex-row">
        <div className="w-full">
          <h3 className="my-3 text-3xl">{t("price")}</h3>
          <Link href={`/${locale}/contact-us`}>
            <Button className="rounded-sm px-6 py-3">{t("cta")}</Button>
          </Link>
        </div>

        <div className="mt-6 w-full md:mt-0">
          <div className="my-3 flex justify-between">
            <span>{t("size")}</span>
            <span>{t("baths")}</span>
            <span>{t("beds")}</span>
            <span>{t("floors")}</span>
          </div>
          <p className="mt-6 text-gray-600 dark:text-light-500">
            {t("description")}
          </p>
          <div className="my-10">
            <TableC />
          </div>
        </div>
      </section>
      {/* CTA */}
      <div className="mt-8 text-center">
        <Link href={`/${locale}/contact-us`}>
          <Button className="rounded bg-primary px-6 py-3 text-white shadow hover:bg-primary/75">
            {t("cta")}
            <Image
              src="/icons/arrow.svg"
              width={20}
              height={20}
              alt="see more"
              className="invert"
            />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
