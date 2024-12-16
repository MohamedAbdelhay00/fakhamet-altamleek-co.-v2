import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#012D61] dark:bg-[#1E1E2E] text-white px-6 py-8 sm:px-12 md:px-24">
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
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
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
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p>Email: info@fakhametaltamleek.com</p>
          <p>Phone: +966 123 456 789</p>
          <p>Address: Jeddah, Saudi Arabia</p>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-2">
            Join our newsletter to get updates on our latest projects.
          </p>
          <div className="flex">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-md px-3 py-2 text-black"
            />
            <button className="rounded-r-md bg-[#F36F21] px-4 py-2 hover:bg-[#D95A1B] text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; 2024 Fakhamet Altamleek Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
