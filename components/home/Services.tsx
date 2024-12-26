"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

import { useLocale } from "@/context/LocaleContext";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  hoverEffect: string;
  iconBg: string;
  textColor: string;
};

const Services = () => {
  const t = useTranslations("home");
  const [services, setServices] = useState<Service[]>([]);
  const { locale } = useLocale();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await import(
          `@/locales/services/services-${locale}.json`
        );
        setServices(response.default);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };

    fetchServices();
  }, [locale]);

  return (
    <section className="bg-light-800 px-6 py-16 dark:bg-dark-300 sm:px-12 md:px-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-dark-100 dark:text-light-700">
          {t("services.title")}
        </h2>
        <p className="mt-4 text-light-400 dark:text-light-500">
          {t("services.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative flex flex-col items-center rounded-lg p-6 text-center shadow-md transition-all duration-300 ${service.color} ${service.hoverEffect}`}
          >
            {/* Icon */}
            <div
              className={`flex size-16 items-center justify-center rounded-full ${service.iconBg}`}
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={32}
                height={32}
                className="brightness-100"
              />
            </div>

            {/* Title */}
            <h3 className={`mt-6 text-xl font-bold ${service.textColor}`}>
              {service.title}
            </h3>

            {/* Description */}
            <p
              className={`mt-4 text-sm ${
                service.textColor === "text-light-700"
                  ? "text-light-700/90"
                  : "text-light-700 dark:text-light-500"
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
