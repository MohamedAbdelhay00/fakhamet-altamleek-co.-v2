import React, { Suspense } from "react";

import Sidebar from "@/components/navigation/Sidebar";
import "../globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="background-light850_dark100 relative">
          <div className="flex">
            <Sidebar />
            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-16 max-md:pb-14 sm:px-14">
              <div className="mx-auto w-full max-w-5xl">
                <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
              </div>
            </section>
          </div>
        </main>
      </body>
    </html>
  );
}
