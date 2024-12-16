import Link from "next/link";
import React from "react";

const ContactUsSection = () => {
  return (
    <section className="relative bg-[#F9FAFB] dark:bg-[#121212] px-6 py-16 sm:px-12 md:px-24">
      <div className="mx-auto flex flex-col items-center space-y-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-[#012D61] dark:text-white leading-tight">
          Let’s Talk About Your Future Home
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl">
          Reach out to us to explore the best real estate opportunities or to
          discuss your specific needs. We’re here to guide you every step of the
          way.
        </p>

        {/* CTA Button */}
        <Link href="/contact-us">
          <button className="rounded-lg bg-[#F36F21] px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-[#D95A1B]">
            Contact Us ↗
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactUsSection;
