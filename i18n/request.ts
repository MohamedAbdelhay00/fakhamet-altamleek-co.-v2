import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ar"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as string)) notFound();

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
