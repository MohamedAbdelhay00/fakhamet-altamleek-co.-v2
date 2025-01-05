"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import MobileGallery from "@/components/gallery/MobileGallery";
import ImageGallery from "@/components/ImageGallery";
import TableC from "@/components/TableC";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/LocaleContext";
import axios from "axios";

interface Project {
  id: string;
  images: string[];
  startingPrice: number;
  area: number;
  developer: string;
  data: {
    neighborhood: string;
    services: string[];
  };
  baths: number;
  rooms: number;
  floors: number;
  description: string;
  size: string;
}

const ProjectDetails = () => {
  const t = useTranslations("projectDetails");
  const [isMobile, setIsMobile] = useState(false);
  const { locale } = useLocale();
  const theme = useTheme();
  const { projectId } = useParams(); // Get the project ID from the URL
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`/api/projects/${projectId}`);
        setProjectData(response.data.data); // Fetch project data dynamically
      } catch (err) {
        setError("Failed to load project data.");
      } finally {
        setLoading(false);
      }
    };

    if (projectId) fetchProject();
  }, [projectId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!projectData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>No project data found.</p>
      </div>
    );
  }

  const {
    images,
    startingPrice,
    area,
    baths,
    rooms,
    floors,
    description,
    data,
    developer,
  } = projectData;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative">
        {isMobile ? (
          <div className="relative flex w-full justify-center overflow-hidden rounded-lg pt-20">
            <MobileGallery images={images} />
          </div>
        ) : (
          <div className="relative flex w-full justify-center overflow-hidden rounded-lg pt-20">
            <ImageGallery images={images} />
          </div>
        )}
      </div>

      {/* Details Section */}
      <section className="mt-6 flex flex-col items-start justify-between md:flex-row">
        <div className="w-full">
          <h3 className="my-3 text-3xl">{startingPrice} SAR</h3>
          <Link href={`/${locale}/contact-us`}>
            <Button className="rounded-sm px-6 py-3">{t("cta")}</Button>
          </Link>
        </div>

        <div className="mt-6 w-full md:mt-0">
          <div className="my-3 flex justify-between">
            <span>{area} m²</span>
            <span>{baths} Baths</span>
            <span>{rooms} Rooms</span>
            <span>{floors} Floors</span>
          </div>
          <p className="mt-6 text-gray-600 dark:text-light-500">
            {description}
          </p>
          <div className="my-10">
            <TableC
              projectDetails={{
                area: area,
                startingPrice: startingPrice,
                developer: developer,
                neighborhood: data.neighborhood,
                numberOfProperties: 10,
                services: data.services,
                status,
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-8 text-center">
        <Link href={`/${locale}/contact-us`}>
          <Button className="rounded bg-primary px-6 py-3 text-white shadow hover:bg-primary/75">
            {t("cta")}
            <Image
              src="/icons/arrow.svg"
              width={20}
              height={20}
              alt="see more"
              className={theme.resolvedTheme === "dark" ? "" : "invert"}
            />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
