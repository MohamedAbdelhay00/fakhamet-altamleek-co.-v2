"use client";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "@/context/LocaleContext";

export default function ContactUs() {
  const t = useTranslations("contactUs");
  const { locale } = useLocale();
  return (
    <section className="px-10 pb-10 pt-[110px]">
      <div className="grid h-[screen] grid-cols-1 md:grid-cols-2">
        {/* Left Section - Image */}
        <div className="relative h-[30vh] md:h-full">
          <div className="p-20">
            <Image
              src="/images/contact-us.jpg"
              alt="Contact Us"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Right Section - Form & Contact Info */}
        <div className="flex flex-col justify-center py-8 dark:text-light-500 md:px-16">
          <h2 className="mb-4 text-4xl font-extrabold text-dark-100 dark:text-light-700">
            {t("title")}
          </h2>
          <p className="mb-6 leading-relaxed text-light-400 dark:text-light-500">
            {t("subtitle")}
          </p>

          {/* Form */}
          <form className="mb-8 space-y-4">
            <div>
              <label className="mb-1 block font-medium text-dark-300 dark:text-light-500">
                {t("form.fullName")}
              </label>
              <Input
                className="rounded-md border-light-400 bg-light-700 px-3 py-6 focus:ring-2 focus:ring-primary dark:border-dark-200 dark:bg-dark-400 dark:text-light-700"
                placeholder={t("form.fullNamePlaceholder")}
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-dark-300 dark:text-light-500">
                {t("form.emailAddress")}
              </label>
              <Input
                className="rounded-md border-light-400 bg-light-700 px-3 py-6 focus:ring-2 focus:ring-primary dark:border-dark-200 dark:bg-dark-400 dark:text-light-700"
                placeholder={t("form.emailPlaceholder")}
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-dark-300 dark:text-light-500">
                {t("form.message")}
              </label>
              <Textarea
                rows={3}
                className="rounded-md border-light-400 bg-light-700 focus:ring-2 focus:ring-primary dark:border-dark-200 dark:bg-dark-400 dark:text-light-700"
                placeholder={t("form.messagePlaceholder")}
              />
            </div>
            <Button
              className="w-full rounded-md bg-primary py-6 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
              type="submit"
            >
              {t("form.button")}
            </Button>
          </form>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div
                className={`${
                  locale === "ar" ? "mx-2" : ""
                } flex size-10 items-center justify-center rounded-full bg-primary hover:bg-primary/75`}
              >
                <MapPin size={20} className="text-light-700" />
              </div>
              <p className="text-dark-300 dark:text-light-500">
                {t("details.location")}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div
                className={`${
                  locale === "ar" ? "mx-2" : ""
                } flex size-10 items-center justify-center rounded-full bg-primary hover:bg-primary/75`}
              >
                <Mail size={20} className="text-light-700" />
              </div>
              <p className="text-dark-300 dark:text-light-500">
                info@company.com
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div
                className={`${
                  locale === "ar" ? "mx-2" : ""
                } flex size-10 items-center justify-center rounded-full bg-primary hover:bg-primary/75`}
              >
                <Phone size={20} className="text-light-700" />
              </div>
              <p className="text-dark-300 dark:text-light-500">
                +966-123-456-789
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
