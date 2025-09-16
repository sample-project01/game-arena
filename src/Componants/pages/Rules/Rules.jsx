// import React from 'react'
// import Template from '../Template'
const rules = [
  {
    title: "One Player = One Entry",
    desc: "Every player must register only once with their real and correct details. Using fake names, multiple accounts, or registering on behalf of someone else is strictly not allowed.",
    ex: "📌 Example: If 'Rahul Kumar' registers, he cannot register again as 'R. Kumar', 'Rahul123', or use his friend's name. Only his first registration will be valid, others will be cancelled."
  },
  {
    title: "Entry Fee is Mandatory",
    desc: "Your registration is only valid after paying the entry fee. Submitting the form without payment means your entry will not be accepted.",
    ex: "📌 Example: If you fill the form but don’t pay the fee, your name will not be added to the player list."
  },
  {
    title: "Do Not Share Room ID or Password",
    desc: "The room ID and password are private. Sharing them with non-registered players is a serious violation and will lead to permanent ban of both players.",
    ex: "📌 Example: If you share the password with your friend who didn’t pay the entry fee, both you and your friend will be removed from the tournament."
  },
  {
    title: "Play With Registered Game ID Only",
    desc: "The in-game ID you provide during registration must be the same ID you use during the tournament. Switching accounts or using another person’s ID is not allowed.",
    ex: "📌 Example: If you registered with 'ProGamerX', you cannot play with another account like 'NoobSlayer'."
  },
  {
    title: "Be On Time",
    desc: "Room ID and password will be shared 10–15 minutes before the match. If you are late, you may not be able to enter the room. Organizers are not responsible if you miss your slot.",
    ex: "📌 Example: If the match is at 7:00 PM and you join at 7:10 PM, you will not be allowed inside the room."
  },
  {
    title: "No Cheating or Hacking",
    desc: "Any use of hacks, scripts, mods, third-party apps, or unfair methods to gain advantage is strictly banned. If caught, you will be removed permanently without warning.",
    ex: "📌 Example: Using wallhacks, aimbots, recoil scripts, or emulator cheats will lead to instant disqualification."
  },
  {
    title: "Respect Other Players",
    desc: "Toxic behavior, abusive language, harassment, or threats (in chat or voice) will not be tolerated. Maintain a healthy gaming environment.",
    ex: "📌 Example: Saying 'gg' or playful banter is fine, but using offensive slurs, insulting families, or threatening players will get you banned."
  },
  {
    title: "No Substitutions or Proxy Players",
    desc: "You cannot ask someone else to play on your behalf. Only the registered player can participate.",
    ex: "📌 Example: If you register but ask your friend to play from your account, both of you will be banned."
  },
  {
    title: "Follow Match Instructions",
    desc: "Organizers may set custom match rules (like map choice, weapon restrictions, or team sizes). You must follow them strictly.",
    ex: "📌 Example: If the rule says 'No RPGs allowed' and you still use RPG, your team will be disqualified."
  },
  {
    title: "Organizer’s Decision is Final",
    desc: "In case of disputes, cheating reports, or rule violations, the organizer’s decision will be final. Arguing with the admins will not be tolerated.",
    ex: "📌 Example: If two players argue about who got the last kill, the organizer’s verdict will be considered final."
  },
  {
    title: "Do Not Disturb During Match",
    desc: "Do not spam in lobby chat, delay the game, or disturb other players before the match starts.",
    ex: "📌 Example: Spamming 'start start start' or repeatedly inviting other players will lead to warnings or removal."
  },
  {
    title: "Fair Play Spirit",
    desc: "Play fairly and responsibly. Exploiting game glitches or intentional teaming in solo matches is not allowed.",
    ex: "📌 Example: If two solo players secretly team up against others, both will be banned."
  }
];


import React from 'react';

const TournamentRules = () => {


  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Background pattern */}
      <div className='absolute inset-0 bg-black/20'></div>
      
      <div className='relative z-10 max-w-4xl mx-auto px-4 py-12'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-3 mb-6'>
            <span className='text-6xl'>🎮</span>
            <h1 className='text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent'>
              Tournament Rules
            </h1>
            <span className='text-6xl'>🏆</span>
          </div>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
            Please read all rules carefully. Violation of any rule may result in disqualification.
          </p>
        </div>

        {/* Rules Grid */}
        <div className='grid gap-8 md:gap-6'>
          {rules.map((rule, index) => (
            <div 
              key={rule.title}
              className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group'
            >
              {/* Rule number and title */}
              <div className='flex items-start gap-4 mb-4'>
                <div className='flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                  {index + 1}
                </div>
                <h2 className='text-2xl font-bold text-white group-hover:text-orange-300 transition-colors'>
                  {rule.title}
                </h2>
              </div>

              {/* Description */}
              <div className='ml-12 space-y-3'>
                <p className='text-gray-200 text-lg leading-relaxed'>
                  {rule.desc}
                </p>
                
                {/* Example */}
                {rule.ex && (
                  <div className='bg-black/30 rounded-lg p-4 border-l-4 border-orange-500'>
                    <p className='text-orange-200 text-sm'>
                      <span className='font-semibold text-orange-300'>💡 </span>
                      {rule.ex}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className='mt-8 sm:mt-12 lg:mt-16'>
          <div className='bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 border border-red-500/30'>
            <p className='text-red-200 font-semibold mb-2 text-sm sm:text-base'>⚠️ Important Notice</p>
            <p className='text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed'>
              Tournament organizers reserve the right to modify rules if necessary. 
              Participants will be notified of any changes at least 2 hours before the event.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentRules;
// const Rules = () => {
//   return (
   
//         <div className='min-h-screen w-9/12 bg-red-300 mx-auto relative z-10 mt-24 pt-2'>
       
//           <div className='font-extrabold text-6xl text-center text-orange-700'>🎮 Tournament Rules</div>
//          <div className='text-center'>
         
//           {
//             rules.map((r)=>(
//               <div key={r.title}>
//                 <h1 className='text-2xl'>1. {r.title}</h1>
//                 <div>{r.desc}</div>
//                 <div>{r.ex}</div>
//               </div>
//             ))
//           }
//            </div> 
//         </div>
//     </Template>
//   )
// }

// export default Rules