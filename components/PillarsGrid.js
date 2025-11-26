"use client";
import { useEffect, useRef } from "react";
import { Rocket, Users, Network, Cpu, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "360° Startup Ecosystem",
    description:
      "One partner for tech, legal, marketing, and funding — seamless and strategic.",
    icon: Rocket,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Expert Partner Network",
    description:
      "15+ verified agencies, studios, and firms managed under our execution SLA.",
    icon: Network,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Strategy + Execution Model",
    description: "We co-build your business — not just consult on it.",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI-Powered Operations",
    description:
      "From onboarding to analytics, every process runs smarter and faster with AI.",
    icon: Cpu,
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function WhyFoundersCircular() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const bgLayersRef = useRef([]);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background layers
      bgLayersRef.current.forEach((layer, i) => {
        gsap.to(layer, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
          y: (i + 1) * -150,
          ease: "none",
        });
      });

      // Heading parallax
      gsap.to(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -100,
        opacity: 1,
      });

      // Subtitle parallax
      gsap.to(subtitleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -80,
      });

      // Cards staggered parallax with 3D effect
      cardsRef.current.forEach((card, i) => {
        if (card) {
          // Entrance animation
          gsap.fromTo(
            card,
            {
              y: 200,
              opacity: 0,
              rotateX: 45,
              scale: 0.8,
            },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 50%",
                scrub: 1.5,
              },
              y: 0,
              opacity: 1,
              rotateX: 0,
              scale: 1,
              ease: "power2.out",
            }
          );

          // Continuous parallax movement
          gsap.to(card, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            y: (i % 2 === 0 ? -1 : 1) * (50 + i * 20),
            ease: "none",
          });
        }
      });

      // Floating elements parallax
      floatingElementsRef.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            y: -300 + i * 50,
            x: Math.sin(i) * 100,
            rotate: 360,
            ease: "none",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 bg-black text-white overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Parallax Background Layers */}
      <div
        ref={(el) => (bgLayersRef.current[0] = el)}
        className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-purple-900/20 to-black"
      />
      <div
        ref={(el) => (bgLayersRef.current[1] = el)}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,119,0,0.15),transparent_50%)]"
      />
      <div
        ref={(el) => (bgLayersRef.current[2] = el)}
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.15),transparent_50%)]"
      />

      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (floatingElementsRef.current[i] = el)}
          className="absolute pointer-events-none"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + Math.sin(i) * 30}%`,
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
          }}
        >
          <div
            className={`w-full h-full rounded-full bg-gradient-to-br ${
              i % 4 === 0
                ? "from-orange-500/10 to-red-500/10"
                : i % 4 === 1
                ? "from-purple-500/10 to-pink-500/10"
                : i % 4 === 2
                ? "from-blue-500/10 to-cyan-500/10"
                : "from-green-500/10 to-emerald-500/10"
            } blur-xl`}
          />
        </div>
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading with parallax */}
        <div className="text-center mb-20">
          <div ref={headingRef} className="mb-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400">
              Why 200+ Founders
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold">
              Trust the Startup Bank
            </h3>
          </div>

          <p
            ref={subtitleRef}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
          >
            A unified ecosystem built to empower, accelerate, and automate your
            startup journey with cutting-edge technology.
          </p>
        </div>

        {/* Feature Cards with Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500`}
              />

              {/* Card content */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 h-full hover:border-gray-700 transition-all duration-500 group-hover:scale-[1.02]">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover sparkle effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-5 h-5 text-orange-400" />
                </div>

                {/* Bottom gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section with parallax */}
        <div
          ref={(el) => (cardsRef.current[4] = el)}
          className="mt-20 text-center"
        >
          <button className="group relative px-12 py-5 text-lg font-bold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 animate-gradient-x" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              Talk to a Strategist
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}