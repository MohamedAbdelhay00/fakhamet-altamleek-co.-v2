"use client";
import React, { useState } from "react";

const ImageGallery = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="flex h-[500px] w-full gap-4 overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(0)}
          className={`relative transition-all duration-1000 ease-in-out ${
            activeIndex === index
              ? "flex-[4] grayscale-0"
              : "flex-[1.5] grayscale hover:grayscale-0"
          }`}
          style={{
            minWidth: "30px",
            maxWidth: activeIndex === index ? "1000px" : "100px",
          }}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="size-full rounded-none object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;