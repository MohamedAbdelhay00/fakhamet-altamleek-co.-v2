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
          className={`mx-1 transition-colors hover:text-[#F36F21] dark:hover:text-[#F36F21] ${
            activeSection === link.href
              ? "font-extrabold text-[#F36F21] dark:text-[#F36F21]"
              : scrolled
              ? "font-semibold text-gray-700 dark:text-gray-300"
              : "font-semibold text-[#FFFFFF] dark:text-gray-300"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavSection;
