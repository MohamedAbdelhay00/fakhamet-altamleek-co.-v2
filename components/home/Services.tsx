import Image from "next/image";
import React from "react";

const services = [
  {
    id: 1,
    title: "Renovation Services",
    description:
      "Once you decide to proceed with a renovation project, we offer a simple and convenient way to get in touch with us.",
    icon: "/icons/renovation.svg",
    color: "bg-primary",
    textColor: "text-light-700",
    iconBg: "bg-light-700",
    hoverEffect: "hover:shadow-xl hover:bg-[#D95A1B]",
  },
  {
    id: 2,
    title: "Plumbing Services",
    description:
      "Our goal is not just to provide a quick fix but to address the underlying issue to prevent future problems.",
    icon: "/icons/plumbing.svg",
    color: "bg-snow dark:bg-dark-200",
    textColor: "text-dark-100 dark:text-light-700",
    iconBg: "bg-dark-100 dark:bg-primary",
    hoverEffect: "hover:scale-105 hover:shadow-lg",
  },
  {
    id: 3,
    title: "Electrical Services",
    description:
      "We will discuss any available options, provide accurate cost estimates, and answer any questions you may have.",
    icon: "/icons/electrical.svg",
    color: "bg-light-700 dark:bg-dark-200",
    textColor: "text-dark-100 dark:text-light-700",
    iconBg: "bg-light-400 dark:bg-dark-300",
    hoverEffect: "hover:scale-105 hover:shadow-lg",
  },
  {
    id: 4,
    title: "Painting & Drywall",
    description:
      "We will listen to your concerns, conduct thorough inspections, and identify any areas that may require attention.",
    icon: "/icons/painting.svg",
    color: "bg-light-700 dark:bg-dark-200",
    textColor: "text-dark-100 dark:text-light-700",
    iconBg: "bg-dark-100 dark:bg-primary",
    hoverEffect: "hover:scale-105 hover:shadow-lg",
  },
  {
    id: 5,
    title: "Wood & Flooring",
    description:
      "We will provide you with a detailed explanation of the recommended wood or flooring services.",
    icon: "/icons/flooring.svg",
    color: "bg-light-700 dark:bg-dark-200",
    textColor: "text-dark-100 dark:text-light-700",
    iconBg: "bg-dark-300 dark:bg-dark-300",
    hoverEffect: "hover:scale-105 hover:shadow-lg",
  },
];

const Services = () => {
  return (
    <section className="bg-light-800 px-6 py-16 dark:bg-dark-300 sm:px-12 md:px-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-dark-100 dark:text-light-700">
          Our Services
        </h2>
        <p className="mt-4 text-light-400 dark:text-light-500">
          We offer a wide range of services to meet your needs, ensuring high
          quality and professional work at every stage.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative flex flex-col items-center rounded-lg p-6 text-center shadow-md transition-all duration-300 ${service.color} ${service.hoverEffect}`}
          >
            {/* Icon */}
            <div
              className={`flex size-16 items-center justify-center rounded-full ${service.iconBg}`}
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={32}
                height={32}
                className={`brightness-100 ${
                  service.iconBg === "bg-snow" ? "" : "invert"
                }`}
              />
            </div>

            {/* Title */}
            <h3 className={`mt-6 text-xl font-bold ${service.textColor}`}>
              {service.title}
            </h3>

            {/* Description */}
            <p
              className={`mt-4 text-sm ${
                service.textColor === "text-light-700"
                  ? "text-light-700/90"
                  : "text-light-400 dark:text-light-500"
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
