import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex h-screen w-full flex-col justify-center gap-y-6 bg-heroLight bg-cover bg-no-repeat px-6 dark:bg-heroDark sm:px-12 md:px-24">
      {/* Content */}
      <div className="z-10">
        <h1 className="text-3xl font-bold leading-tight text-light-800 dark:text-light-800 sm:text-4xl md:text-5xl lg:text-6xl">
          Modern Living in the Heart of Jeddah
        </h1>
        <p className="my-5 w-full font-open-sans text-base font-normal leading-relaxed text-light-500 dark:text-light-500 sm:w-10/12 sm:text-lg md:w-7/12 md:text-xl">
          Explore our curated selection of apartments, designed for comfort and
          elegance.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact-us">
            <Button
              size="lg"
              className="w-full bg-primary-500 font-poppins font-normal text-primary-foreground hover:bg-primary-500 dark:bg-primary-500 dark:text-light-800 dark:hover:bg-primary-500 sm:w-auto"
            >
              Contact Us
            </Button>
          </Link>
          <Link href="/projects">
            <Button
              size="lg"
              className="w-full bg-light-800 text-dark-100 hover:bg-light-700 dark:bg-dark-200 dark:text-light-500 dark:hover:bg-dark-300 sm:w-auto"
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
