import React from 'react'
import { motion } from 'framer-motion'
import AnimatedElement from './AnimatedElement'
import PulseButton from './PulseButton'
import { Play, Trophy, Users, Calendar, Target, Zap, Star, ArrowRight, Gamepad2, Sword, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section className="relative z-10 min-h-screen flex items-center" 
     initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
       whileInView={{ opacity: 1, y: 0 }}
>
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
      </motion.section>

  )
}

export default Hero