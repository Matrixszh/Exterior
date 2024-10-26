import React from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg  p-4">
      <div className="w-full  mx-auto ">
        <div className="flex flex-col items-center justify-between md:flex-row gap-4 md:gap-0">
          <Link href="/" passHref>
            <div className="inline-block">
              <Image
                src={logo}
                alt="logo"
                className=" h-[100px] w-auto  hover:cursor-pointer"
                priority
              />
            </div>
          </Link>
        </div>
        <div className="flex  items-center justify-center gap-8">
          <div className="flex flex-col justify-between gap-4">
            <Link href="mailto:acosta2535@gmail.com ">
              <IoMailOutline className="text-orange-500 md:text-3xl text-2xl animate-pulse" />
            </Link>
            <Link href="tel:+1 (630) 526-4000">
              <MdOutlinePhoneInTalk className="text-orange-500 md:text-3xl text-2xl animate-pulse" />
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <Link
              href="mailto:acosta2535@gmail.com "
              className="md:text-xl text-md"
            >
              {" "}
              acosta2535@gmail.com
            </Link>
            <Link href="tel:+1 (630) 526-4000" className="md:text-xl text-md">
              {" "}
              630-526-4000
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center justify-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Acosta Exteriors™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
