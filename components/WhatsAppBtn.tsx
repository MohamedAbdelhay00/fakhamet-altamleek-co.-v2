"use client";

import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

export default function WhatsAppBtn() {
  const whatsappNumber = "YOUR_PHONE_NUMBER"; // Replace with the actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700"
    >
      <div className="relative w-12 h-12 transform transition-transform duration-300 hover:scale-150">
        <Image
          src="/icons/whats-app.svg"
          objectFit="cover"
          layout="fill"
          alt="WhatsApp icon"
          className="invert p-2"
        />
      </div>
    </Link>
  );
}
