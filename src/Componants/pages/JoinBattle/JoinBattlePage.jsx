import { useState } from 'react'

const JoinBattlePage = () => {
  const [activeTab, setActiveTab] = useState('running');

  // Sample data - replace with your actual events
  const runningEvents = [
    {
      id: 1,
      title: "Free Fire Championship(Per Kill Rewards) ",
      game: "Free Fire",
      startTime: "2025-09-21T20:00:00",
      endTime: "2025-09-21T21:00:00",
      maxParticipants: 50,
      prizePool: "₹400",
      status: "Live",
      Type: "Solo",
      platform: "Mobile Only",
      thumbnail: "🎮"
    },
    {
      id: 2,
      title: "Free Fire Championship(Winner Takes all) ",
      game: "Free Fire",
      startTime: "2025-09-21T21:00:00",
      endTime: "2025-09-21T22:00:00",
      maxParticipants: 50,
      prizePool: "₹500",
      status: "Live",
      Type: "Solo",
      platform: "Mobile Only",
      thumbnail: "🎮"
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Free Fire Championship(Per Kill Rewards) ",
      game: "Free Fire",
      startTime: "2025-09-22T20:00:00",
      endTime: "2025-09-22T21:00:00",
      maxParticipants: 50,
      prizePool: "₹400",
      status: "Live",
      Type: "Solo",
      platform: "Mobile Only",
      thumbnail: "🎮"
    },
    {
      id: 2,
      title: "Free Fire Championship(Winner Takes all) ",
      game: "Free Fire",
      startTime: "2025-09-22T21:00:00",
      endTime: "2025-09-22T22:00:00",
      maxParticipants: 50,
      prizePool: "₹500",
      status: "Live",
      Type: "Solo",
      platform: "Mobile Only",
      thumbnail: "🎮"
    },
  ];

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'Starting Soon': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'Registration Open': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Registration Opens Soon': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Early Registration': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getDifficultyColor = (difficulty) => {
    console.log("dis"+difficulty)
    switch (difficulty) {
      case 'Solo': return 'text-green-400';
      case 'Duo': return 'text-yellow-400';
      case 'Squad': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const EventCard = ({ event, isUpcoming }) => (
    <div className='bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/20 hover:bg-white/15 hover:border-orange-500/30 transition-all duration-300 group'>
      {/* Mobile Layout */}
      <div className='block lg:hidden'>
        <div className='flex items-start justify-between mb-3'>
          <div className='flex items-center gap-2'>
            <span className='text-2xl'>{event.thumbnail}</span>
            <div>
              <h3 className='text-lg font-bold text-white group-hover:text-orange-300 transition-colors'>
                {event.title}
              </h3>
              <p className='text-sm text-gray-400'>{event.game}</p>
            </div>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(event.status)}`}>
            {event.status}
          </span>
        </div>
        
        <div className='space-y-2 text-sm'>
          <div className='flex justify-between'>
            <span className='text-gray-300'>Time:</span>
            <span className='text-white'>{formatDate(event.startTime)} {formatTime(event.startTime)}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-300'>Players:</span>
            <span className='text-white'>{event.participants}/{event.maxParticipants}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-300'>Prize:</span>
            <span className='text-orange-400 font-semibold'>{event.prizePool}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-300'>Type:</span>
            <span className={`font-medium ${getDifficultyColor(event.Type)}`}>{event.Type}</span>
          </div>
        </div>

        <button className='cursor-pointer w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 text-sm'
           onClick={()=> window.location.href="https://forms.gle/i3QAmT8UXQV55cmv9"
        }>
          {isUpcoming ? 'Register Now' : 'Join Battle'}
        </button>
      </div>

      {/* Desktop Layout */}
      <div className='hidden lg:block'>
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-4'>
            <span className='text-4xl'>{event.thumbnail}</span>
            <div>
              <h3 className='text-2xl font-bold text-white group-hover:text-orange-300 transition-colors'>
                {event.title}
              </h3>
              <p className='text-gray-400 text-lg'>{event.game} • {event.platform}</p>
            </div>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(event.status)}`}>
            {event.status}
          </span>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
          <div className='text-center p-3 bg-black/20 rounded-lg'>
            <p className='text-gray-400 text-sm mb-1'>Start Time</p>
            <p className='text-white font-semibold'>{formatDate(event.startTime)}</p>
            <p className='text-orange-300'>{formatTime(event.startTime)}</p>
          </div>
          <div className='text-center p-3 bg-black/20 rounded-lg'>
            <p className='text-gray-400 text-sm mb-1'>Participants Total </p>
            <p className='text-white font-semibold text-xl'>{event.maxParticipants}</p>
           
          </div>
          <div className='text-center p-3 bg-black/20 rounded-lg'>
            <p className='text-gray-400 text-sm mb-1'>Prize Pool</p>
            <p className='text-orange-400 font-bold text-2xl'>{event.prizePool}</p>
          </div>
          <div className='text-center p-3 bg-black/20 rounded-lg'>
            <p className='text-gray-400 text-sm mb-1'>Type</p>
            <p className={`font-bold text-lg ${getDifficultyColor(event.type)}`}>{event.Type}</p>
          </div>
        </div>

        <button className='cursor-pointer w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-600 hover:to-red-600 hover:scale-[1.02] transition-all duration-200'
        onClick={()=> window.location.href="https://forms.gle/i3QAmT8UXQV55cmv9"
        }>
          {isUpcoming ? 'Register Now' : 'Join Battle'} 🎮
        </button>
      </div>
    </div>
  );

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <div className='absolute inset-0 bg-black/20'></div>
      
      <div className='relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12'>
        {/* Header */}
        <div className='text-center mb-8 sm:mb-12'>
          <div className='inline-flex items-center gap-2 lg:gap-3 mb-4'>
            <span className='text-4xl sm:text-5xl lg:text-6xl'>⚔️</span>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent'>
              Join Battle
            </h1>
            <span className='text-4xl sm:text-5xl lg:text-6xl'>🔥</span>
          </div>
          <p className='text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto'>
            Choose your battlefield and prove your skills in epic gaming tournaments
          </p>
        </div>

        {/* Tabs */}
        <div className='flex justify-center mb-8 sm:mb-12'>
          <div className='bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20 '>
            <button
              onClick={() => setActiveTab('running')}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300  ${
                activeTab === 'running'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white cursor-pointer'
              }`}
            >
              🔴 Live Events ({runningEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300  ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white cursor-pointer'
              }`}
            >
              📅 Upcoming ({upcomingEvents.length})
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className='grid gap-4 sm:gap-6 lg:gap-8'>
          {(activeTab === 'running' ? runningEvents : upcomingEvents).map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              isUpcoming={activeTab === 'upcoming'} 
            />
          ))}
        </div>

        {/* Empty State */}
        {((activeTab === 'running' && runningEvents.length === 0) || 
          (activeTab === 'upcoming' && upcomingEvents.length === 0)) && (
          <div className='text-center py-12'>
            <div className='text-6xl mb-4'>😴</div>
            <h3 className='text-2xl font-bold text-gray-300 mb-2'>No Events Found</h3>
            <p className='text-gray-400'>
              {activeTab === 'running' 
                ? 'No battles are currently running. Check back later!' 
                : 'No upcoming events scheduled. Stay tuned for new tournaments!'
              }
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className='mt-12 lg:mt-16 text-center'>
          <div className='bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 sm:p-8 border border-purple-500/30'>
            <h3 className='text-2xl sm:text-3xl font-bold text-white mb-4'>Want to Host Your Own Tournament?</h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Create custom tournaments, set prize pools, and manage your own gaming community with our tournament hosting tools.
            </p>
            <button className='cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 hover:scale-[1.02] transition-all duration-200'
            onClick={()=>window.location.href="/not-found"}>
              Host Tournament 🎯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinBattlePage;