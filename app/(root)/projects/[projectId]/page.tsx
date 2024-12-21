"use client";

import Image from "next/image";
import { useState } from "react";

import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";

const ProjectDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="h-full px-4 py-[100px] md:px-20">
      {/* Image Grid */}
      <section className="grid h-auto grid-cols-1 grid-rows-1 gap-2 overflow-hidden md:h-[500px] md:grid-cols-5 md:grid-rows-2">
        <div className="col-span-1 row-span-1 h-[300px] bg-gray-200 bg-[url('/images/outside-frontview.jpg')] bg-cover bg-center md:col-span-3 md:row-span-2 md:h-full"></div>

        <div className="col-start-4 col-end-5 row-start-1 row-end-2 hidden bg-gray-300 bg-[url('/images/outside-frontview.jpg')] bg-cover bg-center md:block"></div>

        <div className="col-start-4 col-end-5 row-start-2 row-end-3 hidden bg-gray-400 bg-[url('/images/outside-frontview.jpg')] bg-cover bg-center md:block"></div>

        <div className="col-start-1 col-end-2 row-span-1 flex items-end justify-end bg-gray-500 bg-[url('/images/outside-frontview.jpg')] bg-cover bg-center md:col-start-5 md:col-end-6 md:row-span-2">
          <Button
            onClick={openModal}
            className="flex w-full justify-between rounded-none"
          >
            <span>See All Photos</span> <span>36</span>
          </Button>
        </div>
      </section>

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
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default ProjectDetails;
