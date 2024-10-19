import React from "react";
import Image from "next/image";
import CertificationImage from "../public/certificate.webp"; // Update with the actual image path

export const Certification = () => {
  return (
    <div className="bg-[#004692] flex flex-col items-center justify-center mt-12 md:mt-16 px-4 md:px-12">
      {/* Title Section */}
      <div className="text-center mt-4 mb-6 md:mb-12">
        <p className="text-[#FF8B00] text-sm md:text-base">Certifications</p>
        <h1 className="sm:block hidden text-white text-3xl md:text-5xl font-bold">We Are Certified</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-7xl">
        {/* Certification Image with Even Orange Background */}
        <div className="bg-[#FF8B00] rounded-lg flex justify-center items-center w-full md:w-1/2 aspect-square p-6 mb-3">
          <div className="w-[100%] h-[100%] rounded-lg flex items-center justify-center">
            <Image
              src={CertificationImage}
              alt="Certification"
              layout="intrinsic"
              objectFit="contain"
              className="rounded-lg shadow-black shadow-lg"
            />
          </div>
        </div>
        <h1 className="md:hidden text-white text-3xl md:text-5xl font-bold">We Are Certified</h1>
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-2 md:gap-10 p-4 md:p-8">
          <p className="text-white text-center text-xl md:text-3xl leading-relaxed">
            Our company has certifications from important companies. It adheres
            to all OSHA regulations and is certified by all important companies.
          </p>
        </div>
      </div>
    </div>
  );
};
