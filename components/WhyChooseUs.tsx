import React from "react";
import Slider from "react-slick"; // For the carousel
import "slick-carousel/slick/slick.css"; // Slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Slick carousel theme
import { FaShieldAlt, FaTools, FaStream } from "react-icons/fa"; // Importing FontAwesome Icons

// Array containing the data for the cards
const cardData = [
  {
    id: 1,
    icon: <FaShieldAlt size={40} />,
    title: "Certified Professionals",
    description:
      "Our company adheres to all OSHA regulations and is certified by all important companies.",
  },
  {
    id: 2,
    icon: <FaStream size={40} />,
    title: "Variety",
    description:
      "We offer an arsenal of services all under one roof. You don't need to go anywhere, we do it all.",
  },
  {
    id: 3,
    icon: <FaTools size={40} />,
    title: "Experienced",
    description: "With over 20 years of experience, we offer unparalleled service.",
  },
];

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

  // Reusable card component
  const Card = ({ icon, title, description }:{icon:any,title:string,description:string}) => (
    <div className="w-full bg-[#004692] p-10 rounded-md text-center text-white h-[400px] flex flex-col items-center justify-start gap-6">
      <div className="bg-[#FF8B00] rounded-full p-4 inline-block">
        {icon}
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className="w-full py-10 flex flex-col items-center ">
      {/* Desktop Version (3 Cards in a Row) */}
      <div className="hidden md:flex w-full justify-center gap-8 px-4 md:p-4">
        {cardData.map((card) => (
          <Card key={card.id} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </div>

      {/* Mobile Version (Carousel) */}
      <div className="md:hidden w-full px-4 flex flex-col justify-center gap-8">
        <Slider {...settings}>
          {cardData.map((card) => (
            <Card key={card.id} icon={card.icon} title={card.title} description={card.description} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
