"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhatsAppBtn() {
  const whatsappNumber = "966544934745";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex size-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700"
    >
      <div className="relative size-12 transition-transform duration-300 hover:scale-150">
        <Image
          src="/icons/whats-app.svg"
          objectFit="cover"
          layout="fill"
          alt="WhatsApp icon"
          className="p-2 invert"
        />
      </div>
    </Link>
  );
}
