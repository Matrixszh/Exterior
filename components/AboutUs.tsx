"use client"
import React from "react";
import Image from "next/image";
import Aboutus from "../public/Frame 6.png";
import Aboutus1 from "../public/Frame 7.png";
import Aboutus2 from "../public/Frame 8.png";
import { useRouter } from "next/navigation";
import Slider from "react-slick"; // Importing the react-slick carousel
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const AboutUs = () => {
  const router = useRouter();
  const tl = gsap.timeline();

  useGSAP(() => {
   gsap.from("#about_us", {
    yPercent: 20,
    duration: 0.8,
    opacity: 0,
    delay: 0.10,
    scrollTrigger: {
      trigger: "#about",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none none",
      
    }
    })
   gsap.from("#aboutus_Title", {
    yPercent: 20,
    duration: 0.8,
    opacity: 0,
    delay: 0.10,
    scrollTrigger: {
      trigger: "#about",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none none",
      
    }
    })
  })

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
    <div className="flex md:flex-row flex-col items-center justify-center  gap-8 md:gap-8 p-4">
      {/* About Us text for mobile */}
      <p className="text-[#FF8B00] md:block flex flex-col p-1 text-center block md:hidden text-3xl" id="about_us">
        ABOUT US
      </p>

      {/* Desktop version with images and text */}
      <div className="w-full  flex md:flex-row flex-col ">
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
        <div className="hidden md:flex flex-col gap-4 w-full flex items-center justify-center">
          <Image src={Aboutus1} alt="about us1" className="md:px-2 h-1/2 w-full" />
          <Image src={Aboutus2} alt="about us2" className="md:px-2 h-1/2 w-full" />
        </div>

        <div className="hidden md:flex justify-center w-full ">
          <Image src={Aboutus} alt="about us" className="object-cover w-full px-2" />
        </div>
      </div>

      {/* Text content */}
      {/* <div className="w-full  flex flex-col gap-12 items-center justify-center h-" >
        
      </div> */}
      <div className="flex flex-col md:gap-4 gap-6 pt-6 md:pt-0   w-full " >
          <p className="hidden text-[#FF8B00] md:block flex flex-col " id="about_us">
            About us
          </p>
          <p className="text-3xl md:text-5xl" id="aboutus_Title">
          A Family Business
          </p>
          <p className="text-md md:text-lg">
          Acosta Exteriors LLC provides highly trained service technicians who strictly adhere to all OSHA regulations and the company’s rigorous internal standards. Our team ensures that every project is executed safely and professionally, maintaining the highest levels of quality and compliance.
          </p>
          <p className="text-md md:text-lg">
          We specialize in acquiring distressed properties and managing every phase of new construction projects. From identifying the best property deals to handling rehab, design, and construction, we oversee each step with precision. Additionally, we assist with securing financing, offering a seamless experience from start to completion of each project. Our commitment to excellence and efficiency sets us apart in the industry.
          </p>
        </div>
    </div>
  );
};
