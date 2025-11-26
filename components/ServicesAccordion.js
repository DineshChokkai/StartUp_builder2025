"use client";
import { useState, useEffect, useRef } from "react";
import { Building2, Code, Megaphone, TrendingUp, ArrowRight, Sparkles, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Company Setup & Legal",
    description:
      "Register your company, file compliances, manage accounts, and secure your intellectual property — all under one login.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1000&fit=crop",
    color: "#FF7700",
    particles: 12,
  },
  {
    title: "Tech & AI Development",
    description:
      "Apps, websites, and automation tools that scale with your business using cutting-edge technology.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=1000&fit=crop",
    color: "#8B5CF6",
    particles: 15,
  },
  {
    title: "Branding & Marketing",
    description:
      "Create your identity, amplify your reach, and convert engagement into revenue with data-driven strategies.",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1000&fit=crop",
    color: "#EC4899",
    particles: 18,
  },
  {
    title: "Funding & Grants",
    description:
      "Craft investor-ready decks, apply for grants, and access private or institutional funding with expert guidance.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop",
    color: "#10B981",
    particles: 14,
  },
];

export default function ServicesInDepth() {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const circleRef = useRef(null);
  const linesRef = useRef([]);
  const cardParticlesRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Rotating circle animation
      if (circleRef.current) {
        gsap.to(circleRef.current, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
        });

        gsap.to(circleRef.current, {
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
          scale: 1.5,
          opacity: 0.8,
        });
      }

      // Header with split text effect
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 150,
        opacity: 0,
        rotateX: -90,
      });

      // Connecting lines animation
      linesRef.current.forEach((line, i) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { scaleX: 0, opacity: 0 },
          {
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              end: "top 60%",
              scrub: 1.5,
            },
            scaleX: 1,
            opacity: 1,
            ease: "power2.inOut",
          }
        );
      });

      // Cards with magnetic liquid effect
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Liquid morph entrance
        gsap.fromTo(
          card,
          {
            scale: 0,
            opacity: 0,
            filter: "blur(20px)",
            borderRadius: "50%",
          },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 45%",
              scrub: 1.5,
            },
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            borderRadius: "24px",
            ease: "elastic.out(1, 0.5)",
          }
        );

        // Particle burst on reveal
        const particles = cardParticlesRef.current.filter(
          (p) => p?.dataset.cardIndex === String(index)
        );
        
        particles.forEach((particle, pIndex) => {
          if (!particle) return;
          const angle = (pIndex / particles.length) * Math.PI * 2;
          const distance = 100 + Math.random() * 50;
          
          gsap.fromTo(
            particle,
            {
              x: 0,
              y: 0,
              scale: 0,
              opacity: 1,
            },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                end: "top 50%",
                scrub: 1,
              },
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              scale: 1.5,
              opacity: 0,
              ease: "power2.out",
            }
          );
        });

        // Wave effect
        gsap.to(card, {
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
          y: Math.sin(index) * 60,
          x: Math.cos(index) * 30,
          rotation: Math.sin(index) * 3,
          ease: "none",
        });
      });
    }, section);

    // Mouse move effect
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-16 overflow-hidden bg-black"
      style={{ perspective: "2000px" }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black">
        <div className="absolute inset-0 opacity-30">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 animate-gradient-shift"
              style={{
                background: `radial-gradient(circle at ${30 + i * 20}% ${40 + i * 15}%, ${services[i]?.color}20, transparent 60%)`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Rotating circle with segments */}
      <div
        ref={circleRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="0.5"
            strokeDasharray="5,5"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="0.3"
            strokeDasharray="3,3"
          />
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={100 + Math.cos((i * Math.PI) / 4) * 80}
              y2={100 + Math.sin((i * Math.PI) / 4) * 80}
              stroke="url(#gradient3)"
              strokeWidth="0.2"
              opacity="0.5"
            />
          ))}
          <defs>
            <linearGradient id="gradient1">
              <stop offset="0%" stopColor="#FF7700" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="gradient2">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#FF7700" />
            </linearGradient>
            <linearGradient id="gradient3">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mouse follower */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none mix-blend-screen opacity-20 blur-3xl transition-all duration-700 ease-out z-50"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background: `radial-gradient(circle, ${services[activeCard ?? 0]?.color}40, transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse" />
            <div className="relative inline-flex items-center gap-3 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-full px-8 py-3">
              <Zap className="w-5 h-5 text-orange-400 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 text-sm font-bold uppercase tracking-widest">
                Our Services
              </span>
              <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:scale-105 transition-transform duration-300">
              From{" "}
            </span>
            <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 animate-gradient-x hover:scale-105 transition-transform duration-300">
              Idea to Empire
            </span>
          </h2>

          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We handle every step of your startup journey
          </p>
        </div>

        {/* Cards with connecting lines */}
        <div className="relative">
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {services.map((_, i) => {
              if (i === services.length - 1) return null;
              return (
                <line
                  key={i}
                  ref={(el) => (linesRef.current[i] = el)}
                  x1={`${(i % 4) * 25 + 12.5}%`}
                  y1="50%"
                  x2={`${((i + 1) % 4) * 25 + 12.5}%`}
                  y2="50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.3"
                />
              );
            })}
            <defs>
              <linearGradient id="lineGradient" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FF7700" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative" style={{ zIndex: 1 }}>
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative"
              >
                {/* Card particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(service.particles)].map((_, pIndex) => (
                    <div
                      key={pIndex}
                      ref={(el) => {
                        if (el) {
                          el.dataset.cardIndex = String(index);
                          cardParticlesRef.current.push(el);
                        }
                      }}
                      className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                      style={{
                        background: service.color,
                        boxShadow: `0 0 10px ${service.color}`,
                      }}
                    />
                  ))}
                </div>

                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  className="group relative h-[500px] cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Morphing glow */}
                  <div
                    className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700"
                    style={{
                      background: `radial-gradient(circle, ${service.color}, transparent)`,
                      filter: activeCard === index ? "blur(30px)" : "blur(20px)",
                    }}
                  />

                  {/* Card */}
                  <div className="relative h-full rounded-3xl overflow-hidden border transition-all duration-500 group-hover:scale-105 group-hover:rotate-y-5"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}15, black, ${service.color}10)`,
                      borderColor: activeCard === index ? service.color : "#1f2937",
                      boxShadow: activeCard === index ? `0 20px 60px ${service.color}40` : "none",
                    }}
                  >
                    {/* Animated gradient overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}20, transparent, ${service.color}20)`,
                        backgroundSize: "200% 200%",
                        animation: "gradient-shift 3s ease infinite",
                      }}
                    />

                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col justify-between">
                      {/* Top */}
                      <div className="flex justify-between items-start">
                        <div
                          className="p-4 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12"
                          style={{
                            background: `${service.color}30`,
                            border: `2px solid ${service.color}60`,
                            boxShadow: `0 0 20px ${service.color}40`,
                          }}
                        >
                          <service.icon className="text-white" size={32} strokeWidth={2} />
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <div
                            className="backdrop-blur-sm rounded-full px-4 py-2 font-bold text-white"
                            style={{
                              background: `${service.color}40`,
                              border: `1px solid ${service.color}60`,
                            }}
                          >
                            0{index + 1}
                          </div>
                          {activeCard === index && (
                            <div className="flex gap-1">
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-2 h-2 rounded-full animate-pulse"
                                  style={{
                                    background: service.color,
                                    animationDelay: `${i * 0.2}s`,
                                  }}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Bottom */}
                      <div>
                        <h3 className="text-3xl font-black mb-4 text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                          style={{
                            backgroundImage: activeCard === index ? `linear-gradient(135deg, white, ${service.color})` : "none",
                          }}
                        >
                          {service.title}
                        </h3>

                        <div
                          className={`overflow-hidden transition-all duration-700 ${
                            activeCard === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            {service.description}
                          </p>

                          <button
                            className="group/btn flex items-center gap-3 px-6 py-3 rounded-full font-bold transition-all duration-300 hover:gap-5"
                            style={{
                              background: service.color,
                              boxShadow: `0 10px 30px ${service.color}40`,
                            }}
                          >
                            <span className="text-white">Explore</span>
                            <ArrowRight className="text-white" size={18} />
                          </button>
                        </div>

                        {activeCard !== index && (
                          <div className="flex items-center gap-2 text-gray-500 text-sm animate-pulse">
                            <Sparkles size={14} />
                            Hover to reveal
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Energy lines */}
                    {activeCard === index && (
                      <>
                        <div
                          className="absolute top-0 left-0 right-0 h-1 animate-scan"
                          style={{ background: service.color }}
                        />
                        <div
                          className="absolute bottom-0 left-0 right-0 h-1 animate-scan-reverse"
                          style={{ background: service.color }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
        
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes scan-reverse {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
        
        .animate-scan-reverse {
          animation: scan-reverse 2s ease-in-out infinite;
        }

        .rotate-y-5 {
          transform: perspective(1000px) rotateY(5deg);
        }
      `}</style>
    </section>
  );
}