"use client";

import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Suspense } from "react";
import Loader from "./Loader";


const Welcome = () => {
    return (
        <section className="w-full py-16 px-6 md:px-12 bg-gray-50">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Text */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Welcome to{" "}
                        <span className="text-green-600">Green Plant Energy Oil & Gas Ltd.</span>
                    </h2>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-700">
                        We are a Leading Downstream Oil & Gas Company in Nigeria
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                        Pinnacle is an Indigenous Oil and Gas Company active across the
                        entire downstream value chain, with emphasis on petroleum trading,
                        marketing, distribution and retail segments of the Nigerian Oil and
                        Gas Sector.
                        <br />
                        <br />
                        Founded in 2004 with Headquarters in Lagos, one of Africa’s largest
                        business hubs, our performance within the sector has resulted in
                        significant growth in market share and customer base.
                    </p>

                    <button className="mt-6 px-6 py-3 rounded-lg bg-green-600 text-white font-semibold shadow-md hover:bg-yellow-700 transition">
                        Book Us Now
                    </button>
                </div>

                {/* Right Side - Lottie Animations */}
                 <Suspense fallback={<Loader />}>
                <div className="flex gap-4">
                    <div className="w-1/2 h-82">

                        <DotLottieReact
                            src="https://lottie.host/0e38c075-a438-42cf-a702-f3495f775c2d/8ZpvqWYAW3.lottie"
                            loop
                            autoplay
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-1/2 h-72">
                        <DotLottieReact
                            src="https://lottie.host/2cf757fd-03aa-49d1-bd52-981a621e7b9b/i1UiBOI9gY.lottie"
                            loop
                            autoplay
                            className="w-full h-full"
                        />
                    </div>
                </div>
                </Suspense>
            </div>
        </section>
    );
};

export default Welcome;
