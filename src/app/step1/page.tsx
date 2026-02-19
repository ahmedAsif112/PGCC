"use client";
import React, { useEffect, useRef, useState } from 'react';
import { X, ArrowRight, TrendingDown } from 'lucide-react';
import { useRouter } from "next/navigation";


const Step1 = () => {
    const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [description, setDescription] = useState("");
    const router = useRouter();
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements((prev) => new Set(prev).add(entry.target.id));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);
    useEffect(() => {
        const saved = localStorage.getItem("step1_description");
        if (saved) {
            setDescription(saved);
        }
    }, []);
    const isVisible = (id: string) => visibleElements.has(id);
    const handleNext = () => {
        localStorage.setItem("problem", description);
        router.push("/step2"); // or whatever next page
    };
    return (
        <div className="relative min-h-screen bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,38,77,.05) 35px, rgba(0,38,77,.05) 70px)`
                }}></div>
            </div>

            <div className="relative max-w-6xl mx-auto w-full px-4 md:px-6 pb-16">
                {/* Top Header Section */}
                <div
                    id="header"
                    data-animate
                    className={`text-center mb-12 space-y-6 pt-12 md:pt-16 transition-all duration-1000 ${isVisible('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h1 className="text-2xl md:text-5xl font-extrabold leading-[1.1] text-[#00264D] max-w-4xl mx-auto">
                        Your Business Looks Active Online  <br />
                        <span className="text-[#F97316]">But Leads Aren't Coming.</span>
                    </h1>

                    <p className="text-lg text-black max-w-2xl mx-auto font-medium">
                        Most agencies focus on vanity metrics. We focus on the one number that actually matters: your bottom line.
                    </p>
                </div>

                <div
                    id="main-content"
                    data-animate
                    className={`grid lg:grid-cols-2 gap-12 items-start mt-16 transition-all duration-1000 ${isVisible('main-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {/* Left Column: List + Cost of Inaction */}
                    <div className="space-y-8 text-left">
                        <h3 className="text-xl font-bold text-black mb-6">
                            Does this sound familiar?
                        </h3>

                        <div className="space-y-3 ">
                            {[
                                "Posting on social media but no real engagement",
                                "Ads running but no ROI / no qualified leads",
                                "Website looks outdated or doesn't convert visitors",
                                "Inconsistent branding across platforms",
                                "Spending money on marketing without a clear strategy"
                            ].map((text, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-[#FFB508] border border-gray-200 transition-all hover:border-red-500/30 hover:shadow-md"
                                >
                                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-sm bg-white">
                                        <X size={14} className="text-red-600 stroke-[3px]" />
                                    </div>
                                    <p className="text-black text-sm font-medium">{text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Cost of Inaction Box */}
                        <div
                            id="cost-box"
                            data-animate
                            className={`p-6 rounded-2xl border border-red-500/20 bg-red-50 relative overflow-hidden transition-all duration-1000 ${isVisible('cost-box') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                            <h4 className="text-red-600 font-black text-xs uppercase tracking-widest mb-3">The Cost of Inaction</h4>
                            <p className="text-[#00264D]/70 text-sm italic leading-relaxed">
                                "Every day spent on 'unoptimized' marketing is capital that could have been reinvested into scaling your operation. Invisibility is more expensive than visibility."
                            </p>
                        </div>

                        {/* Video - Below Cost Box on Mobile */}
                        <div className="relative pt-0 lg:hidden">
                            <div className="rounded-[1.5rem] overflow-hidden shadow-2xl bg-gray-100">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto"
                                >
                                    <source src="/blue1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-600/5 blur-[120px] rounded-full -z-10"></div>
                        </div>
                    </div>

                    {/* Right Column: Video (Desktop Only) */}
                    <div className="relative pt-0 lg:pt-0 hidden lg:block">
                        <div className="rounded-[1.5rem] overflow-hidden shadow-2xl bg-gray-100">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto"
                            >
                                <source src="/blue1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-600/5 blur-[120px] rounded-full -z-10"></div>
                    </div>
                </div>

                {/* Description Input Box */}
                <div
                    id="description-box"
                    data-animate
                    className={`mt-16 transition-all duration-1000 delay-400 ${isVisible('description-box') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="w-full">
                        <label htmlFor="situation" className="block text-sm font-bold text-[#00264D] uppercase tracking-wider mb-4 animate-fade-in">
                            Describe Your Current Situation
                        </label>
                        <textarea
                            id="situation"
                            rows={5}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-6 py-5 rounded-3xl border-2 border-gray-300 focus:border-[#F97316] focus:outline-none focus:ring-4 focus:ring-[#F97316]/10 transition-all duration-300 text-[#00264D] placeholder:text-gray-400 resize-none shadow-sm hover:shadow-md hover:border-gray-400 transform hover:-translate-y-1"
                            placeholder="E.g. I run a local gym, post 3 times a day on Instagram, but my website contact form has been silent for weeks..."
                        ></textarea>
                    </div>
                </div>

                {/* Centered CTA */}
                <div className="mt-8 pb-4 md:pb-10 flex justify-center">
                    <button
                        onClick={handleNext}
                        className="mobile-button group relative flex items-center gap-3 bg-[#F97316] hover:bg-[#ea6a0f] text-white font-bold text-sm md:text-base py-4 px-8 md:px-10 rounded-full transition-all shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)] active:scale-95"
                    >
                        See What Your Business Should Be Getting
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step1;