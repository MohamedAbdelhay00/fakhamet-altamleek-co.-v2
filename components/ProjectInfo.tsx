import React from "react";

interface ProjectDetailsProps {
  projectName: string;
  location: string;
  developer: string;
  price: { start: number; resaleStart: number };
  area: { min: number; max: number };
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  description: string;
}

const ProjectInfo = ({
  projectName,
  location,
  developer,
  price,
  area,
  bedrooms,
  bathrooms,
  amenities,
  description,
}: ProjectDetailsProps) => {
  return (
    <div className="project-info">
      <h1>{projectName}</h1>
      <p>{location}</p>
      <p>Developer: {developer}</p>
      <p>
        Starting Price: <strong>{price.start} EGP</strong>
      </p>
      <p>
        Resale Price: <strong>{price.resaleStart} EGP</strong>
      </p>
      <p>
        Area: {area.min} - {area.max} m²
      </p>
      <p>Bedrooms: {bedrooms}</p>
      <p>Bathrooms: {bathrooms}</p>
      <div className="amenities">
        {amenities.map((amenity, index) => (
          <span key={index}>{amenity}</span>
        ))}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ProjectInfo;
