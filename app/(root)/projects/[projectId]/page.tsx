// src/pages/project-details.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import MobileGallery from "@/components/gallery/MobileGallery";
import ImageGallery from "@/components/ImageGallery";
import TableC from "@/components/TableC";
import { Button } from "@/components/ui/button";

const ProjectDetails = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const propertyData = {
    title: "Apartment for sale in Garden Lakes with 1 Bedroom",
    subtitle: "in 6th of October City by Hyde Park",
    prices: { start: 6280000, max: 6680000 },
    size: { min: 71, max: 72 },
    details: {
      beds: 1,
      baths: 1,
      finishing: "Not Finished",
      delivery: "2027",
      saleType: "Developer Sale",
    },
    paymentPlan: {
      downPayment: 314000,
      monthly: 58880,
      years: 8,
    },
    amenities: [
      "Clubhouse",
      "Underground Parking",
      "Commercial Strip",
      "Business Hub",
      "Outdoor Pools",
      "Bicycle Lanes",
      "Jogging Trail",
    ],
    description:
      "A 1 bedroom Apartment in Garden Lakes by Hyde Park. The apartment size is 71 m² with 1 bathroom. This property will be ready for delivery not-finished by 2027-06-30.",
    images: [
      "/images/outside.jpg",
      "/images/outside2.jpg",
      "/images/apartment1.jpg",
      "/images/apartment2.jpg",
      "/images/apartment3.jpg",
      "/images/apartment4.jpg",
      "/images/apartment5.jpg",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative">
        {isMobile ? (
          <div className="relative flex w-full justify-center overflow-hidden rounded-lg pt-20">
            <MobileGallery images={propertyData.images} />
          </div>
        ) : (
          <div className="relative flex w-full justify-center overflow-hidden rounded-lg pt-20">
            <ImageGallery images={propertyData.images} />
          </div>
        )}
      </div>

      {/* Details Section */}
      <section className="mt-6 flex flex-col items-start justify-between md:flex-row">
        <div className="w-full">
          <h3 className="my-3 text-3xl">500,000 SAR</h3>
          <Button className="rounded-sm px-6 py-3">Contact Us</Button>
        </div>

        <div className="mt-6 w-full md:mt-0">
          <div className="my-3 flex justify-between">
            <span>
              <span className="text-3xl">243</span> m²
            </span>
            <span>
              <span className="text-3xl">3</span> Baths
            </span>
            <span>
              <span className="text-3xl">8</span> Beds
            </span>
            <span>
              <span className="text-3xl">2</span> Floors
            </span>
          </div>
          <div className="flex flex-wrap">
            <div className="mr-5 mt-5 flex items-center">
              <Image
                src="/icons/electrical.svg"
                width={25}
                height={25}
                alt="Sea view"
              />
              <span>Sea view</span>
            </div>
            <div className="mr-5 mt-5 flex items-center">
              <Image
                src="/icons/electrical.svg"
                width={25}
                height={25}
                alt="Mountain view"
              />
              <span>Mountain view</span>
            </div>
            <div className="mr-5 mt-5 flex items-center">
              <Image
                src="/icons/electrical.svg"
                width={25}
                height={25}
                alt="City view"
              />
              <span>City view</span>
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            This stunning property boasts spacious interiors, breathtaking
            views, and premium amenities designed for luxurious living. Located
            in a prime location, it is perfect for families and professionals
            seeking a serene yet connected environment. Do not miss the chance
            to make this dream home yours.
          </p>
          <div className="my-10">
            <TableC />
          </div>
        </div>
      </section>

      {/* Amenities */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800">Amenities</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {propertyData.amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-700"
            >
              {/* Replace `Icon` with your desired icon component */}
              <span className="text-2xl">
                {/* Add an appropriate icon here */}
              </span>
              <span className="text-sm font-medium">{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <Link href={`/contact-us`}>
          <Button className="rounded bg-primary px-6 py-3 text-white shadow hover:bg-primary/75">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
