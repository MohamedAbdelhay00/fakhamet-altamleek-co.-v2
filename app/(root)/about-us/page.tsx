import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover"
        style={{ backgroundImage: "url('/images/about-us copy.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="relative flex h-full items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-5xl font-extrabold">About Us</h1>
            <p className="mt-2 text-lg text-gray-300">Home &gt; About Us</p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="px-6 py-16 sm:px-12 md:px-24">
        <h2 className="text-center text-3xl font-bold text-dark-100 dark:text-light-800">
          Who We Are
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div
            className="relative h-[300px] rounded-lg bg-cover bg-center shadow-lg"
            style={{ backgroundImage: "url('/images/cu.jpg')" }}
          ></div>
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              At Fakhamet Altamleek Co., we redefine real estate by delivering
              exceptional value and service. Our mission is to help clients find
              their dream homes with ease and confidence.
            </p>
            <Link href="/contact-us">
              <Button className="rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary-500">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-16 dark:bg-gradient-to-r dark:from-dark-300 dark:to-dark-400 sm:px-12 md:px-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {[
            {
              title: "Our Mission",
              description:
                "To revolutionize the real estate industry by delivering unparalleled service, quality, and innovation.",
              icon: "/icons/mission.svg",
            },
            {
              title: "Our Vision",
              description:
                "To be the leading real estate company, known for its commitment to excellence and client satisfaction.",
              icon: "/icons/eye.svg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-dark-200"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-primary">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="invert-colors"
                />
              </div>
              <h4 className="text-lg font-bold text-dark-100 dark:text-light-800">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-16 sm:px-12 md:px-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-dark-100 dark:text-light-800">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Integrity",
              description:
                "We uphold the highest standards of honesty and fairness.",
              icon: "/icons/quality.svg",
            },
            {
              title: "Innovation",
              description:
                "We bring creative solutions to the ever-changing market.",
              icon: "/icons/creativity.svg",
            },
            {
              title: "Excellence",
              description:
                "We strive for perfection in every project we undertake.",
              icon: "/icons/achievement.svg",
            },
            {
              title: "Commitment",
              description:
                "We are dedicated to meeting our clients' expectations.",
              icon: "/icons/loyalty.svg",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-primary">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={32}
                  height={32}
                  className="invert-colors"
                />
              </div>
              <h4 className="text-lg font-bold text-dark-100 dark:text-light-800">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Milestones */}
      <section className="bg-white px-6 py-16 dark:bg-dark-300 sm:px-12 md:px-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-dark-100 dark:text-light-800">
          By the Numbers
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Happy Clients",
              value: "10K+",
              icon: "/icons/users.svg",
            },
            {
              title: "Years of Experience",
              value: "25+",
              icon: "/icons/experience-.svg",
            },
            { title: "Cities Served", value: "15+", icon: "/icons/places.svg" },
            {
              title: "Properties Sold",
              value: "50K+",
              icon: "/icons/sale-sign.svg",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg bg-gray-50 p-6 shadow-md dark:bg-dark-400"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-primary">
                <Image
                  src={stat.icon}
                  alt={stat.title}
                  width={32}
                  height={32}
                  className="invert-colors"
                />
              </div>
              <h4 className="text-3xl font-bold text-dark-100 dark:text-light-800">
                {stat.value}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{stat.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-500 px-2 text-white">
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-4xl font-extrabold">Your Journey Starts Here</h2>
          <p className="mt-4 text-lg">
            Contact us to explore your dream home or next investment
            opportunity.
          </p>
          <Link href="/contact-us">
            <button className="mt-8 rounded-lg bg-white px-8 py-3 font-bold text-primary hover:scale-105">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
