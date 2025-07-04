'use client';
import { useState, useEffect } from 'react';

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
      <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center space-x-6">
        <a href="#" className="text-gray-800 hover:text-indigo-600 transition-colors">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
        </a>
        <a href="#about" className="text-gray-800 hover:text-indigo-600 transition-colors">About</a>
        <a href="#services" className="text-gray-800 hover:text-indigo-600 transition-colors">Services</a>
        <a href="#contact" className="text-gray-800 hover:text-indigo-600 transition-colors">Contact</a>
      </div>
    </nav>
  );
}