"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Al fyhaa",
    description:
      "Experience elegance in every detail of our premium apartments. Located in the heart of the city, offering stunning views and top-notch amenities.",
    price: "500,000",
    area: "150 - 200 m²",
    rooms: "3 - 5",
    apartments: 20,
    status: "Finished",
    availability: "Available",
    startingPrice: "500,000",
    amenities: [
      "Swimming Pool",
      "Gym",
      "Clubhouse",
      "Underground Parking",
      "24/7 Security",
    ],
    coverImage: "/images/frontview2.jpg",
    images: [
      "/images/fontview.jpg",
      "/images/apartment1.jpg",
      "/images/apartment2.jpg",
    ],
    location: "Downtown",
    link: "/projects/1",
  },
  {
    id: 2,
    title: "Al Fisalyh",
    description:
      "Modern living spaces designed for urban comfort. A serene escape in the middle of the bustling city.",
    price: "800,000",
    area: "100 - 150 m²",
    rooms: "2 - 4",
    apartments: 15,
    status: "Under Construction",
    availability: "Limited",
    startingPrice: "800,000",
    amenities: [
      "Rooftop Garden",
      "Jogging Tracks",
      "Pet-friendly Zones",
      "High-speed Elevators",
    ],
    coverImage: "/images/newHero.jpg",
    images: [
      "/images/fontview1.jpg",
      "/images/apartment3.jpg",
      "/images/apartment4.jpg",
    ],
    location: "Midtown",
    link: "/projects/2",
  },
  {
    id: 3,
    title: "Al Safa",
    description:
      "Soar to new heights with our contemporary tower apartments. Enjoy panoramic city views and luxurious interiors.",
    price: "700,000",
    area: "120 - 180 m²",
    rooms: "2 - 3",
    apartments: 25,
    status: "Finished",
    availability: "Available",
    startingPrice: "700,000",
    amenities: [
      "Sky Lounge",
      "Infinity Pool",
      "Kids Play Area",
      "24/7 Concierge",
    ],
    coverImage: "/images/outside.jpg",
    images: [
      "/images/outside.jpg",
      "/images/apartment2.jpg",
      "/images/apartment4.jpg",
    ],
    location: "Uptown",
    link: "/projects/3",
  },
];

export default function ProjectsPage() {
  const router = useRouter();
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/outside-frontview.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative flex h-full items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-5xl font-extrabold">Our Projects</h1>
            <p className="mt-2 text-lg text-gray-300">
              Discover our premium collection of apartments.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="bg-light-700 px-6 py-16 dark:bg-dark-300 sm:px-12 md:px-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-dark-100 dark:text-light-700">
            Our Featured Projects
          </h2>
          <p className="mt-4 text-light-400 dark:text-light-500">
            Discover our premium collection of apartments designed to match your
            lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-[450px] overflow-hidden rounded-lg bg-light-700 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:bg-dark-200"
            >
              <div className="group relative aspect-video h-4/5 w-full overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-dark-400 via-dark-300/50 to-transparent p-4 dark:from-dark-300 dark:via-dark-200/50">
                  <h3 className="text-xl font-bold text-light-700">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-light-700/90">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between bg-transparent p-4">
                <p className="text-lg font-bold text-primary">
                  {project.price} SAR
                </p>
                <Link href={`/projects/${project.id}`}>
                  <Button
                    onClick={() => router.push(`projects/2/modal`)}
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-light-700 transition-all duration-300 hover:bg-[#D95A1B] dark:bg-primary dark:hover:bg-[#D95A1B]"
                  >
                    Learn More ↗
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
