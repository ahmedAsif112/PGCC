'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Target, TrendingUp, Users, BarChart3, DollarSign, Zap, Check, ArrowRight, LineChart, Award } from 'lucide-react';

const DigitalMarketingService = () => {
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
                            DIGITAL MARKETING AND PAID ADVERTISING
                        </p>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                            Predictable Growth Through <br className="hidden md:block" />
                            <span className="text-[#FFA22B]">Data-Driven Campaigns</span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                            Empire Offshore manages paid advertising campaigns with a performance first mindset. Every campaign is tracked, tested, and optimized to maximize return on investment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                            <a href="/#contact" className="bg-[#FFA22B] text-[#002346] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#ff8f00] transition text-sm md:text-base shadow-xl hover:shadow-2xl transform hover:scale-105 inline-block text-center">
                                Schedule a Call
                            </a>
                            <a href="/#portfolio" className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#002346] transition text-sm md:text-base inline-block text-center">
                                View Case Studies
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
                            PLATFORMS COVERED
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            What We <span className="text-[#FFA22B]">Deliver</span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Complete paid advertising solutions that drive results and maximize ROI
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                icon: <Target className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Google Search and Display Ads",
                                description: "Targeted search and display advertising to capture high-intent customers",
                                items: ["Search campaigns", "Display network ads", "Shopping ads"]
                            },
                            {
                                icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Facebook and Instagram Ads",
                                description: "Social media advertising that reaches your ideal audience where they engage",
                                items: ["Feed & Story ads", "Carousel campaigns", "Video advertising"]
                            },
                            {
                                icon: <LineChart className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "LinkedIn Ads",
                                description: "B2B focused campaigns targeting decision-makers and professionals",
                                items: ["Sponsored content", "InMail campaigns", "Lead gen forms"]
                            },
                            {
                                icon: <Zap className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "YouTube Ads",
                                description: "Video advertising campaigns that capture attention and drive engagement",
                                items: ["TrueView ads", "Bumper ads", "Discovery campaigns"]
                            },
                            {
                                icon: <BarChart3 className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Retargeting and Remarketing",
                                description: "Strategic campaigns to re-engage visitors and convert warm prospects",
                                items: ["Pixel-based retargeting", "List-based remarketing", "Dynamic ads"]
                            },
                            {
                                icon: <DollarSign className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Campaign Management & Optimization",
                                description: "Ongoing tracking, testing, and optimization for maximum performance",
                                items: ["A/B testing", "Budget optimization", "Performance reporting"]
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
                            TOOLS & PLATFORMS
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            Our Marketing <span className="text-[#FFA22B]">Tech Stack</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { name: "Google Ads", category: "Search & Display" },
                            { name: "Meta Ads", category: "Social Advertising" },
                            { name: "LinkedIn Ads", category: "B2B Marketing" },
                            { name: "YouTube Ads", category: "Video Advertising" },
                            { name: "Google Analytics", category: "Analytics" },
                            { name: "SEMrush", category: "Keyword Research" },
                            { name: "Hotjar", category: "User Behavior" },
                            { name: "Mailchimp", category: "Email Marketing" },
                            { name: "HubSpot", category: "Marketing Hub" },
                            { name: "Unbounce", category: "Landing Pages" },
                            { name: "Optimizely", category: "A/B Testing" },
                            { name: "Looker Studio", category: "Reporting" }
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
                            Our Campaign <span className="text-[#FFA22B]">Process</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                        {[
                            { num: "01", title: "Discovery", desc: "Understanding your business goals, target audience, and competitive landscape", color: "bg-[#FFA22B]" },
                            { num: "02", title: "Strategy", desc: "Developing comprehensive campaign strategy and budget allocation", color: "bg-[#002346]" },
                            { num: "03", title: "Launch", desc: "Creating ad creatives, setting up campaigns, and implementing tracking", color: "bg-[#FFA22B]" },
                            { num: "04", title: "Optimize", desc: "Continuous A/B testing, bid adjustments, and performance improvements", color: "bg-[#002346]" },
                            { num: "05", title: "Report", desc: "Transparent reporting with actionable insights and recommendations", color: "bg-[#FFA22B]" }
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
                            { icon: <Zap className="w-10 h-10 md:w-12 md:h-12" />, title: "Immediate Traffic & Leads", desc: "Start generating qualified traffic and leads as soon as campaigns launch" },
                            { icon: <Target className="w-10 h-10 md:w-12 md:h-12" />, title: "Precise Audience Targeting", desc: "Reach your ideal customers with advanced targeting and segmentation" },
                            { icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />, title: "Scalable Performance", desc: "Campaigns designed to scale efficiently as your business grows" },
                            { icon: <BarChart3 className="w-10 h-10 md:w-12 md:h-12" />, title: "Clear Tracking & Reporting", desc: "Complete transparency with detailed performance metrics and insights" },
                            { icon: <DollarSign className="w-10 h-10 md:w-12 md:h-12" />, title: "Optimized Cost Per Lead", desc: "Continuous optimization to reduce acquisition costs and maximize ROI" },
                            { icon: <Check className="w-10 h-10 md:w-12 md:h-12" />, title: "Performance First", desc: "Data-driven decisions focused on measurable results and conversions" }
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
                            CAMPAIGN VARIATIONS
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            Campaign <span className="text-[#FFA22B]">Solutions</span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Strategic campaign types designed for specific business objectives
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Lead Generation Campaigns", desc: "Capture qualified leads with conversion-optimized campaigns and landing pages" },
                            { title: "Sales & Conversion Campaigns", desc: "Drive direct sales and revenue with purchase-focused advertising strategies" },
                            { title: "Brand Awareness Campaigns", desc: "Build visibility and recognition with reach-optimized brand campaigns" },
                            { title: "Retargeting Funnels", desc: "Re-engage website visitors and convert warm prospects into customers" },
                            { title: "Funnel Based Ad Strategies", desc: "Multi-stage campaigns aligned with your customer journey and sales funnel" },
                            { title: "E-commerce Campaigns", desc: "Product-focused campaigns with catalog ads and dynamic retargeting" },
                            { title: "Event & Webinar Promotion", desc: "Registration-focused campaigns for events, webinars, and workshops" },
                            { title: "App Install Campaigns", desc: "Mobile-optimized campaigns to drive app downloads and user acquisition" }
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
                                title: "Performance First Approach",
                                desc: "Every campaign is built around measurable KPIs and continuous optimization",
                                features: ["Goal-based setup", "Conversion tracking", "ROI optimization"]
                            },
                            {
                                title: "Advanced Targeting",
                                desc: "Precision audience targeting to reach your ideal customers efficiently",
                                features: ["Demographic targeting", "Interest-based audiences", "Lookalike modeling"]
                            },
                            {
                                title: "A/B Testing & Optimization",
                                desc: "Systematic testing to improve ad performance and reduce acquisition costs",
                                features: ["Creative testing", "Audience testing", "Landing page optimization"]
                            },
                            {
                                title: "Budget Management",
                                desc: "Smart budget allocation across campaigns and platforms for maximum impact",
                                features: ["Bid optimization", "Budget pacing", "Platform diversification"]
                            },
                            {
                                title: "Conversion Tracking",
                                desc: "Complete tracking implementation to measure every conversion and attribution",
                                features: ["Pixel setup", "Event tracking", "Multi-touch attribution"]
                            },
                            {
                                title: "Transparent Reporting",
                                desc: "Clear, actionable insights with detailed performance reports and recommendations",
                                features: ["Real-time dashboards", "Weekly reports", "Strategic insights"]
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
                            Expected <span className="text-[#FFA22B]">Results</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { type: "Week 1-2", time: "Launch Phase", scope: "Campaign setup, immediate traffic generation, and initial lead flow begins" },
                            { type: "Week 3-8", time: "Testing Phase", scope: "A/B testing markets, offers, and messaging for optimal performance" },
                            { type: "Month 3+", time: "Scale Phase", scope: "Proven campaigns scale faster with validated messaging before long-term investments" }
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
                        Ready to Scale Your Paid Advertising?
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10">
                        Let's discuss how our data-driven campaigns can drive measurable growth for your business
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

export default DigitalMarketingService;