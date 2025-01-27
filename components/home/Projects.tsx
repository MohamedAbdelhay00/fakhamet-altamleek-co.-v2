"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

import { useLocale } from "@/context/LocaleContext";

import { Button } from "../ui/button";

type ProjectData = {
  en: {
    title: string;
    description: string;
  };
  ar: {
    title: string;
    description: string;
  };
};

type Project = {
  _id: number;
  title: string;
  description: string;
  price: string;
  link: string;
  coverImage: string;
  data: ProjectData;
};

const Projects: React.FC = () => {
  const t = useTranslations("projects");
  const { locale, routes } = useLocale();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`/api/projects`);
        const data = await response.json();

        setProjects(data.data);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };

    fetchProjects();
  }, [locale]);

  return (
    <section className="bg-light-800 px-6 py-16 dark:bg-dark-100 sm:px-12 md:px-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-dark-100 dark:text-light-700">
          {t("title")}
        </h2>
        <p className="mt-4 text-light-400 dark:text-light-500">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project._id}
            className="relative h-[450px] overflow-hidden rounded-lg bg-light-700 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:bg-dark-200"
          >
            <div className="group relative aspect-video h-4/5 w-full overflow-hidden">
              <Image
                src={project?.coverImage}
                alt={project.data?.en.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-dark-400 via-dark-300/50 to-transparent p-4 dark:from-dark-300 dark:via-dark-200/50">
                <h3 className="text-xl font-bold text-light-700">
                  {locale === "en"
                    ? project?.data?.en.title
                    : project.data?.ar.title}
                </h3>
                <p className="mt-1 text-sm text-light-700/90">
                  {locale === "en"
                    ? project?.data?.en.description
                    : project.data?.ar.description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-transparent p-4">
              <p className="text-lg font-bold text-primary">{project.price}</p>
              <Link href={`${routes.projects}/${project._id}`}>
                <Button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-light-700 transition-all duration-300 hover:bg-[#D95A1B] dark:bg-primary dark:hover:bg-[#D95A1B]">
                  {t("button")}
                  <Image
                    src="/icons/arrow.svg"
                    width={20}
                    height={20}
                    alt="See Projects"
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
