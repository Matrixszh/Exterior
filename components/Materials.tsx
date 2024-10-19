import React from "react";
import Image from "next/image";
import Material3 from "../public/material2_1.jpg";
import Material2 from "../public/material3.jpg";
import Material1 from "../public/material1_1.png";
import Slider from "react-slick"; // Importing react-slick carousel
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme

export const Material = () => {
  // Settings for the mobile carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-[#004692] flex flex-col items-center justify-center mt-12 md:mt-16 px-4 md:px-12">
      {/* Title Section */}
      <div className="text-center mt-4 mb-6 md:mb-12">
        <p className="text-[#FF8B00] text-sm md:text-base">Materials</p>
        <h1 className="text-white text-3xl md:text-5xl font-bold">Materials We Use</h1>
      </div>


      <div className="w-full md:hidden mb-8">
        <Slider {...carouselSettings}>
          <div className="flex flex-col items-center">
            <div className="bg-[#FF8B00] rounded-lg w-full flex justify-center items-center aspect-square p-6">
              <Image
                src={Material1}
                alt="Material 1"
                width={400}
                height={400}
                className="rounded-lg shadow-black shadow-lg object-contain"
              />
            </div>
            <p className="text-white mt-4">James Hardie</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#FF8B00] rounded-lg w-full flex justify-center items-center aspect-square p-6">
              <Image
                src={Material2}
                alt="Material 2"
                width={400}
                height={400}
                className="rounded-lg shadow-black shadow-lg object-contain"
              />
            </div>
            <p className="text-white mt-4">CertainTeed</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#FF8B00] rounded-lg w-full flex justify-center items-center aspect-square p-6">
              <Image
                src={Material3}
                alt="Material 3"
                width={400}
                height={400}
                className="rounded-lg shadow-black shadow-lg object-contain"
              />
            </div>
            <p className="text-white mt-4">Atlas</p>
          </div>
        </Slider>
      </div>


      <div className="hidden md:flex flex-wrap items-center justify-between gap-4 w-full max-w-7xl">
        <div className="flex flex-col items-center">
          <div className="bg-[#FF8B00] rounded-lg w-full flex justify-center items-center aspect-square p-6">
            <Image
              src={Material1}
              alt="Material 1"
              width={200}
              height={200}
              className="rounded-lg shadow-black shadow-lg object-contain"
            />
          </div>
          <p className="text-white mt-4">James Hardie</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#FF8B00] rounded-lg w-full flex justify-center items-center aspect-square p-6">
            <Image
              src={Material2}
              alt="Material 2"
              width={200}
              height={200}
              className="rounded-lg shadow-black shadow-lg object-contain"
            />
          </div>
          <p className="text-white mt-4">CertainTeed</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#FF8B00] rounded-lg w-full flex justify-center items-center aspect-square p-6">
            <Image
              src={Material3}
              alt="Material 3"
              width={200}
              height={200}
              className="rounded-lg shadow-black shadow-lg object-contain"
            />
          </div>
          <p className="text-white mt-4">Atlas</p>
        </div>
      </div>
    </div>
  );
};
