  const AnimatedElement = ({ children, id, delay = 0, className = "", animation = "slideUp" ,visibleElements}) => {
    const isVisible = visibleElements.has(id);
    const animations = {
      slideUp: isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0',
      slideLeft: isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0',
      slideRight: isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0',
      scale: isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
      rotate: isVisible ? 'rotate-0 opacity-100' : 'rotate-12 opacity-0'
    };

    return (
      <div
        id={id}
        data-animate
        className={`transform transition-all duration-1000 ease-out ${animations[animation]} ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };
export default AnimatedElement