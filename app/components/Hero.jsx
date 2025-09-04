// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//   { id: 1, image: "/images/africa.png", heading: "Africa’s largest energy company", text: "We are committed to making energy available and accessible to all." },
//   { id: 2, image: "/images/driving.png", heading: "Driving sustainable energy", text: "Innovation and sustainability at the core of everything we do." },
//   { id: 3, image: "/images/global.png", heading: "Global partnerships", text: "Working with international partners to power progress." },
//   { id: 4, image: "/images/innovation.png", heading: "Innovation in energy", text: "Leveraging technology to provide clean and reliable energy." },
//   { id: 5, image: "/images/sustain.png", heading: "Energy efficiency and sustainability", text: "We are committed to reducing carbon emissions while delivering reliable power to millions." },
// ];

// export default function HeroSlider() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => handleNext(), 12000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleNext = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   const handlePrev = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative w-full h-[90vh] overflow-hidden">
//       {slides.map((slide, index) => (
//         <motion.div
//           key={slide.id}
//           animate={{ x: `${(index - current) * 100}%` }}
//           transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
//           className="absolute inset-0 w-full h-full bg-cover bg-center"
//           style={{ backgroundImage: `url(${slide.image})` }}
//         >
//           <div className="absolute inset-0 bg-black/40"></div> {/* overlay */}
//           <div className="relative z-10 h-full flex flex-col justify-center px-10 lg:px-24 max-w-full">
//             <h1 className="text-4xl md:text-6xl font-bold text-white max-w-xl leading-tight">
//               {slide.heading}
//             </h1>
//             <p className="mt-4 text-lg text-gray-200 max-w-md">{slide.text}</p>
//             <div
//               onClick={() => (window.location.href = "/who-we-are")}
//               className="mt-6 flex items-center justify-center bg-white text-black font-bold rounded-lg px-8 py-4 text-lg hover:bg-gray-100 cursor-pointer transition-shadow shadow-md hover:shadow-lg w-fit"
//             >
//               Who We Are
//               <ChevronRight className="ml-3" size={20} />
//             </div>
//           </div>
//         </motion.div>
//       ))}

//       {/* Prev / Next buttons at bottom center */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
//         <button
//           onClick={handlePrev}
//           className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition"
//         >
//           <ChevronLeft className="text-black" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition"
//         >
//           <ChevronRight className="text-black" />
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  { id: 1, image: "/images/africa.png", heading: "Africa’s largest energy company", text: "We are committed to making energy available and accessible to all." },
  { id: 2, image: "/images/driving.png", heading: "Driving sustainable energy", text: "Innovation and sustainability at the core of everything we do." },
  { id: 3, image: "/images/global.png", heading: "Global partnerships", text: "Working with international partners to power progress." },
  { id: 4, image: "/images/innovation.png", heading: "Innovation in energy", text: "Leveraging technology to provide clean and reliable energy." },
  { id: 5, image: "/images/sustain.png", heading: "Energy efficiency and sustainability", text: "We are committed to reducing carbon emissions while delivering reliable power to millions." },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 12000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          animate={{ x: `${(index - current) * 100}%` }}
          transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Optimized Image */}
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            className="object-cover"
            priority={index === 0} // first image loads first
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center px-10 lg:px-24 max-w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-xl leading-tight drop-shadow-lg">
              {slide.heading}
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-md drop-shadow">
              {slide.text}
            </p>
            <div
              onClick={() => (window.location.href = "/who-we-are")}
              className="mt-6 flex items-center justify-center bg-white text-black font-bold rounded-lg px-8 py-4 text-lg hover:bg-gray-100 cursor-pointer transition-shadow shadow-md hover:shadow-lg w-fit"
            >
              Who We Are
              <ChevronRight className="ml-3" size={20} />
            </div>
          </div>
        </motion.div>
      ))}

      {/* Prev / Next controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <button
          onClick={handlePrev}
          className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition"
        >
          <ChevronLeft className="text-black" />
        </button>
        <button
          onClick={handleNext}
          className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition"
        >
          <ChevronRight className="text-black" />
        </button>
      </div>
    </div>
  );
}
