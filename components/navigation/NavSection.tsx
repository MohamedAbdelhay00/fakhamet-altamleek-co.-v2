"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const NavSection = ({ scrolled }: { scrolled: boolean }) => {
  const [activeSection, setActiveSection] = useState("#home");
  const t = useTranslations("home.nav");
  const navSections = t.raw("sectionLinks") as {
    href: string;
    label: string;
  }[];
  // Section detection logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about-us", "projects", "services", "reviews"];
      let currentSection = "#home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = `#${section}`;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden gap-8 sm:flex">
      {navSections.map((navSection, index) => (
        <Link
          key={index}
          href={navSection.href}
          className={`mx-1 transition-colors hover:text-primary-500 dark:hover:text-primary-500 ${
            activeSection === navSection.href
              ? "font-extrabold text-primary-500 dark:text-primary-500"
              : scrolled
              ? "font-bold text-dark-100 dark:text-light-500"
              : "font-bold text-light-800 dark:text-light-500"
          }`}
        >
          {navSection.label}
        </Link>
      ))}
    </div>
  );
};

export default NavSection;
