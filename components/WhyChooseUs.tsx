import React from "react";
import Slider from "react-slick"; // For the carousel
import "slick-carousel/slick/slick.css"; // Slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Slick carousel theme
import { FaShieldAlt, FaTools, FaStream } from "react-icons/fa"; // Importing FontAwesome Icons

export const WhyChooseUs = () => {
  // Carousel settings for mobile
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 card at a time on mobile
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Show carousel on screens smaller than 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center mb-8">
        <p className="text-[#FF8B00] text-lg mb-2">Choose Us</p>
        <h2 className="text-4xl font-semibold mb-4">Why Choose Us</h2>
        <p className="text-md md:text-lg">
          What we offer is unparalleled and uncompromised work. Know us and work with us.
        </p>
      </div>

      {/* Desktop Version (3 Cards in a Row) */}
      <div className="hidden md:flex w-full justify-center  gap-8 px-4 md:px-16">
        {/* Card 1 */}
        <div className="w-full  md:w-1/3 bg-[#004692] p-10 rounded-md text-center text-white h-[400px] shadow-3xl shadow-black">
          <div className="mb-6">
            <div className="bg-[#FF8B00] rounded-full p-4 inline-block">
              <FaShieldAlt size={40} />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Certified Professionals</h3>
          <p>
            Our company adheres to all OSHA regulations and is certified by all important companies.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 bg-[#004692] p-10 rounded-md text-center text-white h-[400px]">
          <div className="mb-6">
            <div className="bg-[#FF8B00] rounded-full p-4 inline-block">
              <FaStream size={40} />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Variety</h3>
          <p>
            We offer an arsenal of services all under one roof. You don't need to go anywhere, we do it all.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 bg-[#004692] p-10 rounded-md text-center text-white h-[400px]">
          <div className="mb-6">
            <div className="bg-[#FF8B00] rounded-full p-4 inline-block">
              <FaTools size={40} />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Experienced</h3>
          <p>
            With over 20 years of experience, we offer unparalleled service.
          </p>
        </div>
      </div>

      {/* Mobile Version (Carousel) */}
      <div className="md:hidden w-full px-4">
        <Slider {...settings}>
          {/* Card 1 */}
          <div className="w-full bg-[#004692] p-10 rounded-md text-center text-white h-[400px]">
            <div className="mb-6">
              <div className="bg-[#FF8B00] rounded-full p-4 inline-block">
                <FaShieldAlt size={40} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Certified Professionals</h3>
            <p>
              Our company adheres to all OSHA regulations and is certified by all important companies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-[#004692] p-10 rounded-md text-center text-white h-[400px]">
            <div className="mb-6">
              <div className="bg-[#FF8B00] rounded-full p-4 inline-block">
                <FaStream size={40} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Variety</h3>
            <p>
              We offer an arsenal of services all under one roof. You don't need to go anywhere, we do it all.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full bg-[#004692] p-10 rounded-md text-center text-white h-[400px]">
            <div className="mb-6">
              <div className="bg-[#FF8B00] rounded-full p-4 inline-block">
                <FaTools size={40} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Experienced</h3>
            <p>
              With over 20 years of experience, we offer unparalleled service.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};


