const AnimatedElement = ({ children, id, delay = 0, className = "", }) => {
    return (
      <div
        id={id}
        data-animate
        className={`transform transition-all duration-1000 ease-out  ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };
  export default AnimatedElement


  