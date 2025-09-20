import React from 'react'
import { motion } from 'framer-motion'
import AnimatedElement from './AnimatedElement'
import PulseButton from './PulseButton'
import { useNavigate } from 'react-router-dom'
import { Play, Trophy, Users, Calendar, Target, Zap, Star, ArrowRight, Gamepad2, Sword, Shield } from 'lucide-react';

const Hero = () => {
  const navigate= useNavigate()
  return (
//     <motion.section className="relative z-10 min-h-screen flex items-center" 
    //  initial={{ opacity: 0, y: 50 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.6, ease: 'easeOut' }}
    //    whileInView={{ opacity: 1, y: 0 }}
// >
//         <div className="max-w-7xl mx-auto px-6 pt-20">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-8">
//               <AnimatedElement id="hero-badge" delay={300} animation="scale">
//                 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-400/30 rounded-full px-6 py-3">
//                   <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                   <span className="text-sm font-bold text-orange-300">LIVE EVENT • REGISTRATION OPEN</span>
//                 </div>
//               </AnimatedElement>

//               <AnimatedElement id="hero-title" delay={500} animation="slideUp">
//                 <h1 className="text-6xl lg:text-8xl font-black leading-none">
//                   <span className="block bg-gradient-to-r from-white via-orange-200 to-yellow-200 bg-clip-text text-transparent">
//                     BATTLE
//                   </span>
//                   <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
//                     ARENA
//                   </span>
//                 </h1>
//               </AnimatedElement>

//               <AnimatedElement id="hero-subtitle" delay={700} animation="slideUp">
//                 <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-lg">
//                   Enter the ultimate gaming championship where legends are born. 
//                   <span className="text-orange-400 font-bold"> BGMI</span> and 
//                   <span className="text-red-400 font-bold"> FREE FIRE</span> warriors unite!
//                 </p>
//               </AnimatedElement>

//               <AnimatedElement id="hero-buttons" delay={900} animation="slideUp">
//                 <div className="flex flex-col sm:flex-row gap-4 cursor-pointer">
//                   <PulseButton onclick={() => navigate("/join-battle")}>
//                     <Sword className="w-5 h-5" />
//                     JOIN BATTLE
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//                   </PulseButton>
//                   <PulseButton variant="secondary" onclick={() => navigate("/rules")}>
//                     <Shield className="w-5 h-5" />
//                     TOURNAMENT RULES
//                   </PulseButton>
//                 </div>
//               </AnimatedElement>
//             </div>

//             {/* Right Content - Floating Stats */}
//             <div className="relative">
//               <AnimatedElement id="floating-stats" delay={1100} animation="scale">
//                 <div className="space-y-6">
//                   {[
//                     { icon: Trophy, title: "Prize Pool", value: "₹24,000", color: "from-yellow-400 to-orange-500" },
//                     { icon: Users, title: "Total Players", value: "1400+", color: "from-blue-400 to-purple-500" },
//                     { icon: Calendar, title: "Event Days", value: "2 Days", color: "from-green-400 to-teal-500" },
//                     { icon: Target, title: "Tournaments", value: "2 Games", color: "from-pink-400 to-red-500" }
//                   ].map((stat, index) => (
//                     <AnimatedElement key={index} id={`stat-${index}`} delay={1200 + index * 100} animation="slideLeft">
//                       <div className="flex items-center gap-4 bg-black/20 backdrop-blur-xl rounded-2xl p-6 hover:bg-black/40 transition-all duration-300 hover:scale-105">
//                         <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center`}>
//                           <stat.icon className="w-8 h-8 text-white" />
//                         </div>
//                         <div>
//                           <div className="text-2xl font-black text-white">{stat.value}</div>
//                           <div className="text-gray-400">{stat.title}</div>
//                         </div>
//                       </div>
//                     </AnimatedElement>
//                   ))}
//                 </div>
//               </AnimatedElement>
//             </div>
//           </div>
//         </div>
//       </motion.section>

<motion.section className="relative z-10 min-h-screen flex items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
       whileInView={{ opacity: 1, y: 0 }}>
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <AnimatedElement id="hero-badge" delay={300} animation="scale">
                <div className="flex gap-3">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-green-300">FREE FIRE LIVE</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/20 to-gray-600/20 backdrop-blur-xl border border-gray-400/30 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-gray-300">BGMI COMING SOON</span>
                  </div>
                </div>
              </AnimatedElement>

              <AnimatedElement id="hero-title" delay={500} animation="slideUp">
                <h1 className="text-5xl lg:text-7xl font-black leading-none">
                  <span className="block bg-gradient-to-r from-white via-orange-200 to-yellow-200 bg-clip-text text-transparent">
                    FREE FIRE
                  </span>
                  <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                    TOURNAMENT
                  </span>
                </h1>
              </AnimatedElement>

              <AnimatedElement id="hero-subtitle" delay={700} animation="slideUp">
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg">
                  Join the hottest FREE FIRE tournament now! Choose your battle mode and start earning.
                  <span className="text-yellow-400 font-bold"> BGMI tournaments</span> launching soon!
                </p>
              </AnimatedElement>

              {/* Tournament Types */}
              <AnimatedElement id="tournament-types" delay={800} animation="slideUp">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-orange-400 mb-4">🔥 ACTIVE TOURNAMENTS:</h3>
                  
                  {/* Per Kill Tournament */}
                  <div className="bg-black/30 backdrop-blur-xl border border-orange-400/30 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-white">💰 Per Kill Rewards</h4>
                      <div className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full">
                        <span className="text-green-400 text-sm font-bold">LIVE NOW</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <div className="text-2xl font-black text-orange-400">₹8</div>
                        <div className="text-sm text-gray-400">Per Kill</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-orange-400">₹10</div>
                        <div className="text-sm text-gray-400">Entry Fee</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">Get ₹8 for every kill you make. More kills = More money!</p>
                  </div>

                  {/* Winner Takes All */}
                  <div className="bg-black/30 backdrop-blur-xl border border-red-400/30 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-white">🏆 Winner Takes All</h4>
                      <div className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full">
                        <span className="text-green-400 text-sm font-bold">LIVE NOW</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <div className="text-2xl font-black text-red-400">₹500</div>
                        <div className="text-sm text-gray-400">Winner Prize</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-red-400">₹20</div>
                        <div className="text-sm text-gray-400">Entry Fee</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">Be the last player standing and win the entire prize pool!</p>
                  </div>
                </div>
              </AnimatedElement>

              <AnimatedElement id="hero-buttons" delay={1000} animation="slideUp">
                <div className="flex flex-col sm:flex-row gap-4">
                  <PulseButton onclick={()=> window.location.href="/join-battle"} className='cursor-pointer'>
                    <Play className="w-5 h-5" />
                    JOIN FREE FIRE NOW
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </PulseButton>
                  <PulseButton variant="secondary" onclick={()=> window.location.href="/rules"}  className='cursor-pointer'>
                    <Target className="w-5 h-5" />
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
                   { icon: Trophy, title: "Prize Pool", value: "₹24,000", color: "from-yellow-400 to-orange-500" },
                    { icon: Users, title: "Total Players", value: "1400+", color: "from-blue-400 to-purple-500" },
                    { icon: Calendar, title: "Event Days", value: "2 Days", color: "from-green-400 to-teal-500" },
                    { icon: Target, title: "Tournaments", value: "2 Games", color: "from-pink-400 to-red-500" }
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