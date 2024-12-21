import Image from "next/image";
import React, { useState } from "react";

import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";

const ProjectDetails = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const projectData = {
    title: "Luxury Apartments",
    description:
      "This stunning property boasts spacious interiors, breathtaking views, and premium amenities designed for luxurious living. Located in a prime location, it is perfect for families and professionals seeking a serene yet connected environment. Do not miss the chance to make this dream home yours.",
    totalApartments: 30,
    availableApartments: 12,
    soldApartments: 18,
  };

  return (
    <div className="h-full px-4 py-[100px] md:px-20">
      {/* Image Grid */}
      <section className="grid h-auto grid-cols-1 grid-rows-1 gap-2 overflow-hidden md:h-[500px] md:grid-cols-5 md:grid-rows-2">
        {/* Main Image */}
        <div className="col-span-1 row-span-1 h-[300px] bg-gray-200 bg-[url('/images/outside-frontview.jpg')] bg-cover bg-center md:col-span-3 md:row-span-2 md:h-full">
          {/* Main Image */}
        </div>

        {/* Right Images (only visible on desktop) */}
        <div className="col-start-4 col-end-5 row-start-1 row-end-2 hidden bg-gray-300 bg-[url('/images/outside-frontview.jpg')] bg-cover bg-center md:block"></div>

        <div className="col-start-4 col-end-5 row-start-2 row-end-3 hidden bg-gray-400 bg-[url('/images/outside-frontview.jpg')] bg-cover bg-center md:block"></div>

        {/* Button Section (Visible on both mobile and desktop) */}
        <div className="col-start-1 col-end-2 row-span-1 flex items-end justify-end bg-gray-500 bg-[url('/images/outside-frontview.jpg')] bg-cover bg-center md:col-start-5 md:col-end-6 md:row-span-2">
          <Button
            className="flex w-full justify-between rounded-none"
            onClick={toggleModal}
          >
            <span>See All Photos</span>{" "}
            <span>{projectData.totalApartments}</span>
          </Button>
        </div>
      </section>

      {/* Details Section */}
      <section className="mt-6 flex flex-col items-start justify-between md:flex-row">
        {/* Left Section */}
        <div className="w-full">
          <h3 className="my-3 text-3xl">{projectData.title}</h3>
          <p className="mt-6 text-gray-600">{projectData.description}</p>
          <Button className="mt-4 rounded-sm px-6 py-3">Contact Us</Button>
        </div>

        {/* Right Section */}
        <div className="mt-6 w-full md:mt-0">
          <table className="mt-6 w-full border border-gray-300">
            <tbody>
              <tr>
                <td className="p-2 font-medium">Total Apartments:</td>
                <td className="p-2">{projectData.totalApartments}</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Available Apartments:</td>
                <td className="p-2">{projectData.availableApartments}</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Sold Apartments:</td>
                <td className="p-2">{projectData.soldApartments}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          images={[
            "/images/outside-frontview.jpg",
            "/images/outside-frontview.jpg",
            "/images/outside-frontview.jpg",
          ]}
          projectData={projectData}
          onClose={toggleModal}
        />
      )}
    </div>
  );
};

export default ProjectDetails;
