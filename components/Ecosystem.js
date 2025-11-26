"use client";
import { useState, useEffect, useRef } from "react";
import { Users, Building2, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const partners = [
  {
    label: "Tech Partners",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop"
  },
  {
    label: "Marketing Agencies",
    icon: "📢",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop"
  },
  {
    label: "Legal & CA Firms",
    icon: "⚖️",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=400&fit=crop"
  },
  {
    label: "Content Studios",
    icon: "🎬",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop"
  },
  {
    label: "Grant Experts",
    icon: "📋",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop"
  },
  {
    label: "VC & Angel Networks",
    icon: "💰",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=400&fit=crop"
  },
];

const badges = [
  { value: "200+", label: "Founders", icon: Users },
  { value: "15+", label: "Partner Companies", icon: Building2 },
  { value: "₹10Cr+", label: "Projects Delivered", icon: TrendingUp },
];

export default function OurEcosystem() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const particlesContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const badgesRef = useRef([]);
  const ctaRef = useRef(null);
  const centralHubRef = useRef(null);

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

        // Step 1: Animate header
        gsap.to(header, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          onComplete: () => {
            // Step 2: Animate central hub
            gsap.to(centralHubRef.current, {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(2)",
              onComplete: () => {
                // Step 3: Create explosion particles for each card
                cardsRef.current.forEach((card, index) => {
                  if (!card) return;

                  const cardRect = card.getBoundingClientRect();
                  const hubRect = centralHubRef.current.getBoundingClientRect();
                  
                  const startX = hubRect.left + hubRect.width / 2;
                  const startY = hubRect.top + hubRect.height / 2;
                  const endX = cardRect.left + cardRect.width / 2;
                  const endY = cardRect.top + cardRect.height / 2;

                  // Create multiple particles per card
                  const particleCount = 8;
                  for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement("div");
                    particle.style.cssText = `
                      position: fixed;
                      width: 8px;
                      height: 8px;
                      background: linear-gradient(135deg, #ff7700, #ff9500);
                      border-radius: 50%;
                      left: ${startX}px;
                      top: ${startY}px;
                      pointer-events: none;
                      z-index: 1000;
                      box-shadow: 0 0 10px rgba(255, 119, 0, 0.8);
                    `;
                    particlesContainerRef.current?.appendChild(particle);

                    const angle = (index * 60 + i * 45) * (Math.PI / 180);
                    const distance = 50 + Math.random() * 30;
                    const spreadX = Math.cos(angle) * distance;
                    const spreadY = Math.sin(angle) * distance;

                    const tl = gsap.timeline({
                      delay: index * 0.08
                    });

                    // Particles burst out, then travel to cards
                    tl.to(particle, {
                      x: spreadX,
                      y: spreadY,
                      duration: 0.3,
                      ease: "power2.out",
                    })
                    .to(particle, {
                      left: endX,
                      top: endY,
                      duration: 0.5,
                      ease: "power2.in",
                      onComplete: () => {
                        particle.remove();
                      }
                    });
                  }

                  // Reveal card after particles arrive
                  gsap.to(card, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    delay: index * 0.08 + 0.7,
                    ease: "back.out(1.7)",
                  });
                });

                // Animate badges
                gsap.to(badgesRef.current, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  stagger: 0.15,
                  delay: 1.5,
                  ease: "power3.out",
                });

                // Animate CTA
                gsap.to(ctaRef.current, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  delay: 2,
                  ease: "power3.out",
                });
              }
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
      {/* Particles Container */}
      <div ref={particlesContainerRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 1000 }} />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className="text-center mb-10 sm:mb-12 opacity-0"
          style={{ transform: "translateY(30px)" }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <Sparkles className="text-orange-600 w-4 h-4" />
            <span className="text-orange-700 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Our Ecosystem
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            A Group of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700">
              Powerhouse Partners
            </span>
            <br className="hidden sm:block" />
            Behind Every Startup.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Startup Builder collaborates with India's best agencies, law firms, studios,
            and investors — forming a trusted ecosystem that powers every founder.
          </p>
        </div>

        {/* Central Hub */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div 
            ref={centralHubRef}
            className="relative opacity-0"
            style={{ transform: "scale(0)" }}
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/50 to-transparent animate-pulse"></div>
              <div className="text-center text-white relative z-10">
                <Sparkles className="mx-auto mb-1 sm:mb-2" size={24} />
                <p className="font-bold text-xs sm:text-sm">Startup</p>
                <p className="font-bold text-xs sm:text-sm">Builder</p>
              </div>
            </div>
            {/* Pulsing rings */}
            <div className="absolute inset-0 rounded-full border-4 border-orange-400 animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full border-2 border-orange-300 animate-pulse"></div>
          </div>
        </div>

        {/* Partner Cards Grid */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={partner.label}
                ref={(el) => (cardsRef.current[index] = el)}
                className="opacity-0"
                style={{ transform: "scale(0.3)" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="group relative cursor-pointer h-40 sm:h-48 md:h-52">
                  <div className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={partner.image}
                        alt={partner.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/70 to-orange-600/80 mix-blend-multiply"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-between items-center">
                      <div className="flex-1 flex items-center justify-center">
                        <div className="text-3xl sm:text-4xl md:text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                          {partner.icon}
                        </div>
                      </div>
                      
                      <div className="w-full">
                        <p className={`text-xs sm:text-sm font-semibold text-white leading-tight text-center transition-all duration-300 ${
                          hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-1'
                        }`}>
                          {partner.label}
                        </p>
                      </div>
                    </div>

                    {/* Glowing border */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style={{
                           boxShadow: "0 0 30px rgba(255, 119, 0, 0.6), inset 0 0 20px rgba(255, 119, 0, 0.3)"
                         }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-10 sm:mb-12 md:mb-16 px-4">
          {badges.map((badge, index) => (
            <div
              key={badge.label}
              ref={(el) => (badgesRef.current[index] = el)}
              className="relative group opacity-0 w-full sm:w-auto"
              style={{ transform: "translateY(30px)" }}
            >
              <div className="bg-white border-2 border-orange-200 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-6 shadow-lg hover:shadow-2xl hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <badge.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                      {badge.value}
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-gray-600 mt-0.5 sm:mt-1">
                      {badge.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          ref={ctaRef}
          className="text-center opacity-0"
          style={{ transform: "translateY(30px)" }}
        >
          <button className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 active:scale-95">
            <span className="relative z-10">Join Our Ecosystem</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}