"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavSection = ({ scrolled }: { scrolled: boolean }) => {
  const [activeSection, setActiveSection] = useState("#home");

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
      {[
        { href: "#home", label: "Home" },
        { href: "#about-us", label: "About Us" },
        { href: "#projects", label: "Projects" },
        { href: "#services", label: "Services" },
        { href: "#reviews", label: "Reviews" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`mx-1 transition-colors hover:text-primary-500 dark:hover:text-primary-500 ${
            activeSection === link.href
              ? "font-extrabold text-primary-500 dark:text-primary-500"
              : scrolled
              ? "font-semibold text-dark-100 dark:text-light-500"
              : "font-semibold text-light-800 dark:text-light-500"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavSection;
