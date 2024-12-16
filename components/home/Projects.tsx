import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";

const projects = [
  {
    id: 1,
    title: "Luxury Apartment",
    description:
      "Experience elegance in every detail of our premium apartments.",
    image: "/images/p1.jpg",
    price: "$500,000",
    link: "/projects/luxury-apartment",
  },
  {
    id: 2,
    title: "Urban Oasis",
    description: "Modern living spaces designed for urban comfort.",
    image: "/images/p2.jpg",
    price: "$800,000",
    link: "/projects/urban-oasis",
  },
  {
    id: 3,
    title: "Skyline Tower",
    description: "Soar to new heights with our contemporary tower apartments.",
    image: "/images/outside-frontview.jpg",
    price: "$700,000",
    link: "/projects/skyline-tower",
  },
];

const Projects = () => {
  return (
    <section className="bg-white px-6 py-16 dark:bg-[#161616] sm:px-12 md:px-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-[#012D61] dark:text-white">
          Our Featured Projects
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Discover our premium collection of apartments designed to match your
          lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative h-[450px] overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:bg-[#1F1F1F] dark:shadow-[0_4px_10px_rgba(255,255,255,0.1)]"
          >
            <div className="group relative aspect-video h-4/5 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-transparent p-4">
              <p className="text-lg font-bold text-[#F36F21] dark:text-[#F36F21]">
                {project.price}
              </p>
              <Link href={project.link}>
                <Button className="rounded-lg bg-[#F36F21] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D95A1B] dark:bg-[#F36F21] dark:text-white dark:hover:bg-[#D95A1B]">
                  Learn More ↗
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
