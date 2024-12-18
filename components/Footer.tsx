import React from "react";

import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-[#012D61] px-6 py-8 text-white dark:bg-[#1E1E2E] sm:px-12 md:px-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold">Fakhamet Altamleek Co.</h3>
          <p className="mt-2 text-gray-400">
            A cutting-edge real estate agent that offers a seamless and
            immersive experience for finding your dream home.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
          <p>Email: info@fakhametaltamleek.com</p>
          <p>Phone: +966 123 456 789</p>
          <p>Address: Jeddah, Saudi Arabia</p>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="mb-4 text-lg font-bold">Subscribe</h3>
          <p className="mb-2 text-gray-400">
            Join our newsletter to get updates on our latest projects.
          </p>
          <div className="flex">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-md px-3 py-2 text-black"
            />
            <button className="rounded-r-md bg-[#F36F21] px-4 py-2 text-white hover:bg-[#D95A1B]">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2024 Fakhamet Altamleek Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
