import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import Image from 'next/image';
import landingImage2 from "../public/from.webp";

type FormFields = {
  name: string;
  number: string;
  email: string;
  description: string;
};

const AppointmentForm = () => {
  const template = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const service = process.env.NEXT_PUBLIC_SERVICE_ID;
  const key = process.env.NEXT_PUBLIC_USER_ID;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = (data: FormFields) => {
    emailjs
      .send(service!, template!, data, key)
      .then((response) => {
        reset();
        console.log("Form data:", data);
        toast.success("Form Submitted Successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Form Submission Failed!");
      });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className=" relative w-full md:w-1/2 h-[98vh]">
          <Image
            src={landingImage2}
            alt="Construction Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="px-14 py-4 rounded-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 h-[100vh] p-4 md:p-8 bg-white">
          <h2 className="text-orange-500 font-semibold">Contact</h2>
          <h1 className="text-3xl font-bold">Contact us Now</h1>
          <p className="text-gray-500 mb-6">
            Contact us for further details and queries
          </p>
          <form
            className="space-y-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-lg"
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="text"
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}

            <input
              {...register("number", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
              })}
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg"
            />
            {errors.number && (
              <div className="text-red-500">{errors.number.message}</div>
            )}

            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 5,
                  message: "Description must be at least 5 characters long",
                },
              })}
              placeholder="Message"
              className="w-full p-3 border rounded-lg"
              rows={4}
            />
            {errors.description && (
              <div className="text-red-500">{errors.description.message}</div>
            )}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-white hover:text-orange-500 border border-orange-500 transition duration-300"
            >
              Contact Us
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
