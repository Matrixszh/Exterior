import React from "react";
import Image from "next/image";
import Aboutus from "../public/Services.png";
import { useRouter } from "next/navigation";

export const Services = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row mt-8 gap-8 px-4 md:px-16">
      {/* Left side - Image */}
      <div className="md:w-1/2 w-full md:text-left text-center">
      
        <p className="px-14 md:text-left sm:text-center text-[#FF8B00] text-lg  mb-4">Our Services</p>
        <h2 className="px-14 hidden sm:block text-4xl md:text-5xl font-normal mb-8">We Provide The Best Services</h2>
        
      
        <Image
          src={Aboutus}
          alt="Service Image"
          className="px-14 w-[100%] h-[60%] object-fill"
        />
      </div>

      {/* Right side - Services list */}
      <div className="md:w-1/2 w-full flex flex-col justify-center">
        <h2 className="md:hidden text-center text-4xl md:text-5xl font-medium mb-8">We Provide The Best Services</h2>

        {/* Services List */}
        <div className="flex flex-col gap-6">
          {/* Service 1 */}
          <div className="flex items-start gap-4">
            <button className="border-2 border-[#808080] text-[#808080] rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-[#FF8B00] hover:text-white hover:border-[#FF8B00] transition duration-300">
              01
            </button>
            <div>
              <p className="font-medium text-xl flex items-center">
                Copper Work <span className="ml-2">↗</span>
              </p>
              <p className="text-md">
                Copper roofing is a mainstay in modern construction, sought after because of its durability and structural longevity.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex items-start gap-4">
            <button className="border-2 border-[#808080] text-[#808080] rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-[#FF8B00] hover:text-white hover:border-[#FF8B00] transition duration-300">
              02
            </button>
            <div>
              <p className="font-medium text-xl flex items-center">
                Copper Work <span className="ml-2">↗</span>
              </p>
              <p className="text-md">
                Copper roofing is a mainstay in modern construction, sought after because of its durability and structural longevity.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex items-start gap-4">
            <button className="border-2 border-[#808080] text-[#808080] rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-[#FF8B00] hover:text-white hover:border-[#FF8B00] transition duration-300">
              03
            </button>
            <div>
              <p className="font-medium text-xl flex items-center">
                Home Remodeling <span className="ml-2">↗</span>
              </p>
              <p className="text-md">
                By creating an attractive home front, you make guests feel welcome and increase the resale value if you decide to move.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex items-start gap-4">
            <button className="border-2 border-[#808080] text-[#808080] rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-[#FF8B00] hover:text-white hover:border-[#FF8B00] transition duration-300">
              04
            </button>
            <div>
              <p className="font-medium text-xl flex items-center">
                Gutters <span className="ml-2">↗</span>
              </p>
              <p className="text-md">
                Acosta Exteriors LLC offers professional gutter services, ensuring proper drainage and protection for your home.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div className="flex items-start gap-4">
            <button className="border-2 border-[#808080] text-[#808080] rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-[#FF8B00] hover:text-white hover:border-[#FF8B00] transition duration-300">
              05
            </button>
            <div>
              <p className="font-medium text-xl flex items-center">
                Windows <span className="ml-2">↗</span>
              </p>
              <p className="text-md">
                We also provide expert window installation and replacement, enhancing energy efficiency, security, and aesthetic appeal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
