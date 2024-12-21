"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Luxury Apartment",
    description:
      "Experience elegance in every detail of our premium apartments.",
    price: "$500,000",
    image: "/images/p1.jpg",
    link: "/projects/1",
  },
  {
    id: 2,
    title: "Urban Oasis",
    description: "Modern living spaces designed for urban comfort.",
    price: "$800,000",
    image: "/images/p2.jpg",
    link: "/projects/2",
  },
  {
    id: 3,
    title: "Skyline Tower",
    description: "Soar to new heights with our contemporary tower apartments.",
    price: "$700,000",
    image: "/images/p3.jpg",
    link: "/projects/3",
  },
];

export default function ProjectsPage() {
  const router = useRouter();
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[40vh] bg-cover"
        style={{ backgroundImage: "url('/images/projects-hero.jpg')" }}
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
                  src={project.image}
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
                  {project.price}
                </p>
                <Link href={project.link}>
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
