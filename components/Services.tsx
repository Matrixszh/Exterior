import React from "react";
import Image from "next/image";
import Aboutus from "../public/Services.png";
import { useRouter } from "next/navigation";
import copper from "../public/copper.webp"
import gutters from "../public/gutters.jpg"
import remodeling from "../public/remodeling.webp"
import windows from "../public/windows.webp"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Importing slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Importing slick carousel theme
import { IoTerminalSharp } from "react-icons/io5";

export const Services = () => {
  const router = useRouter();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 3 images at once in desktop view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    // responsive: [
    //   {
    //     breakpoint: 1024, // On screens smaller than 1024px
    //     settings: {
    //       slidesToShow: 1, // Show 1 image at a time in mobile view
    //       slidesToScroll: 1,
    //       infinite: true,
    //       autoplay: true,
    //       autoplaySpeed: 2000,
    //       dots: true,
    //     },
    //   },
    // ],
  };

  const data = [
    {
      title: 'Copper Work',
      content: 'Copper roofing is a mainstay in modern construction, sought after because of its durability and structural longevity.',
      image:'/copper.webp'
    },
    {
      title: 'Home Remodeling',
      content: 'By creating an attractive home front, you make guests feel welcome and increase the resale value if you decide to move.',
      image:'/remodeling.webp'
    },
    {
      title: 'Gutters',
      content: 'Acosta Exteriors LLC offers professional gutter services, ensuring proper drainage and protection for your home.'
      ,
      image:'/gutters.jpg'
    },
    {
      title: 'Windows',
      content: 'We also provide expert window installation and replacement, enhancing energy efficiency, security, and aesthetic appeal.'
      ,
      image:'/windows.webp'
    },
  ]

  return (
    <div className="flex flex-col md:flex-row p-4 gap-10 mt-4">
       <div className="md:w-1/2 w-full flex items-center justify-center">
        <Slider {...settings}>
          {/* Looping through each service for image carousel */}
          {data.map((item, index) => (
            <div key={index} className="w-full flex items-center justify-center h-10 ">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="object-cover "
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col gap-[6vh] w-1/2">
          {data.map((item, index) => (
            <div className="flex items-start gap-4" key={index}>
              <button className="border-2 border-[#808080] text-[#808080] rounded-full p-1 flex items-center justify-center font-bold hover:bg-[#FF8B00] hover:text-white hover:border-[#FF8B00] transition duration-300">
                {index + 1}
              </button>
              <div className="flex flex-col gap-2">
                <p className="font-medium text-xl flex items-center">
                  {item.title} <span className="ml-2">↗</span>
                </p>
                <p className="text-md">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};
