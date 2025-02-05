"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader"; // Import the spinner component

import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/LocaleContext";

const Projects = () => {
  type Project = {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
    link: string;
  };

  type ProjectDetails = {
    title: string;
    subtitle: string;
    button: string;
    cards: Project[];
  };

  const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true); // Add loading state
  const { locale, routes } = useLocale();

  // ... existing code ...

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch locales data
        const localesResponse = await import(
          `@/locales/projects/projects-${locale}.json`
        );
        const localesData = localesResponse.default.projectDetails;

        // Fetch projects from static JSON file
        const projectsResponse = await import(`@/constants/projects.json`);
        const projectsFromJson = projectsResponse.default.data.map(
          (project: {
            _id: string;
            data: {
              ar: {
                title: string;
                description: string;
              };
              en: {
                title: string;
                description: string;
              };
            };
            startingPrice: number;
            coverImage: string;
          }) => ({
            id: project._id,
            title:
              locale === "ar" ? project.data.ar.title : project.data.en.title,
            description:
              locale === "ar"
                ? project.data.ar.description
                : project.data.en.description,
            price: `${project.startingPrice} SAR`,
            image: project.coverImage,
            link: project._id,
          })
        );

        // Combine locale data with the projects data
        setProjectDetails({
          ...localesData,
          cards: projectsFromJson,
        });
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [locale]);

  // ... existing code ...

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  if (!projectDetails) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-light-700 px-6 pb-16 pt-[120px] dark:bg-dark-300 sm:px-12 md:px-24">
      {/* Title and Subtitle */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-dark-100 dark:text-light-700">
          {projectDetails.title}
        </h2>
        <p className="mt-4 text-light-400 dark:text-light-500">
          {projectDetails.subtitle}
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectDetails.cards.map((project) => (
          <div
            key={project.id}
            className="relative h-[450px] overflow-hidden rounded-lg bg-light-700 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:bg-dark-200"
          >
            {/* Image Section */}
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

            {/* Price and Button */}
            <div className="flex items-center justify-between bg-transparent p-4">
              <p className="text-lg font-bold text-primary">{project.price}</p>
              <Link href={`${routes.projects}/${project.link}`}>
                <Button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-light-700 transition-all duration-300 hover:bg-[#D95A1B] dark:bg-primary dark:hover:bg-[#D95A1B]">
                  {projectDetails.button}
                  <Image
                    src="/icons/arrow.svg"
                    width={20}
                    height={20}
                    alt="see more"
                    className="invert"
                  />
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
