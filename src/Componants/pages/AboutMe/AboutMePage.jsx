import React, { useState } from 'react';
import {bio} from "../../../utils.js"

const AboutMePage = () => {
  const [imageError, setImageError] = useState(false);

  // Sample data - replace with your actual information
  const personalInfo = {
    name: "Sarthak Upadhyay",
    title: "Tournament Organizer & Pro Gamer",
    location: "Damoh, Madhya Pradesh, India",
    experience: "2+ Years",
    profileImage: "/profile-pic.png", // Replace with your actual image path
    bio: bio,
    email: "sarthakupadhyay303@gmail.com",
    discord: "AlexGaming#1234",
    twitch: "@alexgaming_live"
  };

  const achievements = [
    {
      icon: "🏆",
      title: "Tournament Champion",
      description: "Winner of Regional FIFA Championship 2024",
      year: "2024"
    },
    {
      icon: "🎮",
      title: "Community Builder",
      description: "Built gaming community of 10,000+ members",
      year: "2023"
    },
    {
      icon: "⚡",
      title: "Event Organizer",
      description: "Successfully organized 50+ gaming tournaments",
      year: "2022-2024"
    },
    {
      icon: "🎯",
      title: "Pro Player",
      description: "Ranked in top 1% in Valorant competitive",
      year: "2023"
    }
  ];

  const skills = [
    { name: "Tournament Organization", level: 95 },
    { name: "Community Management", level: 90 },
    { name: "Competitive Gaming", level: 85 },
    { name: "Event Planning", level: 88 },
    { name: "Live Streaming", level: 75 },
    { name: "Content Creation", level: 80 }
  ];

  const favoriteGames = [
    { name: "Valorant", icon: "🎯", rank: "Immortal" },
    { name: "FIFA 24", icon: "⚽", rank: "Division 1" },
    { name: "Apex Legends", icon: "🔫", rank: "Predator" },
    { name: "Rocket League", icon: "🚗", rank: "Grand Champion" },
    { name: "Call of Duty", icon: "💥", rank: "Master" },
    { name: "Fortnite", icon: "🏗️", rank: "Champion" }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Tournament Platform Launch",
      description: "Launched my own tournament hosting platform with 500+ registered players"
    },
    {
      year: "2023",
      title: "Professional Gaming Career",
      description: "Started competing professionally in multiple esports titles"
    },
    {
      year: "2022",
      title: "Community Growth",
      description: "Gaming community reached 5,000 active members"
    },
    {
      year: "2020",
      title: "First Tournament",
      description: "Organized my first local gaming tournament with 50 participants"
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <div className='absolute inset-0 bg-black/20'></div>
      
      <div className='relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12'>
        
        {/* Hero Section */}
        <div className='text-center mb-8 sm:mb-12 lg:mb-16'>
          {/* Profile Image */}
          <div className='relative inline-block mb-6'>
            <div className=' w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full border-4 border-orange-500 p-1 bg-gradient-to-r from-orange-500 to-red-500'>
              <div className='w-full h-full rounded-full overflow-hidden bg-gray-700 flex items-center justify-center'>
                {!imageError ? (
                  <img 
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className='w-full h-full object-cover'
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className='text-4xl sm:text-5xl lg:text-6xl'>🎮</div>
                )}
              </div>
            </div>
            <div className='absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 border-slate-900 flex items-center justify-center'>
              <div className='w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full animate-pulse'></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className='text-3xl sm:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-8 lg:mb-4 pb-4'>
            {personalInfo.name}
          </h1>
          <p className='text-lg sm:text-xl lg:text-2xl text-gray-300 mb-2'>
            {personalInfo.title}
          </p>
          <div className='flex items-center justify-center gap-2 text-gray-400 text-sm sm:text-base'>
            <span>📍</span>
            <span>{personalInfo.location}</span>
            <span>•</span>
            <span>{personalInfo.experience}</span>
          </div>
        </div>

        {/* Bio Section */}
        <div className='mb-8 sm:mb-12 lg:mb-16'>
          <div className='bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20 text-center '>
            <h2 className='text-2xl sm:text-3xl font-bold text-white mb-4 lg:mb-6'>About Me</h2>
            <pre className='text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto mb-6 lg:mb-8 whitespace-pre-wrap'>
              {personalInfo.bio}
            </pre>
            
            {/* Contact Info */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6'>
              <div className='bg-black/20 rounded-lg p-4'>
                <div className='text-2xl mb-2'>📧</div>
                <p className='text-gray-400 text-sm'>Email</p>
                <p className='text-orange-300 font-semibold'>{personalInfo.email}</p>
              </div>
              <div className='bg-black/20 rounded-lg p-4'>
                <div className='text-2xl mb-2'>💬</div>
                <p className='text-gray-400 text-sm'>Discord</p>
                <p className='text-purple-300 font-semibold'>{personalInfo.discord}</p>
              </div>
              <div className='bg-black/20 rounded-lg p-4'>
                <div className='text-2xl mb-2'>📺</div>
                <p className='text-gray-400 text-sm'>Twitch</p>
                <p className='text-pink-300 font-semibold'>{personalInfo.twitch}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className='mb-8 sm:mb-12 lg:mb-16'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-6 lg:mb-8'>
            🏆 Achievements
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>
            {achievements.map((achievement, index) => (
              <div key={index} className='bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 hover:bg-white/15 hover:border-orange-500/30 transition-all duration-300 text-center group'>
                <div className='text-3xl lg:text-4xl mb-3'>{achievement.icon}</div>
                <h3 className='text-lg lg:text-xl font-bold text-white group-hover:text-orange-300 transition-colors mb-2'>
                  {achievement.title}
                </h3>
                <p className='text-gray-300 text-sm lg:text-base mb-2'>
                  {achievement.description}
                </p>
                <span className='inline-block bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-500/30'>
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className='mb-8 sm:mb-12 lg:mb-16'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-6 lg:mb-8'>
            ⚡ Skills & Expertise
          </h2>
          <div className='bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>
              {skills.map((skill, index) => (
                <div key={index} className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <span className='text-white font-semibold text-sm lg:text-base'>{skill.name}</span>
                    <span className='text-orange-300 font-bold text-sm lg:text-base'>{skill.level}%</span>
                  </div>
                  <div className='w-full bg-gray-700 rounded-full h-2 lg:h-3'>
                    <div 
                      className='bg-gradient-to-r from-orange-500 to-red-500 h-2 lg:h-3 rounded-full transition-all duration-1000 ease-out'
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Favorite Games */}
        <div className='mb-8 sm:mb-12 lg:mb-16'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-6 lg:mb-8'>
            🎮 Favorite Games
          </h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6'>
            {favoriteGames.map((game, index) => (
              <div key={index} className='bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 hover:bg-white/15 hover:border-orange-500/30 transition-all duration-300 text-center group'>
                <div className='text-2xl lg:text-3xl mb-2'>{game.icon}</div>
                <h3 className='text-white font-semibold text-sm lg:text-base mb-1 group-hover:text-orange-300 transition-colors'>
                  {game.name}
                </h3>
                <p className='text-gray-400 text-xs lg:text-sm'>{game.rank}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className='mb-8 sm:mb-12'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-6 lg:mb-8'>
            🚀 My Journey
          </h2>
          <div className='max-w-4xl mx-auto'>
            {timeline.map((item, index) => (
              <div key={index} className='relative flex items-center mb-8 last:mb-0'>
                {/* Timeline Line */}
                <div className='hidden sm:block absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500 last:hidden'></div>
                
                {/* Year Badge */}
                <div className='flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center font-bold text-white text-sm sm:text-base z-10'>
                  {item.year.slice(-2)}
                </div>
                
                {/* Content */}
                <div className='ml-4 sm:ml-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold text-white mb-2'>{item.title}</h3>
                  <p className='text-gray-300 text-sm sm:text-base'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <div className='bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-6 sm:p-8 lg:p-10 border border-orange-500/30'>
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4'>
              Ready to Game Together? 🎯
            </h3>
            <p className='text-gray-300 text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 max-w-3xl mx-auto'>
              Whether you want to join a tournament, collaborate on gaming events, or just chat about the latest games, 
              I'm always excited to connect with fellow gamers!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-8 rounded-xl hover:from-orange-600 hover:to-red-600 hover:scale-[1.02] transition-all duration-200'>
                Contact Me 📧
              </button>
              <button className='bg-white/10 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200'>
                View My Tournaments 🏆
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;