const GlowingCard = ({ children, className = "", glowColor = "from-orange-500 to-red-500" }) => (
    <div className={`relative group ${className}`}>
      <div className={`absolute -inset-1 bg-gradient-to-r ${glowColor} rounded-3xl opacity-20 group-hover:opacity-40 transition-all duration-500 blur-lg animate-pulse`}></div>
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-black/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
        {children}
      </div>
    </div>
  );
export default GlowingCard