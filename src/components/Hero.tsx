"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import tablet from "@/assets/tablet.webp";
import girl from "@/assets/girl.webp";
import boy from "@/assets/boy.webp";

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [startBlink, setStartBlink] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    const rafId = requestAnimationFrame(() => {
      setIsLoaded(true);
    });

    // Start attention-grabbing animation after 2 seconds
    const blinkTimer = setTimeout(() => {
      setStartBlink(true);
    }, 2000);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(blinkTimer);
    };
  }, []);

  // Memoize animation variants to prevent recreating objects on every render
  const fadeInLeft = useMemo(() => ({
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  }), []);

  const fadeInUp1 = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  }), []);

  const fadeInUp2 = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.4 }
  }), []);

  const scaleIn1 = useMemo(() => ({
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 }
  }), []);

  const scaleIn2 = useMemo(() => ({
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2, delay: 0.1 }
  }), []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 px-6 md:px-12 pt-28 md:pt-16 pb-0 md:pb-12 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-8 items-center w-full">
        {/* Left Column: Content */}
        <div className="flex flex-col items-start gap-4 z-20 pt-0 md:pt-16">
          <motion.div {...fadeInLeft}>
            <span className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
              Streamlined Offshore Solutions
            </span>
          </motion.div>
          <motion.h1
            {...fadeInUp1}
            className="text-[1.65rem] md:text-5xl font-bold leading-tight"
          >
            <span style={{ color: '#002244' }}>Empowering Global Operations </span>
            <span style={{ color: '#FFB509' }}>Through Reliable Offshore Support</span>
          </motion.h1>
          <motion.p
            {...fadeInUp2}
            className="text-gray-800 text-sm md:text-base leading-relaxed max-w-lg"
          >
            Empire Offshore provides reliable, efficient, and scalable services that help companies reduce operational costs, strengthen productivity, and achieve sustainable growth. Supporting your business with precision, strategy, and world-class offshore talent.
          </motion.p>
          <div className="flex flex-row gap-3 md:gap-4">
            <motion.button
              {...scaleIn1}
              className={`px-4 py-2.5 md:px-8 md:py-3.5 text-xs md:text-base text-white font-medium rounded-md shadow-lg whitespace-nowrap relative overflow-hidden ${startBlink ? 'button-pulse' : ''}`}
              style={{
                background: 'linear-gradient(135deg, #001f3f 0%, #003d7a 100%)',
                boxShadow: '0 10px 15px -3px rgba(0, 61, 122, 0.3)'
              }}
            >
              <a href="#services">Discover Our Services</a>
              {startBlink && <span className="button-shine"></span>}
            </motion.button>
            <motion.button
              {...scaleIn2}
              className={`px-4 py-2.5 md:px-8 md:py-3.5 text-xs md:text-base font-medium rounded-md shadow-lg whitespace-nowrap relative overflow-hidden ${startBlink ? 'button-pulse' : ''}`}
              style={{
                background: 'linear-gradient(135deg, #FFB509 0%, #FFA500 100%)',
                color: '#002244',
                boxShadow: '0 10px 15px -3px rgba(255, 181, 9, 0.3)'
              }}
            >
              <a href="#contact">Schedule a Call</a>
              {startBlink && <span className="button-shine"></span>}
            </motion.button>
          </div>
        </div>

        {/* Right Column: Isometric Illustration */}
        <div className="relative w-full h-[420px] md:h-[500px] flex items-center justify-center mt-2 md:mt-0">
          <div className="relative w-full h-full flex items-center justify-center max-w-[100%] md:max-w-full mx-auto scale-110 md:scale-100">
            {/* Tablet — Center */}
            <div
              className={`absolute z-10 w-[68%] top-[8%] md:top-[8%] left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-40"
                }`}
              style={{ willChange: isLoaded ? 'auto' : 'opacity, transform' }}
            >
              <div className={isLoaded ? "animate-bounce-soft" : ""}>
                <Image
                  src={tablet}
                  alt="Tablet analytics dashboard"
                  width={900}
                  height={1000}
                  className="w-full h-auto"
                  priority
                  quality={85}
                  loading="eager"
                />
              </div>
            </div>

            {/* Girl — Right Foreground */}
            <div
              className={`absolute z-30 w-[46%] right-[-12%] md:right-[-18%] bottom-[28%] md:bottom-[-5%] transition-all duration-1000 delay-300 ease-out ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"
                }`}
              style={{ willChange: isLoaded ? 'auto' : 'opacity, transform' }}
            >
              <div className={isLoaded ? "animate-bounce-soft-delayed" : ""}>
                <Image
                  src={girl}
                  alt="Girl presenting charts"
                  width={600}
                  height={720}
                  className="w-full h-auto"
                  priority
                  quality={85}
                  loading="eager"
                />
              </div>
            </div>

            {/* Boy — Left Foreground */}
            <div
              className={`absolute z-20 w-[42%] left-[-2%] md:left-[-4%] bottom-[24%] md:bottom-[-7%] transition-all duration-1000 delay-150 ease-out ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"
                }`}
              style={{ willChange: isLoaded ? 'auto' : 'opacity, transform' }}
            >
              <div className={isLoaded ? "animate-bounce-soft-early" : ""}>
                <Image
                  src={boy}
                  alt="Boy sitting with device"
                  width={580}
                  height={700}
                  className="w-full h-auto"
                  priority
                  quality={85}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optimized Floating Animations with GPU acceleration */}
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
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        .animate-bounce-soft-delayed {
          animation: bounceSoft 2.8s ease-in-out 0.25s infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        .animate-bounce-soft-early {
          animation: bounceSoft 2.8s ease-in-out 0.15s infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        /* Attention-grabbing pulse animation */
        @keyframes buttonPulse {
          0% {
            transform: scale(1);
            box-shadow: 0 10px 15px -3px rgba(0, 61, 122, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 15px 30px -3px rgba(0, 61, 122, 0.6);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 10px 15px -3px rgba(0, 61, 122, 0.3);
          }
        }
        
        /* Shine effect animation */
        @keyframes buttonShine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        .button-pulse {
          animation: buttonPulse 2s ease-in-out infinite;
        }
        
        .button-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: buttonShine 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;