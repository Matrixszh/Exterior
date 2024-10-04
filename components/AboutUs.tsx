import React from "react";
import Image from "next/image";
import Aboutus from "../public/Frame 6.png";
import Aboutus1 from "../public/Frame 7.png";
import Aboutus2 from "../public/Frame 8.png";
import { useRouter } from "next/navigation";
import Slider from "react-slick"; // Importing the react-slick carousel
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme

export const AboutUs = () => {
  const router = useRouter();

  // Settings for react-slick carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="flex md:flex-row flex-col mt-20 md:mt-5 gap-4 md:gap-0">
      {/* About Us text for mobile */}
      <p className="text-[#FF8B00] md:block flex flex-col p-1 text-center block md:hidden">
        ABOUT US
      </p>

      {/* Desktop version with images and text */}
      <div className="w-full md:mt-12 flex md:flex-row flex-col px-4">
        {/* Mobile image carousel */}
        <div className="md:hidden w-full">
          <Slider {...carouselSettings}>
            <div className="w-full h-[300px]"> {/* Set a consistent height */}
              <Image
                src={Aboutus1}
                alt="about us1"
                className="w-full h-full object-cover" // Object-fit ensures no distortion
              />
            </div>
            <div className="w-full h-[300px]">
              <Image
                src={Aboutus2}
                alt="about us2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[300px]">
              <Image
                src={Aboutus}
                alt="about us"
                className="w-full h-full object-cover"
              />
            </div>
          </Slider>
        </div>

        {/* Desktop image grid */}
        <div className="hidden md:flex flex-col gap-4">
          <Image src={Aboutus1} alt="about us1" className="md:px-7" />
          <Image src={Aboutus2} alt="about us2" className="md:px-7" />
        </div>

        <div className="hidden md:block">
          <Image src={Aboutus} alt="about us" className="md:px-10 w-[100%] h-[82%]" />
        </div>
      </div>

      {/* Text content */}
      <div className="w-full md:mt-10 flex flex-col gap-16">
        <div className="flex flex-col gap-6 md:gap-10 p-6">
          <p className="hidden text-[#FF8B00] md:block flex flex-col p-1">
            About us
          </p>
          <p className="text-4xl md:text-6xl">
            We’re Committed to Excellence
          </p>
          <p className="text-md md:text-lg">
          Acosta Exteriors LLC provides highly trained service technicians who strictly adhere to all OSHA regulations and the company’s rigorous internal standards. Our team ensures that every project is executed safely and professionally, maintaining the highest levels of quality and compliance.
          </p>
          <p className="text-md md:text-lg">
          We specialize in acquiring distressed properties and managing every phase of new construction projects. From identifying the best property deals to handling rehab, design, and construction, we oversee each step with precision. Additionally, we assist with securing financing, offering a seamless experience from start to completion of each project. Our commitment to excellence and efficiency sets us apart in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};
