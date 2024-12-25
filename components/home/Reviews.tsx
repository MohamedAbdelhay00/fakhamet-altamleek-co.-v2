"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale } from "@/context/LocaleContext";

type Review = {
  id: number;
  name: string;
  avatar: string;
  feedback: string;
  rating: number;
};

const Reviews = () => {
  const t = useTranslations("home.testimonials");
  const [reviews, setReviews] = useState<Review[]>([]);
  const { locale } = useLocale();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await import(
          `@/locales/reviews/reviews-${locale}.json`
        );
        setReviews(response.default);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };

    fetchServices();
  }, [locale]);
  return (
    <section className="w-full bg-light-700 px-6 py-16 dark:bg-dark-300 sm:px-12 md:px-24 ">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-dark-100 dark:text-light-700">
          {t("title")}
        </h2>
        <p className="mt-4 text-light-400 dark:text-light-500">
          {t("subtitle")}
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden grid-cols-2 gap-10 sm:grid lg:grid-cols-2">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="relative rounded-lg bg-light-800 p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-dark-200"
          >
            {/* Avatar */}
            <div className="absolute -top-8 left-1/2 flex size-20 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border-4 border-light-700 dark:border-dark-300">
              <Image
                src={review.avatar}
                alt={review.name}
                width={100}
                height={100}
                className="size-full rounded-lg object-cover"
              />
            </div>
            {/* Content */}
            <div className="mt-10 text-center">
              <p className="text-light-400 dark:text-light-500">
                {review.feedback}
              </p>
              <h4 className="mt-4 font-bold text-dark-100 dark:text-light-700">
                {review.name}
              </h4>
              {/* Star Ratings */}
              <div className="mt-2 flex justify-center gap-1">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className="text-primary">
                    ★
                  </span>
                ))}
              </div>
            </div>
            {/* Quote Icon */}
            <div className="absolute bottom-4 right-4 text-6xl text-light-400 dark:text-dark-300">
              “
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="flex items-center justify-center sm:hidden">
        <Carousel
          orientation="vertical"
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent className="-mt-1 h-[250px]">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="pt-1 md:basis-1/2">
                <div className="rounded-lg bg-light-800 p-6 shadow-md dark:bg-dark-200">
                  <div className="mb-4 flex items-center">
                    <div className="flex size-16 items-center justify-center overflow-hidden rounded-full bg-light-400 dark:bg-dark-300">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>

                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-dark-100 dark:text-light-700">
                        {review.name}
                      </h3>
                      <p className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <span key={i} className="text-primary">
                            ★
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <p className="text-light-400 dark:text-light-500">
                    {review.feedback}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Carousel Buttons */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
