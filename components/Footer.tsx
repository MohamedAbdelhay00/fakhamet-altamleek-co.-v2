"use client";

import { useTranslations } from "next-intl";
import React from "react";

import { Input } from "@/components/ui/input";

const Footer = () => {
  const t = useTranslations("home.footer");

  const quickLinks = t.raw("quickLinks") as string[];

  // Get the current year on the server during SSR
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-400 px-6 py-8 text-light-800 dark:bg-dark-500 sm:px-12 md:px-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-bold text-light-800 dark:text-light-700">
            {t("company")}
          </h3>
          <p className="mt-2 text-light-400 dark:text-light-500">
            {t("description")}
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-light-800 dark:text-light-700">
            {t("quickLinksTitle")}
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-light-400 transition-colors hover:text-primary-500 dark:text-light-500 dark:hover:text-primary-500"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-light-800 dark:text-light-700">
            {t("contact.contactus")}
          </h3>
          <p className="text-light-400 dark:text-light-500">
            {t("contact.emailTitle")}:{" "}
            <a
              href="mailto:info@fakhametaltamleek.com"
              className="hover:underline"
            >
              info@fakhametaltamleek.com
            </a>
          </p>
          <p className="text-light-400 dark:text-light-500">
            {t("contact.phoneTitle")}: +966 123 456 789
          </p>
          <p className="text-light-400 dark:text-light-500">
            {t("contact.addressTitle")}: {t("contact.address")}
          </p>
        </div>

        {/* Newsletter */}
        <div className="rounded-lg bg-dark-400 p-6 shadow-md dark:bg-dark-300">
          <h3 className="mb-4 text-lg font-bold text-light-800 dark:text-light-700">
            {t("subscribe.title")}
          </h3>
          <p className="mb-4 text-light-400 dark:text-light-500">
            {t("subscribe.description")}
          </p>
          <div className="flex w-full max-w-md overflow-hidden rounded-full bg-light-800 dark:bg-dark-400">
            <Input
              type="email"
              placeholder={t("subscribe.placeholder")}
              className="flex-1 rounded-none border-0 bg-transparent px-4 py-6 text-dark-100 placeholder:text-light-400 focus:border-transparent focus:outline-0 dark:text-light-500"
            />
            <button className="bg-primary px-6 py-3 text-sm font-semibold text-light-800 transition-all duration-300 hover:bg-[#D95A1B] focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-dark-300">
              {t("subscribe.button")}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-light-400 dark:text-light-500">
        {t("copyright")} &copy; {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
