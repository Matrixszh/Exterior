import React from "react";
import Image from "next/image";
import Slider from "react-slick"; // Importing react-slick carousel
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme

// Array containing the image data and titles
const materialsData = [
  {
    id: 1,
    imageSrc: "/material1_1.png",
    altText: "Material 1",
    title: "James Hardie",
    width: 300,
    height: 300,
  },
  {
    id: 2,
    imageSrc: "/material3.jpg",
    altText: "Material 2",
    title: "CertainTeed",
    width: 300,
    height: 300,
  },
  {
    id: 3,
    imageSrc: "/material2_1.jpg",
    altText: "Material 3",
    title: "Atlas",
    width: 300,
    height: 300,
  },
];

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
    <div className="flex flex-col items-center justify-center p-4 mt-10 md:mt-14">
      {/* Mobile Carousel */}
      <div className="w-[80vw] md:hidden ">
        <Slider {...carouselSettings}>
          {materialsData.map((material) => (
            <div key={material.id} className="flex flex-col items-center p-2">
              <div className="bg-[#FF8B00] rounded-lg flex justify-center items-center p-6">
                <Image
                  src={material.imageSrc}
                  alt={material.altText}
                  width={material.width}
                  height={material.height}
                  className="rounded-lg shadow-black shadow-lg object-contain"
                />
              </div>
              <p className="text-white text-center pt-4 text-2xl">{material.title}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:flex flex-wrap items-center justify-between gap-4 w-full max-w-7xl">
        {materialsData.map((material) => (
          <div key={material.id} className="flex flex-col items-center">
            <div className="bg-[#FF8B00] rounded-lg w-full flex justify-center items-center aspect-square p-6">
              <Image
                src={material.imageSrc}
                alt={material.altText}
                width={200}
                height={200}
                className="rounded-lg shadow-black shadow-lg object-contain"
              />
            </div>
            <p className="text-white mt-4">{material.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
