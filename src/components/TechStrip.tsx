import React from 'react';

const TECH_STACK = [
  { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg', invert: true },
  { name: 'Magento', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg' },
  { name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Sketch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' },
  { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
];

const TechStrip = () => {
  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div
        className="w-full py-4 md:py-10 overflow-hidden border-y relative z-20"
        style={{
          background: 'linear-gradient(135deg, #001f3f 0%, #003d7a 100%)',
          borderColor: '#003d7a'
        }}
      >
        <div className="mask-gradient w-full">
          <div className="inline-flex animate-scroll whitespace-nowrap">
            {/* First Set */}
            <div className="flex items-center gap-16 px-8">
              {TECH_STACK.map((tech, i) => (
                <div key={`tech-1-${i}`} className="flex items-center gap-4 group cursor-pointer select-none">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/20 rounded-full blur-lg transition-all duration-300" />
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      loading="lazy"
                      width="40"
                      height="40"
                      className={`w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300 ${tech.invert ? 'invert brightness-0' : ''}`}
                    />
                  </div>
                  <span className="font-bold text-white group-hover:text-amber-400 text-xl tracking-wide transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Second Set (Duplicate for seamless loop) */}
            <div className="flex items-center gap-16 px-8">
              {TECH_STACK.map((tech, i) => (
                <div key={`tech-2-${i}`} className="flex items-center gap-4 group cursor-pointer select-none">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/20 rounded-full blur-lg transition-all duration-300" />
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      loading="lazy"
                      width="40"
                      height="40"
                      className={`w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300 ${tech.invert ? 'invert brightness-0' : ''}`}
                    />
                  </div>
                  <span className="font-bold text-white group-hover:text-amber-400 text-xl tracking-wide transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStrip;