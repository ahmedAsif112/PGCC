'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/LOGO..png"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact', href: '/#contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'py-2 shadow-lg'
        : 'py-4'
        }`}
      style={{
        background: 'linear-gradient(135deg, #001f3f 0%, #003d7a 100%)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 102, 204, 0.3)' : 'none'
      }}
    >
      <div className="w-full px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Empire Offshore Home"
        >
          <Image
            src={logo}
            alt="Empire Logo"
            width={150}
            height={40}
            className={`object-contain transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'
              }`}
          />
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex gap-8" role="menubar">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              role="menuitem"
              className="text-sm font-medium text-[#a8c5e6] hover:text-amber-400 uppercase tracking-wider transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden text-white p-2 hover:text-amber-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5 duration-200 border-t border-[#003d7a]"
          style={{
            background: 'linear-gradient(135deg, #001f3f 0%, #003d7a 100%)',
            boxShadow: '0 8px 20px rgba(0, 102, 204, 0.3)'
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a8c5e6] hover:text-amber-400 font-medium py-2 border-b border-[#003d7a] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;