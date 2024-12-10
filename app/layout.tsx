import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});
const openSans = localFont({
  src: "./fonts//Open-sans/OpenSans-VariableFont_wdth,wght.ttf",
  variable: "--font-open-sans",
  weight: "400 700",
});
const cairo = localFont({
  src: "./fonts/Cairo/Cairo-VariableFont_slnt,wght.ttf",
  variable: "--font-cairo",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Fakhamet Al Tamleek Co.",
  description: "A Real Estate Company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${openSans.variable} ${cairo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
