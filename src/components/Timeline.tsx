'use client';

import React, { useEffect, useRef, useState } from 'react';

const timelineData = [
  {
    year: '2021',
    title: 'Company Founded',
    icon: 'fa-regular fa-lightbulb',
    color: '#00d285', // Green
    description:
      'Empire Offshore established with a vision to provide world-class offshore SEO services to global businesses.',
  },
  {
    year: '2022',
    title: 'First 50 Clients',
    icon: 'fa-solid fa-chess-knight',
    color: '#00c3d2', // Teal
    description:
      'Reached our first major milestone by serving 50+ satisfied clients across North America and Europe.',
  },
  {
    year: '2023',
    title: 'Team Expansion',
    icon: 'fa-solid fa-hard-hat',
    color: '#0099ff', // Blue
    description:
      'Grew our expert team to 100 professionals and expanded service offerings to include web development and UI/UX.',
  },
  {
    year: '2024',
    title: 'Global Recognition',
    icon: 'fa-solid fa-bullhorn',
    color: '#3355ff', // Dark Blue
    description:
      'Recognized as a top offshore service provider with 200+ clients, earning 95% client satisfaction.',
  },
  {
    year: '2025',
    title: 'Innovation & Growth',
    icon: 'fa-solid fa-rocket',
    color: '#8c00ff', // Purple
    description:
      'Launched AI-powered solutions and expanded to new markets with 150+ team members, achieving 601% ROI.',
  },
];

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const itemRefs = useRef([]);
  const headerRef = useRef(null);

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

    // Timeline items observers
    const observers = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleItems((prev) => [...new Set([...prev, index])]);
              }
            });
          },
          {
            threshold: 0.2,
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

  return (
    <section className="timeline-section">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <div className="container">
        <div ref={headerRef}>
          <h2
            className="timeline-heading"
            style={{
              opacity: isHeaderVisible ? 1 : 0,
              transform: isHeaderVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            Our Journey
          </h2>
          <p
            className="timeline-subtitle"
            style={{
              opacity: isHeaderVisible ? 1 : 0,
              transform: isHeaderVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
            }}
          >
            Milestones that shaped Empire Offshore
          </p>
        </div>

        <div className="timeline-wrapper">
          {/* Background Cloud Shape */}
          <div className="cloud-bg"></div>

          {/* Flying Paper Plane */}
          <div className="paper-plane">
            <i className="fa-solid fa-paper-plane"></i>
          </div>

          {/* Curved Dashed Line */}
          <svg className="svg-curve" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path
              className="path-line"
              d="M50,200 Q250,100 450,180 T850,160 Q1000,140 1150,120"
              fill="none"
              stroke="#333"
              strokeWidth="2"
              strokeDasharray="8,8"
              opacity="0.3"
            />
          </svg>

          <div className="timeline-grid">
            {timelineData.map((item, index) => {
              const isVisible = visibleItems.includes(index);
              const isTopRow = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`timeline-item ${isTopRow ? 'top-row' : 'bottom-row'}`}
                  style={{
                    '--step-color': item.color,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.6s ease ${index * 0.15}s`,
                  }}
                >
                  {/* Content Box */}
                  <div className="content-box">
                    <div className="step-label">{item.year}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  {/* Connecting Line */}
                  <div className="connector-line"></div>

                  {/* Icon Circle */}
                  <div className="icon-circle">
                    <i className={item.icon}></i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
          padding: 40px 20px;
          overflow: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          width: 100%;
        }

        .timeline-heading {
          color: #1a1a2e;
          font-size: 38px;
          font-weight: 800;
          margin-bottom: 8px;
          text-align: center;
        }

        .timeline-subtitle {
          color: #666;
          font-size: 18px;
          margin-bottom: 50px;
          text-align: center;
        }

        .timeline-wrapper {
          position: relative;
          padding: 30px 0;
        }

        /* Cloud Background Shape */
        .cloud-bg {
          position: absolute;
          top: -10%;
          right: -200px;
          width: 70%;
          height: 120%;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 60% 0 0 60% / 50% 0 0 50%;
          z-index: 0;
          pointer-events: none;
        }

        /* Paper Plane */
        .paper-plane {
          position: absolute;
          top: -40px;
          right: 60px;
          font-size: 50px;
          color: #0099ff;
          transform: rotate(-25deg);
          z-index: 3;
          animation: float 4s ease-in-out infinite;
          filter: drop-shadow(0 4px 8px rgba(0, 153, 255, 0.3));
        }

        @keyframes float {
          0%, 100% { transform: rotate(-25deg) translateY(0px); }
          50% { transform: rotate(-25deg) translateY(-20px); }
        }

        /* Curved Line SVG */
        .svg-curve {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 400px;
          transform: translateY(-50%);
          z-index: 1;
          pointer-events: none;
        }

        /* Timeline Grid */
        .timeline-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 25px;
          z-index: 2;
          align-items: start;
        }

        /* Timeline Item */
        .timeline-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Top Row - Content on Top */
        .timeline-item.top-row {
          flex-direction: column;
          padding-top: 0;
          padding-bottom: 50px;
        }

        .timeline-item.top-row .content-box {
          order: 1;
          margin-bottom: 15px;
        }

        .timeline-item.top-row .connector-line {
          order: 2;
          height: 40px;
          width: 2px;
        }

        .timeline-item.top-row .icon-circle {
          order: 3;
        }

        /* Bottom Row - Content on Bottom */
        .timeline-item.bottom-row {
          flex-direction: column;
          padding-top: 50px;
          padding-bottom: 0;
        }

        .timeline-item.bottom-row .icon-circle {
          order: 1;
        }

        .timeline-item.bottom-row .connector-line {
          order: 2;
          height: 40px;
          width: 2px;
        }

        .timeline-item.bottom-row .content-box {
          order: 3;
          margin-top: 15px;
        }

        /* Content Box */
        .content-box {
          background: white;
          padding: 18px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          width: 100%;
          text-align: left;
          border-left: 4px solid var(--step-color);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .content-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
        }

        .step-label {
          font-size: 13px;
          font-weight: 800;
          color: var(--step-color);
          margin-bottom: 6px;
          letter-spacing: 0.5px;
        }

        .content-box h3 {
          margin: 0 0 8px 0;
          font-size: 16px;
          font-weight: 700;
          color: #1a1a2e;
        }

        .content-box p {
          font-size: 13px;
          line-height: 1.5;
          color: #666;
          margin: 0;
        }

        /* Connector Line */
        .connector-line {
          background: var(--step-color);
          opacity: 0.5;
        }

        /* Icon Circle */
        .icon-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: var(--step-color);
          border: 4px solid var(--step-color);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
          transition: transform 0.3s ease;
          z-index: 2;
        }

        .timeline-item:hover .icon-circle {
          transform: scale(1.15) rotate(10deg);
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .timeline-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .timeline-section {
            padding: 60px 20px;
          }

          .timeline-heading {
            font-size: 32px;
          }

          .timeline-subtitle {
            font-size: 16px;
            margin-bottom: 50px;
          }

          .svg-curve,
          .cloud-bg,
          .paper-plane {
            display: none;
          }

          .timeline-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding-left: 30px;
            border-left: 3px solid #ddd;
          }

          .timeline-item {
            flex-direction: row !important;
            padding: 0 !important;
            margin-bottom: 30px;
            align-items: flex-start;
          }

          .timeline-item .icon-circle {
            order: 1 !important;
            margin-left: -52px;
            margin-right: 20px;
            width: 60px;
            height: 60px;
            font-size: 24px;
            flex-shrink: 0;
          }

          .timeline-item .connector-line {
            display: none;
          }

          .timeline-item .content-box {
            order: 2 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;