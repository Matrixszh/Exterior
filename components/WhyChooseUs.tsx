import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaShieldAlt, FaTools, FaStream, FaFileInvoiceDollar } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: 1,
    icon: <FaShieldAlt size={40} />,
    title: "Certified Professionals",
    description: "Our company adheres to all OSHA regulations and is certified by all important companies.",
  },
  {
    id: 2,
    icon: <FaStream size={40} />,
    title: "Variety",
    description: "We offer an arsenal of services all under one roof. You don't need to go anywhere, we do it all.",
  },
  {
    id: 3,
    icon: <FaTools size={40} />,
    title: "Experienced",
    description: "With over 20 years of experience, we offer unparalleled service.",
  },
  {
    id: 4,
    icon: <FaFileInvoiceDollar size={40} />,
    title: "Insurance Claims",
    description: "We can help you, if you suffered any damage during a weather catastrophe, make use of your insurance claim to improve your home.",
  },
];

export const WhyChooseUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
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

  const Card = ({ icon, title, description, index }: { 
    icon: any; 
    title: string; 
    description: string;
    index: number;
  }) => {
    const cardRef = useRef(null);

    useEffect(() => {
      const card = cardRef.current;

      gsap.set(card, {
        clipPath: "inset(0 0 100% 0)",
        opacity: 0,
        y: 50
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        end: "bottom bottom",
        onEnter: () => {
          gsap.to(card, {
            clipPath: "inset(0 0 0% 0)",
            opacity: 1,
            y: 0,
            duration: 1.3,
            delay: index * 0.3,
            ease: "power3.out"
          });
        },
        once: true
      });
    }, [index]);

    return (
      <div 
        ref={cardRef}
        className="w-full bg-[#004692] p-10 rounded-md text-center text-white h-[400px] flex flex-col items-center justify-start gap-6"
      >
        <div className="bg-[#FF8B00] rounded-full p-4 inline-block">{icon}</div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <div className="w-full py-10 flex flex-col items-center">
      {/* Desktop Version (3 Cards in a Row) */}
      <div className="hidden md:flex w-full justify-center gap-8 px-4 md:p-4">
        {cardData.map((card, index) => (
          <Card 
            key={card.id} 
            icon={card.icon} 
            title={card.title} 
            description={card.description}
            index={index}
          />
        ))}
      </div>

      {/* Mobile Version (Carousel) */}
      <div className="md:hidden w-full px-4 flex flex-col justify-center gap-8">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <Card 
              key={card.id} 
              icon={card.icon} 
              title={card.title} 
              description={card.description}
              index={index}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};