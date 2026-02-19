'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FileText, Shield, DollarSign, Building2, Calculator, Award, Check, ArrowRight, Target, Users } from 'lucide-react';

const LLCFormationService = () => {
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
                            LLC FORMATION AND BUSINESS STRUCTURING
                        </p>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                            Start and Manage Your Business <br className="hidden md:block" />
                            <span className="text-[#FFA22B]">with Confidence</span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                            Empire Offshore helps entrepreneurs and companies legally structure their businesses in the US with complete compliance support. Proper business structure reduces risk and allows entrepreneurs to operate globally with confidence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                            <a href="/#contact" className="bg-[#FFA22B] text-[#002346] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#ff8f00] transition text-sm md:text-base shadow-xl hover:shadow-2xl transform hover:scale-105 inline-block text-center">
                                Schedule a Call
                            </a>
                            <a href="/#portfolio" className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#002346] transition text-sm md:text-base inline-block text-center">
                                Learn More
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
                            SERVICES INCLUDED
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            What We <span className="text-[#FFA22B]">Deliver</span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Complete business formation and compliance services for your peace of mind
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                icon: <Building2 className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "US LLC Registration",
                                description: "Complete business entity formation with all required state and federal filings",
                                items: ["Articles of Organization", "State filing services", "Name availability check"]
                            },
                            {
                                icon: <FileText className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "EIN and ITIN Support",
                                description: "Federal tax identification numbers for US and international business owners",
                                items: ["EIN application", "ITIN assistance", "IRS correspondence"]
                            },
                            {
                                icon: <DollarSign className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Business Banking Assistance",
                                description: "Support with opening US business bank accounts and establishing financial infrastructure",
                                items: ["Bank account setup", "Document preparation", "Banking relationship guidance"]
                            },
                            {
                                icon: <Calculator className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Tax Guidance and Compliance",
                                description: "Strategic tax planning and ongoing compliance to keep your business in good standing",
                                items: ["Tax structure consultation", "Filing requirements", "Compliance monitoring"]
                            },
                            {
                                icon: <Shield className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Ongoing Documentation Support",
                                description: "Continuous assistance with business documents, filings, and administrative needs",
                                items: ["Operating agreements", "Annual reports", "Document management"]
                            },
                            {
                                icon: <Target className="w-10 h-10 md:w-12 md:h-12" />,
                                title: "Registered Agent Services",
                                description: "Professional registered agent representation in your state of formation",
                                items: ["Legal document receipt", "Compliance notifications", "Privacy protection"]
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
                            Our Business & Tax <span className="text-[#FFA22B]">Tech Stack</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { name: "QuickBooks", category: "Accounting" },
                            { name: "Xero", category: "Bookkeeping" },
                            { name: "TurboTax", category: "Tax Filing" },
                            { name: "LegalZoom", category: "Formation" },
                            { name: "Stripe", category: "Payment Processing" },
                            { name: "Wave", category: "Invoicing" },
                            { name: "Expensify", category: "Expense Management" },
                            { name: "Gusto", category: "Payroll" },
                            { name: "Bill.com", category: "AP/AR" },
                            { name: "Bench", category: "Bookkeeping" },
                            { name: "FreshBooks", category: "Accounting" },
                            { name: "DocuSign", category: "Document Signing" }
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
                            Our Formation <span className="text-[#FFA22B]">Process</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                        {[
                            { num: "01", title: "Consultation", desc: "Understanding your business needs and optimal entity structure", color: "bg-[#FFA22B]" },
                            { num: "02", title: "Documentation", desc: "Preparing all required formation documents and applications", color: "bg-[#002346]" },
                            { num: "03", title: "Filing", desc: "Submitting formation documents to state and federal agencies", color: "bg-[#FFA22B]" },
                            { num: "04", title: "Setup", desc: "Establishing EIN, banking, and compliance frameworks", color: "bg-[#002346]" },
                            { num: "05", title: "Ongoing Support", desc: "Continuous compliance monitoring and documentation assistance", color: "bg-[#FFA22B]" }
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
                            { icon: <Shield className="w-10 h-10 md:w-12 md:h-12" />, title: "Legal Protection", desc: "Separate your personal assets from business liabilities with proper entity structure" },
                            { icon: <Award className="w-10 h-10 md:w-12 md:h-12" />, title: "Professional Credibility", desc: "Establish business legitimacy and credibility with customers and partners" },
                            { icon: <FileText className="w-10 h-10 md:w-12 md:h-12" />, title: "Simplified Compliance", desc: "Stay compliant with all federal and state requirements effortlessly" },
                            { icon: <Target className="w-10 h-10 md:w-12 md:h-12" />, title: "Faster Market Entry", desc: "Quick formation process to get your business operational without delays" },
                            { icon: <DollarSign className="w-10 h-10 md:w-12 md:h-12" />, title: "Cost-Effective Solutions", desc: "Offshore expertise at a fraction of traditional accounting firm costs" },
                            { icon: <Check className="w-10 h-10 md:w-12 md:h-12" />, title: "Complete Support", desc: "One partner for business growth, clarity, structure, and ongoing compliance" }
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
                            FORMATION VARIATIONS
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#002346] mb-3 md:mb-4">
                            Business <span className="text-[#FFA22B]">Structures</span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Specialized formation services for every business structure and ownership type
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Single Member LLC Setup", desc: "Perfect for solo entrepreneurs and independent contractors starting their business" },
                            { title: "Multi Member LLC", desc: "Partnership structures with multiple owners and customized operating agreements" },
                            { title: "Foreign Owned Business Support", desc: "Complete formation services for international entrepreneurs entering the US market" },
                            { title: "State Specific Registrations", desc: "Expertise in formation requirements across all 50 states for optimal structuring" },
                            { title: "S-Corporation Election", desc: "Tax-optimized structure for businesses looking to minimize self-employment taxes" },
                            { title: "Professional LLCs", desc: "Specialized formation for licensed professionals like doctors, lawyers, and consultants" },
                            { title: "Holding Companies", desc: "Asset protection structures for real estate investors and multi-business owners" },
                            { title: "Series LLC Formation", desc: "Advanced structures for businesses with multiple divisions or investment properties" }
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
                            Essential <span className="text-[#FFA22B]">Features</span> in Every Engagement
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Complete Formation Package",
                                desc: "Everything you need to establish your business entity properly from day one",
                                features: ["State filing & registration", "EIN from the IRS", "Operating agreement drafting"]
                            },
                            {
                                title: "Tax Structure Optimization",
                                desc: "Strategic guidance to choose the right tax classification for your business goals",
                                features: ["Entity comparison", "Tax classification guidance", "Long-term planning"]
                            },
                            {
                                title: "Banking Setup Support",
                                desc: "Comprehensive assistance with opening business bank accounts and financial infrastructure",
                                features: ["Document preparation", "Bank recommendations", "Account setup guidance"]
                            },
                            {
                                title: "Compliance Framework",
                                desc: "Ongoing support to maintain good standing and meet all regulatory requirements",
                                features: ["Annual report filing", "State compliance", "Regulatory updates"]
                            },
                            {
                                title: "International Business Support",
                                desc: "Specialized services for foreign entrepreneurs and international business operations",
                                features: ["ITIN application", "Foreign ownership structure", "Cross-border guidance"]
                            },
                            {
                                title: "Scalable Systems",
                                desc: "Business structures and processes designed to grow with your company",
                                features: ["Growth planning", "Multi-state expansion", "Operational efficiency"]
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
                            TRANSPARENT DELIVERY
                        </p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                            Formation <span className="text-[#FFA22B]">Timeline</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { type: "LLC Formation", time: "1-2 Weeks", scope: "Complete state filing, EIN registration, and entity establishment" },
                            { type: "Banking & Compliance", time: "2-3 Weeks", scope: "Business banking setup and initial compliance framework implementation" },
                            { type: "Ongoing Support", time: "Monthly", scope: "Documentation assistance, compliance monitoring, and annual filing management" }
                        ].map((timeline, index) => (
                            <div
                                key={index}
                                className={`bg-[#003a6b] rounded-xl p-6 md:p-8 text-center hover:bg-[#004a7c] transition-all duration-300 ${getAnimationClass(`timeline-${index}`)}`}
                                data-animate
                                data-id={`timeline-${index}`}
                            >
                                <div className="text-[#FFA22B] text-3xl md:text-4xl font-bold mb-3">{timeline.time}</div>
                                <h3 className="text-xl font-bold mb-3">{timeline.type}</h3>
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
                        Ready to Structure Your Business the Right Way?
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10">
                        Let's discuss how we can help you establish your business with confidence and clarity
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

export default LLCFormationService;