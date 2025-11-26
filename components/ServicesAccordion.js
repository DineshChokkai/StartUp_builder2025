"use client";
import { useState, useEffect, useRef } from "react";
import { Building2, Code, Megaphone, TrendingUp, ArrowRight } from "lucide-react";
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
  },
  {
    title: "Tech & AI Development",
    description:
      "Apps, websites, and automation tools that scale with your business using cutting-edge technology.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=1000&fit=crop",
  },
  {
    title: "Branding & Marketing",
    description:
      "Create your identity, amplify your reach, and convert engagement into revenue with data-driven strategies.",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1000&fit=crop",
  },
  {
    title: "Funding & Grants",
    description:
      "Craft investor-ready decks, apply for grants, and access private or institutional funding with expert guidance.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop",
  },
];

export default function ServicesInDepth() {
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const beatsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    if (!section || !header) return;

    let animationTriggered = false;

    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      onEnter: () => {
        if (animationTriggered) return;
        animationTriggered = true;

        // Animate header first and wait for it to reach top
        const headerTimeline = gsap.timeline();
        
        headerTimeline.to(header, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          onComplete: () => {
            // After header animation completes, start beat animations
            beatsRef.current.forEach((beat, index) => {
              if (!beat) return;

              const card = cardsRef.current[index];
              if (!card) return;

              const cardRect = card.getBoundingClientRect();
              
              // Calculate center position for the beat relative to viewport
              const targetX = cardRect.left + cardRect.width / 2;
              const targetY = cardRect.top + cardRect.height / 2;

              // Set initial position at top center of card
              gsap.set(beat, {
                position: "fixed",
                left: targetX,
                top: -50,
                xPercent: -50,
                yPercent: -50,
                opacity: 1,
                scale: 1,
              });

              // Create bounce animation timeline
              const tl = gsap.timeline({ delay: index * 0.15 });

              // Drop with bounce
              tl.to(beat, {
                top: targetY,
                duration: 0.8,
                ease: "bounce.out",
              })
              // Expand beat into card shape
              .to(beat, {
                scale: 15,
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
              }, "-=0.3")
              // Show actual card
              .to(card, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "back.out(1.5)",
              }, "-=0.4");
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
      className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden min-h-screen"
    >
      {/* Beats Container */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1000 }}>
        {services.map((_, index) => (
          <div
            key={index}
            ref={(el) => (beatsRef.current[index] = el)}
            className="absolute opacity-0"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #ff7700, #ff9500, #ffa500)",
              boxShadow: "0 8px 32px rgba(255, 119, 0, 0.6), 0 0 20px rgba(255, 149, 0, 0.4)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
            }}
          />
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,119,0,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header */}
        <div 
          ref={headerRef}
          className="text-center mb-12 sm:mb-16 md:mb-20 opacity-0"
          style={{ transform: "translateY(50px)" }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-orange-700 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Our Services
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900 px-4">
            From{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
              Incorporation to Investor Meetings
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> We Handle It All</span>
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive solutions tailored for startups and founders to innovate, scale, and succeed
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0"
              style={{ transform: "scale(0.5)" }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="group relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/80 via-orange-500/80 to-orange-600/80 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                  {/* Icon */}
                  <div className="flex justify-between items-start">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <service.icon className="text-white" size={28} strokeWidth={1.5} />
                    </div>
                    <div className="bg-orange-500/20 backdrop-blur-sm rounded-full px-2.5 sm:px-3 py-1 border border-orange-300/30">
                      <span className="text-white text-xs font-medium">0{index + 1}</span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight text-white">
                      {service.title}
                    </h3>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${
                      activeCard === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <p className="text-gray-100 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <button className="flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all group/btn shadow-lg">
                        Learn More
                        <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                      </button>
                    </div>

                    {activeCard !== index && (
                      <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
                        Hover to explore
                        <ArrowRight size={14} className="animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{
                       boxShadow: "inset 0 0 20px rgba(255,119,0,0.5), 0 0 20px rgba(255,119,0,0.3)"
                     }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}