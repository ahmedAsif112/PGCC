'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Search, TrendingUp, FileText, Link, BarChart3, Award, Check, ArrowRight, Target, Zap } from 'lucide-react';

const SEOService = () => {
    const [isVisible, setIsVisible] = useState({});
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.dataset.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observerRef.current.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);

    const getAnimationClass = (id) => {
        return isVisible[id]
            ? 'opacity-100 translate-y-0 transition-all duration-700 ease-out'
            : 'opacity-0 translate-y-10';
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section
                className="bg-gradient-to-br from-[#002346] to-[#003a6b] text-white py-12 md:py-20 px-4 md:px-8"
                data-animate
                data-id="hero"
            >
                <div className={`max-w-7xl mx-auto ${getAnimationClass('hero')}`}>
                    <div className="text-center mb-8 md:mb-12 pt-11">
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            SEO AND ORGANIC GROWTH SERVICES
                        </p>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                            Long Term Traffic Without <br className="hidden md:block" />
                            <span className="text-[#FFA22B]">Paid Ads Dependency</span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                            Empire Offshore delivers complete SEO solutions focused on sustainable organic growth, not short-term ranking tricks. The strategy combines technical optimization, content authority, and off-page SEO to build long lasting visibility.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                            <a href="/#contact" className="bg-[#FFA22B] text-[#002346] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#ff8f00] transition text-sm md:text-base shadow-xl hover:shadow-2xl transform hover:scale-105 inline-block text-center">
                                Schedule a Call
                            </a>
                            <a href="/#portfolio" className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#002346] transition text-sm md:text-base inline-block text-center">
                                View SEO Case Studies
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Deliver */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('deliver-title')}`}
                        data-animate
                        data-id="deliver-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            CORE SEO AREAS
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            What We <span className="text-[#FFA22B]">Deliver</span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Complete SEO solutions that drive sustainable organic growth
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                icon: <Search className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Technical SEO Audits and Fixes",
                                description: "Comprehensive technical optimization to ensure search engines can crawl and index your site",
                                items: ["Site architecture", "Core Web Vitals", "Mobile optimization"]
                            },
                            {
                                icon: <FileText className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Keyword Research and Search Intent Mapping",
                                description: "Strategic keyword targeting aligned with user search intent and business goals",
                                items: ["Competitor analysis", "Search volume research", "Intent classification"]
                            },
                            {
                                icon: <Target className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "On-Page SEO Optimization",
                                description: "Complete optimization of on-page elements for maximum search visibility",
                                items: ["Meta tags optimization", "Content structure", "Internal linking"]
                            },
                            {
                                icon: <Link className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "High Authority Backlink Building",
                                description: "White-hat link acquisition strategies to build domain authority and trust",
                                items: ["Quality link outreach", "Digital PR", "Content partnerships"]
                            },
                            {
                                icon: <BarChart3 className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Local SEO and Global SEO",
                                description: "Specialized strategies for both local market dominance and international expansion",
                                items: ["Google Business Profile", "Local citations", "Multi-region targeting"]
                            },
                            {
                                icon: <Zap className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Website Performance Optimization",
                                description: "Speed and performance improvements that enhance user experience and rankings",
                                items: ["Page speed optimization", "Image compression", "Caching strategies"]
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className={`bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${getAnimationClass(`service-${index}`)}`}
                                data-animate
                                data-id={`service-${index}`}
                            >
                                <div className="text-[#FFA22B] mb-4 md:mb-6">{service.icon}</div>
                                <h3 className="text-lg md:text-xl font-bold text-[#002346] mb-2 md:mb-3">{service.title}</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-xs md:text-sm text-gray-700">
                                            <Check className="w-4 h-4 md:w-5 md:h-5 text-[#FFA22B] mr-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('tech-title')}`}
                        data-animate
                        data-id="tech-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            TOOLS & EXPERTISE
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            Our SEO <span className="text-[#FFA22B]">Tech Stack</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { name: "SEMrush", category: "Keyword Research" },
                            { name: "Ahrefs", category: "Backlink Analysis" },
                            { name: "Google Analytics", category: "Traffic Analytics" },
                            { name: "Search Console", category: "Performance Data" },
                            { name: "Screaming Frog", category: "Technical Audit" },
                            { name: "Surfer SEO", category: "Content Optimization" },
                            { name: "Moz Pro", category: "Rank Tracking" },
                            { name: "PageSpeed Insights", category: "Speed Testing" },
                            { name: "GTmetrix", category: "Performance" },
                            { name: "Yoast SEO", category: "WordPress SEO" },
                            { name: "Schema.org", category: "Structured Data" },
                            { name: "BrightLocal", category: "Local SEO" }
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-lg p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${getAnimationClass(`tech-${index}`)}`}
                                data-animate
                                data-id={`tech-${index}`}
                            >
                                <div className="text-xl md:text-2xl font-bold text-[#002346] mb-1 md:mb-2">{tech.name}</div>
                                <div className="text-xs md:text-sm text-[#FFA22B] font-semibold">{tech.category}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('process-title')}`}
                        data-animate
                        data-id="process-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            HOW WE WORK
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            Our SEO <span className="text-[#FFA22B]">Process</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                        {[
                            { num: "01", title: "Audit", desc: "Comprehensive technical and content audit to identify opportunities", color: "bg-[#FFA22B]" },
                            { num: "02", title: "Research", desc: "Deep keyword research and competitive analysis", color: "bg-[#002346]" },
                            { num: "03", title: "Strategy", desc: "Custom SEO roadmap aligned with business goals", color: "bg-[#FFA22B]" },
                            { num: "04", title: "Execution", desc: "Implementation of technical fixes and content optimization", color: "bg-[#002346]" },
                            { num: "05", title: "Monitor", desc: "Ongoing tracking, reporting, and continuous improvement", color: "bg-[#FFA22B]" }
                        ].map((step, index) => (
                            <div
                                key={index}
                                className={`text-center ${getAnimationClass(`process-${index}`)}`}
                                data-animate
                                data-id={`process-${index}`}
                            >
                                <div className={`${step.color} text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 md:mb-4 shadow-lg`}>
                                    {step.num}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-[#002346] mb-2">{step.title}</h3>
                                <p className="text-xs md:text-sm text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-[#002346] text-white">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('why-title')}`}
                        data-animate
                        data-id="why-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            KEY BENEFITS
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                            Why Choose <span className="text-[#FFA22B]">Empire Offshore?</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />, title: "Consistent Organic Leads", desc: "Generate qualified leads daily from search without paying for each click" },
                            { icon: <Award className="w-10 h-10 md:w-12 md:h-12" />, title: "Higher Brand Credibility", desc: "Build trust and authority through strong organic search presence" },
                            { icon: <Target className="w-10 h-10 md:w-12 md:h-12" />, title: "Lower Customer Acquisition Cost", desc: "Reduce CAC with organic traffic that compounds over time" },
                            { icon: <Search className="w-10 h-10 md:w-12 md:h-12" />, title: "Long Term Ranking Stability", desc: "Sustainable rankings built on quality signals, not short-term tricks" },
                            { icon: <Zap className="w-10 h-10 md:w-12 md:h-12" />, title: "Improved Website Performance", desc: "Technical optimizations that enhance both SEO and user experience" },
                            { icon: <Check className="w-10 h-10 md:w-12 md:h-12" />, title: "Cost-Effective Growth", desc: "Most cost-effective channel over time compared to paid advertising" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`bg-[#003a6b] rounded-xl p-6 md:p-8 hover:bg-[#004a7c] transition-all duration-300 ${getAnimationClass(`why-${index}`)}`}
                                data-animate
                                data-id={`why-${index}`}
                            >
                                <div className="text-[#FFA22B] mb-4 md:mb-6">{item.icon}</div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                                <p className="text-sm md:text-base text-gray-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('industries-title')}`}
                        data-animate
                        data-id="industries-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            SEO SERVICE VARIATIONS
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            SEO <span className="text-[#FFA22B]">Solutions</span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Specialized SEO strategies tailored to your business model and market
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Local SEO for Service Businesses", desc: "Dominate local search results and Google Maps for service-based companies" },
                            { title: "International SEO for Global Brands", desc: "Multi-region and multi-language SEO for global market expansion" },
                            { title: "E-commerce SEO", desc: "Product page optimization, category SEO, and shopping feed management" },
                            { title: "SaaS and B2B SEO", desc: "Complex B2B buyer journey optimization and enterprise SEO strategies" },
                            { title: "Content Driven SEO Growth", desc: "Authority-building content strategies for long-term organic growth" },
                            { title: "Enterprise SEO", desc: "Large-scale website optimization and multi-site SEO management" },
                            { title: "Marketplace SEO", desc: "Optimization for platforms like Amazon, Etsy, and other marketplaces" },
                            { title: "Mobile App SEO (ASO)", desc: "App store optimization for increased visibility and downloads" }
                        ].map((industry, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-xl p-6 border-l-4 border-[#FFA22B] hover:shadow-xl transition-all duration-300 ${getAnimationClass(`industry-${index}`)}`}
                                data-animate
                                data-id={`industry-${index}`}
                            >
                                <h3 className="text-lg font-bold text-[#002346] mb-2">{industry.title}</h3>
                                <p className="text-sm text-gray-600">{industry.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('features-title')}`}
                        data-animate
                        data-id="features-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            BUILT-IN EXCELLENCE
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            Essential <span className="text-[#FFA22B]">Features</span> in Every Campaign
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Technical SEO Foundation",
                                desc: "Complete technical optimization ensuring search engines can properly crawl and index",
                                features: ["Site architecture", "Core Web Vitals", "Schema markup"]
                            },
                            {
                                title: "Strategic Keyword Targeting",
                                desc: "Data-driven keyword research aligned with search intent and business objectives",
                                features: ["Search volume analysis", "Competitor gaps", "Intent mapping"]
                            },
                            {
                                title: "Content Authority Building",
                                desc: "High-quality content strategies that establish topical authority and expertise",
                                features: ["E-E-A-T optimization", "Content clusters", "Topic coverage"]
                            },
                            {
                                title: "Link Building & Off-Page SEO",
                                desc: "White-hat backlink strategies to build domain authority and trust signals",
                                features: ["Quality link acquisition", "Digital PR", "Brand mentions"]
                            },
                            {
                                title: "Performance Monitoring",
                                desc: "Comprehensive tracking and reporting for data-driven optimization decisions",
                                features: ["Ranking tracking", "Traffic analysis", "Conversion monitoring"]
                            },
                            {
                                title: "Continuous Optimization",
                                desc: "Ongoing improvements based on performance data and algorithm updates",
                                features: ["A/B testing", "Content refresh", "Technical updates"]
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 ${getAnimationClass(`feature-${index}`)}`}
                                data-animate
                                data-id={`feature-${index}`}
                            >
                                <h3 className="text-xl font-bold text-[#002346] mb-3">{feature.title}</h3>
                                <p className="text-gray-600 mb-4">{feature.desc}</p>
                                <ul className="space-y-2">
                                    {feature.features.map((item, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-700">
                                            <div className="w-2 h-2 bg-[#FFA22B] rounded-full mr-3"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Timeline */}
            <section className="py-12 md:py-20 px-4 md:px-8 bg-[#002346] text-white">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-8 md:mb-16 ${getAnimationClass('timeline-title')}`}
                        data-animate
                        data-id="timeline-title"
                    >
                        <p className="text-[#FFA22B] text-xs md:text-sm font-semibold mb-2 md:mb-4 tracking-wider uppercase">
                            BUSINESS IMPACT
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                            SEO Growth <span className="text-[#FFA22B]">Timeline</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { type: "Month 1-3", time: "Foundation", scope: "Technical fixes, keyword targeting, and initial optimization for quick wins" },
                            { type: "Month 4-6", time: "Growth Phase", scope: "Content authority building, backlinks, and ranking improvements across targets" },
                            { type: "Month 6+", time: "Compound Results", scope: "Daily lead generation without paying per click—most cost-effective channel" }
                        ].map((timeline, index) => (
                            <div
                                key={index}
                                className={`bg-[#003a6b] rounded-xl p-6 md:p-8 text-center hover:bg-[#004a7c] transition-all duration-300 ${getAnimationClass(`timeline-${index}`)}`}
                                data-animate
                                data-id={`timeline-${index}`}
                            >
                                <div className="text-[#FFA22B] text-3xl md:text-4xl font-bold mb-3">{timeline.type}</div>
                                <h3 className="text-xl font-bold mb-3">{timeline.time}</h3>
                                <p className="text-gray-300 text-sm">{timeline.scope}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-16 md:py-24 px-4 md:px-8 bg-[#FFA22B]"
                data-animate
                data-id="cta"
            >
                <div className={`max-w-4xl mx-auto text-center ${getAnimationClass('cta')}`}>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                        Ready to Build Sustainable Organic Growth?
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10">
                        Let's discuss how our SEO strategies can generate leads daily without paid ads dependency
                    </p>
                    <a href="/#contact" className="bg-white text-[#002346] px-10 md:px-14 py-4 md:py-5 rounded-lg font-bold hover:bg-gray-100 transition text-base md:text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-3">
                        Schedule Your Consultation
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default SEOService;