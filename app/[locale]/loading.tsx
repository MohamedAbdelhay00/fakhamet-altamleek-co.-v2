"use client";

import Image from "next/image";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex h-screen animate-pulse items-center justify-center bg-light-800 dark:bg-dark-100">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Logo with Spin Animation */}
        <div className="">
          <Image
            src="/images/logo.png" // Replace with your logo path
            alt="Company Logo"
            width={200}
            height={200}
          />
        </div>
        {/* Company Name */}
        <h1 className="text-2xl font-bold text-dark-100 dark:text-light-500">
          Fakhamet AlTamleek Co
        </h1>
      </div>
    </div>
  );
};

export default Loading;
