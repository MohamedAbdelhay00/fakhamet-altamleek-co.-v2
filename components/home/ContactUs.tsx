import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactUsSection = () => {
  return (
    <section className="bg-light-700 px-6 py-16 dark:bg-dark-300 sm:px-12 md:px-24">
      <div className="relative overflow-hidden rounded-3xl bg-dark-400 p-10 text-center dark:bg-dark-200 sm:p-20">
        {/* Decorative Elements */}
        <div className="absolute left-8 top-1/2 size-10 -translate-y-1/2 rounded-lg bg-primary opacity-80"></div>
        <div className="absolute right-8 top-1/2 size-10 -translate-y-1/2 rounded-lg bg-dark-300 opacity-80"></div>

        <div className="relative z-10 flex flex-col items-center space-y-6">
          {/* Avatars */}
          <div className="flex -space-x-4">
            {["/images/c1.jpg", "/images/c2.jpg", "/images/c3.jpg"].map(
              (src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`User ${index + 1}`}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-light-700 dark:border-dark-300"
                />
              )
            )}
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold leading-tight text-light-700 dark:text-light-800 sm:text-4xl">
            Let’s Talk About Your Future Home
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-lg text-light-400 dark:text-light-500">
            Reach out to us to explore the best real estate opportunities or to
            discuss your specific needs. We’re here to guide you every step of
            the way.
          </p>

          {/* CTA Button */}
          <Link href="/contact-us">
            <button className="rounded-full bg-primary px-6 py-3 font-semibold text-light-800 transition-all duration-300 hover:bg-[#D95F1D] hover:shadow-lg">
              Contact Us ↗
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
