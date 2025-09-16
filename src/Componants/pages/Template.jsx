import { div } from 'framer-motion/client'
import React from 'react'

const Template = ({children}) => {
  return (
    <div className='relative'>
      <div className="fixed inset-0 z-0">
        {/* animated bg */}
         <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/40 via-transparent to-pink-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-yellow-900/20 via-transparent to-red-900/30"></div>

        {/* animated bg shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-orange-500/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border-2 border-pink-500/40 rotate-12 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-yellow-400/30 animate-ping" style={{animationDuration: '4s'}}></div>
         
      {children}

      </div>

    </div>
  )
}

export default Template