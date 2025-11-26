"use client";
import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Verticles from "../components/Verticals"
import Videos from "../components/Videos";
import ServicesGrid from "../components/ServicesGrid";
import PillarsGird from "../components/PillarsGrid"
import ServicesAccordion from "../components/ServicesAccordion";
import Ecosystem from "../components/Ecosystem";
import AIHighlights from "../components/AIHighlights";
import TestimonialsVideo from "../components/TestimonialsVideo";
import FAQAccordion from "../components/FAQAccordion";
import FinalCTA from "../components/FinalCTA";
import { ArrowUp, CircleFadingArrowUp } from "lucide-react";
export default function Home() {
    const [showScrollTop, setShowScrollTop] = useState(false);

  // Refs for sticky sections
  const verticalsRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      // Parallax updates
      const applyParallax = (ref) => {
        const el = ref?.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = Math.min(Math.max(1 - rect.top / vh, 0), 1);

        el.style.setProperty("--sticky-progress", progress.toString());
      };

      applyParallax(verticalsRef);
      applyParallax(servicesRef);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
    <section>
      <Hero/>
      <Verticles/>
      <div
        ref={servicesRef}
        className="
          sticky  top-[-450px] z-1   
          transition-transform duration-200
          [transform:translateY(calc(var(--sticky-progress,0)*-0px))]
          [opacity:calc(0.5 + var(--sticky-progress,0)*0.5)]
        "
      >
        <ServicesGrid id="services"/>
        
      </div>
      <PillarsGird/>
      <ServicesAccordion/>
      <Ecosystem/>
      <AIHighlights/>
      <Videos/>
      <TestimonialsVideo/>
      <FAQAccordion/>
      <FinalCTA/>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-[25px] z-50 text-white bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </section>
    </>
  );
}
