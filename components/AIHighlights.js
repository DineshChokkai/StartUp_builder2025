"use client";
import { useState, useEffect, useRef } from "react";
import { Bot, FileText, PieChart, BadgeDollarSign, ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const aiHighlights = [
  {
    title: "AI-driven Client Onboarding",
    description:
      "Streamline onboarding and project scoping with automated, intelligent flows tailored to your clientele.",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=1000&fit=crop",
  },
  {
    title: "Auto-generated Proposals & Term Sheets",
    description:
      "Generate detailed proposals, NDAs, and term sheets instantly using AI-driven document generation.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=1000&fit=crop",
  },
  {
    title: "Predictive Marketing Analytics",
    description:
      "Gain actionable business insights with dashboards that analyze performance and forecast marketing outcomes.",
    icon: PieChart,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=1000&fit=crop",
  },
  {
    title: "AI-powered Grant Eligibility",
    description:
      "Quickly discover and apply for grants or funding; our AI engine maximizes eligibility and matches funding sources.",
    icon: BadgeDollarSign,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=1000&fit=crop",
  },
];

export default function AIAdvantage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const sparklesRef = useRef([]);

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

        // Animate header and content
        gsap.to(headerRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.to(contentRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          onComplete: () => {
            // Create sparkle effects
            sparklesRef.current.forEach((sparkle, index) => {
              gsap.to(sparkle, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                delay: index * 0.1,
                ease: "back.out(2)",
              });

              // Sparkle animation loop
              gsap.to(sparkle, {
                y: -20,
                repeat: -1,
                yoyo: true,
                duration: 2,
                delay: index * 0.2,
                ease: "sine.inOut",
              });
            });

            // Animate cards with wave effect
            cardsRef.current.forEach((card, index) => {
              if (!card) return;

              const tl = gsap.timeline({
                delay: index * 0.15,
              });

              // Cards slide in from right with rotation
              tl.to(card, {
                x: 0,
                opacity: 1,
                rotation: 0,
                duration: 0.8,
                ease: "back.out(1.5)",
              });

              // Add floating animation
              gsap.to(card, {
                y: -10,
                repeat: -1,
                yoyo: true,
                duration: 2 + index * 0.3,
                delay: index * 0.15 + 0.8,
                ease: "sine.inOut",
              });
            });
          }
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,119,0,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,119,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[40%_60%] gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div 
              ref={headerRef}
              className="opacity-0"
              style={{ transform: "translateX(-50px)" }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
                <Sparkles className="text-orange-600 w-4 h-4" />
                <span className="text-orange-700 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  The AI Advantage
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Startup Builder automates your success with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  AI at every step
                </span>
                .
              </h2>
            </div>

            <div 
              ref={contentRef}
              className="opacity-0"
              style={{ transform: "translateX(-50px)" }}
            >
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Startup Builder integrates artificial intelligence across every vertical to
                make your journey faster, smarter, and data-driven.
              </p>

              <button className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                <span className="relative z-10">Experience AI in Action</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              {/* Floating sparkles */}
              <div className="relative mt-8 flex gap-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    ref={(el) => (sparklesRef.current[i] = el)}
                    className="opacity-0"
                    style={{ transform: "scale(0)" }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
                      <Sparkles className="text-white" size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div 
            ref={cardsContainerRef}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {aiHighlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="opacity-0"
                  style={{ transform: "translateX(100px) rotate(10deg)" }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="group relative cursor-pointer h-72 sm:h-80 md:h-96">
                    <div className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={highlight.image}
                          alt={highlight.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-orange-600/90 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                        {/* Icon */}
                        <div className="flex justify-between items-start">
                          <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <highlight.icon className="text-white" size={28} strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Text */}
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 leading-tight text-white">
                            {highlight.title}
                          </h3>
                          
                          <div className={`overflow-hidden transition-all duration-500 ${
                            hoveredIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                          }`}>
                            <p className="text-xs sm:text-sm text-gray-100 mb-3 sm:mb-4 leading-relaxed">
                              {highlight.description}
                            </p>
                            
                            <button className="flex items-center gap-2 text-white border border-white/30 hover:bg-white/20 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all group/btn">
                              Learn More
                              <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                            </button>
                          </div>

                          {hoveredIndex !== index && (
                            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
                              Hover to explore
                              <ArrowRight size={14} className="animate-pulse" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Glowing effect */}
                      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                           style={{
                             boxShadow: "0 0 40px rgba(255, 119, 0, 0.6), inset 0 0 30px rgba(255, 119, 0, 0.3)"
                           }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}