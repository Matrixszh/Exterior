import React from "react";
import Image from "next/image";
import CertificationImage from "../public/certificate.webp"; // Update with the actual image path

export const Certification = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center  md:mt-10 mt-12">
      {/* Title Section */}
      

      {/* Content Section */}
      <div className="flex flex-col  items-center justify-between gap-8 w-full max-w-7xl">
        {/* Certification Image with Even Orange Background */}
        <div className="bg-[#FF8B00] rounded-lg flex justify-center items-center w-full md:w-1/2 aspect-square p-6 mb-3">
          <div className="w-[100%] h-[100%] rounded-lg flex items-center justify-center">
            <Image
              src={CertificationImage}
              alt="Certification"
              
              className="rounded-lg shadow-black shadow-lg object-contain"
            />
          </div>
        </div>
        <h1 className="md:hidden text-white text-3xl md:text-5xl font-bold">We Are Certified</h1>
        {/* Text Content */}
        <div className="w-full md:w-[50%] flex flex-col justify-center gap-2 md:gap-10 ">
          <p className="text-white text-center text-lg md:text-2xl leading-normal pb-2">
            Our company has certifications from important companies. It adheres
            to all OSHA regulations and is certified by all important companies.
          </p>
        </div>
      </div>
    </div>
  );
};
