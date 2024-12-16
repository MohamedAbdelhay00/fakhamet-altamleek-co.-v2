import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";

const AboutUs = () => {
  return (
    <section className="bg-[#FAFAFA] px-6 py-16 dark:bg-[#121212] sm:px-12 md:px-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Side: Heading and Stats */}
        <div className="flex flex-col">
          <h2 className="mb-12 text-3xl font-bold text-[#012D61] dark:text-white">
            Your Trusted Real Estate Advisors
          </h2>
          <div className=" grid grow grid-cols-2 gap-6">
            {/* Stats Cards */}
            <div className="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-[#1E1E1E]">
              <p className="text-2xl font-bold text-[#012D61] dark:text-white">
                17K+
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Satisfied Customers
              </p>
            </div>
            <div className="rounded-lg bg-[#012D61] p-6 text-center text-white shadow-sm">
              <p className="text-2xl font-bold">25+</p>
              <p>Years of Experience</p>
            </div>
            <div className="rounded-lg bg-[#F4F4F4] p-6 text-center shadow-sm dark:bg-[#1E1E1E]">
              <p className="text-2xl font-bold text-[#012D61] dark:text-white">
                150+
              </p>
              <p className="text-gray-500 dark:text-gray-400">Award Winning</p>
            </div>
            <div className="rounded-lg bg-[#F4F4F4] p-6 text-center shadow-sm dark:bg-[#1E1E1E]">
              <p className="text-2xl font-bold text-[#012D61] dark:text-white">
                25+
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Collections of Property
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Text and Image */}
        <div className="flex flex-col justify-between">
          <div className=" mb-9">
            <p className=" text-gray-600 dark:text-gray-300">
              A cutting-edge real estate agent that offers a seamless and
              immersive experience for finding your dream home in the heart of
              the city.
            </p>
          </div>
          <div className="flex gap-x-2 rounded-lg border-white bg-white p-3 dark:border dark:border-[#2A2A2A] dark:bg-[#1F1F1F]">
            <div className=" flex w-6/12 flex-col items-start justify-center gap-y-2">
              <p className="text-gray-600 dark:text-gray-300">
                We have witnessed the ever-evolving landscape of the real estate
                market and become a trusted partner by thousands of clients.
              </p>
              <Link href="/about-us">
                <Button className="rounded-lg bg-[#F36F21] px-6 py-3 transition-all duration-300 hover:bg-[#D95A1B] dark:bg-[#F36F21] dark:text-white dark:hover:bg-[#D95A1B]">
                  See More ↗
                </Button>
              </Link>
            </div>
            <div className=" h-[300px] w-6/12">
              <Image
                src="/images/about-us.jpg"
                width={300}
                height={300}
                alt="Forest Path"
                className=" size-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;