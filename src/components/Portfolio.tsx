'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

import web1 from '@/assets/web1.jpg';
import web2 from '@/assets/web2.jpg';
import web3 from '@/assets/web3.jpg';
import web4 from '@/assets/web4.jpg';

const projects = [
    {
        id: 1,
        title: 'Health Flow',
        subtitle: 'Healthcare Website',
        description:
            'A modern and responsive healthcare website designed with a clean UI and smooth user experience. The project focuses on clear content structure, easy navigation, and a professional layout suitable for medical and health-related services.',
        tech: 'React, Tailwind CSS, Next.js',
        live: 'https://health-flow-pink.vercel.app',
        image: web1,
        color: '#002D5B',
    },
    {
        id: 2,
        title: 'MotionGym',
        subtitle: 'Fitness / Gym Website',
        description:
            'A sleek and responsive fitness/gym website built for showcasing gym services, workout programs, and branding with modern UI/UX design. Designed to engage users with clear information and easy navigation.',
        tech: 'React, Tailwind CSS, Next.js',
        live: 'https://motiongym.vercel.app',
        image: web4,
        color: '#002D5B',
    },
    {
        id: 3,
        title: 'Mojju',
        subtitle: 'Creative Studio Website',
        description:
            'Mojju is a sleek and modern creative studio landing page designed to showcase a polished digital presence with smooth navigation and responsive design. It highlights strong UI/UX and frontend skills.',
        tech: 'React, Tailwind CSS, Next.js',
        live: 'https://mojju.vercel.app',
        image: web3,
        color: '#002D5B',
    },
    {
        id: 4,
        title: 'Linea Jewelry',
        subtitle: 'Minimalist Jewelry Website',
        description:
            'Linea Jewelry is a clean and modern landing page designed for a minimalist jewelry brand. The site highlights elegant jewelry pieces with a simple, stylish UI and smooth layout, showcasing products with a contemporary aesthetic and responsive design.',
        tech: 'React, Tailwind CSS, Next.js',
        live: 'https://lineajewelry.vercel.app',
        image: web2,
        color: '#002D5B',
    },
];

export default function PortfolioCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const [hasEnteredView, setHasEnteredView] = useState(false);
    const [sectionVisible, setSectionVisible] = useState(false);

    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasEnteredView(true);
                    requestAnimationFrame(() => setSectionVisible(true));
                    obs.disconnect();
                }
            },
            { root: null, threshold: 0.15 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (!hasEnteredView) return;

        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % projects.length);
            }, 4000);
        }

        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isAutoPlaying, hasEnteredView]);

    const pauseThenResumeAutoplay = () => {
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const handlePrev = () => {
        if (!hasEnteredView) return;
        if (isTransitioning) return;

        setIsTransitioning(true);
        pauseThenResumeAutoplay();
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
        setTimeout(() => setIsTransitioning(false), 700);
    };

    const handleNext = () => {
        if (!hasEnteredView) return;
        if (isTransitioning) return;

        setIsTransitioning(true);
        pauseThenResumeAutoplay();
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        setTimeout(() => setIsTransitioning(false), 700);
    };

    const visibleProjects = useMemo(() => {
        const result: Array<(typeof projects)[number] & { position: number; realIndex: number }> = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + projects.length) % projects.length;
            result.push({ ...projects[index], position: i, realIndex: index });
        }
        return result;
    }, [currentIndex]);

    return (
        <div
            id='portfolio'
            ref={sectionRef}
            className={`portfolioSection bg-gradient-to-b from-white via-gray-50 to-white px-4 overflow-hidden`}
            style={{
                opacity: sectionVisible ? 1 : 0,
                transform: sectionVisible ? 'translateY(0px)' : 'translateY(12px)',
                transition: 'opacity 700ms ease, transform 700ms ease',
            }}
        >
            <div className={`innerWrap max-w-7xl mx-auto w-full pt-4 md:pt-6`}>
                {/* Header */}
                <div
                    className="text-center"
                    style={{
                        opacity: sectionVisible ? 1 : 0,
                        transform: sectionVisible ? 'translateY(0px)' : 'translateY(8px)',
                        transition: 'opacity 700ms ease, transform 700ms ease',
                    }}
                >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0.5" style={{ color: '#002D5B' }}>
                        PORTFOLIO
                    </h1>
                    <div className="w-9 h-0.5 mx-auto rounded-full" style={{ backgroundColor: '#FF9F2E' }} />
                    <p className="text-gray-600 text-[11px] md:text-sm mt-1 max-w-2xl mx-auto leading-snug">
                        Crafting beautiful, responsive, and user-centric digital experiences
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative w-full mt-3 md:mt-5">
                    <div className="relative h-[395px] sm:h-[420px] md:h-[500px]">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {hasEnteredView &&
                                visibleProjects.map((project) => {
                                    const isCenter = project.position === 0;
                                    const isLeft = project.position === -1;

                                    return (
                                        <div
                                            key={project.realIndex}
                                            className="absolute transition-all duration-700 ease-out
           w-[245px] sm:w-[260px] md:w-[280px] lg:w-[340px]"
                                            style={{
                                                opacity: sectionVisible ? (isCenter ? 1 : 0.5) : 0,
                                                transform: sectionVisible
                                                    ? isCenter
                                                        ? 'translateX(0%) scale(1) translateY(0)'
                                                        : isLeft
                                                            ? 'translateX(-95%) scale(0.85) translateY(6px)'
                                                            : 'translateX(95%) scale(0.85) translateY(6px)'
                                                    : 'translateX(0%) scale(0.92) translateY(14px)',
                                                zIndex: isCenter ? 30 : 10,
                                                transition: 'transform 700ms ease-out, opacity 700ms ease-out',
                                                filter: isCenter ? 'blur(0px)' : 'blur(0.35px)',
                                                willChange: 'transform, opacity',
                                            }}
                                        >
                                            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-200">
                                                <div
                                                    className="relative h-24 md:h-32 lg:h-40 flex items-center justify-center overflow-hidden"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${project.color} 0%, rgba(0, 45, 91, 0.7) 100%)`,
                                                    }}
                                                >
                                                    <Image src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                                                </div>

                                                <div className="px-3 py-2.5 md:p-4 lg:p-5 flex flex-col">
                                                    <div className="space-y-1.5 md:space-y-2.5">
                                                        <div className="space-y-0.5">
                                                            <h3 className="text-base md:text-lg lg:text-xl font-bold leading-tight" style={{ color: '#002D5B' }}>
                                                                {project.title}
                                                            </h3>
                                                            <p className="text-xs font-medium leading-snug" style={{ color: '#FF9F2E' }}>
                                                                {project.subtitle}
                                                            </p>
                                                        </div>

                                                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{project.description}</p>

                                                        <p className="text-xs leading-snug">
                                                            <span className="font-semibold" style={{ color: '#002D5B' }}>
                                                                Tech:
                                                            </span>{' '}
                                                            <span className="text-gray-600">{project.tech}</span>
                                                        </p>
                                                    </div>

                                                    <a
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-2.5 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 text-white text-sm"
                                                        style={{ backgroundColor: '#FF9F2E' }}
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        View Live <span className="text-base">→</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div
                    className="flex items-center justify-center gap-3 mt-2 md:mt-3"
                    style={{
                        opacity: sectionVisible ? 1 : 0,
                        transform: sectionVisible ? 'translateY(0px)' : 'translateY(8px)',
                        transition: 'opacity 700ms ease, transform 700ms ease',
                    }}
                >
                    <button
                        type="button"
                        onClick={handlePrev}
                        disabled={!hasEnteredView || isTransitioning}
                        className="group inline-flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full border shadow-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                            borderColor: 'rgba(0, 45, 91, 0.15)',
                            backgroundColor: '#FFFFFF',
                        }}
                        aria-label="Previous slide"
                    >
                        <span className="text-lg md:text-2xl transition-transform duration-300 group-hover:-translate-x-0.5" style={{ color: '#002D5B' }}>
                            ‹
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={!hasEnteredView || isTransitioning}
                        className="group inline-flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ backgroundColor: '#FF9F2E' }}
                        aria-label="Next slide"
                    >
                        <span className="text-lg md:text-2xl text-white transition-transform duration-300 group-hover:translate-x-0.5">
                            ›
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
