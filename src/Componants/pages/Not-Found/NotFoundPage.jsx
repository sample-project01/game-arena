import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/20'></div>
      
      <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto'>
        {/* 404 Number */}
        <div className='mb-6 sm:mb-8'>
          <h1 className='text-8xl sm:text-9xl lg:text-[12rem] font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent leading-none'>
            404
          </h1>
        </div>

        {/* Gaming Elements */}
        <div className='flex justify-center items-center gap-2 sm:gap-4 mb-6 sm:mb-8 text-4xl sm:text-5xl lg:text-6xl'>
          <span className='animate-bounce'>💀</span>
          <span className='animate-pulse'>🎮</span>
          <span className='animate-bounce' style={{ animationDelay: '0.5s' }}>💥</span>
        </div>

        {/* Error Message */}
        <div className='mb-6 sm:mb-8 lg:mb-10'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4'>
            Game Over!
          </h2>
          <p className='text-gray-300 text-base sm:text-lg lg:text-xl mb-2'>
            The page you're looking for has been defeated.
          </p>
          <p className='text-gray-400 text-sm sm:text-base'>
            It seems like this URL doesn't exist in our tournament arena.
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-10'>
          <button 
            onClick={() => window.history.back()}
            className='w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl hover:from-orange-600 hover:to-red-600 hover:scale-[1.02] transition-all duration-200'
          >
            ⬅️ Go Back
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            className='w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white font-semibold py-3 px-6 sm:px-8 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200'
          >
            🏠 Home Page
          </button>
        </div>

        {/* Fun Gaming Stats */}
        <div className='bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20'>
          <p className='text-gray-400 text-sm sm:text-base mb-4'>
            Error Statistics:
          </p>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 text-center'>
            <div>
              <div className='text-xl sm:text-2xl font-bold text-red-400'>404</div>
              <div className='text-gray-400 text-xs sm:text-sm'>Error Code</div>
            </div>
            <div>
              <div className='text-xl sm:text-2xl font-bold text-orange-400'>0</div>
              <div className='text-gray-400 text-xs sm:text-sm'>Lives Left</div>
            </div>
            <div className='col-span-2 sm:col-span-1'>
              <div className='text-xl sm:text-2xl font-bold text-purple-400'>∞</div>
              <div className='text-gray-400 text-xs sm:text-sm'>Respawn Time</div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className='mt-6 sm:mt-8'>
          <p className='text-gray-400 text-sm sm:text-base mb-4'>
            Quick Navigation:
          </p>
          <div className='flex flex-wrap justify-center gap-2 sm:gap-4'>
            <a href='/tournaments' className='text-orange-300 hover:text-orange-200 text-sm sm:text-base transition-colors'>
              🏆 Tournaments
            </a>
            <span className='text-gray-600'>•</span>
            <a href='/join-battle' className='text-red-300 hover:text-red-200 text-sm sm:text-base transition-colors'>
              ⚔️ Join Battle
            </a>
            <span className='text-gray-600'>•</span>
            <a href='/about' className='text-purple-300 hover:text-purple-200 text-sm sm:text-base transition-colors'>
              👤 About Me
            </a>
            <span className='text-gray-600'>•</span>
            <a href='/rules' className='text-pink-300 hover:text-pink-200 text-sm sm:text-base transition-colors'>
              📋 Rules
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;