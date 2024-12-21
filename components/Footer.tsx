import React from "react";

import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-dark-400 px-6 py-8 text-light-800 dark:bg-dark-500 sm:px-12 md:px-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-bold text-light-800 dark:text-light-700">
            Fakhamet Altamleek Co.
          </h3>
          <p className="mt-2 text-light-400 dark:text-light-500">
            A cutting-edge real estate agent that offers a seamless and
            immersive experience for finding your dream home.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-light-800 dark:text-light-700">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["About Us", "Projects", "Services", "Testimonials"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-light-400 transition-colors hover:text-primary-500 dark:text-light-500 dark:hover:text-primary-500"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-light-800 dark:text-light-700">
            Contact Us
          </h3>
          <p className="text-light-400 dark:text-light-500">
            Email:{" "}
            <a
              href="mailto:info@fakhametaltamleek.com"
              className="hover:underline"
            >
              info@fakhametaltamleek.com
            </a>
          </p>
          <p className="text-light-400 dark:text-light-500">
            Phone: +966 123 456 789
          </p>
          <p className="text-light-400 dark:text-light-500">
            Address: Jeddah, Saudi Arabia
          </p>
        </div>

        {/* Newsletter */}
        <div className="rounded-lg bg-dark-400 p-6 shadow-md dark:bg-dark-300">
          <h3 className="mb-4 text-lg font-bold text-light-800 dark:text-light-700">
            Subscribe
          </h3>
          <p className="mb-4 text-light-400 dark:text-light-500">
            Join our newsletter to get updates on our latest projects.
          </p>
          <div className="flex w-full max-w-md overflow-hidden rounded-full bg-light-800 shadow-md dark:bg-dark-400">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 py-3 text-dark-100 placeholder:text-light-400 focus:outline-none dark:text-light-500"
            />
            <button className="bg-primary px-6 py-3 text-sm font-semibold text-light-800 transition-all duration-300 hover:bg-[#D95A1B] focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-dark-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-light-400 dark:text-light-500">
        &copy; 2024 Fakhamet Altamleek Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
