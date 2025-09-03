"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
    {
        id: 1,
        image: "/images/africa.png",
        heading: "Africa’s largest energy company",
        text: "We are committed to making energy available and accessible to all.",
    },
    {
        id: 2,
        image: "/images/driving.png",
        heading: "Driving sustainable energy",
        text: "Innovation and sustainability at the core of everything we do.",
    },
    {
        id: 3,
        image: "/images/global.png",
        heading: "Global partnerships",
        text: "Working with international partners to power progress.",
    },
    {
        id: 4,
        image: "/images/innovation.png",
        heading: "Innovation in energy",
        text: "Leveraging technology to provide clean and reliable energy.",
    },
    {
        id: 5,
        image: "/images/sustain.png",
        heading: "Energy efficiency and sustainability",
        text: "We are committed to reducing carbon emissions while delivering reliable power to millions.",
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto slide every 12s
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 12000);
        return () => clearInterval(interval);
    }, [current]);

    const handleNext = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-[90vh] pb-3 overflow-hidden bg-black">
            {/* bg-black prevents white flash */}
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={slides[current].id}
                    custom={direction}
                    initial={{ x: direction > 0 ? "100%" : "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: direction > 0 ? "-100%" : "100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slides[current].image})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center px-[100px] lg:px-[105px] max-w-full">
                        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-xl leading-tight">
                            {slides[current].heading}
                        </h1>
                        <p className="mt-4 text-lg text-gray-200 max-w-md">
                            {slides[current].text}
                        </p>

                        {/* Moderate Who we are button */}
                        <div
                            onClick={() => window.location.href = "/who-we-are"}
                            className="mt-6 flex items-center justify-center bg-white text-black font-bold rounded-lg 
             px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl md:px-12 md:py-6 md:text-2xl 
             w-fit hover:bg-gray-100 cursor-pointer transition-shadow shadow-md hover:shadow-lg"
                        >
                            Who We Are
                            <ChevronRight className="ml-3" size={20} />
                        </div>



                        {/* Prev / Next buttons */}
                        <div className="mt-12 flex gap-4">
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
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
