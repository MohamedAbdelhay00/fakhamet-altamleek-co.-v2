"use client";
import { createContext, useContext } from "react";

const LocaleContext = createContext<{ locale: string; routes: any }>({
  locale: "en",
  routes: {},
});

export const LocaleProvider = ({
  children,
  locale,
  routes,
}: {
  children: React.ReactNode;
  locale: string;
  routes: any;
}) => {
  return (
    <LocaleContext.Provider value={{ locale, routes }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
