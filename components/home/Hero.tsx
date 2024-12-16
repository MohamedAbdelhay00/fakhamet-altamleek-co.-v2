import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";

function Hero() {
  return (
    <div className=" flex h-screen w-full flex-col justify-center gap-y-6 bg-heroLight bg-cover bg-no-repeat px-6 dark:bg-heroDark sm:px-12 md:px-24">
      {/* Content */}
      <div className="  z-10">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Modern Living in the Heart of Jeddah
        </h1>
        <p className="w-full my-5 font-open-sans text-base font-normal leading-relaxed text-gray-200 sm:w-10/12 sm:text-lg md:w-7/12 md:text-xl">
          Explore our curated selection of apartments, designed for comfort and
          elegance.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact-us">
            <Button
              size="lg"
              className="w-full bg-[#012D61] font-poppins font-normal text-white hover:bg-[#014A94] dark:bg-[#F36F21] dark:text-white dark:hover:bg-[#D95A1B] sm:w-auto"
            >
              Contact Us
            </Button>
          </Link>
          <Link href="/projects">
            <Button
              size="lg"
              className="w-full bg-[#1DA1F2] text-white hover:bg-[#0C85D0] dark:bg-[#243447] dark:text-white dark:hover:bg-[#1B2A38] sm:w-auto"
            >
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
