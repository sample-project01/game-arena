import React from 'react'
import { motion } from 'framer-motion'
import AnimatedElement from './AnimatedElement'
import GlowingCard from './GlowingCard'

const GameCard = () => {
  return (
    <motion.section className="relative z-10 py-20"
      initial={{ scale: 0.8, opacity: 0 }}
     whileInView={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
       viewport={{ once: true, amount: 0.3 }}

        
        >
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
                    { label: "Prize", value: "₹17,000" },
                    { label: "Teams", value: "Solo/Duo/Squid" },
                    { label: "Matches", value: "10" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-black text-cyan-400 group-hover:text-white transition-colors">{item.value}</div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-bold group-hover:text-white transition-colors" onClick={() => window.location.href = "/join-battle"}>Register Now →</div>
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
                    { label: "Prize", value: "₹7,000" },
                    { label: "Teams", value: "Solo/Duo/Squid" },
                    { label: "Matches", value: "10" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-black text-orange-400 group-hover:text-white transition-colors">{item.value}</div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-orange-400 font-bold group-hover:text-white transition-colors" onClick={() => window.location.href = "/join-battle"}>Register Now →</div>
                  <div className="px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 text-sm font-bold">OPEN</div>
                </div>
              </GlowingCard>
            </AnimatedElement>
          </div>
        </div>
      </motion.section>
  )
}

export default GameCard