import React, { useState, useEffect, useRef } from 'react';
import { Play, Trophy, Users, Calendar, Target, Zap, Star, ArrowRight, Gamepad2, Sword, Shield } from 'lucide-react';

const GamingEventLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef();

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
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll('[data-animate]');
  elements.forEach((el) => observer.observe(el));

  return () => {
    window.removeEventListener('scroll', handleScroll);
    observer.disconnect();
  };
}, []);

 const AnimatedElement = ({ children, id, delay = 0, className = "", animation = "slideUp" }) => {
  const isVisible = visibleElements.has(id);

  const animations = {
    slideUp: isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0',
    slideLeft: isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0',
    slideRight: isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0',
    scale: isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
    rotate: isVisible ? 'rotate-0 opacity-100' : 'rotate-12 opacity-0'
  };

  const animationClass = animations[animation] || animations.slideUp;

  return (
    <div
      data-animate
      data-id={id}
      className={`transform transition-all duration-1000 ease-out ${animationClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


  const GlowingCard = ({ children, className = "", glowColor = "from-orange-500 to-red-500" }) => (
    <div className={`relative group ${className}`}>
      <div className={`absolute -inset-1 bg-gradient-to-r ${glowColor} rounded-3xl opacity-20 group-hover:opacity-40 transition-all duration-500 blur-lg animate-pulse`}></div>
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-black/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
        {children}
      </div>
    </div>
  );

  const PulseButton = ({ children, variant = "primary", className = "" }) => {
    const variants = {
      primary: "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-400 hover:via-red-400 hover:to-pink-400 text-white shadow-2xl hover:shadow-orange-500/25",
      secondary: "bg-black/20 backdrop-blur-xl border-2 border-orange-400/50 text-orange-300 hover:border-orange-400 hover:bg-orange-500/10"
    };
    
    return (
      <button className={`relative overflow-hidden font-bold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-110 active:scale-95 group ${variants[variant]} ${className}`}>
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </button>
    );
  };

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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <AnimatedElement id="logo" delay={100} animation="slideRight">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center animate-pulse">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>
          </AnimatedElement>
          
          <AnimatedElement id="nav-links" delay={200} animation="slideLeft">
            <div className="hidden md:flex space-x-8">
              {['Events', 'Tournaments', 'Prizes', 'Register'].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="relative text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 group"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <AnimatedElement id="hero-badge" delay={300} animation="scale">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-400/30 rounded-full px-6 py-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-orange-300">LIVE EVENT • REGISTRATION OPEN</span>
                </div>
              </AnimatedElement>

              <AnimatedElement id="hero-title" delay={500} animation="slideUp">
                <h1 className="text-6xl lg:text-8xl font-black leading-none">
                  <span className="block bg-gradient-to-r from-white via-orange-200 to-yellow-200 bg-clip-text text-transparent">
                    BATTLE
                  </span>
                  <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                    ARENA
                  </span>
                </h1>
              </AnimatedElement>

              <AnimatedElement id="hero-subtitle" delay={700} animation="slideUp">
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-lg">
                  Enter the ultimate gaming championship where legends are born. 
                  <span className="text-orange-400 font-bold"> BGMI</span> and 
                  <span className="text-red-400 font-bold"> FREE FIRE</span> warriors unite!
                </p>
              </AnimatedElement>

              <AnimatedElement id="hero-buttons" delay={900} animation="slideUp">
                <div className="flex flex-col sm:flex-row gap-4">
                  <PulseButton>
                    <Sword className="w-5 h-5" />
                    JOIN BATTLE
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </PulseButton>
                  <PulseButton variant="secondary">
                    <Shield className="w-5 h-5" />
                    TOURNAMENT RULES
                  </PulseButton>
                </div>
              </AnimatedElement>
            </div>

            {/* Right Content - Floating Stats */}
            <div className="relative">
              <AnimatedElement id="floating-stats" delay={1100} animation="scale">
                <div className="space-y-6">
                  {[
                    { icon: Trophy, title: "Prize Pool", value: "₹2,50,000", color: "from-yellow-400 to-orange-500" },
                    { icon: Users, title: "Total Players", value: "1000+", color: "from-blue-400 to-purple-500" },
                    { icon: Calendar, title: "Event Days", value: "7 Days", color: "from-green-400 to-teal-500" },
                    { icon: Target, title: "Tournaments", value: "5 Games", color: "from-pink-400 to-red-500" }
                  ].map((stat, index) => (
                    <AnimatedElement key={index} id={`stat-${index}`} delay={1200 + index * 100} animation="slideLeft">
                      <div className="flex items-center gap-4 bg-black/20 backdrop-blur-xl rounded-2xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-105">
                        <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center`}>
                          <stat.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-black text-white">{stat.value}</div>
                          <div className="text-gray-400">{stat.title}</div>
                        </div>
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Game Cards Section */}
      <section className=" z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedElement id="games-title" delay={200} animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
                CHOOSE YOUR BATTLEFIELD
              </h2>
              <p className="text-xl text-gray-400">Select your game and dominate the competition</p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedElement id="bgmi-card" delay={400} animation="slideRight">
              <GlowingCard glowColor="from-blue-500 to-cyan-500" className="group cursor-pointer">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center text-3xl font-black transform group-hover:rotate-12 transition-all duration-500">
                      🎯
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-black animate-bounce">
                      !</div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">BGMI</h3>
                    <p className="text-gray-400 text-lg">Battlegrounds Mobile India</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { label: "Prize", value: "₹1,50,000" },
                    { label: "Teams", value: "120" },
                    { label: "Matches", value: "15" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-black text-cyan-400 group-hover:text-white transition-colors">{item.value}</div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-bold group-hover:text-white transition-colors">Register Now →</div>
                  <div className="px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-400 text-sm font-bold">OPEN</div>
                </div>
              </GlowingCard>
            </AnimatedElement>

            <AnimatedElement id="freefire-card" delay={600} animation="slideLeft">
              <GlowingCard glowColor="from-orange-500 to-red-500" className="group cursor-pointer">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center text-3xl font-black transform group-hover:rotate-12 transition-all duration-500">
                      🔥
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-black animate-bounce">
                      !</div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-white mb-2 group-hover:text-orange-300 transition-colors">FREE FIRE</h3>
                    <p className="text-gray-400 text-lg">Battle Royale Championship</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { label: "Prize", value: "₹1,00,000" },
                    { label: "Teams", value: "80" },
                    { label: "Matches", value: "12" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-black text-orange-400 group-hover:text-white transition-colors">{item.value}</div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-orange-400 font-bold group-hover:text-white transition-colors">Register Now →</div>
                  <div className="px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 text-sm font-bold">OPEN</div>
                </div>
              </GlowingCard>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <AnimatedElement id="footer-logo" delay={100} animation="slideUp">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Gamepad2 className="w-7 h-7" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-3xl font-black bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
                    NEXUS
                  </span>
                </div>
              </AnimatedElement>
              <AnimatedElement id="footer-desc" delay={200} animation="slideUp">
                <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-6">
                  The ultimate gaming championship bringing together the best players from across the college. 
                  Join the revolution, make history.
                </p>
                <div className="flex gap-4">
                  {['Discord', 'Instagram', 'YouTube', 'Twitter'].map((social, index) => (
                    <AnimatedElement key={social} id={`social-${index}`} delay={300 + index * 100} animation="scale">
                      <a
                        href="#"
                        className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center hover:bg-orange-500/30 transition-all duration-300 hover:scale-110"
                      >
                        <span className="text-orange-400 font-bold text-sm">{social[0]}</span>
                      </a>
                    </AnimatedElement>
                  ))}
                </div>
              </AnimatedElement>
            </div>

            {/* Quick Links */}
            <div>
              <AnimatedElement id="footer-links" delay={400} animation="slideUp">
                <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {['Tournament Rules', 'Registration', 'Schedule', 'Prize Pool', 'Contact Us'].map((link, index) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </AnimatedElement>
            </div>

            {/* Games */}
            <div>
              <AnimatedElement id="footer-games" delay={500} animation="slideUp">
                <h3 className="text-xl font-bold text-white mb-6">Games</h3>
                <ul className="space-y-3">
                  {['BGMI Tournament', 'FREE FIRE Battle', 'Valorant Cup', 'Call of Duty', 'Clash Royale'].map((game, index) => (
                    <li key={game}>
                      <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                        {game}
                      </a>
                    </li>
                  ))}
                </ul>
              </AnimatedElement>
            </div>
          </div>

          {/* Bottom Footer */}
          <AnimatedElement id="footer-bottom" delay={600} animation="slideUp">
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400">
                © 2025 NEXUS Gaming Championship. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </footer>

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