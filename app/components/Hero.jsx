"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const videos = [
    {
        src: "https://res.cloudinary.com/dpsxbuxkr/video/upload/v1755418246/Part_Of_Gas_Refining_Plant_4K_Stock_Video_-_Download_Video_Clip_Now_-_Gasoline_Pipe_-_Tube_Natural_Gas_-_iStock_lxsdyj.mp4",
        title: "Empowering Oil & Gas with Innovation",
        desc: "Delivering digital solutions that transform operations in the oil & gas industry.",
        button: "Book a Call",
    },
    {
        src: "https://res.cloudinary.com/dpsxbuxkr/video/upload/v1755418937/Two_workers_at_the_factory_-_Free_Stock_Video_Footage_aorngz.mp4",
        title: "Sustainable Energy for the Future",
        desc: "Leading with renewable strategies that power tomorrow responsibly.",
        button: "Learn More",
    },
    {
        src: "https://res.cloudinary.com/dpsxbuxkr/video/upload/v1755419006/Worker_with_hardhat_at_the_factory_-_Free_Stock_Video_Footage_ha3b4e.mp4",
        title: "Engineering Excellence at Every Step",
        desc: "Providing world-class engineering solutions across the energy value chain.",
        button: "Our Projects",
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
        <div className="relative w-full h-screen overflow-hidden">
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
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-white text-3xl md:text-5xl font-bold">
                            {videos[current].title}
                        </h2>
                        <p className="text-neutral-200 text-base md:text-lg max-w-2xl mx-auto">
                            {videos[current].desc}
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-xl bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition"
                        >
                            {videos[current].button}
                        </motion.button>
                    </motion.div>
                </AnimatePresence>
            </div>

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
