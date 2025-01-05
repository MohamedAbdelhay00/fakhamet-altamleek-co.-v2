import React from "react";
import NavLinks from "./NavLinksSidebar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const Sidebar = () => {
  const isMobile = false;

  return (
    <section className="no-scrollbar overflow-hidden custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 h-screen flex flex-col items-center justify-between overflow-y-auto border-r p-6 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      {/* Logo Section */}
      <div className="w-full flex mt-20">
        <Link className="flex w-full items-center gap-1" href="/dashboard">
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          <p className="font-poppins font-bold text-[15px]">
            Fakhamet <span className="text-[#F36F21]">Al Tamleek</span>
          </p>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col justify-center items-start w-full gap-4">
        <NavLinks isMobile={isMobile} />
      </div>

      {/* Logout Button */}
      <div className="mb-20">
        <Button className="w-full py-2 px-20 text-white rounded transition">
          Logout
        </Button>
      </div>
    </section>
  );
};

export default Sidebar;
