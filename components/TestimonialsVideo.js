"use client";

import { useState, useEffect, useRef } from "react";
import { Play, X, Video } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const videos = [
  {
    id: 1,
    title: "ZeeTV Business Story",
    thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/5qap5aO4i9A",
  },
  {
    id: 2,
    title: "CNBC Interview",
    thumbnail: "https://img.youtube.com/vi/2Vv-BfVoq4g/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/2Vv-BfVoq4g",
  },
  {
    id: 3,
    title: "Startup India",
    thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/LXb3EKWsInQ",
  },
  {
    id: 4,
    title: "Founder Journey",
    thumbnail: "https://img.youtube.com/vi/C0DPdy98e4c/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/C0DPdy98e4c",
  },
  {
    id: 5,
    title: "Business Insights",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    id: 6,
    title: "Success Story",
    thumbnail: "https://img.youtube.com/vi/eX2qFMC8cFo/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/eX2qFMC8cFo",
  },
];

export default function FounderStories() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardsRef = useRef([]);
  const playIconsRef = useRef([]);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - slides from left
      gsap.fromTo(
        titleRef.current,
        { 
          x: -300,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            onEnter: () => setHasAnimated(true),
          }
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { 
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { 
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // Cards appear with diamond pattern
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        gsap.fromTo(
          card,
          { 
            scale: 0,
            opacity: 0,
            rotation: 45,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 45,
            duration: 0.8,
            delay: 0.7 + index * 0.12,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            }
          }
        );
      });

      // Animated play icons with bouncing effect
      playIconsRef.current.forEach((icon, index) => {
        if (!icon) return;
        
        // Initial entrance
        gsap.fromTo(
          icon,
          { 
            scale: 0,
            rotation: -45,
          },
          {
            scale: 1,
            rotation: -45,
            duration: 0.6,
            delay: 1.2 + index * 0.12,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            }
          }
        );

        // Continuous bounce animation
        gsap.to(icon, {
          y: [0, -8, 0],
          scale: [1, 1.1, 1],
          duration: 1.5,
          repeat: -1,
          delay: 1.5 + index * 0.15,
          ease: "power1.inOut"
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 }
    );
    
    gsap.fromTo(
      modalRef.current,
      { 
        scale: 0.3,
        opacity: 0,
        rotateY: -90
      },
      {
        scale: 1,
        opacity: 1,
        rotateY: 0,
        duration: 0.7,
        ease: "back.out(1.4)",
      }
    );
  };

  const handleClose = () => {
    gsap.to(modalRef.current, {
      scale: 0.3,
      opacity: 0,
      rotateY: 90,
      duration: 0.4,
      ease: "power3.in",
    });
    
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => setSelectedVideo(null),
    });
  };

  const handleMouseEnter = (index) => {
    gsap.to(cardsRef.current[index], {
      scale: 1.15,
      boxShadow: "0 30px 60px -12px rgba(251, 146, 60, 0.6)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardsRef.current[index], {
      scale: 1,
      boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side content */}
          <div className="order-2 lg:order-1">
            <h2 
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-4 leading-tight"
            >
             What Founders Says
            </h2>
            <p 
              ref={subtitleRef}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-6"
            >
              Hear directly from founders who share their professional experiences, growth journeys, and measurable outcomes achieved through our platform.
            </p>
            
            {/* Call to action with video icon */}
            <div 
              ref={ctaRef}
              className="flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-2xl border-2 border-orange-200"
            >
              <div className="bg-orange-500 p-3 rounded-full animate-pulse">
                <Video className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-orange-900 font-semibold text-sm md:text-base">
                  Click any video to watch
                </p>
                <p className="text-orange-700 text-xs md:text-sm">
                  Hear directly from industry experts
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Diamond Grid Pattern */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
              
              {/* Background decorative diamonds */}
              <div className="absolute inset-0">
                {[
                  { top: "5%", left: "5%", size: "clamp(140px, 18vw, 200px)", opacity: "0.8" },
                  { top: "0%", right: "0%", size: "clamp(120px, 16vw, 180px)", opacity: "0.9" },
                  { top: "30%", left: "-5%", size: "clamp(160px, 20vw, 240px)", opacity: "0.85" },
                  { top: "35%", right: "10%", size: "clamp(150px, 19vw, 220px)", opacity: "0.9" },
                  { top: "55%", left: "10%", size: "clamp(180px, 22vw, 260px)", opacity: "0.8" },
                  { top: "65%", right: "-5%", size: "clamp(160px, 20vw, 240px)", opacity: "0.85" },
                  { bottom: "5%", left: "0%", size: "clamp(190px, 24vw, 280px)", opacity: "0.9" },
                ].map((diamond, i) => (
                  <div
                    key={i}
                    className="absolute bg-gradient-to-br from-orange-400 to-orange-500 rounded-sm transition-all duration-500"
                    style={{
                      ...diamond,
                      width: diamond.size,
                      height: diamond.size,
                      transform: "rotate(45deg)",
                      opacity: diamond.opacity,
                    }}
                  />
                ))}

                {/* Logo diamond */}
                <div
                  className="absolute bg-gradient-to-br from-orange-400 to-orange-500 rounded-sm flex items-center justify-center"
                  style={{
                    bottom: "8%",
                    left: "3%",
                    width: "clamp(120px, 16vw, 180px)",
                    height: "clamp(120px, 16vw, 180px)",
                    transform: "rotate(45deg)",
                  }}
                >
                  <div style={{ transform: "rotate(-45deg)" }} className="text-white">
                    <svg width="clamp(50px, 8vw, 80px)" height="clamp(50px, 8vw, 80px)" viewBox="0 0 100 100" fill="currentColor">
                      <path d="M50 20 L70 40 L50 60 L30 40 Z M50 40 L50 80 M50 80 L35 65 M50 80 L65 65" stroke="currentColor" strokeWidth="4" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Video thumbnail diamonds */}
              {videos.map((video, index) => {
                const positions = [
                  { top: "8%", left: "30%", size: "clamp(120px, 15vw, 170px)" },
                  { top: "5%", right: "15%", size: "clamp(110px, 14vw, 160px)" },
                  { top: "32%", left: "18%", size: "clamp(130px, 16vw, 180px)" },
                  { top: "32%", right: "5%", size: "clamp(125px, 15.5vw, 175px)" },
                  { bottom: "32%", left: "30%", size: "clamp(115px, 14.5vw, 165px)" },
                  { bottom: "32%", right: "18%", size: "clamp(135px, 16.5vw, 185px)" },
                ];

                const pos = positions[index];

                return (
                  <div
                    key={video.id}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="absolute cursor-pointer group"
                    style={{
                      ...pos,
                      width: pos.size,
                      height: pos.size,
                      transform: "rotate(45deg)",
                    }}
                    onClick={() => handleVideoClick(video)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-gray-100 to-gray-200">
                      {/* Thumbnail */}
                      <div 
                        className="absolute inset-0 overflow-hidden"
                        style={{ transform: "rotate(-45deg) scale(1.6)" }}
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                        />
                      </div>

                      {/* Gradient overlay */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                        style={{ transform: "rotate(-45deg) scale(1.6)" }}
                      />

                      {/* Play button with bounce animation */}
                      <div 
                        ref={(el) => (playIconsRef.current[index] = el)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div 
                          className="relative bg-white rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-125"
                          style={{ 
                            transform: "rotate(-45deg)",
                            padding: "clamp(10px, 2vw, 16px)"
                          }}
                        >
                          <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                          <Play 
                            className="relative text-orange-500 fill-orange-500" 
                            style={{
                              width: "clamp(20px, 4vw, 32px)",
                              height: "clamp(20px, 4vw, 32px)"
                            }}
                          />
                        </div>
                      </div>

                      {/* Title badge */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ transform: "rotate(-45deg) scale(1.6)" }}
                      >
                        <div className="bg-orange-500/90 backdrop-blur-sm rounded-lg px-2 py-1">
                          <p className="text-white text-xs font-bold text-center drop-shadow-lg">
                            {video.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black/90 backdrop-blur-lg"
            onClick={handleClose}
          ></div>

          <div
            ref={modalRef}
            className="relative w-full max-w-6xl bg-black rounded-3xl shadow-2xl overflow-hidden"
            style={{ 
              perspective: "1000px",
              aspectRatio: "16/9"
            }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <iframe
              className="w-full h-full"
              src={`${selectedVideo.url}?autoplay=1&modestbranding=1&rel=0`}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}