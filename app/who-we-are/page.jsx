"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
        <Navbar />
    <main className="flex flex-col items-center">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/images/ship.png" // <-- put your ship image in public/ship.jpg
          alt="Ship background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Overlay */}
     <h1 className="relative z-10 text-white text-4xl md:text-6xl font-extrabold after:content-[''] after:block after:w-1/2 after:h-1 after:bg-green-500 after:mx-auto after:mt-2">
  WHO WE ARE
</h1>


      </section>

      {/* Intro Section */}
      <section className="w-full bg-gray-50 px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-snug">
            Green Plant Energy is a dynamic global energy company with businesses and
            operations across the entire spectrum of the energy value chain.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Our mandate is to create an energy business that is:
          </p>
          <div className="mt-6 p-6 bg-gray-100 rounded-2xl shadow">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Efficient
            </h2>
            <p className="mt-3 text-gray-600">
              We are focused on energy transition while ensuring domestic energy
              security.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src="/images/station.png"
            alt="NNPC fuel station"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Vision / Mission / Values */}
    <section className="w-full bg-white px-6 py-16 grid md:grid-cols-3 gap-6">
  <div className="p-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-green-50 to-white">
    <h3 className="text-green-700 font-semibold text-lg mb-2">Our Vision</h3>
    <Image
      src="/images/vision.png"
      alt="Vision solar"
      width={400}
      height={200}
      className="rounded-lg w-full h-48 object-cover"
    />
    <p className="mt-2 text-gray-700 text-sm">
      To be the dynamic global energy company of choice
    </p>
  </div>

  <div className="p-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-green-50 to-white">
    <h3 className="text-green-700 font-semibold text-lg mb-2">Our Mission</h3>
    <Image
      src="/images/mission.png"
      alt="Mission solar"
      width={400}
      height={200}
      className="rounded-lg w-full h-48 object-cover"
    />
    <p className="mt-2 text-gray-700 text-sm">
      Reliably delivering energy while continuously creating value for all
      stakeholders
    </p>
  </div>

  <div className="p-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-green-50 to-white">
    <h3 className="text-green-700 font-semibold text-lg mb-2">Our Values</h3>
    <Image
      src="/images/values.png"
      alt="Values team"
      width={400}
      height={200}
      className="rounded-lg w-full h-48 object-cover"
    />
    <ul className="mt-2 space-y-1 text-gray-700 text-sm font-medium">
      <li>Integrity</li>
      <li>Excellence</li>
      <li>Sustainability</li>
    </ul>
  </div>
</section>


      {/* What We Do */}
      <section className="w-full bg-gray-50 px-6 py-16 space-y-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Liquid Hydrocarbon
            </h3>
            <p className="mt-3 text-gray-600">
              We are enhancing our liquid hydrocarbon production while creating
              new energy businesses.
            </p>
            <p className="mt-3 text-green-800 font-medium">
              To support our environmental sustainability efforts through our
              near-term and long-term decarbonization program.
            </p>
          </div>
          <Image
            src="/images/hydrocarbon.png"
            alt="Liquid Hydrocarbon"
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/images/gas.png"
            alt="Gas infrastructure"
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Gas</h3>
            <p className="mt-3 text-gray-600">
              We are expanding and upscaling our gas processing and
              transportation infrastructure to meet domestic gas needs and
              exports, including LNG.
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </div>
  );
}
