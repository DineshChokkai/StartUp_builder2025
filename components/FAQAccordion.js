"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Do you execute projects directly or through partners?",
    answer:
      "We manage everything centrally but work with verified expert partners for execution — under strict SLAs and Startup Builder oversight.",
  },
  {
    question: "Can I choose only one service vertical?",
    answer: "Yes — start with one, scale across others as your startup grows.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Transparent milestone-based billing or monthly retainers. For long-term clients, we also offer hybrid or equity models.",
  },
  {
    question: "Do you help with funding or investor connects?",
    answer:
      "Yes. We prepare your decks, connect you to our investor network, and assist with government grant applications.",
  },
];

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);
  const titleRef = useRef(null);
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
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 60%",     // when title reaches top area
        toggleActions: "play none none reverse",
      },
    });

    faqRefs.current.forEach((el) => {
      tl.fromTo(
        el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "+=0.1" // slight delay between items
      );
    });
  }, []);

  return (
    <section id="faqs" className="relative bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.4),transparent_70%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={titleRef}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Your <span className="text-purple-600">Frequently Asked Questions</span> 
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqRefs.current[index] = el)}
              className="opacity-0 transform"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer bg-white/90 backdrop-blur-sm border border-purple-100 hover:border-purple-300 transition-all rounded-2xl shadow-sm hover:shadow-md px-6 py-5 flex justify-between items-center"
              >
                <h3 className="text-base md:text-lg font-medium text-gray-900 leading-snug">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-purple-600 w-5 h-5" />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pt-3 pb-6 text-gray-700 text-sm md:text-base leading-relaxed bg-gradient-to-b from-purple-50/60 to-transparent rounded-b-2xl border-x border-b border-purple-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    
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
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl pt-20">
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