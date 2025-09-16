 const PulseButton = ({ children, variant = "primary", className = "" , onclick}) => {
    const variants = {
      primary: "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-400 hover:via-red-400 hover:to-pink-400 text-white shadow-2xl hover:shadow-orange-500/25",
      secondary: "bg-black/20 backdrop-blur-xl border-2 border-orange-400/50 text-orange-300 hover:border-orange-400 hover:bg-orange-500/10"
    };
    
    return (
      <button className={`relative overflow-hidden font-bold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-110 active:scale-95 group ${variants[variant]} ${className}`} onClick={onclick}>
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </button>
    );
  };

export default PulseButton