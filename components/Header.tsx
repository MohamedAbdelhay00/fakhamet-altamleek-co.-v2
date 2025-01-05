"use client";

import React from "react";

interface HeaderProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonAction?: () => void;
  buttonHref?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  description,
  buttonLabel,
  buttonAction,
  buttonHref,
}) => {
  const handleButtonClick = () => {
    if (buttonAction) {
      buttonAction();
    }
  };

  return (
    <div className="mb-8 flex flex-col items-start justify-between gap-6 rounded-lg bg-gradient-to-r from-black to-gray-700 p-6 text-white md:flex-row">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
      {buttonLabel && (
        <div>
          {buttonHref ? (
            <a
              href={buttonHref}
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-100"
            >
              {buttonLabel}
            </a>
          ) : (
            <button
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-100"
              onClick={handleButtonClick}
            >
              {buttonLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
