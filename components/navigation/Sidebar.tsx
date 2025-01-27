import Image from "next/image";
import Link from "next/link";
import React from "react";

import NavLinks from "./NavLinksSidebar";
import { Button } from "../ui/button";

const Sidebar = () => {
  const isMobile = false;

  return (
    <section className="no-scrollbar custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky left-0 top-0 flex h-screen flex-col items-center justify-between overflow-hidden overflow-y-auto border-r p-6 dark:shadow-none max-sm:hidden lg:w-[266px]">
      {/* Logo Section */}
      <div className="mt-20 flex w-full">
        <Link className="flex w-full items-center gap-1" href="/dashboard">
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          <p className="font-poppins text-[15px] font-bold">
            Fakhamet <span className="text-[#F36F21]">Al Tamleek</span>
          </p>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex w-full flex-1 flex-col items-start justify-center gap-4">
        <NavLinks isMobile={isMobile} />
      </div>

      {/* Logout Button */}
      <div className="mb-20">
        <Button className="w-full rounded px-20 py-2 text-white transition">
          Logout
        </Button>
      </div>
    </section>
  );
};

export default Sidebar;
