import React, { useEffect, useState } from 'react'
import AnimatedElement from './AnimatedElement'
import { Gamepad2 } from 'lucide-react'
import {useNavigate} from "react-router-dom"


const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const navigate= useNavigate()

    useEffect(()=>{
       const handleScrollBar=()=> setScrollY(window.scrollY)
       window.addEventListener("scroll",handleScrollBar)


    return () => {
    window.removeEventListener('scroll', handleScrollBar);
  };
    },[])

    function logoClickHandler(){
      navigate("/")

    }
   
    const links=[
      {
        name:"Home",
        link:"/"
      },
      {
        name:"Events",
        link:"/join-battle"
      },
      {
        name:"Rules",
        link:"/rules"
      },
      {
        name:"About Me",
        link:"/about-me"
      },
    ]
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 20 ? 'bg-black/20 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <AnimatedElement id="logo" delay={100} animation="slideRight" className='cursor-pointer' >
            <div className="flex items-center gap-3" onClick={logoClickHandler}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center animate-pulse">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent ">
                NEXUS
              </span>
            </div>
          </AnimatedElement>
          
          <AnimatedElement id="nav-links" delay={200} animation="slideLeft">
            <div className="hidden md:flex space-x-8">
              {links.map((item, index) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 group"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </nav>
  )
}

export default Navbar