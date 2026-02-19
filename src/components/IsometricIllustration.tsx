"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import tablet from "@/assets/tablet.webp";
import girl from "@/assets/girl.webp";
import boy from "@/assets/boy.webp";

const IsometricIllustration = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 overflow-hidden flex items-center justify-center px-4">

            {/* Main Container */}
            <div className="relative w-full max-w-7xl aspect-[1/1] flex items-center justify-center">

                {/* Tablet — Massive Center */}
                <div
                    className={`absolute z-10 w-[78%] top-[8%] left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-40"
                        }`}
                >
                    <div className={isLoaded ? "animate-bounce-soft" : ""}>
                        <Image
                            src={tablet}
                            alt="Tablet analytics dashboard"
                            width={900}
                            height={1000}
                            className="w-full h-auto "
                            priority
                        />
                    </div>
                </div>

                {/* Girl — Right Dominant Foreground */}
                <div
                    className={`absolute z-30 w-[52%] right-[-20%] bottom-[-5%] transition-all duration-1000 delay-300 ease-out ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"
                        }`}
                >
                    <div className={isLoaded ? "animate-bounce-soft-delayed" : ""}>
                        <Image
                            src={girl}
                            alt="Girl presenting charts"
                            width={600}
                            height={720}
                            className="w-full h-auto "
                            priority
                        />
                    </div>
                </div>

                {/* Boy — Left Foreground */}
                <div
                    className={`absolute z-20 w-[48%] left-[-10%] bottom-[-7%] transition-all duration-1000 delay-150 ease-out ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"
                        }`}
                >
                    <div className={isLoaded ? "animate-bounce-soft-early" : ""}>
                        <Image
                            src={boy}
                            alt="Boy sitting with device"
                            width={580}
                            height={700}
                            className="w-full h-auto "
                            priority
                        />
                    </div>
                </div>

            </div>

            {/* Floating Animations */}
            <style jsx>{`
        @keyframes bounceSoft {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-bounce-soft {
          animation: bounceSoft 2.8s ease-in-out infinite;
        }

        .animate-bounce-soft-delayed {
          animation: bounceSoft 2.8s ease-in-out 0.25s infinite;
        }

        .animate-bounce-soft-early {
          animation: bounceSoft 2.8s ease-in-out 0.15s infinite;
        }
      `}</style>
        </div>
    );
};

export default IsometricIllustration;
