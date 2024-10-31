"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../public/logo.png";
import { gsap } from "gsap";
import { Router, useRouter } from "next/router";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBodyLocked, setIsBodyLocked] = useState(false);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const items = [
    { item: "SERVICES", id: "services" },
    { item: "ABOUT", id: "about" },
    { item: "CONTACT", id: "form" },
  ];

  const toggleMenu = (targetSectionId?: string) => {
    setIsMenuOpen((prev) => !prev);
    setIsBodyLocked((prev) => !prev);

    if (targetSectionId) {
      scrollToSection(targetSectionId);
    }
  };

  const scrollToSection = (targetSectionId: string) => {
    const section = document.getElementById(targetSectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuItemsRef.current, {
        xPercent: 200,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(menuItemsRef.current, {
        xPercent: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.inOut",
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isBodyLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBodyLocked]);

  return (
    <nav className=" top-0 left-0 right-0 bg-white z-50 h-[70px] lg:h-[80px] md:shadow-md ">
      <div className="px-4 h-full flex items-center ">
        <div className="w-[220px] flex-shrink-0">
          {" "}
          {/* Adjust width as needed */}
          <Link href="/" passHref>
            <div className="inline-block">
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                className=" object-cover hover:cursor-pointer"
                priority
              />
            </div>
          </Link>
        </div>
        <div className="flex-grow flex justify-center">
          <div className="hidden lg:flex items-center space-x-8 font-thin">
            {items.map((item, index) => (
              <button
                key={index}
                className="text-md font-medium nav-font hover:text-[#FF8B00] transition-colors"
                onClick={() => scrollToSection(item.id.toLowerCase())}
              >
                {item.item}
              </button>
            ))}
          </div>
        </div>
        <div className="  flex  justify-between lg:w-[220px] justify-end">
          {" "}
          {/* Adjust width as needed */}
          <div className="hidden lg:block lg:ml-auto">
            <button
              className="border border-gray-300 px-6 py-2 rounded-md text-md font-medium bg-[#FF8B00] text-white font-bold hover:border-[#FF8B00] hover:bg-white hover:text-[#FF8B00] transition duration-300"
              onClick={() => scrollToSection("form")}
            >
              Book Call
            </button>
          </div>
          <div className="lg:hidden ">
            <button
              onClick={() => toggleMenu()}
              className="text-2xl"
              aria-label="Toggle menu"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (unchanged) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={() => toggleMenu()}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-end p-4">
            <button
              onClick={() => toggleMenu()}
              className="text-2xl"
              aria-label="Close menu"
            >
              <IoMdClose className="text-[#FF8B00] text-4xl" />
            </button>
          </div>
          <div className="flex flex-col gap-14 p-4 overflow-scroll overflow-x-hidden">
            {items.map((item, index) => (
              <div className="relative" key={index}>
                <div
                  className="bg-[#FF8B00] absolute top-0 left-0 w-full h-full z-10 rounded-xl"
                  ref={(el) => {
                    menuItemsRef.current[index] = el;
                  }}
                ></div>
                <button
                  className="text-left border-gray-400 text-xl text-black border px-4 rounded-xl shadow-lg py-1 font-bold bg-white w-full"
                  onClick={() => toggleMenu(item.id.toLowerCase())}
                >
                  {item.item}
                </button>
              </div>
            ))}
          </div>
          <div className="p-4">
            <button
              className="w-full bg-[#FF8B00] border border-gray-300 py-3 rounded-xl text-lg font-medium text-white font-bold hover:border-[#FF8B00] hover:bg-white hover:text-[#FF8B00] transition duration-300"
              onClick={() => toggleMenu("form")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
