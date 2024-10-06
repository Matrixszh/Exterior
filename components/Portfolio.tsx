import React from "react";
import { useRouter } from "next/navigation";
import project1 from "../public/roofing5.webp";
import project2 from "../public/roofing5.webp";
import project3 from "../public/roofing7.jpg";
import Image from "next/image";
import Slider from "react-slick"; // Importing the react-slick carousel
import "slick-carousel/slick/slick.css"; // Importing slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Importing slick carousel theme

export const Portfolio = () => {
  const router = useRouter();

  // Settings for react-slick carousel
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images at once in desktop view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024, // On screens smaller than 1024px
        settings: {
          slidesToShow: 1, // Show 1 image at a time in mobile view
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-between gap-[10vh]">
      {/* First Section - Text and Button */}
      <div className="flex w-full flex-col md:flex-row mt-8 gap-8 px-4 md:px-16">
        {/* Text content */}
        <div className="md:w-1/2 w-full md:text-left text-center">
          <p className="text-[#FF8B00] text-lg mb-4">Our Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Browse Our Portfolio Of Previous Work
          </h2>
          <p className="text-md md:text-lg ">
            We have served a plethora of satisfied customers, our work speaks volumes of credibility.
          </p>
        </div>

        {/* Button at the bottom-right on desktop */}
        <div className="md:w-1/2 w-full hidden sm:block flex flex-col justify-end relative">
          <button
            className="border border-transparent px-14 py-2 rounded-md text-md font-medium bg-[#FF8B00] text-white hover:bg-white hover:text-[#FF8B00] hover:border-[#FF8B00] transition duration-300 absolute bottom-0 right-0 mb-4 mr-4"
            onClick={() => router.push("#contact")}
          >
            View More Work
          </button>
        </div>
      </div>

      {/* Second Section - Carousel */}
      <div className="w-full md:px-10 px-4 ">
        <Slider {...settings}>
          <div className="px-2">
            <div className="w-full h-[300px]"> {/* Set a fixed width and height for images */}
              <Image src={project1} alt="projects" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="px-2">
            <div className="w-full h-[300px]">
              <Image src={project2} alt="projects" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="px-2">
            <div className="w-full h-[300px]">
              <Image src={project3} alt="projects" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="px-2">
            <div className="w-full h-[300px]">
              <Image src={project2} alt="projects" className="w-full h-full object-cover" />
            </div>
          </div>
        </Slider>
      </div>

      {/* Button below the carousel on mobile */}
      <div className="w-full flex justify-center mt-2 md:hidden">
        <button
          className="border border-transparent px-14 py-2 rounded-md text-md font-medium bg-[#FF8B00] text-white hover:bg-white hover:text-[#FF8B00] hover:border-[#FF8B00] transition duration-300"
          onClick={() => router.push("#contact")}
        >
          View More Work
        </button>
      </div>

     
    </div>
  );
};
