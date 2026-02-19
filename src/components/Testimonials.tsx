'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    const cardObservers: IntersectionObserver[] = [];
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
        cardObservers.push(observer);
      }
    });

    return () => {
      headerObserver.disconnect();
      cardObservers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="reviews" className="py-24 bg-gradient-to-r from-amber-500 to-amber-600 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl font-bold text-white uppercase drop-shadow-sm mb-2"
            style={{
              opacity: isHeaderVisible ? 1 : 0,
              transform: isHeaderVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            What Our Clients Say
          </h2>
          <p
            className="text-amber-100"
            style={{
              opacity: isHeaderVisible ? 1 : 0,
              transform: isHeaderVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
            }}
          >
            Trusted by businesses worldwide for exceptional offshore solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="bg-white rounded-xl p-8 shadow-2xl flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
              style={{
                opacity: visibleCards.includes(idx) ? 1 : 0,
                transform: visibleCards.includes(idx)
                  ? 'translateY(0) scale(1)'
                  : 'translateY(30px) scale(0.95)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.1}s`,
              }}
            >
              <div className="flex gap-1 mb-4 text-amber-500">
                {[...Array(t.stars)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
              </div>

              <Quote className="w-8 h-8 text-amber-200 mb-4" />

              <p className="text-slate-600 text-sm italic mb-6 leading-relaxed">
                "{t.text}"
              </p>

              <div className="mt-auto">
                <h4 className="font-bold text-amber-600">{t.author}</h4>
                <span className="text-xs text-slate-400 font-bold uppercase">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;