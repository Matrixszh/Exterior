import Image from "next/image";
import bg_img from "../public/roofing5.webp";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <section className="relative bg-cover bg-center">
        {/* Add background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bg_img}
            alt="Roofing background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </div>

        {/* Content section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white z-10">
          <h1 className="text-4xl font-bold">Roofing, Siding & Window Company</h1>
          <p className="mt-4 max-w-xl">
            At Acosta Exteriors, we offer a variety of services with over 10 years of experience in the construction business.
          </p>
          <button className="mt-6 bg-orange-500 py-2 px-4 rounded-lg">
            Book Free Consultations
          </button>
        </div>
      </section>
    </div>
  );
}

