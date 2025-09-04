"use client";
import Image from "next/image";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
const businesses = [
  {
    title: "Petroleum Trading",
    description:
      "Buying, selling, and distributing petroleum products across Nigeria.",
    icon: "https://img.icons8.com/fluency/48/000000/fuel.png",
  },
  {
    title: "Retail & Distribution",
    description:
      "Nationwide retail and logistics solutions for efficient petroleum delivery.",
    icon: "https://img.icons8.com/fluency/48/000000/delivery.png",
  },
  {
    title: "Marketing & Branding",
    description:
      "Building customer loyalty through innovative petroleum marketing strategies.",
    icon: "https://img.icons8.com/fluency/48/000000/marketing.png",
  },
];

const additionalServices = [
  {
    title: "Industrial & Commercial Services",
    description:
      "Supplying industrial clients with bulk petroleum and gas solutions.",
    icon: "https://img.icons8.com/fluency/48/000000/factory.png",
  },
  {
    title: "Sustainability Projects",
    description:
      "Investing in renewable energy and environmentally friendly initiatives.",
    icon: "https://img.icons8.com/fluency/48/000000/eco-friendly.png",
  },
];

const OurBusinesses = () => {
  return (
    <div>
        <Navbar />
    <div className="w-full">
      {/* Hero Section */}
<section className="w-full h-[400px] md:h-[500px] relative flex items-center justify-center">
  {/* Hero Image */}
  <Image
    src="/images/business.png" // <-- replace with your bg image
    alt="Hero Background"
    fill
    className="object-cover"
    priority
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Text on top */}
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative text-center px-6"
  >
    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
      Our Businesses
    </h1>
    <p className="mt-4 text-white text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto">
      Driving excellence across the downstream Oil & Gas sector in Nigeria.
    </p>
  </motion.div>
</section>

      {/* Core Businesses Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Core Business Areas
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We operate in multiple segments to deliver exceptional services and
            sustainable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
            >
              <img
                src={business.icon}
                alt={business.title}
                className="w-14 h-14 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {business.title}
              </h3>
              <p className="text-gray-600 text-sm">{business.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Additional Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Beyond core operations, we also focus on industrial services and sustainability projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-14 h-14 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default OurBusinesses;
