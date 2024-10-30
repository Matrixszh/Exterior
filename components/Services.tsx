import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import modules from the correct path
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Autoplay module added for infinite loop

export const Services = () => {
  const data = [
    {
      title: "Copper Work",
      content:
        "Copper roofing is a mainstay in modern construction, sought after because of its durability and structural longevity.",
      image: "/copper.webp", // Ensure the image is in the 'public' folder
    },
    {
      title: "Home Remodeling",
      content:
        "By creating an attractive home front, you make guests feel welcome and increase the resale value if you decide to move.",
      image: "/remodeling.webp",
    },
    {
      title: "Gutters",
      content:
        "Acosta Exteriors LLC offers professional gutter services, ensuring proper drainage and protection for your home.",
      image: "/gutters.jpg",
    },
    {
      title: "Windows",
      content:
        "We also provide expert window installation and replacement, enhancing energy efficiency, security, and aesthetic appeal.",
      image: "/windows.webp",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row p-4 gap-10 mt-4">
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true} // Enables infinite looping
          autoplay={{
            delay: 2500,
            disableOnInteraction: false, // Continues autoplay even after user interaction
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]} // Include Autoplay module
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex items-center justify-center md:h-[75vh] h-[60vh]">
                <Image
                  src={item.image}
                  alt={item.title}
                  // layout="responsive"
                  width={800}
                  height={600}
                  className="lg:object-contain w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-[6vh] w-full md:w-1/2">
        {data.map((item, index) => (
          <div className="flex items-start  gap-[1vw] " key={index}>
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
