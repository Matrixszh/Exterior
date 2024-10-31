import React from "react";
import { useRouter } from "next/navigation";
import project1 from "../public/portfolio.webp";
import project2 from "../public/portfolio2.webp";
import project3 from "../public/portfolio4.jpg";
import project4 from "../public/portfolio5.jpg";
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
    slidesToShow: 4, // Show 3 images at once in desktop view
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
    <div className="flex flex-col items-center justify-between gap-[10vh] p-4 ">
      {/* First Section - Text and Button */}
     

      {/* Second Section - Carousel */}
      <div className="w-full  py-4">
        <Slider {...settings}>
          <div className="md:px-2">
            <div className="w-full h-[43vh]"> {/* Set a fixed width and height for images */}
              <Image src={project1} alt="projects" className="w-full h-full " />
            </div>
          </div>
          <div className="md:px-2">
            <div className="w-full h-[43vh]">
              <Image src={project2} alt="projects" className="w-full h-full " />
            </div>
          </div>
          <div className="md:px-2">
            <div className="w-full h-[43vh]">
              <Image src={project3} alt="projects" className="w-full h-full " />
            </div>
          </div>
          <div className="md:px-2">
            <div className="w-full h-[43vh]">
              <Image src={project4} alt="projects" className="w-full h-full " />
            </div>
          </div>
        </Slider>
      </div>
      

     
    </div>
  );
};
