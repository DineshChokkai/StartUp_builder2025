
import React from 'react';

const FancyButton = ({ 
  children, 
  onClick, 
  className = "",
  gradient = "linear-gradient(90deg, #FF5A19 0%, #FF8A00 100%)"
}) => {
  // Split text into individual characters
  const text = typeof children === 'string' ? children : '';
  const chars = text.split('');
  
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-2.5 rounded-full text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 font-medium ${className}`}
      style={{ background: gradient }}
    >
      {/* Wave text effect */}
      <span className="relative z-10 inline-flex">
        {chars.map((char, index) => (
          <span
            key={index}
            className="inline-block wave-char"
            style={{
              animation: `wave 2s ease-in-out infinite, shine-text 3s ease-in-out infinite`,
              animationDelay: `${index * 0.1}s, ${index * 0.15}s`
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
      
      {/* Background shine animation */}
      <span 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{
          animation: 'shine 3s ease-in-out infinite',
          transform: 'translateX(-100%)'
        }}
      ></span>
      
        <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50%, 100% {
            transform: translateX(200%);
          }
        }
        
        @keyframes wave {
          0% {
            transform: translateY(0px);
          }
          20% {
            transform: translateY(-4px);
          }
          40% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        @keyframes shine-text {
          0% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }
          20% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
                         0 0 30px rgba(255, 255, 255, 0.6);
          }
          40%, 100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }
        }
        
        .wave-char {
          display: inline-block;
        }
      `}</style>
    </button>
  );
};
export default FancyButton;