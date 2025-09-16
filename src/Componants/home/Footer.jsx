import React from 'react'
import {motion} from "framer-motion"
import AnimatedElement from './AnimatedElement'
import { Gamepad2 } from 'lucide-react'

const Footer = () => {
  const quickLinks=[
  {
    name:"Tournament Rules",
    link:"/rules"
  },
  {
    name:"'Registration",
    link:"/rules"
  },
  {
    name:"Schedule",
    link:"/rules"
  },
  {
    name:"Prize Pool",
    link:"/rules"
  },
  {
    name:"Contact Us",
    link:"/rules"
  },
]
  return (
     <motion.footer className="relative z-10 bg-black/40 backdrop-blur-xl border-t border-white/10"
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
       viewport={{ once: true, amount: 0.3 }}
      >
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
                  {quickLinks.map((link, index) => (
                    <li key={link.name}>
                      <a href={link.link} className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                        {link.name}
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
      </motion.footer>
  )
}

export default Footer