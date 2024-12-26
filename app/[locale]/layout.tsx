import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

import "../globals.css";
import ROUTES from "@/constants/routes";
import { LocaleProvider } from "@/context/LocaleContext";
import ThemeProvider from "@/context/Theme";

const poppins = localFont({
  src: [
    {
      path: "../fonts/Poppins/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Poppins/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Poppins/Poppins-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Poppins/Poppins-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});
const openSans = localFont({
  src: "../fonts/Open-sans/OpenSans-VariableFont_wdth,wght.ttf",
  variable: "--font-open-sans",
  weight: "400 700",
});
const cairo = localFont({
  src: "../fonts/Cairo/Cairo-VariableFont_slnt,wght.ttf",
  variable: "--font-cairo",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Fakhamet Al Tamleek Co. | Premium Real Estate Solutions",
  description:
    "Explore premium real estate opportunities with Fakhamet Al Tamleek Co. We specialize in high-quality apartment listings in Jeddah, offering luxurious and modern living spaces tailored to your needs. Discover your dream home today.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch {
    notFound();
  }
  const routes = ROUTES(locale);
  return (
    <html
      suppressHydrationWarning
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body
        className={`${poppins.variable} ${openSans.variable} ${cairo.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider locale={locale} routes={routes}>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
