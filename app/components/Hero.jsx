"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Poppins } from "next/font/google";

// Load Poppins font
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const videos = [
    {
        src: "https://res.cloudinary.com/dpsxbuxkr/video/upload/v1755418246/Part_Of_Gas_Refining_Plant_4K_Stock_Video_-_Download_Video_Clip_Now_-_Gasoline_Pipe_-_Tube_Natural_Gas_-_iStock_lxsdyj.mp4",
        title: "Empowering Oil & Gas with Innovation",
        desc: "We deliver cutting-edge digital solutions that optimize operations, enhance efficiency, and drive sustainability across the oil and gas industry. Our expertise ensures smarter processes, safer workflows, and measurable impact for global energy providers.",
    },
    {
        src: "https://res.cloudinary.com/dpsxbuxkr/video/upload/v1755418937/Two_workers_at_the_factory_-_Free_Stock_Video_Footage_aorngz.mp4",
        title: "Sustainable Energy for the Future",
        desc: "Our mission focuses on renewable strategies and sustainable energy solutions that empower businesses to reduce carbon footprints, increase resilience, and lead the transition towards cleaner, greener, and more responsible power generation practices worldwide.",
    },
    {
        src: "https://res.cloudinary.com/dpsxbuxkr/video/upload/v1755419006/Worker_with_hardhat_at_the_factory_-_Free_Stock_Video_Footage_ha3b4e.mp4",
        title: "Engineering Excellence at Every Step",
        desc: "Providing world-class engineering services across the energy value chain, we combine innovation, precision, and expertise to deliver projects that exceed expectations, ensuring operational excellence, cost efficiency, and long-term reliability for our clients globally.",
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % videos.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`relative w-full h-screen overflow-hidden ${poppins.className}`}
        >
            {/* Background Video */}
            <AnimatePresence>
                {videos.map(
                    (video, index) =>
                        index === current && (
                            <motion.video
                                key={index}
                                src={video.src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute w-full h-full object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.2 }}
                            />
                        )
                )}
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 z-10"></div>

            {/* Text Content */}
            <div className="relative z-20 flex flex-col justify-center h-full px-6 md:px-20 lg:px-32">
                <AnimatePresence mode="wait">
                    <motion.div key={current} className="space-y-6 max-w-2xl">
                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 80 }}
                            transition={{ duration: 0.8 }}
                            className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
                        >
                            {videos[current].title}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -60 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-neutral-200 text-base sm:text-lg md:text-xl leading-relaxed"
                        >
                            {videos[current].desc}
                        </motion.p>

                        {/* CTA Button (slow smooth move) */}
                        <motion.a
                            href="#services"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block mt-4 px-6 py-3 rounded bg-green-600 text-white font-medium shadow-md hover:bg-green-700 transition-all duration-300"
                        >
                            Discover Our Solutions
                        </motion.a>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* WhatsApp Button */}
            <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/2347039978994"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20b358] transition-all p-3 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </a>
    </div>
        </div>
    );
}
