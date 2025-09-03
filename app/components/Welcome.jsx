"use client";

import React, { Suspense } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Loader from "./Loader";

const Welcome = () => {
    return (
        <section className="w-full py-20 px-6 md:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                
                {/* Left Side - Text */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Welcome to{" "}
                        <span className="text-green-600">Green Plant Energy Oil & Gas Ltd.</span>
                    </h1>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                        Leading Downstream Oil & Gas Company in Nigeria
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg md:text-base">
                        Pinnacle is an Indigenous Oil and Gas Company active across the
                        entire downstream value chain, focusing on petroleum trading,
                        marketing, distribution, and retail segments of the Nigerian Oil and
                        Gas sector.
                    </p>

                    <button className="mt-8 px-8 py-3 rounded-lg bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition transform hover:-translate-y-1 hover:scale-105">
                        Book Us Now
                    </button>
                </div>

                {/* Right Side - Lottie Animations */}
                <Suspense fallback={<Loader />}>
                    <div className="flex justify-center md:justify-end items-center">
                        <div className="w-full md:w-4/5 lg:w-3/4 max-h-96">
                            <DotLottieReact
                                src="https://lottie.host/0e38c075-a438-42cf-a702-f3495f775c2d/8ZpvqWYAW3.lottie"
                                loop
                                autoplay
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </Suspense>
            </div>
        </section>
    );
};

export default Welcome;
