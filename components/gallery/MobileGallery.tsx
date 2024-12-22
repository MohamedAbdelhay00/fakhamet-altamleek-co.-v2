import Image from "next/image";
import React, { useState } from "react";

interface MobileGalleryProps {
  images: string[];
}

const MobileGallery: React.FC<MobileGalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full">
      {/* Active Image */}
      <div className="mb-4 flex h-[300px] w-full justify-center">
        <Image
          src={images[activeImage]}
          alt={`Active Image ${activeImage + 1}`}
          width={300}
          height={300}
          className="rounded-sm"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex justify-center space-x-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={` overflow-hidden rounded-md border ${
              index === activeImage ? "border-primary" : "border-gray-200"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileGallery;
