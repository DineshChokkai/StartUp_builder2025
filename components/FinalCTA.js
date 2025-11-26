"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinalCTASection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);

  const buttons = [
    {
      label: "Book a Discovery Call",
      style:
        "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200",
    },
    {
      label: "Partner With Us",
      style:
        "bg-white text-purple-600 border border-purple-300 hover:bg-purple-50",
    },
    {
      label: "Download Deck",
      style:
        "bg-purple-100 hover:bg-purple-200 text-purple-700 border border-purple-200",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate gradient glows
      gsap.fromTo(
        glow1Ref.current,
        { opacity: 0, y: 60 },
        {
          opacity: 0.15,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        glow2Ref.current,
        { opacity: 0, y: 60 },
        {
          opacity: 0.15,
          y: 0,
          duration: 1.4,
          ease: "power2.out",
        }
      );

      // Animate heading on scroll
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate text
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate buttons with stagger
      gsap.fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 overflow-hidden mb-10"
    >
      {/* Gradient glows for depth */}
      <div
        ref={glow1Ref}
        className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500/40 blur-3xl rounded-full pointer-events-none"
      />
      <div
        ref={glow2Ref}
        className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-400/30 blur-3xl rounded-full pointer-events-none"
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h2
          ref={headingRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight px-2"
        >
          You don't need five vendors — you just need{" "}
          <span className="text-purple-600">Startup Builder</span>.
        </h2>

        <p
          ref={textRef}
          className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed px-4 max-w-3xl mx-auto"
        >
          Partner with India's first{" "}
          <span className="font-semibold text-purple-600">Startup Bank</span>{" "}
          and get everything your business needs — from{" "}
          <em>tech</em> to <em>traction</em> to <em>transaction</em>.
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 px-4"
        >
          {buttons.map((btn, i) => (
            <button
              key={i}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-semibold hover:scale-105 cursor-pointer transition-all duration-200 ${btn.style}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}