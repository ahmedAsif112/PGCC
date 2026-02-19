"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Send, Rocket, ShieldCheck, Globe, Calendar, MessageSquare, Check } from 'lucide-react';

const Step3: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
    const [formData, setFormData] = useState({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        website: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const observerRef = useRef<IntersectionObserver | null>(null);

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

    const isVisible = (id: string) => visibleElements.has(id);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrorMessage('');
    };

    const handleSubmit = async () => {
        // Validation
        if (!formData.fullName || !formData.businessName || !formData.email || !formData.phone) {
            setErrorMessage('Please fill in all required fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }

        setIsLoading(true);
        setErrorMessage('');

        try {
            // Get problem and goals from localStorage
            const problem = localStorage.getItem('problem') || 'Not specified';
            const goals = localStorage.getItem('goals') || 'Not specified';

            // Prepare data to send to API
            const emailData = {
                fullName: formData.fullName,
                businessName: formData.businessName,
                email: formData.email,
                phone: formData.phone,
                website: formData.website || 'Not provided',
                problem: problem,
                goals: goals
            };

            // Call your backend API endpoint
            const response = await fetch('/api/strategy-call', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData)
            });

            if (!response.ok) {
                throw new Error('Failed to send emails');
            }

            const result = await response.json();
            console.log('Email sent successfully:', result);

            setIsLoading(false);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error sending emails:', error);
            setErrorMessage('Failed to send request. Please try again.');
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="relative min-h-screen bg-white flex items-center justify-center py-24 px-4">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,38,77,.05) 35px, rgba(0,38,77,.05) 70px)`
                    }}></div>
                </div>

                <div className="relative max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl border-2 border-green-500/30 shadow-2xl text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/20 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                        <Check size={32} strokeWidth={3} className="md:w-10 md:h-10" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-[#00264D]">Request Received!</h2>
                    <p className="text-lg md:text-xl text-[#00264D]/70 mb-6 md:mb-8">
                        One of our growth strategists will reach out to you within 2 hours. Check your email for confirmation!
                    </p>
                    <button
                        onClick={() => {
                            setIsSubmitted(false);
                            setFormData({
                                fullName: '',
                                businessName: '',
                                email: '',
                                phone: '',
                                website: ''
                            });
                        }}
                        className="bg-gray-100 hover:bg-gray-200 text-[#00264D] font-bold py-3 px-8 rounded-xl transition-all border border-gray-300"
                    >
                        Send Another Request
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#FFA529] via-[#FFB84D] to-[#FFA529] py-12 md:py-16">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,38,77,.05) 35px, rgba(0,38,77,.05) 70px)`
                }}></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <div
                        id="step3-left"
                        data-animate
                        className={`space-y-6 md:space-y-8 transition-all duration-1000 flex flex-col ${isVisible('step3-left') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}
                    >
                        {/* Heading - Shows first on mobile */}
                        <div className="space-y-4">
                            <div className="bg-white p-5 md:p-7 rounded-2xl shadow-lg space-y-3">
                                <h2 className="text-2xl md:text-3xl font-bold leading-[1.1] text-[#00264D]">
                                    Get a Free 15-Minute Strategy Call
                                </h2>

                                <p className="text-sm md:text-base text-[#00264D]/70 font-medium">
                                    Let's identify your biggest growth levers. No obligation, just value.
                                </p>
                            </div>
                        </div>

                        {/* Video and Card - Shows third on mobile */}
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 flex-1 items-stretch">
                            <div className="relative w-full lg:w-1/2 rounded-[1.5rem] overflow-hidden ">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-contain"
                                >
                                    <source src="/money1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="w-full lg:w-1/2 flex hidden lg:flex">
                                <div className="bg-white p-4 md:p-6 rounded-3xl shadow-lg space-y-2 w-full flex flex-col justify-between">
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            "Free Social Media Audit",
                                            "Website UX Breakdown",
                                            "90-Day Marketing Roadmap",
                                            "Opportunity Report"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-[#00264D]">
                                                <div className="h-4 w-4 bg-green-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check size={10} className="text-white" />
                                                </div>
                                                <span className="font-medium text-xs">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-2 grid grid-cols-3 gap-2 border-t border-gray-200">
                                        <div className="text-center">
                                            <div className="text-lg md:text-xl font-bold text-[#00264D]">100+</div>
                                            <p className="text-[7px] md:text-[8px] text-[#00264D]/60 uppercase font-bold tracking-wider mt-0.5">Clients Served</p>
                                        </div>
                                        <div className="text-center border-x border-gray-200">
                                            <div className="text-lg md:text-xl font-bold text-[#00264D]">4.9/5</div>
                                            <p className="text-[7px] md:text-[8px] text-[#00264D]/60 uppercase font-bold tracking-wider mt-0.5">Avg. Rating</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg md:text-xl font-bold text-[#00264D]">24h</div>
                                            <p className="text-[7px] md:text-[8px] text-[#00264D]/60 uppercase font-bold tracking-wider mt-0.5">Response Time</p>
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-gray-200">
                                        <p className="text-xs text-[#00264D]/70 text-center">
                                            See our website and portfolio by visiting{' '}
                                            <a
                                                href="https://www.empireoffshore.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#F97316] font-bold hover:text-[#ea6a0f] underline decoration-[#F97316]/50 hover:decoration-[#ea6a0f] transition-colors"
                                            >
                                                www.empireoffshore.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form - Shows on desktop on the right */}
                    <div
                        id="step3-form"
                        data-animate
                        className={`bg-white p-6 md:p-10 rounded-3xl border-2 border-white shadow-2xl relative transition-all duration-1000 max-w-md mx-auto lg:mx-0 ${isVisible('step3-form') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}
                    >
                        <div className="space-y-5 relative z-10">
                            {errorMessage && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                                    {errorMessage}
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#00264D]/60 uppercase tracking-wider ml-1">Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="John Doe"
                                        className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 md:py-4 px-4 md:px-5 text-[#00264D] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all placeholder:text-gray-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#00264D]/60 uppercase tracking-wider ml-1">Business Name *</label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleInputChange}
                                        placeholder="Empire Ltd."
                                        className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 md:py-4 px-4 md:px-5 text-[#00264D] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00264D]/60 uppercase tracking-wider ml-1">Work Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@business.com"
                                    className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 md:py-4 px-4 md:px-5 text-[#00264D] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all placeholder:text-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00264D]/60 uppercase tracking-wider ml-1">WhatsApp / Phone *</label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 md:py-4 px-4 md:px-5 text-[#00264D] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all placeholder:text-gray-400"
                                    />
                                    <MessageSquare size={18} className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00264D]/60 uppercase tracking-wider ml-1">Website or Instagram (Optional)</label>
                                <input
                                    type="text"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    placeholder="https://..."
                                    className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 md:py-4 px-4 md:px-5 text-[#00264D] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all placeholder:text-gray-400"
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className="w-full bg-[#F97316] hover:bg-[#ea6a0f] text-white font-bold py-4 md:py-5 px-4 sm:px-6 md:px-8 rounded-full flex items-center justify-center gap-2 sm:gap-3 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)] mt-4 text-xs sm:text-sm md:text-base whitespace-nowrap"
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        Book My Free Strategy Call
                                        <Send size={20} />
                                    </>
                                )}
                            </button>

                            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-6 text-[8px] md:text-[9px] text-[#00264D]/60 font-bold uppercase tracking-wide">
                                <div className="flex items-center gap-1 whitespace-nowrap">
                                    <ShieldCheck size={11} className="md:w-3 md:h-3 flex-shrink-0" /> <span>No Spam. No Pressure.</span>
                                </div>
                                <div className="flex items-center gap-1 whitespace-nowrap">
                                    <Globe size={11} className="md:w-3 md:h-3 flex-shrink-0" /> <span>International Welcome</span>
                                </div>
                                <div className="flex items-center gap-1 text-[#F97316] whitespace-nowrap">
                                    <Calendar size={11} className="md:w-3 md:h-3 flex-shrink-0" /> <span>Limited Daily Slots</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Only: Video and Audit Card below form */}
                    <div className="lg:hidden space-y-6 md:space-y-8">
                        {/* Video - Shows second on mobile */}


                        {/* Free Social Media Audit Card - Shows below form on mobile */}
                        <div className="w-full">
                            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-lg space-y-2 w-full flex flex-col justify-between">
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        "Free Social Media Audit",
                                        "Website UX Breakdown",
                                        "90-Day Marketing Roadmap",
                                        "Opportunity Report"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-[#00264D]">
                                            <div className="h-4 w-4 bg-green-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check size={10} className="text-white" />
                                            </div>
                                            <span className="font-medium text-xs">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-2 grid grid-cols-3 gap-2 border-t border-gray-200">
                                    <div className="text-center">
                                        <div className="text-lg md:text-xl font-bold text-[#00264D]">100+</div>
                                        <p className="text-[7px] md:text-[8px] text-[#00264D]/60 uppercase font-bold tracking-wider mt-0.5">Clients Served</p>
                                    </div>
                                    <div className="text-center border-x border-gray-200">
                                        <div className="text-lg md:text-xl font-bold text-[#00264D]">4.9/5</div>
                                        <p className="text-[7px] md:text-[8px] text-[#00264D]/60 uppercase font-bold tracking-wider mt-0.5">Avg. Rating</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg md:text-xl font-bold text-[#00264D]">24h</div>
                                        <p className="text-[7px] md:text-[8px] text-[#00264D]/60 uppercase font-bold tracking-wider mt-0.5">Response Time</p>
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-gray-200">
                                    <p className="text-xs text-[#00264D]/70 text-center">
                                        See our website and portfolio by visiting{' '}
                                        <a
                                            href="https://www.empireoffshore.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#F97316] font-bold hover:text-[#ea6a0f] underline decoration-[#F97316]/50 hover:decoration-[#ea6a0f] transition-colors"
                                        >
                                            www.empireoffshore.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step3;