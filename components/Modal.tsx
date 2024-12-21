"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Modal = ({ closeModal }: { closeModal: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(1); // Default to the first slide
  const images = [
    "/images/outside-frontview.jpg",
    "/images/outside-frontview.jpg",
    "/images/outside-frontview.jpg",
  ];

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 md:p-0">
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-white shadow-lg md:max-w-4xl md:rounded-lg"
      >
        {/* Close Button */}
        <button
          className="absolute right-4 top-4 z-50 text-xl text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          ✕
        </button>

        {/* Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={1}
          className="h-[300px] rounded-t-lg md:h-[500px]"
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Footer Section */}
        <div className="flex items-center justify-center bg-gray-100 py-3 text-gray-600">
          <span>
            {currentSlide}/{images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
