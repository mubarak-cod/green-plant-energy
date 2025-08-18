"use client";
import React, { useState } from "react";
import { Suspense } from "react";
import Tilt from "react-parallax-tilt"; // ✅ use React Tilt
import { Lens } from "./ui/lens";
import Loader from "./Loader";

const WhatWeDo = () => {
  const [hovering, setHovering] = useState(false);

  const items = [
    { src: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1755419395/oil1_rkiiey.png", title: "Offshore Terminals", desc: "Efficient offshore liquid bulk discharge operations." },
    { src: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1755419364/oil2_rhkldt.png", title: "Bulk Storage", desc: "World-class storage facilities for operators." },
    { src: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1755419335/oil3_sezxk0.png", title: "Distribution Network", desc: "Robust logistics across Nigeria’s 6 geopolitical zones." },
    { src: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1755419287/oil4_eeivuu.png", title: "Retail Outlets", desc: "Nationwide retail channels for petroleum products." },
  ];

  return (
    <section className="px-6 md:px-16 py-12 mb-10 bg-gray-50 bg-gradient-to-br from-green-700 via-green-500 to-green-200">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">What We Do</h1>
        <p className="mt-4 text-white leading-relaxed">
          We offer one of the largest offshore liquid bulk terminals (SPM/CBM)
          in Africa to provide efficient discharge of products for operators,
          complemented by world class storage facilities and retail outlets/channels
          in all six geopolitical zones in Nigeria. We continually develop strategic
          infrastructure to facilitate the operational efficiency of our integrated
          bouquet of services.
        </p>
      </div>

      {/* 4 Tilt Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <Tilt
            key={i}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            className="w-full rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-6"
          >
            <div className="relative z-10">
              <Lens hovering={hovering} setHovering={setHovering}>
                 <Suspense fallback={<Loader />}>
                <img
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="rounded-2xl"
                />
                </Suspense>
              </Lens>
              <div className="py-4 relative z-20">
                <h2 className="text-white text-xl font-bold">{item.title}</h2>
                <p className="text-neutral-200 text-sm mt-2">{item.desc}</p>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
