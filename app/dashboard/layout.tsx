import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>sidebar</aside>
      <main>{children}</main>
    </div>
  );
}
