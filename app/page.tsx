"use client";
import React from "react";
import Image from "next/image";
import landingImage from "../public/roofing5.webp";
import landingImage2 from "../public/consult.png";
import { useRouter } from "next/navigation";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import AppointmentForm from "@/components/AppointmentForm";
import { Footer } from "@/components/Footer";
import { Material } from "@/components/Materials";
import { Certification } from "@/components/certification";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Page = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from("#intro_title", {
      yPercent: 50,
      duration: 0.8,
      opacity: 0,
      delay:0.5
    })
      .from("#intro_content", {
        yPercent: 50,
        duration: 0.8,
        opacity: 0,
        delay:0
      })
      .from("#intro_button", {
        yPercent: 50,
        duration: 0.8,
        opacity: 0,
        delay:0
    })
    
      gsap.from("#certification_title1", {
       yPercent: 20,
       duration: 0.8,
       opacity: 0,
       delay: 0.10,
       scrollTrigger: {
         trigger: "#certifications",
         start: "top center",
         end: "bottom center",
         toggleActions: "play none none none",
       }
       })
      gsap.from("#certification_title2", {
       yPercent: 20,
       duration: 0.8,
       opacity: 0,
       delay: 0.35,
       scrollTrigger: {
         trigger: "#certifications",
         start: "top center",
         end: "bottom center",
         toggleActions: "play none none none",
       }
      })
    
      gsap.from("#service_title1", {
       yPercent: 20,
       duration: 0.8,
       opacity: 0,
       delay: 0.10,
       scrollTrigger: {
         trigger: "#services",
         start: "top center",
         end: "bottom center",
         toggleActions: "play none none none",
       }
       })
      gsap.from("#service_title2", {
       yPercent: 20,
       duration: 0.8,
       opacity: 0,
       delay: 0.35,
       scrollTrigger: {
         trigger: "#services",
         start: "top center",
         end: "bottom center",
         toggleActions: "play none none none",
       }
      })
    
      gsap.from("#portfolio_title1", {
       yPercent: 20,
       duration: 0.8,
       opacity: 0,
       delay: 0.10,
       scrollTrigger: {
         trigger: "#portfolio",
         start: "top center",
         end: "bottom center",
         toggleActions: "play none none none",
       }
       })
      gsap.from("#portfolio_title2", {
       yPercent: 20,
       duration: 0.8,
       opacity: 0,
       delay: 0.35,
       scrollTrigger: {
         trigger: "#portfolio",
         start: "top center",
         end: "bottom center",
         toggleActions: "play none none none",
       }
      })
    
      gsap.from("#materials_title1", {
       yPercent: 20,
       duration: 0.8,
       opacity: 0,
       delay: 0.10,
       scrollTrigger: {
         trigger: "#materials",
         start: "top center",
         end: "bottom center",
         toggleActions: "play none none none",
       }
       })
      gsap.from("#materials_title2", {
       yPercent: 20,
       duration: 0.8,
       opacity: 0,
       delay: 0.35,
       scrollTrigger: {
         trigger: "#materials",
         start: "top center",
         end: "bottom center",
         toggleActions: "play none none none",
       }
       })
      gsap.from("#consultation_title1", {
       yPercent: 20,
       duration: 0.8,
       opacity: 0,
       delay: 0.10,
       scrollTrigger: {
         trigger: "#consultation",
         start: "top center",
         end: "bottom center",
         toggleActions: "play none none none",
       }
       })
      gsap.from("#consultation_title2", {
       yPercent: 20,
       duration: 0.8,
       opacity: 0,
       delay: 0.35,
       scrollTrigger: {
         trigger: "#consultation",
         start: "top center",
         end: "bottom center",
         toggleActions: "play none none none",
       }
       })
      gsap.from("#choose_title1", {
       yPercent: 20,
       duration: 0.8,
       opacity: 0,
       delay: 0.10,
       scrollTrigger: {
         trigger: "#choose",
         start: "top center",
         end: "bottom center",
         toggleActions: "play none none none",
       }
       })
      gsap.from("#choose_title2", {
       yPercent: 20,
       duration: 0.8,
       opacity: 0,
       delay: 0.35,
       scrollTrigger: {
         trigger: "#choose",
         start: "top center",
         end: "bottom center",
         toggleActions: "play none none none",
       }
       })
  })
  const router = useRouter();
  return (
    <main className="mt-0 ">
      <section
        id="Home"
        className="md:min-h-screen relative  flex flex-col justify-center overflow-hidden "
      >
        <div className="relative w-screen md:h-screen h-[70vh] overflow-hidden">
          <Image
            src={landingImage}
            alt="Roofing Company Image"
            fill
            className=""
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className=" absolute  h-full flex flex-col  justify-center z-10 px-8 md:px-12 text-white md:max-w-[80vw] gap-8 md:gap-8">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" id="intro_title">
            Roofing, Siding & Window Company
          </p>
          <p className="text-md md:text-xl lg:text-xl font-normal mt-4 max-w-3xl" id="intro_content">
            At Acosta Exteriors, we offer a variety of services to the Chicagoland area
            with 20 plus years of experience and hands-on in the construction business.
          </p>
          <div className="mt-6" id="intro_button">
            <button
              className="border border-transparent px-8 py-3 rounded-md text-lg font-medium bg-[#FF8B00] text-white hover:bg-[transparent] hover:border-[#FF8B00] hover:text-white transition duration-300"
              onClick={() => router.push("#contact")}
            >
              Book Free Consultations
            </button>
          </div>
        </div>
      </section>
      <section className="overflow-hidden md:mt-12 mt-10 min-h-screen" id="about">
        <AboutUs/>
      </section>
      <section className="overflow-hidden bg-[#004692] min-h-screen" id="certifications">
      <div className="text-center md:mt-12 mt-10 flex items-center justify-center flex-col gap-3">
        <p className="text-[#FF8B00] text-lg" id="certification_title1">Certifications</p>
        <h1 className="text-3xl md:text-5xl font-semibold text-white" id="certification_title2">We Are Certified</h1>
      </div>
        <Certification/>
      </section>

      <section className="overflow-hidden min-h-screen" id="services">
        <div className="flex flex-col items-center justify-center mt-10 md:mt-12 gap-3">
          <p className="text-[#FF8B00] text-lg" id="service_title1">Our Services</p>
          <h2 className="px-14 text-3xl md:text-5xl font-semibold" id="service_title2">We Provide The Best Services</h2>
        </div>
        <Services/>
      </section>

      <section className="overflow-hidden " id="portfolio">
      <div className="flex w-full flex-col md:flex-row mt-10 md:mt-12 gap-3 p-4">
        <div className="md:w-1/2 w-full md:text-left text-center flex flex-col gap-3">
          <p className="text-[#FF8B00] text-lg" id="portfolio_title1">Our Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-semibold" id="portfolio_title2">
            Browse Our Portfolio Of Previous Work
          </h2>
          <p className="text-md md:text-lg">
            We have served a plethora of satisfied customers, our work speaks volumes of credibility.
          </p>
        </div>
        <div className="md:w-1/2 w-full hidden sm:block flex flex-col justify-end relative">
          <button
            className="border border-transparent px-14 py-2 rounded-md text-md font-medium bg-[#FF8B00] text-white hover:bg-white hover:text-[#FF8B00] hover:border-[#FF8B00] transition duration-300 absolute bottom-0 right-0 mb-4 mr-4"
            onClick={() => router.push("#contact")}
          >
            View More Work
          </button>
        </div>
      </div>
        <Portfolio/>
      </section>

      <section className="overflow-hidden bg-[#004692] mt-10 md:mt-12" id="materials">
      <div className="text-center mt-10 md:mt-12 flex flex-col gap-3">
        <p className="text-[#FF8B00] text-lg" id="materials_title1">Materials</p>
        <h1 className="text-3xl md:text-5xl font-semibold text-white" id="materials_title2">Materials We Use</h1>
      </div>
        <Material/>
      </section>

      <section
        id="consultation"
        className="relative  flex flex-col justify-center overflow-hidden md:mt-12 mt-10 "
      >
        <div className="relative mx-auto w-screen h-[60vh]">
          <Image
            src={landingImage2}
            alt="Roofing Company Image"
           fill
            className="z-0 object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className=" absolute top-0 left-0 h-full flex flex-col  justify-center z-10 p-4 md:px-12 text-white max-w-[600px] gap-3">
          <p className="text-[#FF8B00] text-lg" id="consultation_title1">
          Book your Consultation Now
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white" id="consultation_title2">
          Consult us to change your home into a better one
          </h2>
          <div className="flex flex-col mt-6">
            <button
              className="border border-transparent px-8 py-3 rounded-md text-lg font-medium bg-[#FF8B00] text-white hover:bg-[transparent] hover:border-[#FF8B00] hover:text-white transition duration-300"
              onClick={() => router.push("#contact")}
            >
              Book Free Consultations
            </button>
          </div>
        </div>
      </section>

      <section className="overflow-hidden" id="choose">
      <div className="text-center md:mt-12 mt-10">
        <p className="text-[#FF8B00] text-lg" id="choose_title1">Choose Us</p>
        <h2 className="text-3xl md:text-5xl font-semibold" id="choose_title2">Why Choose Us</h2>
        <p className="text-md md:text-lg">
          What we offer is unparalleled and uncompromised work. Know us and work with us.
        </p>
      </div>
        <WhyChooseUs/>
      </section>

      <section className="overflow-hidden min-h-screen" id="form">
        <AppointmentForm/>
      </section>

      <section className="overflow-hidden md:mt-10 mt-12">
        <Footer/>
      </section>
    </main>
  );
};

export default Page;