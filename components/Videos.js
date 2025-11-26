"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Sparkles, Film } from "lucide-react";
import { Card } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const videos = [
  {
    id: 1,
    title: "ZeeTV | Business Story",
    thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/5qap5aO4i9A",
  },
  {
    id: 2,
    title: "CNBC Interview",
    thumbnail: "https://img.youtube.com/vi/jfKfPfyJRdk/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/jfKfPfyJRdk",
  },
  {
    id: 3,
    title: "Startup India Feature",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
  {
    id: 4,
    title: "Lofi Chill Beats",
    thumbnail: "https://img.youtube.com/vi/5yx6BWlEVcY/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/5yx6BWlEVcY",
  },
  {
    id: 5,
    title: "Business Insights",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
];

export default function VideoCarousel() {
  const [index, setIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [width, setWidth] = useState(1200);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let animationTriggered = false;

    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      onEnter: () => {
        if (animationTriggered) return;
        animationTriggered = true;

        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.to(carouselRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "back.out(1.5)",
        });

        gsap.to(navRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.6,
          ease: "power3.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const baseDist = width < 640 ? 120 : width < 1024 ? 180 : 230;

  const nextVideo = () => {
    setIndex((prev) => (prev + 1) % videos.length);
    setPlayingVideoId(null);
  };

  const prevVideo = () => {
    setIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setPlayingVideoId(null);
  };

  const playVideo = (id) => setPlayingVideoId(id);

  return (
    <section 
      ref={sectionRef}
      className="relative text-center py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving gradient orbs */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pink-500 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500 rounded-full blur-3xl opacity-15"
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Starfield effect */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.1) 40px,
              rgba(255,255,255,0.1) 42px
            )`
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className="mb-12 sm:mb-16 md:mb-20 opacity-0"
          style={{ transform: "translateY(30px)" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 sm:px-7 py-2.5 mb-6 sm:mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Film className="text-pink-300 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-widest">
              Video Showcase
            </span>
            <Sparkles className="text-yellow-300 w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-5 sm:mb-7 leading-tight px-4">
            <span className="text-white">Experience. </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-pulse">
              Inspire.
            </span>{" "}
            <span className="text-white">Transform.</span>
          </h2>

          <p className="text-pink-100/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4 font-light">
            Journey through powerful insights, success stories, and cutting-edge innovation
          </p>
        </div>

        {/* Carousel */}
        <div 
          ref={carouselRef}
          className="relative flex justify-center items-center w-full mb-16 sm:mb-20 opacity-0"
          style={{ transform: "scale(0.8)" }}
        >
          <div className="relative w-full max-w-[900px] h-[280px] sm:h-[380px] md:h-[480px] lg:h-[530px] flex justify-center items-center">
            <AnimatePresence initial={false}>
              {videos.map((video, i) => {
                const pos = (i - index + videos.length) % videos.length;
                const center = Math.floor(videos.length / 2);
                const adjusted = pos > center ? pos - videos.length : pos;

                const x = adjusted * (baseDist - Math.abs(adjusted) * 30);
                const scale = 1 - Math.abs(adjusted) * 0.18;
                const opacity = 1 - Math.abs(adjusted) * 0.5;
                const zIndex = 50 - Math.abs(adjusted);
                const rotateY = adjusted * -8;

                const isCenter = adjusted === 0;

                return (
                  <motion.div
                    key={video.id}
                    className="absolute rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer"
                    style={{ 
                      zIndex,
                      perspective: "1000px",
                    }}
                    animate={{ 
                      x, 
                      scale, 
                      opacity,
                      rotateY,
                    }}
                    transition={{ 
                      duration: 0.7, 
                      ease: [0.32, 0.72, 0, 1]
                    }}
                    whileHover={isCenter ? { scale: scale * 1.02 } : {}}
                  >
                    <Card className={`relative w-[280px] sm:w-[400px] md:w-[560px] lg:w-[920px] h-[280px] sm:h-[380px] md:h-[480px] lg:h-[530px] bg-black border-4 ${
                      isCenter 
                        ? 'border-pink-400 shadow-2xl shadow-pink-500/50' 
                        : 'border-white/10 shadow-xl shadow-black/50'
                    } transition-all duration-500 overflow-hidden`}>
                      {playingVideoId === video.id ? (
                        <iframe
                          className="w-full h-full"
                          src={`${video.url}?autoplay=1`}
                          title={video.title}
                          allow="autoplay; fullscreen; picture-in-picture"
                        />
                      ) : (
                        <>
                          <motion.img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover"
                            animate={isCenter ? { scale: 1.05 } : { scale: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                          
                          {/* Dark overlay */}
                          <div className={`absolute inset-0 ${
                            isCenter 
                              ? 'bg-gradient-to-t from-purple-900/80 via-transparent to-transparent'
                              : 'bg-gradient-to-t from-black/90 via-black/30 to-transparent'
                          } transition-all duration-500`} />

                          {/* Play button */}
                          <motion.div
                            onClick={() => isCenter && playVideo(video.id)}
                            className={`absolute inset-0 flex justify-center items-center ${
                              isCenter ? 'group' : 'pointer-events-none opacity-40'
                            }`}
                            whileHover={isCenter ? { scale: 1.1 } : {}}
                          >
                            <motion.div 
                              className={`${
                                isCenter
                                  ? 'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500'
                                  : 'bg-white/20'
                              } p-5 sm:p-6 md:p-7 rounded-full shadow-2xl backdrop-blur-sm`}
                              whileHover={isCenter ? { 
                                boxShadow: "0 0 40px rgba(236, 72, 153, 0.8)",
                                rotate: 90,
                              } : {}}
                              transition={{ duration: 0.3 }}
                            >
                              <Play 
                                className="text-white w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 ml-1" 
                                fill="white" 
                              />
                            </motion.div>
                          </motion.div>

                          {/* Title overlay */}
                          {isCenter && (
                            <motion.div 
                              className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 bg-gradient-to-t from-black via-black/80 to-transparent"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              <h3 className="text-white text-base sm:text-lg md:text-xl font-bold tracking-wide">
                                {video.title}
                              </h3>
                              <div className="mt-2 flex gap-2">
                                <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full border border-pink-400/30">
                                  Featured
                                </span>
                              </div>
                            </motion.div>
                          )}

                          {/* Glow effect */}
                          {isCenter && (
                            <motion.div 
                              className="absolute inset-0 pointer-events-none"
                              animate={{
                                boxShadow: [
                                  "inset 0 0 60px rgba(236, 72, 153, 0.3)",
                                  "inset 0 0 80px rgba(236, 72, 153, 0.5)",
                                  "inset 0 0 60px rgba(236, 72, 153, 0.3)",
                                ]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          )}

                          {/* Corner accents */}
                          {isCenter && (
                            <>
                              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-pink-400 rounded-tl-2xl" />
                              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-pink-400 rounded-br-2xl" />
                            </>
                          )}
                        </>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div 
          ref={navRef}
          className="flex justify-center items-center gap-4 sm:gap-6 opacity-0"
          style={{ transform: "translateY(20px)" }}
        >
          <motion.button
            onClick={prevVideo}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/20 hover:border-pink-400 rounded-full p-3 sm:p-4 cursor-pointer transition-all shadow-lg hover:shadow-pink-500/50"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous video"
          >
            <ChevronLeft className="text-white" size={24} />
          </motion.button>

          <div className="flex gap-2.5">
            {videos.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setIndex(i);
                  setPlayingVideoId(null);
                }}
                className={`rounded-full transition-all cursor-pointer ${
                  i === index 
                    ? "w-10 h-3.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-pink-500/50" 
                    : "w-3.5 h-3.5 bg-white/30 hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextVideo}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/20 hover:border-pink-400 rounded-full p-3 sm:p-4 cursor-pointer transition-all shadow-lg hover:shadow-pink-500/50"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next video"
          >
            <ChevronRight className="text-white" size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}