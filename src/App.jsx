import React, { useState, useEffect, useRef } from 'react';
import {  Gamepad2 } from 'lucide-react';

import Footer from './Componants/Footer';
import GameCard from "./Componants/GameCard"
import Hero from "./Componants/Hero"
import Navbar from './Componants/Navbar';
const GamingEventLanding = () => {

  const [isLoaded, setIsLoaded] = useState(false);

 useEffect(() => {
  setIsLoaded(true);
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
      
        if (entry.isIntersecting) {
          const elId = entry.target.getAttribute("data-id");
          if (elId) {
            setVisibleElements(prev => {
              if (!prev.has(elId)) {
                const newSet = new Set(prev);
                newSet.add(elId);
                return newSet;
              }
              return prev;
            });
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0,
      rootMargin: "0px 0px -10% 0px",
     }
  );

  const elements = document.querySelectorAll('[data-animate]');
  elements.forEach((el) => observer.observe(el));

  return () => {
    window.removeEventListener('scroll', handleScroll);
  
  };
}, []);


  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* Cyberpunk Game-Inspired Background */}
      <div className="fixed inset-0 z-0">
        {/* Main gradient inspired by Cyberpunk 2077 */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/40 via-transparent to-pink-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-yellow-900/20 via-transparent to-red-900/30"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-orange-500/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border-2 border-pink-500/40 rotate-12 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-yellow-400/30 animate-ping" style={{animationDuration: '4s'}}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px' 
        }}></div>
      </div>

      {/* Dynamic Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <Hero/>


      {/* Game Cards Section */}
      <GameCard/>

      {/* Footer */}
     <Footer/>

      {/* Loading Animations */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin mb-4"></div>
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Loading Battle Arena...
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default GamingEventLanding;