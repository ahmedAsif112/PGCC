'use client';

import React from 'react';
import Image from 'next/image';
import { NAV_LINKS } from '../constants';
import { Linkedin, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import logo from '@/assets/LOGO..png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-amber-900/30 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Logo and Description Section */}
          <div className="space-y-4 md:col-span-1">
            <div className="mb-4">
              <Image
                src={logo}
                alt="Empire Offshore Logo"
                width={180}
                height={60}
                className="w-auto h-12"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Offshore digital agency delivering measurable growth through performance marketing, SEO, web/app development, and scalable solutions. Established 2018 | 150+ Professionals | Serving Global Clients
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/company/empire-offshore-ltd/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/EmpireOffshoreLimited/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/empireoffshore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="md:col-span-1">
            <h4 className="text-white font-serif mb-4 text-lg">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1">
            <h4 className="text-white font-serif mb-4 text-lg">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                <span>empireoffshoreoffice@gmail.com</span>
              </li>

              <li className="flex items-start gap-2">
                <Linkedin className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                <a href="https://www.linkedin.com/company/empire-offshore-ltd/posts/?feedView=all" className="hover:text-amber-400">LinkedIn Profile</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 text-center">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Empire Offshore. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;