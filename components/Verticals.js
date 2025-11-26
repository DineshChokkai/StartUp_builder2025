"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const verticals = [
  {
    id: 1,
    title: "Ideabaaz TV Show",
    description: "Feature your startup to a national audience and gain unprecedented visibility across India",
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=60",
    icon: "📺"
  },
  {
    id: 2,
    title: "Ideabaaz Platform",
    description: "A digital space to connect with founders, investors, and mentors in real-time",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=60",
    icon: "🌐"
  },
  {
    id: 3,
    title: "Ideabaaz Dangal",
    description: "India's Ultimate Startup Ecosystem for Startups, investors, and Trainers",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=60",
    icon: "🎯"
  },
  {
    id: 4,
    title: "Ideabaaz Expo",
    description: "India's premier competitive Idea Stage pitching platform with live feedback",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=60",
    icon: "🚀"
  },
  {
    id: 5,
    title: "Incubation Centre",
    description: "Structured incubation journeys with funding and mentoring from industry experts",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=60",
    icon: "🏢"
  },
  {
    id: 6,
    title: "Ideabaaz OTT",
    description: "A media platform broadcasting startup stories and entrepreneurial journeys",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=60",
    icon: "🎬"
  }
];

export default function CoreVerticals() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;
    if (!container || !cards) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const windowHeight = window.innerHeight;
      
      // Calculate the total scrollable distance (3 screen heights)
      const totalScrollDistance = windowHeight * 3;
      const cardWidth = 416; // 400px + 16px gap on each side
      const totalCardsWidth = cardWidth * verticals.length;
      const viewportWidth = window.innerWidth;
      const maxTranslate = totalCardsWidth - viewportWidth + 100;

      // Check if section is in viewport
      if (containerTop <= 0 && containerTop >= -totalScrollDistance) {
        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.min(Math.abs(containerTop) / totalScrollDistance, 1);
        const translateX = scrollProgress * maxTranslate;
        
        // Apply smooth horizontal transform
        if (cards) {
          cards.style.transform = `translateX(-${translateX}px)`;
        }
        
        // Update progress indicator
        setScrollProgress(scrollProgress);
        
        // Animate individual cards as they come into view
        const allCards = cards.children;
        for (let i = 0; i < allCards.length; i++) {
          const card = allCards[i];
          const cardPosition = i * cardWidth - translateX;
          const cardCenter = cardPosition + 200;
          
          // Card is visible in viewport
          if (cardCenter > -400 && cardCenter < viewportWidth + 400) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          } 
          // Card is still off-screen to the right
          else if (cardCenter >= viewportWidth + 400) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px) scale(0.9)';
          }
          // Card has passed off-screen to the left
          else {
            card.style.opacity = '0.3';
            card.style.transform = 'translateY(0) scale(0.95)';
          }
        }
      } else if (containerTop > 0) {
        // Reset when scrolling back up
        const allCards = cards.children;
        for (let i = 0; i < allCards.length; i++) {
          allCards[i].style.opacity = '0';
          allCards[i].style.transform = 'translateY(50px) scale(0.9)';
        }
        cards.style.transform = 'translateX(0)';
        setScrollProgress(0);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", optimizedScroll);
    };
  }, []);

  const handleNext = () => {
    const nextIndex = Math.min(activeIndex + 1, verticals.length - 1);
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    setActiveIndex(prevIndex);
  };

  return (
    <>
      {/* Desktop: Horizontal Scroll on Page Scroll */}
      <div 
        ref={containerRef}
        className="hidden lg:block relative w-full bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"
        style={{ height: '400vh' }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
          </div>

          {/* Header */}
          <div className="relative z-10 text-center pt-16 px-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <Sparkles size={20} className="animate-pulse" />
              <span className="font-bold tracking-tight">Our Ecosystem</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Explore Our{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Verticals
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-4"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,15 Q25,5 50,10 T100,8"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto font-medium">
              Scroll down to explore our innovation ecosystem
            </p>
          </div>

          {/* Horizontal Scrolling Cards */}
          <div className="relative z-10 flex items-center h-[calc(100vh-300px)] px-8 overflow-hidden">
            <div 
              ref={cardsRef}
              className="flex gap-8 will-change-transform"
              style={{ 
                transition: 'transform 0.05s linear',
                transform: 'translateX(0px)'
              }}
            >
              {verticals.map((vertical, index) => (
                <div
                  key={vertical.id}
                  className="flex-shrink-0 w-[400px] group"
                  style={{ 
                    opacity: 0,
                    transform: 'translateY(50px) scale(0.9)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                  }}
                >
                  <div className="relative h-[500px] rounded-3xl overflow-hidden bg-white shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px]">
                      <div className="w-full h-full bg-white rounded-3xl"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col">
                      {/* Image Section */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={vertical.img}
                          alt={vertical.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Number Badge */}
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {String(vertical.id).padStart(2, "0")}
                        </div>

                        {/* Icon */}
                        <div className="absolute bottom-4 right-4 text-5xl filter drop-shadow-lg transform group-hover:scale-125 transition-transform duration-500">
                          {vertical.icon}
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 tracking-tight">
                            {vertical.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed font-medium">
                            {vertical.description}
                          </p>
                        </div>

                        {/* Learn More Button */}
                        <button className="mt-6 w-full py-3 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 active:scale-95 tracking-tight">
                          Learn More
                        </button>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              {verticals.map((_, index) => {
                const progress = scrollProgress * verticals.length;
                const isActive = progress >= index && progress < index + 1;
                return (
                  <div
                    key={index}
                    className={`transition-all duration-300 rounded-full ${
                      isActive
                        ? "w-8 h-2 bg-gradient-to-r from-purple-600 to-pink-600"
                        : "w-2 h-2 bg-gray-300"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Tablet: 2 Column Grid */}
      <div className="hidden sm:block lg:hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <Sparkles size={20} className="animate-pulse" />
              <span className="font-bold tracking-tight">Our Ecosystem</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Verticals
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
              We nurture innovation across diverse domains
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {verticals.map((vertical) => (
              <div
                key={vertical.id}
                className="group"
              >
                <div className="relative h-full rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={vertical.img}
                      alt={vertical.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {String(vertical.id).padStart(2, "0")}
                    </div>
                    <div className="absolute bottom-3 right-3 text-3xl filter drop-shadow-lg">
                      {vertical.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 tracking-tight">
                      {vertical.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                      {vertical.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Carousel */}
      <div className="sm:hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20 px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <Sparkles size={20} className="animate-pulse" />
              <span className="font-bold tracking-tight">Our Ecosystem</span>
            </div>
            
            <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Verticals
              </span>
            </h2>
            <p className="text-gray-600 text-base font-medium">
              We nurture innovation across diverse domains
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={verticals[activeIndex].img}
                  alt={verticals[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg">
                  {String(verticals[activeIndex].id).padStart(2, "0")}
                </div>
                <div className="absolute bottom-4 right-4 text-4xl filter drop-shadow-lg">
                  {verticals[activeIndex].icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                  {verticals[activeIndex].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {verticals[activeIndex].description}
                </p>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} strokeWidth={3} />
              </button>
              <div className="flex gap-2">
                {verticals.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeIndex
                        ? "w-8 h-2 bg-gradient-to-r from-purple-600 to-pink-600"
                        : "w-2 h-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                disabled={activeIndex === verticals.length - 1}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(0.9); }
          66% { transform: translate(20px, -20px) scale(1.1); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 15s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}