import Image from "next/image"; // For avatars if needed
import Link from "next/link";
import React from "react";

const ContactUsSection = () => {
  return (
    // To be updated later**
    <section className="p-10">
      <div className="relative overflow-hidden rounded-3xl bg-[#121212] p-20 text-center dark:bg-[#121212] sm:px-12 md:px-24">
        {/* Visual Elements */}
        <div className="absolute left-8 top-1/2 size-10 -translate-y-1/2 rounded-lg bg-[#F36F21] opacity-80"></div>
        <div className="absolute right-8 top-1/2 size-10 -translate-y-1/2 rounded-lg bg-[#243447] opacity-80"></div>

        <div className="m-10 mx-auto flex flex-col items-center space-y-6">
          {/* Avatars */}
          <div className="mb-4 flex -space-x-4">
            <Image
              src="/images/c1.jpg"
              alt="User 1"
              width={48}
              height={48}
              className="rounded-full border-2 border-[#121212]"
            />
            <Image
              src="/images/c2.jpg"
              alt="User 2"
              width={48}
              height={48}
              className="rounded-full border-2 border-[#121212]"
            />
            <Image
              src="/images/c3.jpg"
              alt="User 3"
              width={48}
              height={48}
              className="rounded-full border-2 border-[#121212]"
            />
          </div>

          {/* Title */}
          <h2 className="text-4xl font-extrabold leading-tight text-white">
            Let’s Talk About Your Future Home
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-lg text-gray-400">
            Reach out to us to explore the best real estate opportunities or to
            discuss your specific needs. We’re here to guide you every step of
            the way.
          </p>

          {/* CTA Button */}
          <Link href="/contact-us">
            <button
              className="rounded-full bg-[#F36F21] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#D95F1D] hover:shadow-lg
"
            >
              Contact Us ↗
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
