import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Image from "next/image";

type Review = {
  id: number;
  name: string;
  avatar: string;
  feedback: string;
  rating: number;
};

const MobileCarousel = ({ reviews }: { reviews: Review[] }) => {
  return (
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MobileCarousel;
