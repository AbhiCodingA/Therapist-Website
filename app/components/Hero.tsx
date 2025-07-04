'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-[100svh] text-white overflow-hidden">
      {/* Video background - fully responsive for all devices */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          onLoadedData={() => setIsLoaded(true)}
          poster="/hero-bg.jpg" // Fallback image while video loads
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />

      {/* Text content with improved animations */}
      <div 
        className={`relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg transform transition-all duration-700 translate-y-0 opacity-100 animate-fade-in-up">
            Dr. Serena Blake, PsyD
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-6 drop-shadow-md transform transition-all duration-700 delay-100 translate-y-0 opacity-100 animate-fade-in-up delay-200">
            Clinical Psychologist in Los Angeles
          </h2>
          <a
  href="#contact"
  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-medium text-base sm:text-lg tracking-wide shadow-md hover:bg-black hover:shadow-lg transition duration-300"
>
  Book a Free Consult
</a>


        </div>
      </div>
    </section>
  );
}
