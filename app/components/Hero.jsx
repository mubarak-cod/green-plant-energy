"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
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
        <div className="relative w-full h-screen overflow-hidden font-inter">
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
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 1 }}
                        className="space-y-4 max-w-2xl"
                    >
                        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                            {videos[current].title}
                        </h2>
                        <p className="text-neutral-200 text-base sm:text-lg md:text-xl leading-relaxed">
                            {videos[current].desc}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Lottie Button */}
            <div className="fixed bottom-4 right-4 z-50">
                <a
                    href="https://wa.me/2347039978994"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DotLottieReact
                        src="https://lottie.host/30acb33c-2e96-47ff-8aea-6bc2ccb6b1d6/5QEeiE8fiG.lottie"
                        loop
                        autoplay
                        className="w-16 h-12 md:w-20 md:h-16 cursor-pointer"
                    />
                </a>
            </div>
        </div>
    );
}
