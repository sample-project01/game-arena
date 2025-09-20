 import { motion } from "framer-motion"
import AnimatedElement from "./AnimatedElement"
 export default function JoinSection(){
    return(
    <motion.section className="relative z-10 py-20"
     initial={{ scale: 0.8, opacity: 0 }}
     whileInView={{ scale: 1, opacity: 1, y: 0 }}
    
       viewport={{ once: true, amount: 0.1 }}
    
      transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedElement id="why-join-content" delay={200} animation="slideRight">
              <div>
                <h2 className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
                  WHY JOIN NEXUS?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Experience the most epic gaming tournament your college has ever seen. With cutting-edge streaming, 
                  professional commentary, and prizes that'll change your game forever.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: "🏆", title: "Massive Prize Pool", desc: "₹2,50,000 in total rewards across all tournaments" },
                    { icon: "📺", title: "Live Streaming", desc: "Professional broadcast with expert commentary" },
                    { icon: "🎖️", title: "Certificates", desc: "Winner certificates and gaming merchandise" },
                    { icon: "🌟", title: "Recognition", desc: "College-wide fame and social media features" }
                  ].map((benefit, index) => (
                    <AnimatedElement key={index} id={`benefit-${index}`} delay={400 + index * 100} animation="slideRight">
                      <div className="flex items-center gap-4 bg-black/20 backdrop-blur-xl rounded-2xl p-4 hover:bg-black/40 transition-all duration-300">
                        <div className="text-2xl">{benefit.icon}</div>
                        <div>
                          <div className="text-white font-bold">{benefit.title}</div>
                          <div className="text-gray-400 text-sm">{benefit.desc}</div>
                        </div>
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement id="why-join-visual" delay={600} animation="slideLeft">
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl p-8 backdrop-blur-xl border border-orange-500/30">
                  <div className="text-center mb-6">
                    <div className="text-6xl font-black text-white mb-2">1000+</div>
                    <div className="text-orange-400 font-bold">Expected Participants</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Teams", value: "200+" },
                      { label: "Games", value: "5" },
                      { label: "Days", value: "7" },
                      { label: "Matches", value: "150+" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center bg-black/30 rounded-2xl p-4">
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </motion.section>

    )
 }
 