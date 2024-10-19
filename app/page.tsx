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
import { Certification } from "@/components/Certification";
import { Material } from "@/components/Materials";

const Page = () => {
  const router = useRouter();
  return (
    <main className="mt-12 sm:mt-[100px] md:mt-[120px] lg:mt-[80px]">
      <section
        id="Home"
        className="relative  flex flex-col justify-center overflow-hidden"
      >
        {/* Contained and Responsive Image */}
        <div className="relative mx-auto w-[70vh] md:w-[210vh] h-[80vh] md:h-[70vh] overflow-hidden">
          <Image
            src={landingImage}
            alt="Roofing Company Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
          />
          {/* Overlay for darkening the image */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Text content over the image */}
        <div className=" absolute top-0 left-10 h-full flex flex-col  justify-center z-10 px-8 md:px-12 text-white max-w-[600px]">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Roofing, Siding & Window Company
          </p>
          <p className="text-md md:text-xl lg:text-xl font-normal mt-4 max-w-3xl">
            At Acosta Exteriors, we offer a variety of services to the Chicagoland area
            with 20 plus years of experience and hands-on in the construction business.
          </p>
          <div className="mt-6">
            <button
              className="border border-transparent px-8 py-3 rounded-md text-lg font-medium bg-[#FF8B00] text-white hover:bg-[transparent] hover:border-[#FF8B00] hover:text-white transition duration-300"
              onClick={() => router.push("#contact")}
            >
              Book Free Consultations
            </button>
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <AboutUs/>
      </section>
      <section className="overflow-hidden">
        <Certification/>
      </section>
      <section className="overflow-hidden">
        <Services/>
      </section>
      <section className="overflow-hidden">
        <Portfolio/>
      </section>
      <section className="overflow-hidden">
        <Material/>
      </section>
      <section
        id="Home"
        className="relative py-14 mt-16 flex flex-col justify-center overflow-hidden"
      >
        {/* Contained and Responsive Image */}
        <div className="relative mx-auto w-[70vh] md:w-[210vh] h-[40vh] md:h-[40vh] overflow-hidden">
          <Image
            src={landingImage2}
            alt="Roofing Company Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
          />
          {/* Overlay for darkening the image */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Text content over the image */}
        <div className=" absolute top-0 left-10 h-full flex flex-col  justify-center z-10 px-8 md:px-12 text-white max-w-[600px]">
          <p className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
          Book your Consultation Now
          </p>
          <p className="text-md md:text-xl lg:text-xl font-normal mt-4 max-w-3xl">
          Consult us to change your home into a better one
          </p>
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
      <section className="overflow-hidden">
        <WhyChooseUs/>
      </section>
      <section className="overflow-hidden">
        <AppointmentForm/>
      </section>
      <section className="overflow-hidden">
        <Footer/>
      </section>
    </main>
  );
};

export default Page;
