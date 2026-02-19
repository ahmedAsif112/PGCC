'use client';
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Header animation observer
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeaderVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    // Cards animation observers
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
          }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      headerObserver.disconnect();
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Handle navigation to specific service page
  const handleServiceClick = (slug: string) => {
    router.push(`/${slug}`);
  };

  return (
    <section id="services" className="pt-[16px] pb-[5rem]" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FFA726 50%, #FFB84D 100%)' }}>

      {/* Header */}
      <div
        ref={headerRef}
        className="py-10 mb-12 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2
            className="text-4xl md:text-5xl font-bold text-white uppercase mb-2 inline-block px-6 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl border-3 md:border-4 border-white/30 bg-white/10 backdrop-blur-sm"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.2)',
              opacity: isHeaderVisible ? 1 : 0,
              transform: isHeaderVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            Our Services
          </h2>
          <p
            className="text-white text-base md:text-lg font-medium opacity-90"
            style={{
              opacity: isHeaderVisible ? 0.9 : 0,
              transform: isHeaderVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
            }}
          >
            Services First (Portfolio-Heavy with Metrics)
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
              style={{
                opacity: visibleCards.includes(index) ? 1 : 0,
                transform: visibleCards.includes(index)
                  ? 'translateY(0) scale(1)'
                  : 'translateY(30px) scale(0.95)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
              }}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img
                  src={service.image}
                  alt={`${service.title} - Service Representation`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width="800"
                  height="450"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-3">
                  {service.tag}
                </p>

                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <button
                    onClick={() => handleServiceClick(service.slug)}
                    className="mt-4 mx-auto md:mx-0 px-6 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-lg flex items-center gap-2 hover:bg-orange-600 hover:gap-3 transition-all group/link cursor-pointer shadow-md hover:shadow-lg"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;