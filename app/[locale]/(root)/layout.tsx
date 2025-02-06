import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/navigation/Navbar";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppBtn from "@/components/WhatsAppBtn";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Toaster />
      <WhatsAppBtn />
      <Footer />
    </div>
  );
}
